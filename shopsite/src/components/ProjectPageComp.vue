<template>
    <div class="topHead center">   
        <img :src="ImageMainProject" alt="internoProject">        
        <div class="topHead__block">                
            <div class="topHead__block__title">Our Project</div>
            <div class="topHead__block__text"><a href="index.html">Home</a> / <a href="#">Project</a></div>
        </div>
    </div>
        
        <div class="tags center">
            <div class="tags__box">
                <button v-for="item in TagsArray" :key="item.id" @click="currentTag = item">{{ item }}
                </button>
          </div>
    </div>          
              
                    <div v-if="currentTag==='Bed room'"><ProjectBedroom/></div>
                    <div v-if="currentTag==='Bathroom'"><ProjectBathroom/></div>
                    <div v-if="currentTag==='Kitchen'"><ProjectKitchen/> </div>
                    <div v-if="currentTag==='Living Area'"><ProjectLivingArea/></div>
                
    
             
</template>

<script>
import ImageMainProject from '@/assets/img/ImageMainProject.png';
import ProjectBedroom from './ProjectBedroom.vue';
import ProjectBathroom from './ProjectBathroom.vue';
import ProjectKitchen from './ProjectKitchen.vue';
import ProjectLivingArea from './ProjectLivingArea.vue';


export default {
    name: 'VueProjectPageComp',
    props:{
        favorite: Object,
    },
    data() {
        return {
            ImageMainProject: ImageMainProject,
            TagsArray: ['Bed room', 'Bathroom', 'Kitchen', 'Living Area', 'favorite'],
            currentTag: 'Bed room',
        };
    },
    mounted() {
    },
    methods: {},
    components: { ProjectBedroom, ProjectBathroom, ProjectKitchen, ProjectLivingArea },
    computed:{
                
    }
};
</script>

<style lang="scss" scoped>
.tags{
    display: flex;
    justify-content: center;
        &__box{
            display: flex;            
            justify-content: center;
            align-items: center;            
            border: 1px solid #CDA274 ;
            border-radius: 18px;            
        }  
}
button{
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
    display: flex;
    justify-content: center;   
    padding: 26px 66px;    
    align-items: center;
    gap: 10px;    
}
button:hover{
    background-color:  #CDA274;
    color: white;
    border-radius: 18px;
    transition: 0.5s;
}
</style>