<!-- <template>
    <div class="images center">
        <div class="images__box">
            <div>
                <svg class="image__favirite "  
                @click="changeColor"
                :style="{background: active ? '#FFA928':'white'}"
    width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_993_156)">
                <path d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z" fill="#fff"/>
                </g>
                <defs>
                <filter id="filter0_d_993_156" x="0.186424" y="0.431396" width="35.6271" height="34.3619" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_993_156"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_993_156" result="shape"/>
                </filter>
                </defs>
                </svg>
                <img :src="bedroom.img" alt="img">
            
                <div class="news__products__item__title">{{ bedroom.title}}</div>
                <div class="news__products__option__date"></div> {{ bedroom.breadCrumbs }}
             <div><button @click="addFavorite(bedroom)">добавить в избранное</button> </div>  
            </div>
            
        </div>
    </div>
</template> -->
<template>
    <div class="images center">
        <div class="images__box">
            <div>
                <svg class="image__favirite "  
                @click="changeColor"
                :style="{background: active ? '#FFA928':'white'}"
    width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_993_156)">
                <path d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z" fill="#fff"/>
                </g>
                <defs>
                <filter id="filter0_d_993_156" x="0.186424" y="0.431396" width="35.6271" height="34.3619" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_993_156"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_993_156" result="shape"/>
                </filter>
                </defs>
                </svg>
                <img :src="item.img" alt="img">
            
                <div class="news__products__item__title">{{ item.title}}</div>
                <div class="news__products__option__date"></div> {{ item.breadCrumbs }}
             <!-- <button @click="addFavorite(item)">добавить в избранное</button>    -->
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    name: 'VueBathroomComp',
    emets: ['addFavorite'],
    props: {
        bedroom: Object,
        item: Object,
    },
    data() {
        return {
            active: false,
            favoriteArray:[],
        };
    },

    mounted() {
        
    },

    methods: {
        changeColor(){
            this.active = !this.active;           
        },
        addFavorite(item){
            this.favoriteArray.push(item)
        }
    },
};
</script>

<style lang="scss" scoped>
.images{
    margin-top: 61px;
 
    &__box{
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        margin-bottom: 20px;
    }

    &__title{
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
    }
    &__breadCrumbs{
        color: #4D5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
    }
.image{
    position: relative;

    &__favirite{
        position: absolute;        
    }
    
}


}
</style>