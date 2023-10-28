<template>
    <HeaderComp/>
    <AtriclesNews/>
<CartComp/>
<FooterComp/>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import AtriclesNews from '@/components/AtriclesNews.vue'
import CartComp from '@/components/CartComp.vue'

import FooterComp from '@/components/FooterComp.vue'


export default {
    name: 'VueBlogPage',

    data() {
        return {
            
        };
    },


    methods: {
        
    },
    components:{
        HeaderComp,
        AtriclesNews,
        CartComp,
        FooterComp,
    }
};
</script>

<style lang="scss" scoped>

</style>