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
              <router-link to="/reg" class="text-black w-25">Sign in</router-link>
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
  

        if (Object.keys(this.errors).length === 0) {

        }
      },
      isValidEmail(email) {

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
  </style> -->
  <template>

    <div>
      <h3>Sign Up with acecraft</h3>
      <form @submit="handleRegister">
        <div>
          <label for="fname">First Name:</label>
          <input type="text" id="fname" v-model="fname">
          <div v-if="errors.fname">{{ errors.fname }}</div>
        </div>
    
        <div>
          <label for="lname">Last Name:</label>
          <input type="text" id="lname" v-model="lname">
          <div v-if="errors.lname">{{ errors.lname }}</div>
        </div>
    
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email">
          <div v-if="errors.email">{{ errors.email }}</div>
        </div>
    
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="pword">
          <div v-if="errors.pword">{{ errors.pword }}</div>
        </div>
    
        <div>
          <label for="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" v-model="cpword">
          <div v-if="errors.cpword">{{ errors.cpword }}</div>
        </div>
    
        <div>
          <label>
            <input type="radio" value="school" v-model="utype"> School
          </label>
          <label>
            <input type="radio" value="enterprise" v-model="utype"> Enterprise
          </label>
          <div v-if="errors.utype">{{ errors.utype }}</div>
        </div>
    
        <div>
          <label for="dealershipName">Dealership Name:</label>
          <input type="text" id="dealershipName" v-model="dname">
          <div v-if="errors.dname">{{ errors.dname }}</div>
        </div>
    
        <div>
          <label for="dealershipCode">Dealership Number/Code:</label>
          <input type="text" id="dealershipCode" v-model="dcode">
          <div v-if="errors.dcode">{{ errors.dcode }}</div>
        </div>
    
        <div>
          <label for="city">City:</label>
          <input type="text" id="city" v-model="city">
          <div v-if="errors.city">{{ errors.city }}</div>
        </div>
    
        <div>
          <label for="state">State:</label>
          <input type="text" id="state" v-model="state">
          <div v-if="errors.state">{{ errors.state }}</div>
        </div>
    
        <div>
          <label for="gstnumber">GST Number:</label>
          <input type="text" id="gstnumber" v-model="gstnum">
          <div v-if="errors.gstnum">{{ errors.gstnum }}</div>
        </div>
    
        <button type="submit">Register</button>
      </form>
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
        errors: {}
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
  
        if (Object.keys(this.errors).length === 0) {
          // Handle successful registration
        }
      },
      isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
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
  