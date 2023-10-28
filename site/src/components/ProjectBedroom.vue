<template>
    
    <BedroomComp v-for="item in imageArray" :key="item.id" :item="item" @click="addFavoriteItem(item)" />
   
</template>

<script>

import img1 from '@/assets/img/ProjectBedroom1.png';
import img2 from '@/assets/img/ProjectBedroom2.png';
import img3 from '@/assets/img/ProjectBedroom3.png';
import img4 from '@/assets/img/ProjectBedroom4.png';
import img5 from '@/assets/img/ProjectBedroom5.png';
import img6 from '@/assets/img/ProjectBedroomLong1.png';
import img7 from '@/assets/img/ProjectBedroomLong2.png';
import img8 from '@/assets/img/ProjectBedroomLong3.png';
import BedroomComp from './BedroomComp.vue';

export default {
    name: 'VueProjectBedroom',

    data() {
        return {
            imageArray:[
                {   
                    img: img6,
                    title:'Minimal Bedroom',
                    breadCrumbs: 'Decor / Artchitecture',
                    favorite: false,
                },
                {   
                    img: img1,
                    title:'Modern Bedroom',
                    breadCrumbs: 'Decor / Artchitecture',
                    favorite: false,
                },
                {   
                    img: img2,
                    title:'Classic Minimal Bedroom',
                    breadCrumbs: 'Decor / Artchitecture',
                    favorite: false,
                },
                {   
                    img: img7,
                    title:'Classic Minimal Bedroom',
                    breadCrumbs: 'Decor / Artchitecture',
                    favorite: false,
                },
                {   
                    img: img3,
                    title:'Modern Bedroom',
                    breadCrumbs: 'Decor / Artchitecture',
                    favorite: false,
                },
                {   
                    img: img4,
                    title:'System Table',
                    breadCrumbs: 'Decor / Artchitecture',
                    favorite: false,
                },
                {   
                    img: img8,
                    title:'System Table',
                    breadCrumbs: 'Decor / Artchitecture',
                    favorite: false,
                },
                {   
                    img: img5,
                    title:'System Table',
                    breadCrumbs: 'Decor / Artchitecture',
                    favorite: false,
                },
            ],
            favoriteArray: [],
        };
    },


    methods: {
       
        addFavoriteItem(item){
            this.favoriteArray.push(item)
        }
    },
    computed:{
        
    },
    components:{    
        BedroomComp,
}
};
</script>

<style lang="scss" scoped>
.box{
    display: grid;
}
</style>