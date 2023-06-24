
<template>
  <div class="container mb-3" style="padding: 0">
    <h1 style="color: black; margin-top: 20px" class=" blogs text-center">Blogs</h1>
    <div class="row">
      <div v-for="notes in notesindex" :key="notes.id" class="col-md-6">
        <a :href="`https://www.acecraft.in/blog/styling-accessories-that-complement-your-formal-wear`" class="card-link">
          <div class="cards">
            <div class="card-body text-center">
              {{ notes.title }}
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notesindex: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch('  http://localhost:3000/Blog')
        .then((response) => response.json())
        .then((data) => {
          this.notesindex = data;
        });
    },
  },
};
</script>

<style scoped>
.cards {

background-color: white;
margin-left: 5px;
padding-left: 23px;
width: 565px;
color: white;
margin-top: 50px;
height: 300px;
display: inline-flex;
box-shadow: 1px 2px 4px rgb(165, 162, 162);


}

.card-body {
background-color: black;
width: 555px;
height: 260px;
margin-top: -15px;
margin-left: -20px;
font-size: 14px;
padding-top: 110px;


}

.blogs {
color: black;
font-weight: 700;
font-family: logo;
}


</style>
