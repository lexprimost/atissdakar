<template>
    <div>
    <slick
      class="homeExpoB show-for-medium"
      ref="slick"
      :options="slickOptions"
    >

        <div v-for="(artwork, index) of artworks" :key="index" class=" inline-flex flex-col space-y-3 items-center justify-end" v-viewer >
          <img class="shadow artwork-img cursor-pointer "  :src="artwork.image"     />
          <p class="text-xs tracking-widest font-light leading-snug text-center upercase">{{artwork.name}} <br /><span class="text-gray-500">{{artwork.size}}</span></p>
        </div>
   
    </slick>

    </div>
</template>

<script>
import Slick from "vue-slick";
import "slick-carousel/slick/slick-theme.scss";
export default {
    components: {
        Slick,
    },
    props: {

        artworks: {
            type: Array,
        },
        to: {
            type: String,
            default: () => ""
        }
    },
    

  data() {
    return {
      slickOptions: {
        slidesToShow: 6,
        // autoplay: true,
        //slidesToScroll: 3,
        dots: true,
        arrows: true,
        adaptiveHeight: true,
       // variableWidth: true,
        infinite: false,
        // settings: "unslick"
        // Any other options that can be got from plugin documentation
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
            centerMode: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
      },
    };
  },

methods: {
   show(artworks) {
   console.log(artworks);
   // return array  of image from this artworks parameter to pass it to the viewer
   const imageArtworks = artworks.map((artwork) => artwork.image);
      console.log(imageArtworks);
      this.$viewerApi({
       images: imageArtworks,
      })
    },
  }
}
</script>

<style lang="scss" >
@import "node_modules/slick-carousel/slick/slick.css";
@import "node_modules/slick-carousel/slick/slick-theme.css";

 /* the slides */
  .slick-slide {
      margin: 0 27px;
  }

  /* the parent */
  .slick-list {
      margin: 0 -27px;
  }

  .artwork-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  //  cursor: pointer;
    display: block;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  }
</style>