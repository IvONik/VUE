<template>
    <div class="block">
        <div v-for="item in product" :key="item.id" class="box">
            <h2>{{ item.name }}</h2>
            <h2>{{ item.model }}</h2>
            <h2>{{ formattedPrice}}</h2>
        
                <div v-if="item.available==='true'">
                    <h2>Available</h2>
                </div>
                <div v-else>
                    <h2 >Out of stock</h2>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VueProductDetails',

    data() {
        return {
            product:[
                {
                    name: 'audi',
                    model: 'a7',
                    price: 100000,
                    available: 'false',
                },
                {
                    name: 'WV',
                    model: 'polo',
                    price: 70000,
                    available: 'true',
                },
                {
                    name: 'BMW',
                    model: 'X5',
                    price: 100500,
                    available: 'false',
                },

            ],

        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    computed:{
        formattedPrice(){
            return `${this.product.price} $`;
        }
    }
};
</script>

<style lang="scss" scoped>
.block{
    display: flex;
    justify-content: center;
    gap: 16px;
}
.box{
    // display: flex;
    width: 300px;
    height: 300px;
    border: 1px solid black;
    }
</style>