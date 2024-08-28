<template>
    <router-link to="/project">
      <div class="projects__items__card_1" @click="changeTag">
        <img :src="indexProj.img" alt="interior" />
        <div class="projects__items__card__description">
          <div>
            <div class="projects__items__card__subtitle">
              {{ indexProj.subtitle }}
            </div>
            <div class="projects__items__card__text">{{ indexProj.text }}</div>
          </div>
          
          <div class="projects__items__card__svg">
            <svg
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
              <path
                d="M32 44L40 35L32 26"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          
        </div>
      </div>
    </router-link>
     
    
  </template>
  
  <script>
  export default {
    name: "VueIndexComp",
    props: {
      indexProj: Object,
    },
    // computed: {
    //   dynamicUrl() {
    //     return `/project/details/${encodeURIComponent(this.indexProj.tag)}`;
    //   }
    // },
    // methods:{
    //   changeTag(){
    //     this.$emit('tagSelected', this.indexProj.tag )
    //   }
    // }
  };
  </script>
  
  <style lang="scss" scoped></style>
  