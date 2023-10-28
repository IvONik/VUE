<template>
 <HeaderComp/> 

 <div class="top center">
    <img :src="banner" alt="designUnique">
        <div class="top__content">
          <h2 class="top__content__title">
            Let Your Home <br />
            Be Unique
          </h2>
          <p class="top__content__text">
            There are many variations of the passages of lorem Ipsum
            fromavailable, majority.
          </p>
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
  </div>

  <section class="projects center">
        <div class="projects__header">
          <h2 class="projects__header__title">Follow Our Projects</h2>
          <p class="projects__header__text">
            It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts points.
          </p>
        </div>
        <OurProjComp/>              
  </section> 

  <div class="quantity">
        <div class="quantity__box center">
          <div class="quantity__item">
            <div class="quantity__item__numbers">12</div>
            <div class="quantity__item__text">Years Of Experiance</div>
          </div>
          <div class="quantity__item">
            <div class="quantity__item__numbers">85</div>
            <div class="quantity__item__text">Success Project</div>
          </div>
          <div class="quantity__item">
            <div class="quantity__item__numbers">15</div>
            <div class="quantity__item__text">Active Project</div>
          </div>
          <div class="quantity__item">
            <div class="quantity__item__numbers">95</div>
            <div class="quantity__item__text">Happy Customers</div>
          </div>
        </div>
  </div>
 
  <div class="projects__header">
    <h2 class="projects__header__title">Articles & News</h2>
    <p class="projects__header__text">
            It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.
    </p>
  </div>                 
  
  <CartComp/>

  <FooterComp/>
</template>

<script>

import HeaderComp from '@/components/HeaderComp.vue'
import banner from '@/assets/img/banner.png'
import OurProjComp from '@/components/OurProjComp.vue'
import CartComp from '@/components/CartComp.vue'
import FooterComp from '@/components/FooterComp.vue'



export default {
  name: 'HomeView',
  data() {
    return {
      banner: 'banner',
    };
  },
  components: {
    HeaderComp,
    OurProjComp,
    CartComp,
    FooterComp,
  }
}
</script>
