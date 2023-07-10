
<!-- home page -->
<template>
  <div class="background-image-container">
    <div class="overlay">
      <pre>Choose Class
over the common.</pre>

    </div>
    <router-link to="/college" class="acecraftforcolleges"> ACECRAFT FOR COLLEGES
    <i class="fas fa-chevron-right arrow-right "></i>
    </router-link>

  </div>

  <div class="image-container">
    <div class="bg-image hover-zoom">

<!-- background image -->
      <img src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/home3.jpg" alt="Left Image"
        class="left-image ">
    </div>
    <div class="bg-image hover-zoom"> <img src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/home4.jpg" alt="Right Image"
        class="right-image"></div>

    <div class="overlay1">
      <pre>A grade
of Greatness.</pre>

    </div>
    <router-link to="/school" class="acecraftforschools"> ACECRAFT FOR SCHOOLS</router-link>
    <i class="fas fa-chevron-right arrow-right1 "></i>
    <div class="overlay2">
      <pre>workwear
Redefined.</pre>

    </div>
    <router-link to="/enterprise" class="acecraftforenterprise"> ACECRAFT FOR ENTERPRISE</router-link>
    <i class="fas fa-chevron-right arrow-right2 "></i>
  </div>
</template>

<style>
.background-image-container {
  background-image: url(http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/Home-1.jpg);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 650px;

}

.background-image-container {
  position: relative;
}

.overlay {
  position: absolute;
  color: #FFFFFF;
  margin-top: 450px;
  margin-left: 600px;
  border: solid;
  border-width: 0.01cqh;
  padding: 10px;
  padding-right: 35px;
  padding-left: 35px;
  font-family: cursive;

}


.fa-chevron-right {
  color: white;
  position: absolute;
  top: 88%;
  left: 280px;
  transform: translateY(-50%);
  font-size: 15px;
  animation: mymove 1s linear infinite;
}

.fa-chevron-right:hover {
  color: black;
}


@keyframes mymove {
  0% {
    margin-left: 40%;
  }

  100% {
    margin-left: 46%;
    margin-right: 2%;
  }
}


.acecraftforcolleges {
  position: absolute;
  margin-top: 560px;
  margin-left: -100px;
  font-size: 17px;
  letter-spacing: 1px;
  color: white;
  font-weight: 500;
  text-decoration: none;


}

.acecraftforcolleges:hover {
  color: black;
}

.image-container {
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  padding-bottom: 30px;
}

.left-image,
.right-image {
  width: 700px;
  height: 700px;
  
padding: 15px;
  /* transition: transform 1s ease; */
}


.image-container {
  position: relative;
}


.acecraftforschools {
  position: absolute;
  margin-top: 550px;
  margin-left: 200px;
  font-size: 17px;
  letter-spacing: 1px;
  color: white;
  font-weight: 500;
  text-decoration: none;
}

.overlay1 {
  position: absolute;
  color: #FFFFFF;
  margin-top: 300px;
  margin-left: 240px;
  border: solid;
  border-width: 0.01cqh;
  padding: 10px;
  padding-right: 35px;
  padding-left: 35px;
  font-family: cursive;
  font-size: large;


}

.arrow-right1 {
  color: white;
  position: absolute;
  top: 85.5%;
  left: -100px;
  transform: translateY(-50%);
  font-size: 15px;
  animation: mymove 1s linear infinite;
}

.fa-chevron-right:hover {
  color: black;
}

.acecraftforenterprise {
  position: absolute;
  margin-top: 550px;
  margin-left: 900px;
  font-size: 17px;
  letter-spacing: 1px;
  color: white;
  font-weight: 500;
  text-decoration: none;

}

.overlay2 {
  position: absolute;
  color: #FFFFFF;
  margin-top: 300px;
  margin-left: 980px;
  border: solid;
  border-width: 0.01cqh;
  padding: 10px;
  padding-right: 35px;
  padding-left: 35px;
  font-family: cursive;
  font-size: large;

}

.arrow-right2 {
  color: white;
  position: absolute;
  top: 85.5%;
  left: 630px;
  transform: translateY(-50%);
  font-size: 15px;
  animation: mymove 1s linear infinite;

}

.arrow-right2:hover {
  color: #000;
}

.acecraftforschools:hover {
  color: #000;
}

.acecraftforenterprise:hover {
  color: #000;
}

.arrow-right {
  color: white;
  position: absolute;
  top: 50%;
  left: 150px;
  transform: translateY(-50%);
  font-size: 15px;
  animation: mymove 1s linear infinite;

}


</style>