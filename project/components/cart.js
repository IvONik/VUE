const cart = {
    data() {
        return {
            cartArray: [
                {   
                    img: 'img/Image.png',
                    title:'Let’s Get Solution For Building Construction Work',
                    date: '26 декабря 2023 год',
                },
                {   
                    img: 'img/Image (1).png',
                    title:'Let’s Get Solution For Building Construction Work',
                    date: '26 декабря 2023 год',
                },
                {   
                    img: 'img/Image (2).png',
                    title:'Let’s Get Solution For Building Construction Work',
                    date: '26 декабря 2023 год',
                },
                {   
                    img: 'img/Image4.jpg',
                    title:'Let’s Get Solution For Building Construction Work',
                    date: '26 декабря 2023 год',
                },
                {   
                    img: 'img/Image5.jpg',
                    title:'Let’s Get Solution For Building Construction Work',
                    date: '26 декабря 2023 год',
                },
                {   
                    img: 'img/Image6.jpg',
                    title:'Let’s Get Solution For Building Construction Work',
                    date: '26 декабря 2023 год',
                },
                
            ],
        };
    },
    methods: {
        name() {
            
        },
    },
    template: `
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
  `,
}