


<script>
//importing navbar and footer 
import Nav from './views/mainfolder/NavView.vue'
import Footer from './views/mainfolder/FooterView.vue'


export default{
  
components:{
  Nav,
  Footer
}

}
</script>

<template>
<Nav> </Nav> 

<router-view> </router-view>

<Footer> </Footer>


</template>

