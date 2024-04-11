<template>
  <div class="article_container">

       <div v-for="item in ArticlesItem" :key="item.ID" class="article_content">
        <router-link :to="{name: 'ArticleDetails', params: {id: item.slug}}" class="custom-link">
        <div id="all" class="practical_guid"> <h4>{{item.title}}</h4></div>
        </router-link>
        <div  id="all" class="date_time">{{item.date}}</div>
         <div  id="all" class="excerpt">{{item.slug}}</div>
        <div class="article_image">
        <img :src="item.featured_image" alt="">
        </div>
      
     
    </div>
   

   
  </div>
</template>

<script>
export default {
  name: "ArticlesList",
  data() {
      return {
          ArticlesItem: [],
          
      }
  },
  async mounted () {
      let url = 'https://public-api.wordpress.com/rest/v1.1/sites/leccelblog.wordpress.com/posts?category=album&number=100';
      try {
        const response = await fetch(url);
        if(!response.ok) {
          throw new Error(`http error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
        this.ArticlesItem = data.posts;
      }
      catch(error) {
        console.error('this is the error:', error)
      }
  },

  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Alumni+Sans+Collegiate+One:ital@1&family=Exo+2:wght@300&family=Inter:wght@200;300&family=Lato&family=Nunito:wght@600;900&family=Playfair+Display:ital@1&family=Poppins:wght@200;400;500;600;700&family=Roboto&family=Roboto+Condensed:wght@700&family=Rubik+Bubbles&family=Rubik+Maps&display=swap');

.article_container{
  display: grid;
  grid-template-columns: repeat(2 , 1fr);
  gap: 30px;
  width: 1176px;

}
.article_content {
  width: 400px;
  border-radius: 5px;
  padding: 0 40px;
}
.practical_guid {

  font-weight: 700;
  font-family: inter;
  font-size: 23px;
}
.date_time {
 
  font-family: inter;
  font-size: 16px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
 
}
.proper {

  font-family: inter;
  font-family: 500;
  font-size: 20px;
  padding: 10px 0;
}

.article_image img {
  width: 400px;
  height: 278.65px;
  
}
.excerpt {
  width: 100%;
  overflow: hidden;
  padding: 10px 0;
}
.custom-link {
  text-decoration: none;
  color: orange;
}
#all {
}
</style>