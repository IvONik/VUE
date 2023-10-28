<template>
  <HeaderComp/>

  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  
  <router-view/>
  
</template>

<script>

import HeaderComp from '@/components/HeaderComp.vue';

export default{
  components:[
  HeaderComp,
  ]
}
</script>
<style lang="scss">

</style>
