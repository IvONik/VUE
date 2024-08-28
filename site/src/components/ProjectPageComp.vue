<template>
  <div class="topHead center">
    <img :src="ImageMainProject" alt="internoProject" />
    <div class="topHead__block">
      <div class="topHead__block__title">Our Project</div>
      <div class="topHead__block__text"></div>
    </div>
  </div>

  <div class="tags center">
    <div class="tags__box">
      <button
        v-for="item in TagsArray"
        :class="{'active': item === currentTag}"
        :key="item.id"
        @click="navigateToTag(item)"
      >
        {{ item }}
      </button>
    </div>
  </div>


  <div v-if="currentTag === 'Bed room'" class="box center">
    <ViewsCart :arr="bedroomArray" @addFavorite="addFavorite" />
  </div>
  <div v-if="currentTag === 'Kitchen'" class="box center">
    <ViewsCart :arr="kitchenArray" @addFavorite="addFavorite" />
  </div>
  <div v-if="currentTag === 'Bathroom'" class="box center">
    <ViewsCart :arr="bathroomArray" @addFavorite="addFavorite" />
  </div>
  <div v-if="currentTag === 'Living Area'" class="box center">
    <ViewsCart :arr="livingArray" @addFavorite="addFavorite" />
  </div>
  <div v-if="currentTag === 'favorite'" class="box center">
    <ViewsCart :arr="favoritsArray" @addFavorite="addFavorite" />
  </div>
</template>

<script>
import ImageMainProject from "@/assets/img/ImageMainProject.png";

import img1 from "@/assets/img/kitchen1.jpg";
import img2 from "@/assets/img/kitchen2.jpg";
import img3 from "@/assets/img/kitchen3.jpg";
import img4 from "@/assets/img/kitchen4.jpg";
import img5 from "@/assets/img/ProjectBedroom1.png";
import img6 from "@/assets/img/ProjectBedroom2.png";
import img7 from "@/assets/img/ProjectBedroom3.png";
import img8 from "@/assets/img/ProjectBedroom4.png";
import img9 from "@/assets/img/ProjectBedroom5.png";
import img10 from "@/assets/img/ProjectBedroomLong1.png";
import img11 from "@/assets/img/ProjectBedroomLong2.png";
import img12 from "@/assets/img/ProjectBedroomLong3.png";
import img13 from "@/assets/img/bathroom1.jpeg";
import img14 from "@/assets/img/bathroom2.jpg";
import img15 from "@/assets/img/bathroom3.jpg";
import img16 from "@/assets/img/bathroom4.jpeg";
import img17 from "@/assets/img/livingroom1.jpeg";
import img18 from "@/assets/img/livingroom2.jpg";
import img19 from "@/assets/img/livingroom3.jpg";
import img20 from "@/assets/img/livingroom4.jpg";
import ViewsCart from "./ViewsCart.vue";
import { useRoute } from 'vue-router';

export default {
  name: "VueProjectPageComp",
  props: {
    favorite: Object,
  },
  
  data() {
    return {
      ImageMainProject: ImageMainProject,
      TagsArray: ["Bed room", "Bathroom", "Kitchen", "Living Area", "favorite"],
      currentTag: "Bed room",
      // currentTag: this.$route.params.tag || "Bed room",
      nameLink: "Project",
      url: "/project/details",
      kitchenArray: [
        {
          id: 1,
          img: img1,
          title: "Minimal Living Room",
          breadCrumbs: "Decor / Artchitecture",
          favorite: false,
        },
        {
          id: 2,
          img: img2,
          title: "Minimal Living Room",
          breadCrumbs: "Decor / Artchitecture",
          favorite: false,
        },
        {
          id: 3,
          img: img3,
          title: "Minimal Living Room",
          breadCrumbs: "Decor / Artchitecture",
          favorite: false,
        },
        {
          id: 4,
          img: img4,
          title: "Minimal Living Room",
          breadCrumbs: "Decor / Artchitecture",
          favorite: false,
        },
      ],
      bedroomArray: [
        {
          id: 5,
          img: img5,
          title: "Minimal Bedroom",
          breadCrumbs: "Decor / Artchitecture",
          favorite: false,
        },
        {
          id: 6,
          img: img6,
          title: "Modern Bedroom",
          breadCrumbs: "Decor / Artchitecture",
          favorite: false,
        },
        {
          id: 7,
          img: img7,
          title: "Classic Minimal Bedroom",
          breadCrumbs: "Decor / Artchitecture",
          favorite: false,
        },
        {
          id: 8,
          img: img8,
          title: "Classic Minimal Bedroom",
          breadCrumbs: "Decor / Artchitecture",
          favorite: false,
        },
        {
          id: 9,
          img: img9,
          title: "Modern Bedroom",
          breadCrumbs: "Decor / Artchitecture",
          favorite: false,
        },
        {
          id: 10,
          img: img10,
          title: "System Table",
          breadCrumbs: "Decor / Artchitecture",
          favorite: false,
        },
        {
          id: 11,
          img: img11,
          title: "System Table",
          breadCrumbs: "Decor / Artchitecture",
          favorite: false,
        },
        {
          id: 12,
          img: img12,
          title: "System Table",
          breadCrumbs: "Decor / Artchitecture",
          favorite: false,
        },
      ],
      bathroomArray: [
        {
          id: 13,
          img: img13,
          title: "Minimal Bedroom",
          breadCrumbs: "Decor / Artchitecture",
          favorite: false,
        },
        {
          id: 14,
          img: img14,
          title: "Minimal Bedroom",
          breadCrumbs: "Decor / Artchitecture",
          favorite: false,
        },
        {
          id: 15,
          img: img15,
          title: "Minimal Bedroom",
          breadCrumbs: "Decor / Artchitecture",
          favorite: false,
        },
        {
          id: 16,
          img: img16,
          title: "Minimal Bedroom",
          breadCrumbs: "Decor / Artchitecture",
          favorite: false,
        },
      ],
      livingArray: [
        {
          id: 17,
          img: img17,
          title: "Minimal Living Room",
          breadCrumbs: "Decor / Artchitecture",
          favorite: false,
        },
        {
          id: 18,
          img: img18,
          title: "Minimal Living Room",
          breadCrumbs: "Decor / Artchitecture",
          favorite: false,
        },
        {
          id: 19,
          img: img19,
          title: "Minimal Living Room",
          breadCrumbs: "Decor / Artchitecture",
          favorite: false,
        },
        {
          id: 20,
          img: img20,
          title: "Minimal Living Room",
          breadCrumbs: "Decor / Artchitecture",
          favorite: false,
        },
      ],
      favoritsArray: [],
    };
  },
  mounted() {},
  methods: {
    addFavorite(item) {
      const isFavorite = this.favoritsArray.includes(item);
      if (!isFavorite) {
        this.favoritsArray.push(item);
        this.updateFavoriteStatus(item, true);
      } else {
        this.favoritsArray.splice(this.favoritsArray.indexOf(item), 1);
        this.updateFavoriteStatus(item, false);
      }
    },
    updateFavoriteStatus(item, status) {
    const arrays = [this.kitchenArray, this.bedroomArray, this.bathroomArray, this.livingArray];
    arrays.forEach(array => {
      const foundItem = array.find(i => i.id === item.id);
      if (foundItem) {
        foundItem.favorite = status;
      }
    });
  },
  navigateToTag(tag) {
    this.currentTag = tag;
      // this.$router.push({ name: 'Project', params: { tag } });
    }
  },
  components: {
    ViewsCart,
  },
  
  // watch: {
  //   '$route.params.tag': function(newTag) {
  //     this.currentTag = newTag;
  //   }
  // },
  computed: {},
};
</script>

<style lang="scss" scoped>
.box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(525px, 1fr));
  gap: 104px;
}
.tags {
  display: flex;
  justify-content: center;
  margin-bottom: 42px;
  
  &__box {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #cda274;
    border-radius: 18px;
  }
}
button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  display: flex;
  justify-content: center;
  padding: 26px 66px;
  align-items: center;
  gap: 10px;
}
button:hover {
  background-color: #cda274;
  color: white;
  border-radius: 18px;
  transition: 0.5s;
}
.active{
  background-color: #cda274;
  border-radius: 18px;
}
</style>
