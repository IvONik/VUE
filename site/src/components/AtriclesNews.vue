<template>
    <div>
        <div class="topHead center">   
             <img :src="imageMainArticles" alt="">        
            <div class="topHead__block">
                
            <div class="topHead__block__title">Articles & News</div>
            </div>
        </div>
        <section>
            <div class="info center">
                <div class="info__title">Latest Post</div>
                <div class="info__block">
                    <div class="info__block__img">
                        <router-link to="/project/details">
                            <img :src="imageInfoBlock" alt="lastProject">   
                        </router-link>
                                           
                    </div>
                    <div class="info__block__content">
                        <div class="info__block__content__title">Low Cost Latest Invented Interior Designing Ideas</div>
                        <div class="info__block__content__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.<br>
                        Lorem Ipsum is not simply random text. It has roots in a piece of classica.</div>
                        <div class="info__block__content__date">26.12.2013 
                            <router-link to="/project/details">
                                <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="26" cy="26.5" r="26" fill="#F4F0EC"/>
                                <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </router-link>
                            
                       
                            </div>
                    </div>    
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import imageMainArticles from '@/assets/img/Image_laceholder.jpg';
import imageInfoBlock from '@/assets/img/info_block.png';
export default {
    name: 'VueAtriclesNews',

    data() {
        return {
            imageMainArticles: imageMainArticles,
            imageInfoBlock: imageInfoBlock,
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