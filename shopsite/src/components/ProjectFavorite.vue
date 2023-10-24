<template>
    <div class="center">
        здесь должны быть любимые проекты
        <!-- <BedroomComp v-for="item in favoriteArray" :key="item.id" :item="item" /> -->
        <ProjectBedroom v-for="item in favoriteArray" :key="item.id" :item="item"/>
    </div>
</template>

<script>
import BedroomComp from './BedroomComp.vue';
import ProjectBedroom from './ProjectBedroom.vue';

export default {
    name: 'VueProjectFavorite',
    props: {
        item: Object,
    },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    components:{
        BedroomComp,
        ProjectBedroom
}
};
</script>

<style lang="scss" scoped>

</style>