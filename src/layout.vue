<template>
    <div>
      <my_nav></my_nav>
      <router-view></router-view>
    </div>
</template>
<script>
import my_nav from "./components/mynav.vue";

export default {
    name: 'layout',
    components: {
        my_nav
    }
}
</script>
