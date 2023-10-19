<template>
    <nav class="nav center">
        <div class="nav__left">          
          <img :src="logo"/>          
          <a href="index.html"><h3 class="nav__left__logo">Interno</h3></a>
        </div>
        <div class="nav__right">
          <a href="#">
            <p class="nav__right__text">Home</p>
          </a>
          <a href="#">
            <p class="nav__right__text">Project</p>
          </a>
          <a href="#">
            <p class="nav__right__text">Blog</p>
          </a>
        </div>
      </nav>
</template>

<script>
import logo from '@/assets/img/Logo.jpg';
export default {
    name: 'VueHeaderComp',

    data() {
        return {
            logo: logo,
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>