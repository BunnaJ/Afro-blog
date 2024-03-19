<template>
  <div class="article_container">

       <div  v-for="item in ArticlesItem" :key="item.ID" class="article_content">
        <router-link :to="{name: 'ArticleDetails', params: {id: item.ID}}">
        <div class="practical_guid"> <h4>{{item.title}}</h4></div>
        </router-link>
        <div class="date_time">{{item.date}}</div>
        <div class="article_image">
        <img :src="item.featured_image" alt="">
        </div>
       <div class="excerpt">{{item.excerpt}}</div>
     
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
  width: 520px;
  border: 1px solid #cfcdae;
  margin-bottom: 50px;
  padding: 20px;
  border-radius: 5px;
}
.practical_guid {
  /* width: 401px; */
  /* height: 32px; */
  font-weight: 700;
  font-family: inter;
  font-size: 23px;
}
.date_time {
  /* width: 250px; */
  /* height: 24px; */
  font-family: inter;
  font-size: 16px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
  padding: 15px 15px;

}
.proper {
  /* width: 500px; */
  /* height: 32px; */
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
  padding-top: 10px;
}

</style>