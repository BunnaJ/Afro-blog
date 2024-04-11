<template>
  <div class="footer_container">
    <div class="afrodev">
        <h5>©2023 Afrodev</h5>
    </div>
    <div class="afroicons">
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-facebook"></i>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer_container {
  margin-top: 50px;
  border-top:2px solid var(--color1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.afroicons i{
  padding: 10px;
}
@media screen and (max-width: 480px) {
  /* CSS styles specific to smaller screens */
  .footer_container{
    width: 100%;
  }
}
</style>