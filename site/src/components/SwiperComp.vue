<template>
    <swiper
      :style="{
        '--swiper-navigation-color': '#0d0d0e',
        '--swiper-pagination-color': '#0d0d0e',
      }"
      :zoom="true"
      :navigation="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img :src="det1" />
        </div> </swiper-slide
      ><swiper-slide>
        <div class="swiper-zoom-container">
          <img :src="det2" />
        </div> </swiper-slide
      ><swiper-slide>
        <div class="swiper-zoom-container">
          <img :src="det3" />
        </div> </swiper-slide
      >
    </swiper>
  </template>

  <script>
  import det1 from '@/assets/img/det1.jpg'
  import det2 from '@/assets/img/det2.jpg'
  import det3 from '@/assets/img/det3.jpg'
  
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';  
    // Import Swiper styles
    import 'swiper/css';  
    import 'swiper/css/zoom';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
  
    
  
    // import required modules
    import { Zoom, Navigation, Pagination } from 'swiper/modules';
    
    export default {
      data() {
      return {
        det1: det1,
        det2: det2,
        det3: det3,
        };
      },
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Zoom, Navigation, Pagination],
        };
      },
    };
  </script>
<style>
.mySwiper{
  width: 900px;
}
</style>
