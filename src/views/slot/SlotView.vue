<template>

        <button id="touch" type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">GET IN TOUCH</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
 <div class="modal-dialog">
   <div class="modal-content">
       <h5 class="modal-title" id="exampleModalLabel">Get your Uniforms designed and styled by Us!</h5>
       <button type="button" class="btn-close float-start" data-bs-dismiss="modal" aria-label="Close"></button>
       <div class="container-fluid icons">
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
                   </div>
                  
               </div>
              

   </div>
 </div>

</template>

<script>
import { ref, onMounted } from 'vue';
import { useAddProduct, useRemoveProduct } from '/src/hooks/Composables.js';

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

        //         const addProduct = async (event) => {
        //             event.preventDefault();

        //             try {
        //                 const response = await fetch('http://localhost:3000/sclproducts', {
        //                     method: 'POST',
        //                     headers: {
        //                         'Content-Type': 'application/json',
        //                     },
        //                     body: JSON.stringify(newProduct.value),
        //                 });

        //                 if (response.ok) {

        //                     fetchproductData();
        //                     showAddForm.value = false;
        //                     newProduct.value = {
        //                         sclproductimg: '',
        //                         prodname: '',
        //                         prodcode: '',
        //                         brand: '',
        //                         soldby: '',
        //                         dprice: '',
        //                         oprice: '',
        //                         discount: '',
        //                         size: '',
        //                         quantity: '',
        //                     };
        //                 } else {

        //                     console.error('Error adding product:', response.statusText);
        //                 }
        //             } catch (error) {
        //                 console.error('Error adding product:', error);
        //             }
        //         };


        //         const removeProduct = async (scl) => {
        //   const index = sclproducts.value.findIndex(item => item.id === scl.id);
        //   if (index !== -1) {
        //     sclproducts.value.splice(index, 1);
        //     try {
        //       const response = await fetch(`http://localhost:3000/sclproducts/${scl.id}`, {
        //         method: 'DELETE',
        //       });
        //       if (response.ok) {
        //         console.log('Product removed successfully');
        //       } else {
        //         throw new Error('Failed to remove product');
        //       }
        //     } catch (error) {
        //       console.error('Error removing product:', error);
        //     }
        //   }
        // };
        
        const addProduct = useAddProduct(newProduct, fetchproductData, showAddForm);
        const removeProduct = useRemoveProduct(sclproducts);



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