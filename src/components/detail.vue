<template lang="html">
  <div class="container">
    <div class="row">
        <div class="card col-sm-12">
          <img class="card-img-top" :src="image_url(image)" alt="Card image cap">
          <div class="card-block">
            <h4 class="card-title">{{name}}</h4>
            <p class="card-text">{{desc}}</p>
            <p class="card-text">${{price}}</p>
            <a href="#" class="btn btn-default"><span class="glyphicon glyphicon glyphicon-arrow-left" aria-hidden="true"></span></a>
            <router-link :to="'/items/update/'+id" class="btn btn-default pull-right">Edit</router-link>
            <a @click="deleteItem(id)" class="btn btn-danger pull-right">Delete</a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    window.axios.get(`/items/${this.$route.params.id}`)
      .then(response => {
        let data = response.data;
        this.id = data.id;
        this.name = data.name;
        this.desc = data.desc;
        this.price = data.price;
        this.image = data.image;
      })
      .catch(erro => {
        console.log(erro);
      });
  },
  data(){
    return {
        id: 0,
        name: '',
        desc:  '',
        price: 0,
        image: ''
    }
  },
  methods: {
    deleteItem(id){
      window.axios.delete(`/items/${id}`)
        .then(response => {
          this.$router.go(-1);
        })
        .catch(erro => {
          console.log(erro);
        });
    }
  }
}
</script>

<style lang="css">

</style>
