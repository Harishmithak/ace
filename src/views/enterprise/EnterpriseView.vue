<template>
    <div>
        <img src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/honda.png" alt="HONDA IMAGE"
            class="honda-image"><br>
        <p id="class">
            HONDA CAR'S DEALER MANPOWER UNIFORM
        </p>

        <div class="img-container">

            <h1 class="workwear">Workwear that Works</h1>
            <h1><i className="fas fa-chevron-down "></i></h1>
        </div>

        <div class="menapi">

            <h1 class="workrelaxed text-center pt-5">Work Relaxed.</h1>
            <h6 class="whenwe text-center pt-3">When we designed our uniforms, we wore them to work every day.</h6>
            <h6 class="westill text-center pt-2">We still do. They are comfy, relaxed and designed to suit your workplace.
            </h6>

            <div class="row">
                <div class="col-md-4" v-for="item in mens" :key="item.id">
                    <div class="menscardbody">
                        <img :src="item.img" class="card-img-top">

                        <h5 class=" card-title imgcontent1 ps-5 ms-5 text-center">{{ item.imgcontent1 }}</h5>
                        <p class="imgcontent2   ps-5 pt-3 text-center">{{ item.imgcontent2 }}</p>

                    </div>


                </div>
            </div>
        </div>

        <div class="container-fluid stepsbackground">


            <div class="row">

                <h1 class="text-center  thisishow"> This is how we do it.</h1>

                <div class="timeline">
                    <div class="point">1</div>
                    <div class="point">2</div>
                    <div class="point">3</div>
                    <div class="point">4</div>
                    <div class="point">5</div>
                    <div class="point1">6</div>
                </div>

                <div class="col-md-2" v-for="step in steps" :key="step.id">


                    <img :src="step.stepsimg" class="stepsimg">

                    <h5 class="stepscontent1 ms-5">{{ step.stepscontent1 }}</h5>
                    <p class="stepscontent2 ms-5">{{ step.stepscontent2 }}</p>


                </div>

            </div>


        </div>


        <div class="container-fluid fourimgback">

            <div class="row">
                <div class="col-md-12" v-for="four in fourimgblock" :key="four.id">
                    <img :src="four.fourimg" class="fourimg">
                </div>


            </div>

            <div class="designed">
                <p id="tit" class="ms-m-0">Designer Uniforms</p>
      <p id="by" class="signature">by</p>
      <p id="ace" class="proximaThin logoName">acecraft</p>
    
      <button id="touch" type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">GET IN TOUCH</button>


 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
        <h5 class="modal-title" id="exampleModalLabel">Get your Uniforms designed and styled by Us!</h5>
        <button type="button" class="btn-close float-start" data-bs-dismiss="modal" aria-label="Close"></button>
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
            <button type="button" id="btn2" class="btn btn-secondary" data-bs-dismiss="modal">Submit</button>
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
    name:'enterpriseView',
    data() {
        return {
            mens: [],
            steps: [],
            fourimgblock: [],

        };
    },
    mounted() {
        this.fetchMensData();
        this.fetchstepsData();
        this.fetchfourData();
    },
    methods: {
        fetchMensData() {
            fetch('http://localhost:3000/mens')
                .then((response) => response.json())
                .then((data) => {
                    this.mens = data;
                })
                .catch((error) => {
                    console.error('Error fetching mens data:', error);
                });
        },
        fetchstepsData() {
            fetch('http://localhost:3000/steps')
                .then((response) => response.json())
                .then((data) => {
                    this.steps = data;
                })
                .catch((error) => {
                    console.error('Error fetching steps data:', error);
                });
        },
        fetchfourData() {
            fetch('http://localhost:3000/fourimgblock')
                .then((response) => response.json())
                .then((data) => {
                    this.fourimgblock = data;
                })
                .catch((error) => {
                    console.error('Error fetching image data:', error);
                });
        },






    },




};

</script>

<style>
.img-container {
    background-size: cover;
    background-image: url(http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/Enterprises-1.jpg);
    background-position: center 122px;
    background-attachment: fixed;
    min-height: 100vh;
    background-repeat: no-repeat;
}

.honda-image {
    height: 50px;
    width: 300px;
}


.workwear {
    position: absolute;
    left: 534px;
    top: 560px;
    font-size: 26px;
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

.menapi {
    background-color: rgb(223, 220, 220) !important;
    height: 670px;
    /* width: 100%;
    height: 730px;
    position: relative;
    top: 750px; */
}

.workrelaxed {
    color: black;
    font-weight: 700;

}

.whenwe {
    color: black;
    font-weight: 500;
}

.westill {
    color: black;
    font-weight: 500;

}

/* .menscards {
    background: none;
    margin-left: -50px;
    transition: transform 0.3s ease;

} */


/* .menscards:hover {
    transform: scale(0.9);
} */

.imgcontent1 {
    font-size: 20px;
    margin-top: -300px;
    color: #978F8F;
    position: absolute;


}

.imgcontent2 {
    font-size: 18px;
    font-weight: 200;
    color: #978F8F;
    margin-left: 45px;
    margin-top: -280px;
    position: absolute;

}

.card-img-top {
    height: 450px;
    width: 550px;
    position: relative;
    margin-left: -48px;
    transition: transform 0.3s ease;
}




.card-img-top:hover {
    transform: scale(0.9);
}

.timeline {
    position: relative;
    margin-top: 70px;
    margin-left: 110px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1100px;
}

.point {
    position: relative;
    width: 30px;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(223, 202, 202, 0.103);
    color: #978F8F;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
}

.point1 {
    position: relative;
    width: 30px;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(223, 202, 202, 0.103);
    color: #978F8F;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;

}

.point::after {
    content: '';
    position: absolute;
    top: 50%;
    left: calc(50% + 10px);
    width: 190px;
    height: 1px;
    background-color: #978F8F;
    font-weight: 100;
}

.point:first-child::before {
    display: none;
}

.point:last-child {
    margin-right: 0;
}

.stepsbackground {
    background-color: black;
}

.stepscontent1 {
    color: #978F8F;
    font-weight: 200;
    font-size: 30px;
}

.stepscontent2 {
    color: #978F8F;
    font-weight: 200;
    font-size: 30px;
}

.stepsimg {
    margin-left: 20px;
    padding-top: 40px;
    height: 200px;
    width: 170px;
}

.thisishow {
    color: #978F8F;
    /* padding: 40px; */
    margin-top: 230px;
}

/* .fourimg {
    width: 220vh;
    margin-left: -60px;
    height: 750px;
} */

.fourimgback {
    position: relative;
    background-color: black !important;
}
.designed{
    position: absolute;
    margin-left: 550px;
    margin-top: -760px;
    background-color: black;
    padding: 50px;
}
#touch{

background: transparent;
color: white;
border-color: white;
font-size: small;



}
#tit{

    font-family:mediums ;

    color: rgb(141, 139, 139);

}

#by{
    font-family: get;
    color: rgb(172, 170, 170);


}

#ace{

    font-family: 'Courier New', Courier, monospace;
    letter-spacing: 5px;
    font-size: 22px;
    letter-spacing: 5px;
    color: rgb(141, 139, 139);
  

}  

@font-face {
    font-family: logo-bold;
    src: url(C:\Users\cgvak\ace\src\assets\fonts\Fontspring-DEMO-proximanova-bold.otf);
  }

  @font-face {
    font-family: mediums;
    src: url(C:\Users\cgvak\ace\src\assets\fonts\Fontspring-DEMO-proximanova-medium.otf);
  }
  @font-face {
    font-family: thin1;
    src: url(C:\Users\cgvak\ace\src\assets\fonts\Fontspring-DEMO-proximanova-thin.otf);
  }
  #firstname{
    margin-top: -70px;
  }

</style>