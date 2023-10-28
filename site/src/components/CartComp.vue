<template>
    <div class="news center">
        <div v-for="item in cartArray" :key="item.id">
            <div class="news__products__item">
        
            <a href="#"><img :src="item.img" alt="interio"></a>
            <div class="news__products__item__title" >{{item.title}}</div>
            <div class="news__products__option">
                <div class="news__products__option__date">{{item.date}}</div>
                <a href="#">
                <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
                    <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </a>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
// import logo from '@/assets/img/Logo.jpg';
import img1 from '@/assets/img/Image.png';
import img2 from '@/assets/img/Image (1).png';
import img3 from '@/assets/img/Image (2).png';
import img4 from '@/assets/img/Image4.jpg';
import img5 from '@/assets/img/Image5.jpg';
import img6 from '@/assets/img/Image6.jpg';

export default {
    name: 'VueCart',

    data() {
        return {
            cartArray: [
                {   
                    img: img1,
                    title:'Let’s Get Solution For Building Construction Work',
                    date: '26 декабря 2023 год',
                },
                {   
                    img: img2,
                    title:'Let’s Get Solution For Building Construction Work',
                    date: '26 декабря 2023 год',
                },
                {   
                    img: img3,
                    title:'Let’s Get Solution For Building Construction Work',
                    date: '26 декабря 2023 год',
                },
                {   
                    img: img4,
                    title:'Let’s Get Solution For Building Construction Work',
                    date: '26 декабря 2023 год',
                },
                {   
                    img: img5,
                    title:'Let’s Get Solution For Building Construction Work',
                    date: '26 декабря 2023 год',
                },
                {   
                    img: img6,
                    title:'Let’s Get Solution For Building Construction Work',
                    date: '26 декабря 2023 год',
                },
                
            ],
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.news{
    display: grid;        
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 16px;
}
</style>