
<!-- product details display page -->
<template>
    <div v-if="sclproduct" class="row">
        <div class="col-md-6 mt-2">
            <img :src="sclproduct.sclproductimg" height="500" width="300" class="crd-img uniform-item-image" />
        </div>

        <div class="col-md-6 mt-5 new">
            <h5 class="mt-5" style="color: black; font-size: 40px; font-weight: 450;">
                {{ sclproduct.prodname }}
            </h5>
            <h5 class="pt-3" style="color: black; font-size: 14px;">
                Product Code: {{ sclproduct.prodcode }}
            </h5>
            <h5 style="color: black; font-size: 14px;">Brand: {{ sclproduct.brand }}</h5>
            <h5 style="color: black; font-size: 14px;">Sold by: {{ sclproduct.soldby }}</h5>
            <h5 class="pt-3" style="color: black; font-size: 40px; font-weight: 450;">
                ₹ {{ sclproduct.dprice }}
            </h5>
            <h5 class="ms-5 ps-4 mt-n2" style="color: black; font-size: 18px; font-weight: 500;">
                <del> {{ sclproduct.oprice }}</del>
            </h5>
            <h5 class="text-center justify-content-center pt-1"
                style="color: white; font-size: 16px; background-color: black; width: 69px; height: 30px; font-weight: 400;">
                {{ sclproduct.discount }}
            </h5>

            <button type="button" class="btn mt-3 ms-n1" data-bs-toggle="modal" data-bs-target="#exampleModal"
                style="color: black; font-size: 10px; background-color: black; color: white; width: 120px; height: 34px; font-weight: 400;">
                SIZE GUIDE
            </button>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content" style="width: 800px; height: 600px;">
                        <div class="modal-header">
                            <h3 class="modal-title text-center justify-content-center" id="exampleModalLabel"
                                style="color: black;">SIZE GUIDE</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" style="width: 800px;">
                            <div class="row">

                                <h3 class="text-center" style="color: black; font-size: 35px;">a c e c r a f t</h3>

                                <div class="col-6">
                                    <img src="@/assets/images/college/Sizechart.png"
                                        style="width: 400px;margin-left: 30px;" />
                                </div>
                                <div class="col-6"> <img :src="sclproduct.sclproductimg" height="300" width="200"
                                        margin-top="-300px" class="crd-img uniform-item-image " /></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            <br />

    

            <div class="btn-group mt-5 ms-n3">
  <button class="btn btn-sm" type="button"
    style="color: black; font-size: 14px; background-color: black; color: white; width: 100px; height: 34px; font-weight: 400;"
    @click="handleSizeSelect(sclproduct.size)">
    Size:
  </button>
  <button type="button" class="btn btn-sm dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"
    aria-expanded="false" style="width: 150px; color: black; font-size: 15px;">
    <span class="visually-hidden">{{ selectedSize || sclproduct.size }}</span>
    <span v-if="selectedSize" style="margin-left: 5px;">{{ selectedSize || sclproduct.size }}</span>
  </button>
  <ul class="dropdown-menu mt-5 pt-5">
    <h5 style="color: black; font-weight: 500; font-size: 15px;">Please Select</h5>
    <li v-for="size in sizes" :key="size" @click="handleSizeSelect(size)">{{ size }}</li>
  </ul>
</div>

            <br />
            <label for="quantity" :style="{ color: 'black', fontWeight: '500', fontSize: '15px' }">
                Quantity:
            </label>
            <input type="number" id="quantity" class="form-control" :style="{
                color: 'black',
                fontSize: '14px',
                backgroundColor: 'black',
                color: 'white',
                width: '100px',
                height: '34px',
                fontWeight: '400'
            }" min="1" :value="selectedQuantity || sclproduct.quantity" @input="handleQuantitySelect" />


            <div class="mt-4">
                <label for="amount" style="color: black; font-weight: 700; font-size: 25px;">Total Amount: ₹ {{ amount
                }}</label>
            </div>

            <!-- add to cart button -->

            <div class="row">
                <div class="col-6">
                    <button type="button" class="btn mt-5"
                        style="background-color: black; color: white; font-size: 10px; margin-bottom: 20px;"
                        @click="addToCart">
                        ADD TO CART
                    </button>
                </div>




                <div class="col-6">
                    <button type="button" class="btn mt-5" style="background-color: black; color: white; font-size: 10px;">
                        BUY NOW
                    </button>
                </div>
            </div>
        </div>



    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Swal from 'sweetalert2'
export default {
    name: 'productDisplay',
    data() {
        return {
            sizes: ['20', '22', '24', '26', '28', '30', '32', '34', '36', '38', '40'],
            sclproduct: null,
            selectedSize: '',
            selectedQuantity: '1',
            amount: '0',
            cartItems: [],
            id: 3,
        };
    },
    mounted() {
        this.fetchProductData();

    },
    computed: {
        ...mapGetters(['userName']), 
    },
    methods: {
        fetchProductData() {
            const id = this.$route.params.id;
            fetch(`http://localhost:3000/sclproducts/${id}`) 
                .then((response) => response.json())
                .then((data) => {
                    this.sclproduct = data;
                })
                .catch((error) => {
                    console.error('Error fetching product data:', error);
                });
        },
        // navigateBack() {
        //     this.$router.back();
        // },

        handleSizeSelect(size) {
            this.selectedSize = size;
            const codeWithoutSize = this.sclproduct.prodcode.replace(/\d+$/, '');
            this.sclproduct.prodcode = codeWithoutSize + size.toString(); //to change product code
            this.calculatePrice(); //to change product price
            this.calculateDiscount(); //to change product discount

        },
        calculatePrice() {
            const basePrice = parseFloat(this.sclproduct.dprice);
            const sizeFactor = 10;
            this.sclproduct.dprice = (basePrice + sizeFactor).toFixed(2);
        },

        calculateDiscount() {
            const dis = parseFloat(this.sclproduct.discount);
            const inc = 3;
            this.sclproduct.discount = (dis + inc + '%OFF');

        },

        handleQuantitySelect(event) {
            this.selectedQuantity = event.target.value;
            this.calculateAmount();
        },

        calculateAmount() {
            const price = parseFloat(this.sclproduct.dprice);
            const quantity = parseInt(this.selectedQuantity);
            this.amount = (price * quantity).toFixed(2);
        },


        addToCart() {
            // this.$swal('product added');
            const loggedInUsername = this.userName;
            const product = {
                id: this.id,
                sclproductimg: this.sclproduct.sclproductimg,
                prodname: this.sclproduct.prodname,
                prodcode: this.sclproduct.prodcode,
                brand: this.sclproduct.brand,
                soldby: this.sclproduct.soldby,
                dprice: this.sclproduct.dprice,
                oprice: this.sclproduct.oprice,
                discount: this.sclproduct.discount,
                size: this.selectedSize,
                quantity: parseInt(this.selectedQuantity),
                username: loggedInUsername,
            };

            this.cartItems = product;

            this.id++;

            this.saveCartItems();
           Swal.fire('Product added to cart!');
        },

        saveCartItems() {
            const cartData = {
                cartItems: this.cartItems,
            };


            fetch('http://localhost:3000/cartItems', { //posting the details of the product to cartitems when add to cart button is clicked
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cartData),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Error saving cart items');
                    }
                })
                .catch((error) => {
                    console.error('Error saving cart items:', error);
                });
        },


    },


};
</script>
<style>
.crd-img {
    margin-left: auto;
    margin-right: auto;
    display: block;
}

.new {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
}
</style>


  
  

  
  
  