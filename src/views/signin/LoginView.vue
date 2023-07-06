

<template>
  <div class="container" id="cont">
    <div class="row">
      <div class="col-12 py-5 shadow mb-5 my-custom-shadow">
        <h2 class="ms-5 mb-3" style="color: #978F8F; font-size: 27px;">Login with ACECRAFT</h2>
        <form class="login-form" @submit="submitForm">
          <div class="form-group">
            <input v-model="username" class="w-100" type="text" placeholder="Username" />
          </div>
          <div class="form-group ms-1 pt-3">
            <input v-model="password" class="w-100" type="password" placeholder="Password" />
          </div>
          <div class="d-flex justify-content-center mt-4">
      <button class="bg-black text-white btn-size" type="submit">Login</button> 
          </div>
          <div class="d-flex justify-content-center mt-2">
            <p class="mt-3 text-center" style="font-size: 13px; color: #978F8F;">
              Doesn't have an account?
              <router-link to="/" class="text-black w-25">Register</router-link>
            </p>
          </div>
          <p v-if="errorMessage" class="mt-3 text-center" style="font-size: 13px; color: red;">{{ errorMessage }}</p>
        </form>
      </div>
    </div>





  </div>
</template>

<script>
// import {toast} from 'vue3-toastify';
import axios from 'axios';
export default {
  name:'loginView',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();

   
      axios.get('https://acecraft-product-details.onrender.com/register')
        .then(response => {
          const users = response.data;

        
          const user = users.find(user => user.email === this.username);

          if (user) {
           
            if (user.password === this.password) {
            
              const formData = {
                username: this.username,
                password: this.password
              };

              axios.post('https://acecraft-product-details.onrender.com/login', formData)
                .then(() => {
         
                  this.$router.push('/cart');
                })
                .catch(error => {
                  console.error('Error storing form data:', error);
                  this.errorMessage = 'An error occurred while storing form data. Please try again.';
                });
            } else {
            
       this.errorMessage = 'Invalid password. Please try again.';
            
            }
          } else {

            this.errorMessage = 'User not found. Please check your username.';
          
          }
        })
        .catch(error => {
          console.error('Error retrieving user data:', error);
        });
    },
    


  }
};

</script>





<style>
.container {
  max-width: 500px;
}
</style>



