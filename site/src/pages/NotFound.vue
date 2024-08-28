<template>
    <div class="notfound center">
        <div class="notfound__content">
            <h1 class="notfound__title">404</h1>
            <p class="notfound__text">We are sorry, but the page
                you requested was not found</p>
                <button class="top__content__button">
                Get Started
                <svg
                  width="19"
                  height="17"
                  viewBox="0 0 19 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                    stroke="#CDA274"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                </svg>
                </button>
        </div>
          
          <img :src="img" alt="notFound" class="img">
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import img from '@/assets/img/notfound.png'
export default {
    name: 'VueNotFound',

    data() {
        return {            
            img: img,
        };
    },
    };      
</script>

<style lang="scss" scoped>
.notfound{
    display: flex;
    gap: 40px;
    &__title{
        color: #CDA274;
        font-family: DM Serif Display;
        font-size: 250px;
        font-style: normal;
        font-weight: 400;
    }
    &__text{
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 35px;
        font-style: normal;
        font-weight: 400;
        margin-bottom: 30px;
    }
    &__content{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        
    }
}
.img{
    width: 50%;
}

</style>