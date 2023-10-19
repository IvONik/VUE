<template>
    <div>
        <div class="articles center">
    <div class="articles__block">
      <div class="articles__block__title">{{title}}</div>
      <img :src="image1" alt="design">
      <div class="articles__block__date">{{date}}</div>
      <div class="articles__block__text">{{text}}</div>
        <ul class="articles__block__text">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eligendi.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eligendi.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
        </ul>
    </div>
    
  </div>
    </div>
</template>

<script>
import image1 from '@/assets/img/Photo_bedroom.jpg'
export default {
    name: 'VueArticleKitchenPlanning',

    data() {
        return {
            title: 'Thoughtful and comfortable',
            image1: image1,               
            date: '26.12.2023',
            breadCrumbs: '',
            text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular   belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.                    Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
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