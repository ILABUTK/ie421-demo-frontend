<template lang="html">
    <div class="container">
      <form>
        <div class="form-group">
          <label for="name">Item Name</label>
          <input v-model="item.name" type="text" class="form-control" id="name" aria-describedby="name" placeholder="Enter item name">
        </div>
        <div class="form-group">
          <label for="description">Item Description</label>
          <textarea v-model="item.desc" type="textarea"  rows="10" class="form-control" id="description" aria-describedby="description" placeholder="Enter item description"></textarea>
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <div class="input-group" id="price">
              <span class="input-group-addon">$</span>
              <input v-model="item.price" type="number" value="1000" min="0" step="0.01" data-number-to-fixed="2" data-number-stepfactor="100" class="form-control currency" id="c2" />
          </div>
        </div>
        <image_form_group></image_form_group>
        <button type="submit" class="btn btn-primary pull-right">Submit</button>
      </form>
    </div>
</template>

<script>
import image_form_group from "./image-form-group.vue"

export default {
  data(){
    return {
      item: {
        id: 1,
        name: 'Item name 1',
        desc: 'Dolor culpa sunt laborum proident esse laboris commodo cupidatat officia. Do culpa qui tempor reprehenderit pariatur proident veniam consequat dolore. Incididunt occaecat cupidatat eiusmod do culpa eiusmod anim et do elit aliquip non duis. Eiusmod sunt labore esse nulla dolor Lorem ipsum et quis. Labore officia aliquip ipsum ex quis qui proident nulla sint incididunt sunt cupidatat culpa.',
        price: 100.0,
        image: ''
      }
    }
  },
  components: {
    image_form_group
  }
}
</script>
