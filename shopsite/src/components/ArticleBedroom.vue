<template>
    <div>
        <div class="articles center">
        <div class="articles__block">
        <div class="articles__block__title">{{title}}</div>
        <img :src="image1" alt="design">
        <div class="articles__block__date">{{date}}</div>
        <div class="articles__block__text">{{text}}</div>
    </div>
    
  </div>
    </div>
</template>

<script>
import image1 from '@/assets/img/Photo_bedroom.jpg'
export default {
    name: 'VueArticleBedroom',

    data() {
        
        return {
            title: 'Design sprints are great',
            image1: image1,                    
            date: '26.12.2023',
            breadCrumbs: '',
            text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br>  ",
            TagsArray: ['Kitchen', 'Bedroom', 'Building', 'Kitchen_Planning'],
            currentTag: 'Kitchen',
            
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