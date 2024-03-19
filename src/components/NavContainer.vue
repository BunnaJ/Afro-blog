<template>
  <div class="container">
    <div class="nav_container">
     <div class="logo">
         <h2>GleeGist</h2>
     </div>
      <div class="search_container">
        <div class="search_icon"><i class="fa-solid fa-magnifying-glass"></i></div>
        <div class="search_input">
          <input type="text" placeholder="search for article">
        </div>
      </div>
       <div class="mood_toggle">
      <div class="switch_icon">
         <i class="fa-solid fa-moon"></i>
      <i class="fa-solid fa-sun"></i>
      </div>
       <div class="link_icon">
      <i class="fa-solid fa-link"></i>
    </div>
    </div>
    </div>
    
  
    <div class="first_article">
      <h1>Explore Practical <span>social</span> entertainment Articles.</h1>
      <div class="first_article_image">
        <img src="../assets/art1.jpg" alt="">
      </div>
    </div>
   <div class="article">
   <router-link to="/AboutPage">
     <h4>Articles</h4>
   </router-link>

   </div>

</div>
</template>


<script>
export default {

}
</script>

<style>
:root {
  --color1 : rgba(249, 139, 77, 1);
  --color2: rgba(19, 19, 19, 0.65);
}
.nav_container{
  display: flex;
  align-items: center;
  justify-content: center;

}
.logo{
  padding-right: 100px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 15px;
}
.search_container{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 530px;
  height: 50px;
  border-radius: 24px;
  border: 1px solid  var(--color1);

}
.search_input input {
  width: 400px;
  height: 25px;
  outline: none;
  border: none;
  padding-left: 20px;
  font: inter;
  font-weight: 500;
}
.search_icon{
  padding-left: 5px;
  color: var(--color2);
}
.mood_toggle{
  display: flex;
  align-items: center;
  justify-content: center;
}
.link_icon {
  padding-left: 30px;
}
.switch_icon{
  display: inline-block;
  padding-left: 140px;
  
}
.first_article{
  width: 1047px;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.first_article span{
  color: var(--color1);
}
.first_article h1{
  font-family: inter;
  font-weight: 700;
  font-size: 48px;
  text-align: center;
  line-height: 72px;
}
.first_article_image  img{
  width: 792px;
  height: 380px;
  border-radius: 4px;
  border: none;
  outline: none;
}
.article h4 {
  /* font-family: inter; */
  font-weight: 700;
  font-size: 20px;
  color: var(--color1);
  padding-top: 50px;
  text-decoration: none;
  
}

</style>