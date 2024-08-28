<template>
  <div class="container">

    <HeaderComp />
    <div class="flex">
      <router-view />
    </div>
    
    <div >
      <FooterComp/>
    </div>
    
  </div>
  
</template>

<script>

import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';

export default{
  components:{
    HeaderComp,
    FooterComp
  }
}
</script>

<style lang="scss">


.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
}
.flex{
  flex: 1;
}

</style>
