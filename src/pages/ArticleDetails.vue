<template>
  <div class="container">
    <p>hello this is main content page</p>
    <div class="">{{ArticlesItem.date}}</div>
    <div class="">{{id}}</div>
    <div v-for="items in details"  :key="items.ID"  class="">
      <p>{{items.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      ArticlesItem: '',
      details: ''
    }
  },

 async mounted() {
    let url = 'https://public-api.wordpress.com/rest/v1.1/sites/leccelblog.wordpress.com/posts?category=album&number=100';
    let slug = 'https://public-api.wordpress.com/rest/v1.1/sites/leccelblog.wordpress.com/posts/slug:olamide-carpe-diem-album'
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
        console.error('this is the error:in the url api', error)
      }
       this.id = this.$route.params.id;

    try {
      const response = await fetch(slug);
        if(!response.ok) {
          throw new Error(`http error: ${response.status}`);
        }
        const data = await response.json();
        console.log(slug)
        this.details = data.posts;
    } 
    catch(error) {
        console.error('this is the error in the slug api:', error)
      } 

}, 
 
}
</script>

<style>

</style>