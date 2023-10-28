<template>
    <div class="projects__items__card_1">
             <a href="#"> <img :src="indexProj.img" alt="interior" /></a>
             <div class="projects__items__card__description">
                 <div>
                     <div class="projects__items__card__subtitle">{{ indexProj.subtitle }}</div>
                     <div class="projects__items__card__text"> {{ indexProj.text }}</div>
                 </div>
                 <a href="№">
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
                 </a>
             </div>
         </div>
        




</template>

<script>
export default {
 name: 'VueIndexComp',
 props:{
     indexProj: Object
 },
 data() {
     return {
         
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