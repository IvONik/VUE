const articleBedroom = {
    data() {
        return {
            // title: 'Bedroom and Light',
            title: 'Design sprints are great',
            img: 'img/Photo_bedroom.jpg',                    
            date: '26.12.2023',
            breadCrumbs: '',
            text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br>  ",
            TagsArray: ['Kitchen', 'Bedroom', 'Building', 'Kitchen_Planning'],
            currentTag: 'Kitchen',
        };
    },
    
    template: 
    `<div class="articles center">
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


