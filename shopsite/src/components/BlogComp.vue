<template>
    <div>
        <div class="top__img center">
        <img :src="ImageMainBlog" alt="">
    </div>
    <div class="articles__tag center">
            <div class="articles__tag__title">Tags</div>
              <button class="articles__tag__button" @click="currentTag = item" v-for="item in TagsArray" :key="item.id">{{item}}</button>
          </div>
          <div v-if="currentTag==='Kitchen'"><ArticlesKitchenVue/></div>
          <div v-if="currentTag==='Bedroom'"><ArticleBedroom/></div>
          <div v-if="currentTag==='Building'"><ArticleBuildingVue/></div>
          <div v-if="currentTag==='Kitchen_Planning'"><ArticleKitchen_PlanningVue/></div>

          <component :is="changeTag"></component>          
          
 
        
    </div>
</template>

<script>
import ImageMainBlog from '@/assets/img/Image_blog_laceholder.jpg';
import ArticleBedroom from './ArticleBedroom.vue';
import ArticleBuildingVue from './ArticleBuilding.vue';
import ArticleKitchen_PlanningVue from './ArticleKitchen_Planning.vue';
import ArticlesKitchenVue from './ArticlesKitchen.vue';
import BlogComp from './BlogComp.vue';
export default {
    name: 'VueBlogComp',

    data() {
        return {
            ImageMainBlog: ImageMainBlog,
            TagsArray: ['Kitchen', 'Bedroom', 'Building', 'Kitchen_Planning'],
            currentTag: 'Kitchen',
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    components:{
        ArticleBuildingVue,
        ArticleKitchen_PlanningVue,
        ArticlesKitchenVue,
        ArticleBedroom,
        BlogComp,
    },
    computed:{
                  changeTag(){
                    return  `Article${this.currentTag}`;
                  }
              }
};
</script>

<style lang="scss" scoped>

</style>