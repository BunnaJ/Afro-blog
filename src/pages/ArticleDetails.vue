<template>
  <div class="container">
     <div v-if="loading" class="spiner">
        <Loader />
      </div>
    <div v-if="post" class="item">
      <h3>{{post.title}}</h3>
      <p>{{post.excerpt}}</p>
      
    </div>
    <Fotter />
  </div>
</template>

<script>
import Fotter from '../components/FotterBox.vue'
import Loader from '../components/LoaderSpin.vue'
export default {
 components: {
    Fotter,
    Loader
 },
 data() {
  return {
  }
 },
 computed : {
  post() {
    return this.$store.state.post
  },
  loading() {
   return  this.$store.state.loading
  }
 },
 mounted() {
  console.log(this.$route.params.id)
   this.$store.dispatch('fetchPost', this.$route.params.id)
    
 },
}
 
</script>

<style>
.item {
  background: rgb(142, 128, 156);
  padding: 20%;
  border-radius: 5px;
}
.item h3 {
  text-decoration: underline;
}
.spiner {
  position: fixed;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 480px) {
  /* CSS styles specific to smaller screens */

} 
</style>