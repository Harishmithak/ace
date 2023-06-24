<!-- <template>
    <div>

        <section class="footer" id="color">
            <div class="container">
                <div class="row justify-content-center pb-4 mt-n5 ">
                    <div class="d-flex justify-content-center icons">
                        <img :src="Facebook" alt="#"
                            :style="{ width: '40px', height: '40px', padding: '1px', marginLeft: '70px' }" />
                        <img :src="instagram" alt="#"
                            :style="{ width: '40px', height: '40px', padding: '1px', marginLeft: '70px' }" />
                        <img :src="linkedin" alt="#"
                            :style="{ width: '40px', height: '40px', padding: 'px', marginLeft: '70px' }" />
                    </div>


                </div>

                <div class="row" style="margin-left: 10px;">
                    <div class="col">
                        <router-link to="#">ABOUT</router-link>
                    </div>
                    <div class="col">
                        <router-link to="#">CARE</router-link>
                    </div>
                    <div class="col">
                        <router-link to="#">RETURNS</router-link>
                    </div>
                    <div class="col">
                        <router-link to="#">PRODUCTION</router-link>
                    </div>
                    <div class="col">
                        <router-link to="#">TERMS</router-link>
                    </div>
                    <div class="col border-0 ">
                        <router-link to="#">GET HELP</router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script> -->

<!-- // import Facebook from '../assets/images/footer/facebook.png'
// import instagram from '../assets/instagram.png'
// import linkedin from '../assets/linkedin.png'


// export default {


//     data() {
//         return {
//             Facebook: Facebook
            // instagram: instagram,
            // linkedin: linkedin

//         };
//     }
// }
// </script> -->

<!-- <style>
.footer {
    background-color: black;
    padding: 2em 0 1em 0;
    margin-top: 0px;
    padding-top:20px ;


}

.footer a {
    text-decoration: none;
    color: rgb(149, 149, 149);
    font-weight: 500;
}

.footer .col {
    border-right: solid white .1em;
    text-align: center;
}

.footer a:hover {
    color: white;
}

.icons {
    margin-top: 35px;
   
}
</style> -->

<template>
    <div>
      <section class="footer" id="color">
        <div class="container">
          <div class="row justify-content-center pb-4 mt-n5">
            <div class="d-flex justify-content-center icons">
                <a href="https://www.facebook.com" >
              <img src="@/assets/images/footer/facebook.png" alt="Facebook"
                style="width: 40px; height: 40px; padding: 1px; margin-left: 70px" /> </a>

                <a href="https://www.instagram.com" >
              <img src="@/assets/images/footer/instagram.png" alt="Instagram"
                style="width: 40px; height: 40px; padding: 1px; margin-left: 70px" /></a>

                <a href="https://www.linkedin.com" >
              <img src="@/assets/images/footer/linkedin.png" alt="LinkedIn"
                style="width: 40px; height: 40px; padding: 1px; margin-left: 70px" /></a>
            </div>
          </div>
  
          <div class="row" style="margin-left: 10px;">
            <div class="col">
              <router-link to="#">ABOUT</router-link>
            </div>
            <div class="col">
              <router-link to="#">CARE</router-link>
            </div>
            <div class="col">
              <router-link to="#">RETURNS</router-link>
            </div>
            <div class="col">
              <router-link to="#">PRODUCTION</router-link>
            </div>
            <div class="col">
              <router-link to="#">TERMS</router-link>
            </div>
            <div class="col border-0">
              <router-link to="#">GET HELP</router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <style>
  .footer {
    background-color: black;
    padding: 2em 0 1em 0;
    margin-top: 0px;
    padding-top: 20px;
  }
  
  .footer a {
    text-decoration: none;
    color: rgb(149, 149, 149);
    font-weight: 500;
  }
  
  .footer .col {
    border-right: solid white 0.1em;
    text-align: center;
  }
  
  .footer a:hover {
    color: white;
  }
  
  .icons {
    margin-top: 35px;
  }
  </style>
  