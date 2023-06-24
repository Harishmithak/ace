<template>
    <div class="space">
    <div class="arien">
      <h1 class="ms-5 mt-4" id="error" style="color: #978F8F; font-family: proxima; font-weight: 400;">Error (404)</h1></div>
      <div class="page"><p class="ms-5 mt-4 " id="page" style="color: #978F8F; font-family: proxima; font-size: 25px; font-weight: 600;">Page you are requesting does not exist.</p></div>
     <div><router-link class='goto' id='areamask' to="/"> GO TO HOME </router-link>
    </div>
</div>
  </template>
  
  <script>



  </script>
  
  <style>
 .arien{
  margin-left: -1020px;
 }
 .page{
    margin-left: -800px;
 }
 
  
 .goto {
    color: #9e9e9e;
    margin-left:-1350px;
    margin-right: -290px;
    font-weight: 500;
    font-size:14px;
text-decoration: none;

  }
  /* #page{
    margin-left:-1000px;
  }
  #error{
    margin-left:-800px;
  } */
  
  .goto:hover {
    color: white;
    font-weight: bold;
  }
  .space{
    padding-bottom: 400px;
    background-color: black;
    padding-top: 50px;
  }
  </style>