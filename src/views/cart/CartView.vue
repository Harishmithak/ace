
<!-- add to cart page -->
<template>


  <div>
   
    <h1>Your bag total is: {{ calculateTotalBagAmount() }}</h1>


    <hr>
    <div>
      <div v-for="cart in cartItems" :key="cart.id">
        <div class="row">
          <div class="col-4">
            <img :src="cart.cartItems.sclproductimg" class="pimg" />
          </div>
          <div class="col-4">
            <div class="pdetails">
              <h4 class="pname">{{ cart.cartItems.prodname }}</h4>
              <p class="psize">Size: {{ cart.cartItems.size }}</p>
            </div>
          </div>
          <div class="col-2">
            <div class="pquantity d-flex">
              <button @click="decreaseQuantity(cart)" id="decrease"> - </button>
              <span id="quantity">{{ cart.cartItems.quantity }}</span>
              <button @click="increaseQuantity(cart)" id="increase">+</button>
            </div>
          </div>
          <div class="col-2 amount ">
            <p class="bamt"> ₹ {{ calculateAmount(cart) }}</p>

            <a href="#" @click="removeFromCart(cart)" class="crem">Remove</a>
          </div>

        </div>
        <hr>
      </div>
    </div>
  </div> 


  <div class="row">
    <div class="col-5">

    </div>
    <div class="col-4">
      <h3 id="fi" style="color: gray;">Sub Total</h3>
      <h4 id="fi" style="font-size: 25px;">Total</h4>
    </div>

    <div class="col-3">
      <h4 id="hu" style="color: gray;">₹{{ calculateTotalBagAmount() }}</h4>
      <h2 id="hu" style="color: black;">₹{{ calculateTotalBagAmount() }}</h2>
      <div class="d-flex">
        <router-link to="/">
          <button style="
              margin-left: -60px;
              margin-right: 20px;
              padding-right: 50px;
              padding-left: 50px;
            " type="button">
            Continue Shopping
          </button>
        </router-link>



        <button style="
            margin-right: 20px;
            padding-right: 50px;
            padding-left: 50px;
          " type="button" @click="makePayment">
          Place Order
        </button>
      </div>



    </div>
  </div><br>
</template>
  
<script>

import { mapGetters } from 'vuex';
import Swal from 'sweetalert2';


export default {
  name: 'cartView',
  data() {
    return {
      cartItems: [],
      paymentHandler: " ",

    };
  },
  mounted() {
    this.fetchcartData();
    this.invokeStripe();

  },
  computed: {
    ...mapGetters(['userName']), 
  },
  methods: {
    fetchcartData() {
      fetch('http://localhost:3000/cartItems') //fetch cart details
        .then((response) => response.json())
        .then((data) => {
          this.cartItems = data.filter((item) => item.cartItems.username === this.userName);
          // this.cartItems = data;
        })
        .catch((error) => {
          console.error('Error fetching cart data:', error);
        });
    },
    increaseQuantity(cart) {
      cart.cartItems.quantity++;
      this.updateQuantityInJson(cart);
    },
    decreaseQuantity(cart) {
      if (cart.cartItems.quantity > 0) {
        cart.cartItems.quantity--;
        this.updateQuantityInJson(cart);
      }
    },
    updateQuantityInJson(cart) {
      cart.cartItems.amount = this.calculateAmount(cart);
      fetch(`http://localhost:3000/cartItems/${cart.id}`, { //update cart 
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cart.cartItems),
      })
        .then((response) => {
          if (response.ok) {
            console.log('Quantity and amount updated successfully');
          } else {
            throw new Error('Failed to update quantity and amount');
          }
        })
        .catch((error) => {
          console.error('Error updating quantity and amount:', error);
        });
    },
    calculateAmount(cart) {
      return cart.cartItems.dprice * cart.cartItems.quantity;
    },
    calculateTotalBagAmount() {
      return this.cartItems.reduce(
        (total, cart) => total + this.calculateAmount(cart),
        0
      );
    },
    removeFromCart(cart) {


      Swal.fire({
        icon: 'success',
        text: 'Product removed from cart',
        toast: true,
        position: 'top-top',
        showConfirmButton: false,
        timer: 3000,
        customClass: {
          container: 'swal-top-container',


        },
      });
      // const toast = useToast();
      // toast.success('Success message');

      const index = this.cartItems.findIndex(item => item.id === cart.id);
      if (index !== -1) {
        this.cartItems.splice(index, 1);
        fetch(`http://localhost:3000/cartItems/${cart.id}`, { //remove cart
        })
          .then((response) => {
            if (response.ok) {
              console.log('Item removed from cart and JSON file successfully');
            } else {
              throw new Error('Failed to remove item from cart and JSON file');
            }
          })
          .catch((error) => {
            console.error('Error removing item from cart and JSON file:', error);
          });
      }
    },
    // payment method 
    makePayment() {


      this.paymentHandler = window.StripeCheckout.configure({
        //getting keys from stripe
        key: "pk_test_51NQnV5SHLV5w9oaiT2gMfVQiVKkHykLPnblt5u4SHKqDDYTgSd1TfSWHpHSnMI6BDidJteaqwvecZyQc5yIa4Hun00rwq1mpaz",
        locale: "auto",
        token: function (stripeToken) {
          console.log(stripeToken);
          alert('Stripe token generated!', "Stripe Payment Alert");

        },
      });
      this.paymentHandler.open({
        name: "Course",
        description: "Order Details",

      });
    },
    invokeStripe() {
      if (!window.document.getElementById("stripe-script")) {
        const script = window.document.createElement("script");
        script.id = "stripe-script";
        script.type = "text/javascript";
        script.src = "https://checkout.stripe.com/checkout.js";
        script.onClick = () => {
          this.paymentHandler = window.StripeCheckout.configure({
            key: "pk_test_51NQnV5SHLV5w9oaiT2gMfVQiVKkHykLPnblt5u4SHKqDDYTgSd1TfSWHpHSnMI6BDidJteaqwvecZyQc5yIa4Hun00rwq1mpaz",
            locale: "auto",
            token: function (stripeToken) {
              console.log(stripeToken);
              alert('Stripe Payment made successfull');

            },
          });
        };
        window.document.body.appendChild(script);
      }
    }


  },

};
</script>
  
<style>
.pimg {
  height: 280px;
  width: 300px;

}

.toast {
  background-color: blueviolet;
}

.pdetails {
  font-size: large;
}


.amount {
  margin-left: 1100px;
  margin-top: -300px;
}

.crem {
  color: red;
}

.bamt {
  color: black;
  font-size: 25px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

#quantity {
  padding: 5px;
  padding-top: 1px;
}
</style>
  