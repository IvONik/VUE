<template>
    <div class="topHead center">   
        <img :src="ImageMainProject" alt="internoProject">        
        <div class="topHead__block">                
            <div class="topHead__block__title">Our Project</div>
            <div class="topHead__block__text">
                <!-- <router-link :to="homeUrl">Home</router-link> -->
                <a href="index.html">Home</a> / <a href="#">Project</a>
            </div>
        </div>
    </div>
        
        <div class="tags center">
            <div class="tags__box">
                <button v-for="item in TagsArray" :key="item.id" @click="currentTag = item"> {{ item }}
                </button>
                
            </div>
        </div>
        
          <div>
              <h2 class="center">
                  <router-link :to="url">Details</router-link>
              </h2>
          </div>
    
              
                    <div v-if="currentTag==='Bed room'" class="box center"><ProjectBedroom /></div>
                    <div v-if="currentTag==='Bathroom'" class="box center"><ProjectBathroom /></div>
                    <div v-if="currentTag==='Kitchen'" class="box center"><ProjectKitchen/> </div>
                    <div v-if="currentTag==='Living Area'" class="box center"><ProjectLivingArea/></div>
                    <!-- <div v-if="currentTag==='favorite'"><ProjectFavorite/></div> -->
    
             
</template>

<script>
import ImageMainProject from '@/assets/img/ImageMainProject.png';
// import ProjectBedroom from './ProjectBedroom.vue';
import ProjectBedroom from '@/components/ProjectBedroom.vue';
import ProjectBathroom from '@/components/ProjectBathroom.vue';
import ProjectKitchen from '@/components/ProjectKitchen.vue';
import ProjectLivingArea from '@/components/ProjectLivingArea.vue';
import ProjectDetailsPage from '@/pages/ProjectDetailsPage.vue';

// import ProjectFavorite from './ProjectFavorite.vue';


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
            nameLink: 'Project',
            url: '/project/details'
        };
    },
    mounted() {
    },
    methods: {},
    components: { ProjectBedroom, ProjectBathroom, ProjectKitchen, ProjectLivingArea, ProjectDetailsPage },
    computed:{
                
    }
};
</script>

<style lang="scss" scoped>
.box{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(525px, 1fr));
    gap: 104px;
}
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