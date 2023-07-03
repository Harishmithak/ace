

<template>
  <div class="container2" id="cont" style="margin-bottom: 250px;">
    <div class="row">
      <div class="col-12 py-1 shadow mt-5">
        <h3 class="ms-4 pb-3" style="color: #978F8F;">Sign Up with Acecraft</h3>
        <form class="registration-form" style="color: #978F8F;">
          <div class="form-group">
            <input type="text" v-model="formData.fname" class="form-control" placeholder="First name" required />
  
              <span v-if="vc$.fname.$error">{{ vc$.fname.$errors[0].$message }}</span>
           
          </div>

          <div class="form-group">
            <input type="text" v-model="formData.lname" class="form-control" placeholder="Last name" required />
  
              <span v-if="vc$.lname.$error">{{ vc$.lname.$errors[0].$message }}</span>
           
          </div>

          <div class="form-group">
            <input type="email" v-model="formData.email" class="form-control" placeholder="Email" required />
  
              <span v-if="vc$.email.$error">{{ vc$.email.$errors[0].$message }}</span>
           
          </div>

          <div class="form-group">
            <input type="password" v-model="formData.password" class="form-control" placeholder="Password" required/>
  
            <span v-if="vc$.password.$error">{{ vc$.password.$errors[0].$message }}</span>
          </div>
         

          <div class="form-group">
            <input type="password" v-model="formData.confirmPassword" class="form-control"
              placeholder="Confirm password" required/>
  
              <span v-if="vc$.confirmPassword.$error">{{ vc$.confirmPassword.$errors[0].$message }}</span>
           
          </div>

          <div class="form-group">
            <label>
              <input type="radio" v-model="formData.accountType" value="school" />
              School
            </label>
            <label>
              <input type="radio" v-model="formData.accountType" value="enterprise" />
              Enterprise
            </label>
  
              <span v-if="vc$.accountType.$error">{{ vc$.accountType.$errors[0].$message }}</span>
           
          </div>

          <div class="form-group">
            <input type="text" v-model="formData.dealershipName" class="form-control" placeholder="Dealership Name" required/>
  
              <span v-if="vc$.dealershipName.$error">{{ vc$.dealershipName.$errors[0].$message }}</span>
           
          </div>

          <div class="form-group">
            <input type="text" v-model="formData.dealershipCode" class="form-control"
              placeholder="Dealership Number/Code" />
  
              <span v-if="vc$.dealershipCode.$error">{{ vc$.dealershipCode.$errors[0].$message }}</span>
           
          </div>

          <div class="form-group">
            <input type="text" v-model="formData.city" class="form-control" placeholder="City" required/>
  
              <span v-if="vc$.city.$error">{{ vc$.city.$errors[0].$message }}</span>
           
          </div>

          <div class="form-group">
            <input type="text" v-model="formData.state" class="form-control" placeholder="State"  required/>
  
              <span v-if="vc$.state.$error">{{ vc$.state.$errors[0].$message }}</span>
           
          </div>

          <div class="form-group">
            <input type="text" v-model="formData.gstnumber" class="form-control" placeholder="GST Number" required/>
  
              <span v-if="vc$.gstnumber.$error">{{ vc$.gstnumber.$errors[0].$message }}</span>
           
          </div>

          <button class="bg-black text-white" type="submit" @click="submitForm">Register</button>
          <p class="mt-3 text-center" style="font-size: 13px; color: #978F8F;">
            Already have an account?
            <router-link to="/login" class="text-black w-25">Sign in</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, maxLength, sameAs } from '@vuelidate/validators';
import { reactive, computed } from 'vue';


export default {
  setup() {
    const formData = reactive({
      fname: '',
      lname: '',
      email: '',
      password: '',
      confirmPassword: '',
      accountType: '',
      dealershipName: '',
      dealershipCode: '',
      city: '',
      state: '',
      gstnumber: ''
    });


    const rules = computed(() => {
      return {
        
          fname: { required },
          lname: { required },
          email: { required, email },
          password: { required, minLength: minLength(6), maxLength: maxLength(10) },
          confirmPassword: { required, sameAs: sameAs(() => this.formData.password) },
          accountType: { required },
          dealershipName: { required },
          dealershipCode: { required },
          city: { required },
          state: { required },
          gstnumber: { required },
      
      };
    });

    const vc$ = useVuelidate(rules, formData);


    return {
      formData,
      vc$
    };


  },
  methods: {
    submitForm() {
      this.vc$.$validate();
      if (!this.vc$.$error) {
        alert("Form submitted successfully")
      }
      else {
        alert('Form validations failed');
      }
    }
  }
};
</script>

<style scoped>
.container2 {
  max-width: 500px;
  margin: 0 auto;
}

.form-control {
  margin-bottom: 10px;
}

.invalid-feedback {
  color: red;
}
</style> 







