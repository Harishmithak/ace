<template>
    <div class="container" id="cont">
      <div class="row">
        <div class="col-12 py-5 shadow mb-5 my-custom-shadow">
          <h2 class="ms-5 mb-3" style="color: #978F8F; font-size: 27px;">Login with ACECRAFT</h2>
          <form class="login-form">
            <div class="form-group">
              <input class="w-100" type="text" placeholder="Username" />
            </div>
            <div class="form-group ms-1 pt-3">
              <input class="w-100" type="password" placeholder="Password"  />
            </div>
            <div class="d-flex justify-content-center mt-4">
              <button class="bg-black text-white btn-size" type="submit">Login</button>
            </div>
            <div class="d-flex justify-content-center mt-2">
              <p class="mt-3 text-center" style="font-size: 13px; color: #978F8F;">
                Doesn't have an account?
                <router-link to="/register" class="text-black w-25">Register</router-link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>

<style>
.container{
    max-width: 500px;
}
</style>



