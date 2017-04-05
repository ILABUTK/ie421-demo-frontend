<template lang="html">
  <div class="container">
    <div class="row">
      <div v-for="item in items" class="col-sm-12 col-md-6 col-lg-4">
        <div class="card">
          <img class="card-img-top" :src="image_url(item.image)" alt="Card image cap">
          <div class="card-block">
            <h4 class="card-title"><router-link :to="'/items/' + item.id">{{item.name}}</router-link></h4>
            <p class="card-text">${{item.price}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    window.axios.get('/items')
      .then(response => {
        console.log(response);
        this.items = response.data;
      })
      .catch(erro => {
        console.log(erro);
      });
  },
  data() {
    return {
      items: []
    }
  }
}
</script>

<style lang="css">
.card {
  width: 100%;
  padding-bottom: 25px;
}
.card img {
  width: 100%;
}


</style>
