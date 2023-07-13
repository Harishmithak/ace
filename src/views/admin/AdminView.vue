
<template>
    <div> 
        
 <div class="text-center mt-3">
            <button class="btn btn-primary add" @click="showAddForm = true">Add Product</button>
        </div>
        <div v-if="showAddForm" class="mt-3">
            <h3>Add New Product</h3>
            <form @submit="addProduct">
                <div class="form-group">
                    <label for="product-img">Product Image:</label>
                    <input v-model="newProduct.sclproductimg" type="text" class="form-control" id="product-img" required>
                </div>
                <div class="form-group">
                    <label for="product-name">Product Name:</label>
                    <input v-model="newProduct.prodname" type="text" class="form-control" id="product-name" required>
                </div>
                <div class="form-group">
                    <label for="product-img">prodcode:</label>
                    <input v-model="newProduct.prodcode" type="text" class="form-control" id="product-img" required>
                </div>
                <div class="form-group">
                    <label for="product-img">brand:</label>
                    <input v-model="newProduct.brand" type="text" class="form-control" id="product-img" required>
                </div>
                <div class="form-group">
                    <label for="product-img">soldby:</label>
                    <input v-model="newProduct.soldby" type="text" class="form-control" id="product-img" required>
                </div>
                <div class="form-group">
                    <label for="product-img">discount price:</label>
                    <input v-model="newProduct.dprice" type="text" class="form-control" id="product-img" required>
                </div>
                <div class="form-group">
                    <label for="product-img">original price:</label>
                    <input v-model="newProduct.oprice" type="text" class="form-control" id="product-img" required>
                </div>
                <div class="form-group">
                    <label for="product-img">discount:</label>
                    <input v-model="newProduct.discount" type="text" class="form-control" id="product-img" required>
                </div>
                <div class="form-group">
                    <label for="product-img">size:</label>
                    <input v-model="newProduct.size" type="text" class="form-control" id="product-img" required>
                </div>
                <div class="form-group">
                    <label for="product-img">quantity:</label>
                    <input v-model="newProduct.quantity" type="text" class="form-control" id="product-img" required>
                </div>
           
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        <div class="row">
            <div class="col-md-4" v-for="scl in sclproducts" :key="scl.id">
                <div class="cardss">
                    <div class="text-center">
                        <router-link :to="`/display/${scl.id}`" class="nav-link" id="school">
                            <div class="position-relative" style="margin-left: -550px;">
                                <img :src="scl.sclproductimg" height="480" width="380" :alt="scl.id"
                                    class="mt-5 crd-img uniform-item-image" />
                                <div class="quick-view-overlay">
                                    <button class="quick-view-button">Quick View</button>
                                </div>
                            </div>
                            <h5 style="color: black; font-size: 13px; font-weight: 650;margin-left: -550px;" class="mt-2">{{
                                scl.prodname }}</h5>

                
                        </router-link>
                        <button @click="editProduct()" class="edit">Edit</button>
                        <button @click="removeProduct(scl)" class="remove">Remove</button>
                    </div>
                </div>
            </div>
        </div>




    </div>
</template>

<script>
import { ref, onMounted } from 'vue';

// import add  from '../views/slot/SlotView.vue';

export default {
    name: 'productView',
    setup() {
        const sclproducts = ref([]);
        const showAddForm = ref(false);
        const newProduct = ref({
            sclproductimg: '',
            prodname: '',
            prodcode: '',
            brand: '',
            soldby: '',
            dprice: '',
            oprice: '',
            discount: '',
            size: '',
            quantity: '',
        });
       

        const fetchproductData = async () => {
            try {
                const response = await fetch('http://localhost:3000/sclproducts');
                const data = await response.json();
                sclproducts.value = data;
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        const addProduct = async (event) => {
            event.preventDefault();

            try {
                const response = await fetch('http://localhost:3000/sclproducts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newProduct.value),
                });

                if (response.ok) {

                    fetchproductData();
                    showAddForm.value = false;
                    newProduct.value = {
                        sclproductimg: '',
                        prodname: '',
                        prodcode: '',
                        brand: '',
                        soldby: '',
                        dprice: '',
                        oprice: '',
                        discount: '',
                        size: '',
                        quantity: '',
                    };
                } else {

                    console.error('Error adding product:', response.statusText);
                }
            } catch (error) {
                console.error('Error adding product:', error);
            }
        };


        const removeProduct = async (scl) => {
  const index = sclproducts.value.findIndex(item => item.id === scl.id);
  if (index !== -1) {
    sclproducts.value.splice(index, 1);
    try {
      const response = await fetch(`http://localhost:3000/sclproducts/${scl.id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log('Product removed successfully');
      } else {
        throw new Error('Failed to remove product');
      }
    } catch (error) {
      console.error('Error removing product:', error);
    }
  }
};



        onMounted(() => {
            fetchproductData();
        });

        return {
            sclproducts,
            showAddForm,
            newProduct,
            addProduct,
            removeProduct,
      
        };
    },
};
</script>
  




 

  
<style>
.bgs {
    height: 700px;
    width: 100%;
    position: relative;
}

.sc1 {
    /* position: absolute; */
    color: #978F8F;
    font-weight: 100;

}

.sc2 {
    /* position: absolute; */
    color: #978F8F;
    font-weight: 400;
}

.sc3 {
    position: absolute;
    margin-top: -500px;
    margin-left: 400px;
}

.container {
    margin-top: 20px;
}

.cardss {
    position: relative;
}

.uniform-item-image {
    transition: transform 0.3s ease;
}

.uniform-item-image:hover {
    transform: scale(1.1);
}

.quick-view-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.quick-view-button {
    background-color: #000;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 16px;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.cardss:hover .quick-view-overlay {
    opacity: 1;
}

.cardss:hover .quick-view-button {
    opacity: 1;
}

body {
    overflow-x: hidden;
}

.sclitem {
    margin-left: -100px;
}

.sort {
    margin-left: 600px;
    width: 100px;
}

.form-group {
    width: 600px;
    padding-left: 100px;
    padding-right: 100px;
}
.remove{
    margin-left: 100px;
    color:rgb(241, 236, 236);
    background-color: #000;
}
.add{
    color:rgb(241, 236, 236);
    background-color: #000;
    margin-left: 900px;
}


</style>