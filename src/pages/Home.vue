<template>
  <div class="main_container">
    <NavContainer />
    <ArticleList />
    <Fotter />
  </div>
</template>

<script>
import NavContainer from '../components/NavContainer.vue'
import ArticleList from '../components/ArticleList.vue'
import Fotter from '../components/FotterBox.vue'
export default {
  name: 'App',
  components:  {
    NavContainer,
    ArticleList,
    Fotter
  }

}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Alumni+Sans+Collegiate+One:ital@1&family=Exo+2:wght@300&family=Inter:wght@200;300&family=Lato&family=Nunito:wght@600;900&family=Playfair+Display:ital@1&family=Poppins:wght@200;400;500;600;700&family=Roboto&family=Roboto+Condensed:wght@700&family=Rubik+Bubbles&family=Rubik+Maps&display=swap');

#app {
max-width: 1100px;
margin: 0 auto;
}


</style>
