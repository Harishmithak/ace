
<template>

    <div class='navbarfull col-lg-12 col-md-12 col-sm-12 col-xl-12 fixed-top' >
      <router-link class='titlename' to="/">acecraft</router-link>
      
     <!-- <a ><span class="titlename" @click="handleClick"> acecraft </span></a>  -->
     <!-- <a class="titlename" @click.prevent="handleClick" href="#">acecraft</a> -->
      <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
              <a class="navbar-brand" to="#"></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
  
  
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                      <router-link to="/school" class="nav-link" id="school"  >SCHOOL</router-link>
                      <!-- <a class="titlename" @click="handleClick" href="#">acecraft</a> -->
                       <router-link class="nav-link" id="college" to="/college">COLLEGE</router-link>
                      <router-link class="nav-link" id="enterprise" to="/enterprise">ENTERPRISE</router-link>
                      <router-link class="nav-link notes" id="notes" to="/notes">NOTES</router-link>
                      <router-link class="nav-link" id="areamask" to="/arien">ARIEN MASK</router-link>
                      <i class="fas fa-cog"></i>
    <i class="fas fa-shopping-cart"></i>

         
                  </div>
              </div>
          </div>
      </nav >
    
    </div>
    </template>




    <style>


#app {
font-family: Avenir, Helvetica, Arial, sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color:white;
}
.titlename {
    color: #FFFFFF;
    margin-left: 80px;
    letter-spacing: 10px;
    padding: 25px 10px 20px;
    font-weight: 400;
    font-size: 30px;
    font-family: 'Courier New', Courier, monospace;
    text-decoration: none;
    margin-top: 10px;
    
  }
  .titlename:hover{
    color:white;
  }
  
  .navbarfull {
    background-color: black;
    height: 115px;
    position: sticky;
    top: 0;
  
  }

  
  .nav-link {
    color: #9e9e9e;
    margin-left: 340px;
    margin-right: -290px;
    font-weight: 500;
    font-size:14px;


  }
  
  .nav-link:hover {
    color: white;
    font-weight: bold;
  }
  
  .leftsidenav {
    margin-left: 200px;
  }
  
  
  .btn {
    margin-left: 10px;
    margin-top: -3px;
  }
  
  
  #areamask {
    width: 140px;
  }
  .nav-link{

    color: white;
    font-weight: bold;
  }
  #school,
  #college,
  #enterprise,
  #notes,
  #areamask {
    color: white; 
  }
  
  
  #areamask:hover {
    color: white;
    font-weight: bold;
  }
  
  .badge:hover {
    background-color: #978f8f;
    border-radius: 25px;
  }
  
  
  .notes::after {
    content: "";
    display: inline-block;
    background: #8596ff;
    width: 6px;
    height: 6px;
    border-radius: 4px;
    position: relative;
    top: -2px;
    left: 20px;
  }
  
  
  
  .companymenuli {
    margin-top: 5px;
    margin-left: 260px;
  }
  
  
  .setting {
    margin-left: 200px;
    font-weight: 900;
    
  }
  
  
  
  .setting li ul {
    display: none;
    position: absolute;
    top: 100%;
    background-color: #fff;
    opacity: 0.5;
    width: 200px;
    height:1600px;
  }
  
  .setting li:hover ul {
    display: block;
  }
  
  .setting li ul li {
    display: block;
    color: rgb(49, 48, 48);
    font-size: 23px;
    font-weight: 400;
    margin-left: -50px;
    background-color: #000;
   
  
  }
  
  .setting li ul li a {
    display: flex;
    align-items: center;
    padding: 10px;
    color: #000;
    text-decoration: none;
    height:1600px;
  
    opacity: 1;
  }
  
  .setting li ul li a img {
    width: 20px;
    margin-right: 10px;
    opacity: 0.5;
    
  
  }
  
  .setting li ul li a:hover {
    background-color: #f2f2f2;
  
    opacity: 1;
  }
  
  .setting li ul li a:hover img {
    opacity: 1;
    background-color: #8596ff;
  }

.nav-brand{
  color:gray;
  font-family: 'Times New Roman', Times, serif;
}
 
#school:hover,
#college:hover,
#enterprise:hover,
#notes:hover {
  color: white;
  font-weight: bold;
}
.nav-link{
  color:white;
}
.navbar-nav{
  margin-left: -10px;
}
.fa-shopping-cart{
color: white;
}
.fa-cog{
  margin-left: 400px;
  font-weight: 900;
  color: white;
  margin-top: 10px;
}
.fa-shopping-cart{
  margin-left: 100px;
  margin-top: 10px;
}
</style>