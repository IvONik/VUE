<template>
    <nav class="nav center">
        <div class="nav__left">          
          
          <router-link :to="linkArray[0].url"><img :src="logo" alt=""></router-link>
          <router-link :to="linkArray[0].url">Interno</router-link>
        </div>
        <div class="nav__right">
            <router-link v-for="item in linkArray" :key="item.id" :to="item.url">{{ item.nameLink }}</router-link>
         
        </div>
      </nav>
</template>

<script>
import logo from '@/assets/img/Logo.jpg';
export default {
    name: 'HeaderComp',

    data() {
        return {
            logo: logo,
            linkArray:[
                {
                    id:1,
                    nameLink: 'Home',
                    url: '/'
                },
                {
                    id:2,
                    nameLink: 'Project',
                    url: '/project'
                },
                {
                    id:3,
                    nameLink: 'Blog',
                    url: '/blog'
                },
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>