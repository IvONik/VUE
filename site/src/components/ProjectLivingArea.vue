<template>
    <BedroomComp v-for="item in kitchenArray" :key="item.id" :item="item"/>
</template>

<script>
import img1 from '@/assets/img/livingroom1.jpeg';
import img2 from '@/assets/img/livingroom2.jpg';
import img3 from '@/assets/img/livingroom3.jpg';
import img4 from '@/assets/img/livingroom4.jpg';
import BedroomComp from './BedroomComp.vue';
export default {
    name: 'VueProjectLivingArea',

    data() {
        return {
            kitchenArray:[
                {   
                    img: img1,
                    title:'Minimal Living Room',
                    breadCrumbs: 'Decor / Artchitecture',
                    favorite: false,
                },
                {   
                    img: img2,
                    title:'Minimal Living Room',
                    breadCrumbs: 'Decor / Artchitecture',
                    favorite: false,
                },
                {   
                    img: img3,
                    title:'Minimal Living Room',
                    breadCrumbs: 'Decor / Artchitecture',
                    favorite: false,
                },
                {   
                    img: img4,
                    title:'Minimal Living Room',
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