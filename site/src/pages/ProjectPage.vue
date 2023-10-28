<template>
    <HeaderComp/>
    <ProjectPageComp/>
    <FooterComp/>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import ProjectPageComp from '@/components/ProjectPageComp.vue'


import FooterComp from '@/components/FooterComp.vue'


export default {
    name: 'VueProjectPage',

    data() {
        return {
            
        };
    },


    methods: {
        
    },
    components:{
        HeaderComp,
        ProjectPageComp,
        FooterComp,
    }
};
</script>

<style lang="scss" scoped>

</style>