<template>
    <div class="topHead center">
        <img :src="ImageMainProjectDetails" alt="project">
    </div>
    <div class=" content center">
      <div class="topHead__block__title">{{ title}}</div> 
      <div class="articles__block__text">{{text}}</div>
       
    </div>
    <SwiperComp/>
</template>

<script>
import ImageMainProjectDetails from '@/assets/img/imgMainProjectDet.jpg';
import SwiperComp from '@/components/SwiperComp.vue';
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
        SwiperComp,
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
