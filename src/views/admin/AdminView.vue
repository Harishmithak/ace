
<template>
    <div>
        <button id="touch" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
            ADD PRODUCT
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <h5 class="modal-title" id="exampleModalLabel">ADD PRODUCT </h5>
                    <button type="button" class="btn-close float-start" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div class="container-fluid icons">
                        <form @submit.prevent="addProduct">
                            <div class="form-group">
                                <label for="product-img">Product Image:</label>
                                <input v-model="newProduct.sclproductimg" type="text" class="form-control" id="product-img"
                                    required>
                            </div>
                            <div class="form-group">
                                <label for="product-name">Product Name:</label>
                                <input v-model="newProduct.prodname" type="text" class="form-control" id="product-name"
                                    required>
                            </div>
                            <div class="form-group">
                                <label for="product-img">prodcode:</label>
                                <input v-model="newProduct.prodcode" type="text" class="form-control" id="product-img"
                                    required>
                            </div>
                            <div class="form-group">
                                <label for="product-img">brand:</label>
                                <input v-model="newProduct.brand" type="text" class="form-control" id="product-img"
                                    required>
                            </div>
                            <div class="form-group">
                                <label for="product-img">soldby:</label>
                                <input v-model="newProduct.soldby" type="text" class="form-control" id="product-img"
                                    required>
                            </div>
                            <div class="form-group">
                                <label for="product-img">discount price:</label>
                                <input v-model="newProduct.dprice" type="text" class="form-control" id="product-img"
                                    required>
                            </div>
                            <div class="form-group">
                                <label for="product-img">original price:</label>
                                <input v-model="newProduct.oprice" type="text" class="form-control" id="product-img"
                                    required>
                            </div>
                            <div class="form-group">
                                <label for="product-img">discount:</label>
                                <input v-model="newProduct.discount" type="text" class="form-control" id="product-img"
                                    required>
                            </div>
                            <div class="form-group">
                                <label for="product-img">size:</label>
                                <input v-model="newProduct.size" type="text" class="form-control" id="product-img" required>
                            </div>
                            <div class="form-group">
                                <label for="product-img">quantity:</label>
                                <input v-model="newProduct.quantity" type="text" class="form-control" id="product-img"
                                    required>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>

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
               <button @click="editProduct(scl)" class="edit">Edit</button>
                    <button @click="removeProduct(scl)" class="remove">Remove</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useAddProduct, useRemoveProduct } from '/src/hooks/Composables.js';
import Swal from 'sweetalert2';
import axios from 'axios';

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


        const addProduct = useAddProduct(newProduct, fetchproductData, showAddForm);
        const removeProduct = useRemoveProduct(sclproducts);


    //     const editProduct = (product) => {
    //   Swal.fire({
    //     title: 'Edit Product',
    //     html: `
    //       <form id="editProductForm">
    //         <label for="editProductImg">Product Image:</label>
    //         <input type="text" id="editProductImg" value="${product.sclproductimg}" required>
    //         <br>
    //         <label for="editProductName">Product Name:</label>
    //         <input type="text" id="editProductName" value="${product.prodname}" required>
    //         <br>
    //         <label for="editProductCode">Product Code:</label>
    //         <input type="text" id="editProductCode" value="${product.prodcode}" required>
    //         <br>
    //         <!-- Add other input fields for editing other product details as needed -->
    //       </form>
    //     `,
    //     showCancelButton: true,
    //     confirmButtonText: 'Update',
    //     preConfirm: () => {
    //       const updatedImg = document.getElementById('editProductImg').value;
    //       const updatedName = document.getElementById('editProductName').value;
    //       const updatedCode = document.getElementById('editProductCode').value;
         
    //       return {
    //         sclproductimg: updatedImg.trim(),
    //         prodname: updatedName.trim(),
    //         prodcode: updatedCode.trim(),
          
    //       };
    //     },
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       const updatedProduct = result.value;
    //       if (updatedProduct.prodname !== '') {
           
    //         axios
    //           .put(`http://localhost:3000/sclproducts/${product.id}`, updatedProduct)
    //           .then(() => {
    //             Swal.fire('Product updated successfully!', '', 'success');

    //             fetchproductData();
    //           })
    //           .catch((error) => {
    //             console.error('Error updating product:', error);
    //             Swal.fire('Error updating product!', 'Please try again later.', 'error');
    //           });
    //       } else {
    //         Swal.fire('Product name cannot be empty!', '', 'error');
    //       }
    //     }
    //   });
    // };
    function editProduct(product) {
  const taskToEdit = product;

  Swal.fire({
    title: 'Edit Product',
    html: `
      <label for="editProductImg">Product Image:</label>
      <input type="text" id="editProductImg" value="${taskToEdit.sclproductimg}" required>
      <br>
      <label for="editProductName">Product Name:</label>
      <input type="text" id="editProductName" value="${taskToEdit.prodname}" required>
      <br>
      <label for="editProductCode">Product Code:</label>
      <input type="text" id="editProductCode" value="${taskToEdit.prodcode}" required>
      <br>
      <label for="editProductBrand">Brand:</label>
      <input type="text" id="editProductBrand" value="${taskToEdit.brand}" required>
      <br>
      <label for="editProductSoldBy">Sold By:</label>
      <input type="text" id="editProductSoldBy" value="${taskToEdit.soldby}" required>
      <br>
      <label for="editProductDiscountPrice">Discount Price:</label>
      <input type="text" id="editProductDiscountPrice" value="${taskToEdit.dprice}" required>
      <br>
      <label for="editProductOriginalPrice">Original Price:</label>
      <input type="text" id="editProductOriginalPrice" value="${taskToEdit.oprice}" required>
      <br>
      <label for="editProductDiscount">Discount:</label>
      <input type="text" id="editProductDiscount" value="${taskToEdit.discount}" required>
      <br>
      <label for="editProductSize">Size:</label>
      <input type="text" id="editProductSize" value="${taskToEdit.size}" required>
      <br>
      <label for="editProductQuantity">Quantity:</label>
      <input type="text" id="editProductQuantity" value="${taskToEdit.quantity}" required>
    `,
    showCancelButton: true,
    focusConfirm: false,
    preConfirm: () => {
      const updatedProduct = {
        sclproductimg: document.getElementById('editProductImg').value,
        prodname: document.getElementById('editProductName').value,
        prodcode: document.getElementById('editProductCode').value,
        brand: document.getElementById('editProductBrand').value,
        soldby: document.getElementById('editProductSoldBy').value,
        dprice: document.getElementById('editProductDiscountPrice').value,
        oprice: document.getElementById('editProductOriginalPrice').value,
        discount: document.getElementById('editProductDiscount').value,
        size: document.getElementById('editProductSize').value,
        quantity: document.getElementById('editProductQuantity').value,
      };

      return updatedProduct;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const updatedProduct = result.value;

     
      const updatedProductId = product.id;
      const productIndex = sclproducts.value.findIndex((p) => p.id === updatedProductId);

      if (productIndex !== -1) {
        sclproducts.value[productIndex] = {
          ...sclproducts.value[productIndex],
          ...updatedProduct,
        };

        
        axios
          .put(`http://localhost:3000/sclproducts/${updatedProductId}`, updatedProduct)
          .then(() => {
            Swal.fire('Product updated successfully!', '', 'success');
          })
          .catch((error) => {
            console.error('Error updating product:', error);
            Swal.fire('Error updating product!', 'Please try again later.', 'error');
          });
      }
    }
  });
}

        onMounted(() => {
            fetchproductData();
        });

        return {
            sclproducts,
            showAddForm,
            newProduct,
            addProduct,
            removeProduct,
            editProduct,

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

.remove {
    margin-left: 100px;
    color: rgb(241, 236, 236);
    background-color: #000;
}

#touch {
    color: rgb(241, 236, 236);
    background-color: #000;
    margin-left: 900px;
}

.form-group {
    width: 500px;
}
</style>