<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>

window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');

export default {
    name: 'app',
    created: function() {
        window.hostURL = 'http://demo-backend.dev';
        window._ = require('lodash');
        window.axios = require('axios');
        window.axios.defaults.baseURL = 'http://demo-backend.dev/api';
    }
}
</script>

<style lang="scss">
$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
@import "node_modules/bootstrap-sass/assets/stylesheets/bootstrap";
</style>
