<template>
    <div>
        <ProjectBedroom v-for="item in items" :key="item.id"/>
    </div>
</template>

<script>
import ProjectBedroom from './ProjectBedroom.vue';

export default {
    name: 'VueProjectFavorite',
    props: Object,
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    components:{
    ProjectBedroom
}
};
</script>

<style lang="scss" scoped>

</style>