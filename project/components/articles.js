// const articles = {
//     data() {
//         return {
//             articlesArray: [
//                 {
//                     title: 'Let’s Get Solution for Building Construction Work',
//                     img: 'img/articleImage.jpg',                    
//                     date: '26.12.2023',
//                     breadCrumbs: '',
//                     text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular   belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.                    Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
//                     tag: 'Kitchen',
//                 },
//                 {
//                     title: 'Design sprints are great',
//                     img: 'img/articleImg2.jpg',                    
//                     date: '26.12.2023',
//                     breadCrumbs: '',
//                     text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br>  ",
//                     tag: 'Kitchen',
//                 },
//                 {
//                     title: 'Bedroom and Light',
//                     img: 'img/Image (2).png',                    
//                     date: '26.12.2023',
//                     breadCrumbs: '',
//                     text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular   belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.                    Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
//                     tag: 'Bedroom',
//                 },
//                 {
//                     title: 'We are building forever',
//                     img: 'img/item4.jpg',                    
//                     date: '26.12.2023',
//                     breadCrumbs: '',
//                     text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular   belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.                    Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
//                     tag: 'Building',
//                 },
//                 {
//                     title: 'comfortable layout',
//                     img: 'img/Image (2).png',                    
//                     date: '26.12.2023',
//                     breadCrumbs: '',
//                     text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular   belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.                    Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
//                     tag: 'Kitchen Planning',
//                 },
//             ],
//             tagArray:['Kitchen', 'Bedroom', 'Building', 'Kitchen Planning'],
//             currentTag: 'Kitchen',
//             };
//             },
//             methods: {
//                 findTag() {
//                     this.currentTag = 'item';
//                     this.articlesArray = this.articlesArray.filter(el => el.tag === 'this.currentTag');
//                 },
//                 changeTag(){
//                     return  this.currentTag;
//                 }
//     // computed:{
//     //      changeTag(){
//     //         return  this.currentTag;
//     //     }
//     // }   
//     },
//     template: `
//     <div class="center">
//     <button @click="findTag()"  v-for="item in this.tagArray" :key="item.id">{{item}}</button>
    
    
//     <div v-for="item in articlesArray" :key="item.id">
    
//         <div class="articles center" >
//                 <div class="articles__title">{{item.title}}</div>
//                 <img :src="item.img" alt="design">
//                 <div class="articles__date">{{item.date}}</div>
//                 <div class="articles__text">{{item.text}}</div>
//         </div>
//     </div>
//     `,
// }

const articleKitchen = {
    data() {
        return {
            title: 'Let’s Get Solution for Building Construction Work',
            img: 'img/articleImage.jpg',                    
            date: '26.12.2023',
            breadCrumbs: '',
            text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular   belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.                    Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            TagsArray: ['Kitchen', 'Bedroom', 'Building', 'Kitchen_Planning'],
            currentTag: 'Kitchen',
        };
    },
    
    template:  `
    <div class="articles center">
    <div class="articles__block">
      <div class="articles__block__title">{{title}}</div>
      <img :src="img" alt="design">
      <div class="articles__block__date">{{date}}</div>
      <div class="articles__block__text">{{text}}</div>
    </div>
    
  </div>`
}

// <div class="articles__tag">
    //   <div class="articles__tag__title">Tags</div>
    //   <button class="articles__tag__button" @click="currentTag = item" v-for="item in TagsArray" :key="item.id">{{item}}</button>
    // </div>



