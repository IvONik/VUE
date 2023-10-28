<template>
    <HeaderComp/>
    <div class="topHead center">
        <img :src="ImageMainProjectDetails" alt="project">
    </div>
    <div class=" content center">
      <div class="topHead__block__title">{{ title}}</div> 
      <div class="articles__block__text">{{text}}</div>
       
    </div>
    <SwiperComp/>
    <FooterComp/>
</template>

<script>
import ImageMainProjectDetails from '@/assets/img/imgMainProjectDet.jpg';
import HeaderComp from '@/components/HeaderComp.vue';
import SwiperComp from '@/components/SwiperComp.vue';
import FooterComp from '@/components/FooterComp.vue';


import { mapState } from 'vuex';

export default {
    name: 'VueProjectDetailsPage',
    data() {
        return {
            ImageMainProjectDetails: ImageMainProjectDetails,
        };
    },
    
    methods: {},
    components: { 
        HeaderComp,
        SwiperComp,
        FooterComp
     },
    computed:{
        ...mapState(['title', 'text'])
    }
};
</script>

<style lang="scss" scoped>
.content{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
}

.articles__block__text{
    max-width: 900px;
    margin-top: 16px;
}
</style>
