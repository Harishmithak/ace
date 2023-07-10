
<!-- school page  -->
<template>
    <div>
        <!-- routing to product page  -->

        <router-link to="/product">
            <div class="row">
                <div v-for="logo in school" :key="logo.id" class="col-md-1 ls">
                    <img :src="logo.sclimg" class="logo-img ps-2" />

                    <p class="school-name">{{ logo.sclname }}</p>
                    <p class="mt-n3">{{ logo.sclname2 }}</p>


                </div>
            </div>
        </router-link>


        <div class="img-container1">

            <h1 class="workwear1">Designer uniforms for the doers.</h1>
            <h1><i className="fas fa-chevron-down "></i></h1>
        </div>



        <div class="black">
            <div class="our">
                <p>Aesthetically advanced,</p>
                <p> our designer uniforms are<b> a cut above the rest,</b></p>
                <p><b>in every sense of the word.</b>
                </p>
            </div>

        </div>



        <div class="main2">
            <div class="designer1 text-black">
                <div class="row bg-transprent justify-content-center">
                    <div class="col-12 text-center">
                        <h6 class="ms-4 fw-normal fs-1" style="margin-top: 500px;">
                            Perfection. Now<b> delivering to your doorstep.</b>
                            <br />
                            <i class="fas fa-chevron-down down2"></i>
                        </h6>
                    </div>
                </div>
            </div>
            <div class="designer1 text-black">
                <div class="row bg-transprent justify-content-center">
                    <div class="col-12 text-center">
                        <p class="ms-4 fw-normal fs-2" style="margin-top: 270px; padding-bottom: 250px;">
                            Less<b> hassle.</b> More<b> hustle.</b>
                            <br /> Our end-to-end e-commerce facility with
                            <br />
                            <b>superior technology enables us to</b>
                            <br />
                            deliver your order right to your doorstep.
                        </p>
                    </div>
                </div>
            </div>

        </div>

        <div class="girl">

            <div class="container">
                <div id="text2">
                    <div class="text-end">
                        <p class="fs-1 m-0">
                            <b>Be at ease.</b>
                        </p>
                        <p class="fs-1 m-0">
                            <b>Everyday.</b>
                        </p>
                        <p class="fs-4 fw-lighter">
                            Our uniforms keep your children looking great
                            <br />
                            from the first day of school until the end-of-the-year picnic.
                        </p>
                    </div>
                    <img src="http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/BK,.jpg" alt='img'
                        class="img-responsive" width="100%" />
                </div>
            </div>
        </div>

<!-- modal in school page  -->

        <div class="main3">
            <div class="text3">
                <div class="col-md-12 pt-5 content text-center">
                    <div class="text-center pt-5 ms-mb-x">
                        <p class="ms-m-0">Designer Uniforms</p>
                        <p class="signature">by</p>
                        <div class="text-center horizontal-line signature">

                        </div>
                        <p class="fs-2 fw-lighter" style="font-family: 'Courier New', Courier, monospace;">
                            acecraft
                        </p>
                    </div>

                    <div class="fs-4 fw-lighter">
                        Establish a <b class="fw-bold">signature look</b> for your school.
                    </div>

                    <div class="fs-4 fw-lighter mt-5">
                        Looking to change your supplier?
                        <br />
                        <button id="touch" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                            data-bs-whatever="@mdo">GET IN TOUCH</button>


                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <h5 class="modal-title" id="exampleModalLabel">Get your Uniforms designed and styled by
                                        Us!</h5>
                                    <button type="button" class="btn-close float-start" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                    <div class="container-fluid icons">
                                        <div class="row">
                                            <div class="col-6 ">
                                                <i class="fa-solid fa-user fa-2xl icon" style="color: #d2d0d0;"></i>
                                                <input type="text" id="firstname" placeholder="First Name">

                                            </div>
                                            <div class="col-6">
                                                <input type="text" id="lastname" placeholder="Last Name">

                                            </div>
                                        </div><br>
                                        <div class="row">
                                            <i class="fa-solid fa-envelope fa-2xl icon" style="color: #d2d0d0;"></i>
                                            <input type="email" id="email" placeholder="Professional Email">

                                        </div><br>
                                        <div class="row">
                                            <i class="fa-solid fa-building fa-2xl icon" style="color: #d2d0d0;"></i>
                                            <input type="text" id="org" placeholder="Organisation">

                                        </div><br>
                                        <div class="row">
                                            <i class="fa-solid fa-mobile fa-2xl icon" style="color: #d2d0d0;"></i>
                                            <input type="text" id="phone" placeholder="Phone No.">

                                        </div>
                                        <p id="quan">Quantity required</p>
                                        <div id="choice">
                                            <input type="radio" id="quantity1" name="age" value="50">
                                            <label for="age1">10 - 50 sets</label><br>
                                            <input type="radio" id="quantity2" name="age" value="100">
                                            <label for="age2">51 - 100 sets</label><br>
                                            <input type="radio" id="quantity3" name="age" value="100+">
                                            <label for="age3">100+ sets</label><br><br>

                                        </div>
                                        <button type="button" id="btn2" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Submit</button>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>

export default {
    name: 'schoolView',
    data() {
        return {
            school: [],

        };
    },
    mounted() {
        this.fetchschoolData();

    },
    methods: {
        fetchschoolData() {
            fetch(' https://acecraft-product-details.onrender.com/school') //fetching logo details from school
                .then((response) => response.json())
                .then((data) => {
                    this.school = data;
                })
                .catch((error) => {
                    console.error('Error fetching mens data:', error);
                });
        }
    }
}
</script>


<style>
.logos-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.logo-item {

    align-items: center;
    margin: 10px;
}

.logo-img {
    height: 60px;
    width: 80px;
    padding: 10px;


}

.ls {
    margin-left: 70px;

}

.img-container1 {
    background-size: cover;
    background-image: url(http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/School-1.jpg);
    background-position: center 122px;
    background-attachment: fixed;
    min-height: 100vh;
    background-repeat: no-repeat;
}




.workwear1 {
    position: absolute;
    left: 400px;
    top: 560px;
    font-size: 40px;
    font-weight: 700;
    color: #978F8F;


}

.fa-chevron-down {
    margin-top: 10px;
    position: absolute;
    top: 600px;
    color: #978F8F;
    font-size: large;
    left: 664px;
    font-weight: bold;
    animation: mymoves 1s infinite;


}

@keyframes mymoves {
    from {
        top: 600px;
    }

    to {
        top: 590px;
    }
}

.section {
    background-color: black;
}

.black {
    background-color: black;
}

.our {
    color: #978F8F;
    font-size: 40px;
    padding: 200px;
}

.main2 {
    background-size: cover;
    background-image: url(https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/School-2.jpg);
    background-position: center 122px;
    background-attachment: fixed;
    min-height: 100vh;
    background-repeat: no-repeat;
}

.down2 {
    position: absolute;
    color: #0f0f0f;
    font-size: large;
    left: 664px;
    font-weight: bold;
    margin-top: -200px;
    animation: mymovesss 1s infinite;
}

@keyframes mymovesss {
    from {
        top: 2390px;
    }

    to {
        top: 2350px;
    }
}

.girl {
    background-color: black;
}

#text2 {
    color: #978F8F;
}



.main3 {
    background-size: 100%;
    background-image: url(https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/School-41.jpg );
    background-position: top;
    min-height: 540px !important;
    background-repeat: no-repeat;
    font-size: 30px !important;
}

.text3 {
    color: #978F8F;
}

#touch {

    background: transparent;
    color: white;
    border-color: white;
    font-size: small;



}

body {
    overflow-x: hidden;
}</style>