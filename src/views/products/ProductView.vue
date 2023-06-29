<template>
    <div>
        <img class="bgs" src="@/assets/images/college/Pimgback.jpg" alt="background" />

        <div class="sc3">
            <h3 class="pt-5 mt-5 sc1">Decode</h3><br />
            <h1 class="sc2">your kind of designer uniforms.</h1>
        </div>


        <div class="row">
            <div class="col-md-4" v-for="scl in sclproducts " :key="scl.id">

                <div class="cardss">
                    <div class="text-center">
                        <router-link :to="`/display/${scl.id}`" class="nav-link" id="school">
                            
                            <div class="position-relative" style="margin-left: -550px;">
                                <img :src="scl.sclproductimg" height="480" width="380" :alt="scl.id"
                                    class="mt-5 crd-img uniform-item-image" />


                                <div class="quick-view-overlay">
                                    <button class="quick-view-button">Quick View</button>
                                </div>
                            </div>

                            <h5 style="color: black; font-size: 13px; font-weight: 650;margin-left: -550px;" class="mt-2">{{
                                scl.prodname }}</h5>
                 
                        </router-link>
                    </div>
                </div>





            </div>
        </div>



    </div>
</template>

<script>
export default {
    data() {
        return {

            sclproducts: [],

        };
    },
    mounted() {

        this.fetchproductData();
    },
    methods: {
        fetchproductData() {
            fetch('http://localhost:3000/sclproducts')
                .then((response) => response.json())
                .then((data) => {
                    this.sclproducts = data;
                })
                .catch((error) => {
                    console.error('Error fetching product data:', error);
                });
        }
    }
}

</script>

<style>
.bgs {
    height: 700px;
    width: 100%;
    position: relative;
}

.sc1 {
    /* position: absolute; */
    color: #978F8F;
    font-weight: 100;

}

.sc2 {
    /* position: absolute; */
    color: #978F8F;
    font-weight: 400;
}

.sc3 {
    position: absolute;
    margin-top: -500px;
    margin-left: 400px;
}

.container {
    margin-top: 20px;
}

.cardss {
    position: relative;
}

.uniform-item-image {
    transition: transform 0.3s ease;
}

.uniform-item-image:hover {
    transform: scale(1.1);
}

.quick-view-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.quick-view-button {
    background-color: #000;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 16px;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.cardss:hover .quick-view-overlay {
    opacity: 1;
}

.cardss:hover .quick-view-button {
    opacity: 1;
}

body {
    overflow-x: hidden;
}
</style>