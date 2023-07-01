<!-- <template>
    <div class="container2" id="cont" style="margin-bottom: 250px;">
      <div class="row">
        <div class="col-12 py-1 shadow mt-5">
          <h3 class="ms-4 pb-3" style="color: #978F8F;">Sign Up with Acecraft</h3>
          <form class="registration-form" @submit="handleRegister" style="color: #978F8F;">
            <div class="form-group">
              <input
                type="text"
                id="fname"
                class="form-control"
                :class="{ 'is-invalid': errors.fname }"
                placeholder="First name"
                v-model="fname"
              />
              <div class="invalid-feedback" v-if="errors.fname">{{ errors.fname }}</div>
            </div>
  
            <div class="form-group">
              <input
                type="text"
                id="lname"
                class="form-control"
                :class="{ 'is-invalid': errors.lname }"
                placeholder="Last name"
                v-model="lname"
              />
              <div class="invalid-feedback" v-if="errors.lname">{{ errors.lname }}</div>
            </div>
  
            <div class="form-group">
              <input
                type="email"
                id="email"
                class="form-control"
                :class="{ 'is-invalid': errors.email }"
                placeholder="Email"
                v-model="email"
              />
              <div class="invalid-feedback" v-if="errors.email">{{ errors.email }}</div>
            </div>
  
            <div class="form-group">
              <input
                type="password"
                id="password"
                class="form-control"
                :class="{ 'is-invalid': errors.pword }"
                placeholder="Password"
                v-model="pword"
              />
              <div class="invalid-feedback" v-if="errors.pword">{{ errors.pword }}</div>
            </div>
  
            <div class="form-group">
              <input
                type="password"
                id="confirmPassword"
                class="form-control"
                :class="{ 'is-invalid': errors.cpword }"
                placeholder="Confirm password"
                v-model="cpword"
              />
              <div class="invalid-feedback" v-if="errors.cpword">{{ errors.cpword }}</div>
            </div>
  
            <div>
              <label class="ms-5">
                <input
                  type="radio"
                  value="school"
                  v-model="utype"
                />
                School
              </label>
              <label class="ms-5">
                <input
                  type="radio"
                  value="enterprise"
                  v-model="utype"
                />
                Enterprise
              </label>
            </div>
            <div class="invalid-feedback" v-if="errors.utype">{{ errors.utype }}</div>
  
            <div class="form-group">
              <input
                type="text"
                id="dealershipName"
                class="form-control"
                :class="{ 'is-invalid': errors.dname }"
                placeholder="Dealership Name"
                v-model="dname"
              />
              <div class="invalid-feedback" v-if="errors.dname">{{ errors.dname }}</div>
            </div>
  
            <div class="form-group">
              <input
                type="text"
                id="dealershipCode"
                class="form-control"
                :class="{ 'is-invalid': errors.dcode }"
                placeholder="Dealership Number/Code"
                v-model="dcode"
              />
              <div class="invalid-feedback" v-if="errors.dcode">{{ errors.dcode }}</div>
            </div>
  
            <div class="form-group">
              <input
                type="text"
                id="city"
                class="form-control"
                :class="{ 'is-invalid': errors.city }"
                placeholder="City"
                v-model="city"
              />
              <div class="invalid-feedback" v-if="errors.city">{{ errors.city }}</div>
            </div>
  
            <div class="form-group">
              <input
                type="text"
                id="state"
                class="form-control"
                :class="{ 'is-invalid': errors.state }"
                placeholder="State"
                v-model="state"
              />
              <div class="invalid-feedback" v-if="errors.state">{{ errors.state }}</div>
            </div>
  
            <div class="form-group">
              <input
                type="text"
                id="gstnumber"
                class="form-control"
                :class="{ 'is-invalid': errors.gstnum }"
                placeholder="GST Number"
                v-model="gstnum"
              />
              <div class="invalid-feedback" v-if="errors.gstnum">{{ errors.gstnum }}</div>
            </div>
  
            <button class="bg-black text-white" type="submit">Register</button>
            <p class="mt-3 text-center" style="font-size: 13px; color: #978F8F;">
              Already have an account?
              <router-link to="/Signin" class="text-black w-25">Sign in</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fname: "",
        lname: "",
        email: "",
        pword: "",
        cpword: "",
        utype: "",
        dname: "",
        dcode: "",
        city: "",
        state: "",
        gstnum: "",
        errors: {},
      };
    },
    methods: {
      handleRegister(event) {
        event.preventDefault();
        this.errors = {};
  
        // Validate form fields
        if (this.fname.trim() === "") {
          this.errors.fname = "Please enter your first name";
        }
        if (this.lname.trim() === "") {
          this.errors.lname = "Please enter your last name";
        }
        if (this.email.trim() === "") {
          this.errors.email = "Please enter your email";
        } else if (!this.isValidEmail(this.email)) {
          this.errors.email = "Please enter a valid email address";
        }
        if (this.pword.trim() === "") {
          this.errors.pword = "Please enter a password";
        }
        if (this.cpword.trim() === "") {
          this.errors.cpword = "Please confirm your password";
        } else if (this.cpword.trim() !== this.pword.trim()) {
          this.errors.cpword = "Passwords do not match";
        }
        if (this.utype === "") {
          this.errors.utype = "Please select a user type";
        }
        if (this.dname.trim() === "") {
          this.errors.dname = "Please enter a dealership name";
        }
        if (this.dcode.trim() === "") {
          this.errors.dcode = "Please enter a dealership number/code";
        }
        if (this.city.trim() === "") {
          this.errors.city = "Please enter your city";
        }
        if (this.state.trim() === "") {
          this.errors.state = "Please enter your state";
        }
        if (this.gstnum.trim() === "") {
          this.errors.gstnum = "Please enter your GST number";
        }
  
        // Submit the form if there are no errors
        if (Object.keys(this.errors).length === 0) {
          // Perform registration logic here
          // You can send an API request to the server to handle registration
          // For example, using axios library:
          // axios.post('/api/register', {
          //   fname: this.fname,
          //   lname: this.lname,
          //   email: this.email,
          //   pword: this.pword,
          //   cpword: this.cpword,
          //   utype: this.utype,
          //   dname: this.dname,
          //   dcode: this.dcode,
          //   city: this.city,
          //   state: this.state,
          //   gstnum: this.gstnum
          // }).then(response => {
          //   // Registration successful
          //   // You can perform any necessary actions here (e.g., show a success message)
          // }).catch(error => {
          //   // Registration failed
          //   // You can handle and display the error here (e.g., show an error message)
          // });
        }
      },
      isValidEmail(email) {
        // Email validation logic
        // You can use a regular expression or any other method to validate the email format
        // Here's a simple regular expression for email validation:
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      },
    },
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
   -->

   <!-- <template>
    <div class="container2" id="cont" style="margin-bottom: 250px;">
      <div class="row">
        <div class="col-12 py-1 shadow mt-5">
          <h3 class="ms-4 pb-3" style="color: #978F8F;">Sign Up with Acecraft</h3>
          <form class="registration-form" @submit="handleRegister" style="color: #978F8F;">
            <div class="form-group">
              <input
                type="text"
                id="fname"
                class="form-control"
                :class="{ 'is-invalid': $v.fname.$error }"
                placeholder="First name"
                v-model="fname"
              />
              <div class="invalid-feedback" v-if="!$v.fname.required && $v.fname.$dirty">Please enter your first name</div>
            </div>
  
            <div class="form-group">
              <input
                type="text"
                id="lname"
                class="form-control"
                :class="{ 'is-invalid': $v.lname.$error }"
                placeholder="Last name"
                v-model="lname"
              />
              <div class="invalid-feedback" v-if="!$v.lname.required && $v.lname.$dirty">Please enter your last name</div>
            </div>
  
            <div class="form-group">
              <input
                type="email"
                id="email"
                class="form-control"
                :class="{ 'is-invalid': $v.email.$error }"
                placeholder="Email"
                v-model="email"
              />
              <div class="invalid-feedback" v-if="!$v.email.required && $v.email.$dirty">Please enter your email</div>
              <div class="invalid-feedback" v-if="!$v.email.email && $v.email.$dirty">Please enter a valid email address</div>
            </div>
  
            <div class="form-group">
              <input
                type="password"
                id="password"
                class="form-control"
                :class="{ 'is-invalid': $v.pword.$error }"
                placeholder="Password"
                v-model="pword"
              />
              <div class="invalid-feedback" v-if="!$v.pword.required && $v.pword.$dirty">Please enter a password</div>
            </div>
  
            <div class="form-group">
              <input
                type="password"
                id="confirmPassword"
                class="form-control"
                :class="{ 'is-invalid': $v.cpword.$error }"
                placeholder="Confirm password"
                v-model="cpword"
              />
              <div class="invalid-feedback" v-if="!$v.cpword.required && $v.cpword.$dirty">Please confirm your password</div>
              <div class="invalid-feedback" v-if="!$v.cpword.sameAsPassword && $v.cpword.$dirty">Passwords do not match</div>
            </div>
  
            <div>
              <label class="ms-5">
                <input
                  type="radio"
                  value="school"
                  v-model="utype"
                />
                School
              </label>
              <label class="ms-5">
                <input
                  type="radio"
                  value="enterprise"
                  v-model="utype"
                />
                Enterprise
              </label>
            </div>
            <div class="invalid-feedback" v-if="!$v.utype.required && $v.utype.$dirty">Please select a user type</div>
  
            <div class="form-group">
              <input
                type="text"
                id="dealershipName"
                class="form-control"
                :class="{ 'is-invalid': $v.dname.$error }"
                placeholder="Dealership Name"
                v-model="dname"
              />
              <div class="invalid-feedback" v-if="!$v.dname.required && $v.dname.$dirty">Please enter a dealership name</div>
            </div>
  
            <div class="form-group">
              <input
                type="text"
                id="dealershipCode"
                class="form-control"
                :class="{ 'is-invalid': $v.dcode.$error }"
                placeholder="Dealership Number/Code"
                v-model="dcode"
              />
              <div class="invalid-feedback" v-if="!$v.dcode.required && $v.dcode.$dirty">Please enter a dealership number/code</div>
            </div>
  
            <div class="form-group">
              <input
                type="text"
                id="city"
                class="form-control"
                :class="{ 'is-invalid': $v.city.$error }"
                placeholder="City"
                v-model="city"
              />
              <div class="invalid-feedback" v-if="!$v.city.required && $v.city.$dirty">Please enter your city</div>
            </div>
  
            <div class="form-group">
              <input
                type="text"
                id="state"
                class="form-control"
                :class="{ 'is-invalid': $v.state.$error }"
                placeholder="State"
                v-model="state"
              />
              <div class="invalid-feedback" v-if="!$v.state.required && $v.state.$dirty">Please enter your state</div>
            </div>
  
            <div class="form-group">
              <input
                type="text"
                id="gstnumber"
                class="form-control"
                :class="{ 'is-invalid': $v.gstnum.$error }"
                placeholder="GST Number"
                v-model="gstnum"
              />
              <div class="invalid-feedback" v-if="!$v.gstnum.required && $v.gstnum.$dirty">Please enter your GST number</div>
            </div>
  
            <button class="bg-black text-white" type="submit">Register</button>
            <p class="mt-3 text-center" style="font-size: 13px; color: #978F8F;">
              Already have an account?
              <router-link to="/Signin" class="text-black w-25">Sign in</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { required, email, sameAs } from 'vuelidate/lib/validators';
  
  export default {
    data() {
      return {
        fname: "",
        lname: "",
        email: "",
        pword: "",
        cpword: "",
        utype: "",
        dname: "",
        dcode: "",
        city: "",
        state: "",
        gstnum: "",
      };
    },
    validations: {
      fname: { required },
      lname: { required },
      email: { required, email },
      pword: { required },
      cpword: { required, sameAsPassword: sameAs('pword') },
      utype: { required },
      dname: { required },
      dcode: { required },
      city: { required },
      state: { required },
      gstnum: { required },
    },
    methods: {
      handleRegister(event) {
        event.preventDefault();
        this.$v.$touch();
  
        if (this.$v.$invalid) {
          return;
        }
  
        // Submit the form if all validations pass
        // Perform registration logic here
        // You can send an API request to the server to handle registration
        // For example, using axios library:
        // axios.post('/api/register', {
        //   fname: this.fname,
        //   lname: this.lname,
        //   email: this.email,
        //   pword: this.pword,
        //   cpword: this.cpword,
        //   utype: this.utype,
        //   dname: this.dname,
        //   dcode: this.dcode,
        //   city: this.city,
        //   state: this.state,
        //   gstnum: this.gstnum
        // }).then(response => {
        //   // Registration successful
        //   // You can perform any necessary actions here (e.g., show a success message)
        // }).catch(error => {
        //   // Registration failed
        //   // You can handle and display the error here (e.g., show an error message)
        // });
      },
    },
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
   -->
   <template>
    <h1>
      register page
    </h1>
   </template>