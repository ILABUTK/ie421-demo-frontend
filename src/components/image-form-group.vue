<template lang="html">
  <div class="form-group">
      <label>Upload Image</label>
      <div class="input-group">
          <span class="input-group-btn">
              <span class="btn btn-default btn-file">
                  Browse… <input type="file"  @change="onFileChange" accept="image/*">
              </span>
          </span>
          <input type="text" class="form-control" v-model="image_name" readonly>
      </div>
      <img :src="image" class="img-prev"/>
  </div>
</template>

<script>
export default {
  props: ['value'],

  data() {
    return {
      image: '',
      image_name:''
    }
  },
  methods: {
    createImage(file) {
      let image = new Image();
      let reader = new FileReader();
      let vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    onFileChange(e){
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length)
       return;
      this.image_name = files[0].name;
      this.createImage(files[0]);
      this.$emit('input', files[0]);
    },
    reset(){
      this.image = '';
      this.image_name = '';
    }
  }
}
</script>

<style lang="css">
.btn-file {
    position: relative;
    overflow: hidden;
}
.btn-file input[type=file] {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    font-size: 100px;
    text-align: right;
    filter: alpha(opacity=0);
    opacity: 0;
    outline: none;
    background: white;
    cursor: inherit;
    display: block;
}

.img-prev{
    width: 100%;
}
</style>
