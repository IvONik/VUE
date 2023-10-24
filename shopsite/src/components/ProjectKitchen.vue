<template>
    <BedroomComp v-for="item in kitchenArray" :key="item.id" :item="item"/>
</template>

<script>
import img1 from '@/assets/img/kitchen1.jpg';
import img2 from '@/assets/img/kitchen2.jpg';
import img3 from '@/assets/img/kitchen3.jpg';
import img4 from '@/assets/img/kitchen4.jpg';
import BedroomComp from './BedroomComp.vue';
export default {
    name: 'VueProjectKitchen',

    data() {
        return {
            kitchenArray:[
                {   
                    img: img1,
                    title:'Minimal Kitchen',
                    breadCrumbs: 'Decor / Artchitecture',
                    favorite: false,
                },
                {   
                    img: img2,
                    title:'Minimal Kitchen',
                    breadCrumbs: 'Decor / Artchitecture',
                    favorite: false,
                },
                {   
                    img: img3,
                    title:'Minimal Kitchen',
                    breadCrumbs: 'Decor / Artchitecture',
                    favorite: false,
                },
                {   
                    img: img4,
                    title:'Minimal Kitchen',
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
        BedroomComp,
    }
};
</script>

<style lang="scss" scoped>

</style>