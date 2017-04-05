<template lang="html">
    <div class="container">
      <form>
        <div class="form-group">
          <label for="name">Item Name</label>
          <input v-model="name" type="text" class="form-control" id="name" aria-describedby="name" placeholder="Enter item name">
        </div>
        <div class="form-group">
          <label for="description">Item Description</label>
          <textarea v-model="desc" type="textarea"  rows="10" class="form-control" id="description" aria-describedby="description" placeholder="Enter item description"></textarea>
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <div class="input-group" id="price">
              <span class="input-group-addon">$</span>
              <input v-model="price  " type="number"  min="0" step="0.5" data-number-to-fixed="2" data-number-stepfactor="100" class="form-control currency" id="c2" />
          </div>
        </div>
        <image_form_group v-model="image" ref="image_input"></image_form_group>
        <button @click="createTask" class="btn btn-primary pull-right">Submit</button>
      </form>
    </div>
</template>

<script>
import image_form_group from "./image-form-group.vue"
export default {
  data(){
    return {
      name: '',
      desc: '',
      price: 0,
      image:'',
    }
  },
  components: {
    image_form_group
  },
  methods: {
    createTask(){
      let formData = new FormData();
      formData.append('name', this.name);
      formData.append('desc', this.desc);
      formData.append('price', this.price);
      formData.append('image', this.image);
      const config = {
          headers: { 'content-type': 'multipart/form-data' }
      };

      window.axios.post('/items', formData, config)
        .then( response => {
          console.log(response);
          this.name = '';
          this.desc = '';
          this.price = 0;
          this.image = '';
          this.$refs.image_input.reset();
        })
        .catch( error => {
          console.log(error);
        });
    }
  }
}
</script>

<style lang="css">

</style>
