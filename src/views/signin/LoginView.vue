
<!-- sign in page  -->

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

<!-- <script>
// import { mapMutations } from 'vuex';

import axios from 'axios';
export default {
  name: 'loginView',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    // ...mapMutations(['setLoginStatus']),
    submitForm(event) { //checking the details with register 
      event.preventDefault();
      axios.get('http://localhost:3000/register')
        .then(response => {
          const users = response.data;

          //checking whether the username and password are matching
          const user = users.find(user => user.email === this.username);

          if (user) {

            if (user.password === this.password) {

              const formData = {
                username: this.username,
                password: this.password
              };
              //posting the login details to json 
              axios.post('http://localhost:3000/login', formData)
                .then(() => {
                  // this.setLoginStatus(true);
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

</script> -->
<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import { mapActions } from 'vuex';

export default {
  name: 'loginView',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    ...mapActions(['login']),
    submitForm(event) {
      Swal.fire('login successfull');
      event.preventDefault();

      axios
        .get('http://localhost:3000/register')
        .then(response => {
          const users = response.data;

          const user = users.find(user => user.email === this.username);

          if (user) {
            if (user.password === this.password){

      this.login()
        .then(() => {
       
          this.$router.push('/cart');
          Swal.fire('login successfull');
        })}
        
      }
   
      })}
  //   submitForm(event) {
  //     Swal.fire('login successfull');
  //     event.preventDefault();

  //     axios
  //       .get('http://localhost:3000/register')
  //       .then(response => {
  //         const users = response.data;

  //         const user = users.find(user => user.email === this.username);

  //         if (user) {
  //           if (user.password === this.password) {
  //             const formData = {
  //               ...user, // Keep existing user data
  //               login: 1 // Update the login status to 1 by default
  //             };

  //             axios
  //               .put(`http://localhost:3000/register/${user.id}`, formData) // Use PUT request to update the user data
  //               .then(() => {
  //                 this.$router.push('/cart');
  //               })
  //               .catch(error => {
  //                 console.error('Error updating user data:', error);
  //                 this.errorMessage = 'An error occurred while updating user data. Please try again.';
  //               });
  //           } else {
  //             this.errorMessage = 'Invalid password. Please try again.';
  //           }
  //         } else {
  //           this.errorMessage = 'User not found. Please check your username.';
  //         }
  //       })
  //       .catch(error => {
  //         console.error('Error retrieving user data:', error);
  //       });
  //   }
  // }
}}
</script>



<style>
.container {
  max-width: 500px;
}
</style>



