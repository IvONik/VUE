<template>
    <BedroomComp v-for="item in bathroomArray" :key="item.id" :item="item"/>
</template>

<script>
import img1 from '@/assets/img/bathroom1.jpeg';
import img2 from '@/assets/img/bathroom2.jpg';
import img3 from '@/assets/img/bathroom3.jpg';
import img4 from '@/assets/img/bathroom4.jpeg';
import BedroomComp from './BedroomComp.vue';
export default {
    name: 'VueProjectBathroom',

    data() {
        return {
            bathroomArray:[
                {   
                    img: img1,
                    title:'Minimal Bedroom',
                    breadCrumbs: 'Decor / Artchitecture',
                    favorite: false,
                },
                {   
                    img: img2,
                    title:'Minimal Bedroom',
                    breadCrumbs: 'Decor / Artchitecture',
                    favorite: false,
                },
                {   
                    img: img3,
                    title:'Minimal Bedroom',
                    breadCrumbs: 'Decor / Artchitecture',
                    favorite: false,
                },
                {   
                    img: img4,
                    title:'Minimal Bedroom',
                    breadCrumbs: 'Decor / Artchitecture',
                    favorite: false,
                },
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    components:{
        BedroomComp
    }
};
</script>

<style lang="scss" scoped>

</style>