<template>
    <div class="projects__items">
       <IndexComp v-for="item in projectCart" :key="item.id" :indexProj="item"/>
     
        </div>
</template>

<script>
import IndexComp from './IndexComp.vue';
import img1 from '@/assets/img/item1.jpg';
import img2 from '@/assets/img/item2.jpg';
import img3 from '@/assets/img/item3.jpg';
import img4 from '@/assets/img/item4.jpg';
export default {
    name: 'VueOurProjComp',
    data() {
        return {
            projectCart: [
                {
                    img: img1,
                    subtitle: 'Modern Kitchan',
                    text: 'Decor / Artchitecture',
                },
                {
                    img: img2,
                    subtitle: 'Modern Kitchan',
                    text: 'Decor / Artchitecture',
                },
                {
                    img: img3,
                    subtitle: 'Modern Kitchan',
                    text: 'Decor / Artchitecture',
                },
                {
                    img: img4,
                    subtitle: 'Modern Kitchan',
                    text: 'Decor / Artchitecture',
                }
            ]
        };
    },
    mounted() {
    },
    methods: {},
    components:{
        IndexComp,
    }
};
</script>

<style lang="scss" scoped>

</style>