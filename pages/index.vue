<template>
  <section>

    <Tutorial />
    <Desk />
    <section class="flex justify-center mt-12 mb-12">
      <div class="sm:w-2/3 mx-6">
        <p class="text-base leading-7 sm:text-center font-light ">We invite you to explore our website and discover the
          extraordinary
          talent within our artist portfolio. Join us on this artistic journey as we celebrate the power, beauty, and
          significance of African art in the global contemporary art landscape.</p>
      </div>
    </section>

    <section class="mx-auto max-w-8xl sm:px-0 px-6 lg:mt-20">
      <div class="lg:inline-flex md:space-x-10 space-y-10 items-center  w-full ">
        <img src="https://galerieatissdakar.com/wp-content/uploads/Artists/Ngimbi/profilephoto-600x900.jpg" alt="Description de l'image" class="lg:w-96 md:w-full sm:w-full ">

        <div class="w-full">
          <div class="flex flex-col space-y-4 items-start justify-start">
            <p class="text-3xl font-light tracking-widest leading-9 text-gray-900 uppercase">Ngimbi Bakambana Luve</p>
            <p class="text-sm font-light    leading-snug text-gray-500">Ngimbi Bakambana Luve was born in Kinshasa, DRC,
              in 1977 and
              trained at the Academy of Fine Arts, Kinshasa.<br />He also received musical training at the Conservatoire
              de Nanterre, France. Bakambana is one of the first of his generation to have exhibited with the «masters» of
              Congolese art, such as Mavinga, the conductor of the Kinshasa City Orchestra.<br /><br />In his
              expressionist approach to art,Bakambana uses color to express what words express in verbal communication. He
              draws on the social context of his native Congo to express his thoughts and understanding of the world
              through color. Bakambana’s paintings are a form of pictorial sociology of the SAPE culture centered on the
              two Congos, and reminiscent of the past. In the difficult context of war and hardship, Sapology offers a
              window of hope and joy, of rehabilitating oneself through fabrics and fashion that are worn to be
              seen.<br /><br />It is a sort of social exorcism characterised by eccentricity. Bakambana pays close
              attention to the line and anamorphosis of forms and defends Kongo art; which he considers to be a spiritual
              art, whose particularity is to link gesture and intention in the work. He does not conceive any boundaries
              between the various disciplines of art, instead the body is at the centre of the expression and the medium
              depends on the temperament. According to Bakambana, art is “a way of giving body to an idea despite the
              medium, in Kongo art, it is the ethics in the aesthetics. The gesture is part of the artist’s daily life, it
              is a ritual, and the Nsoneki (artist) dialogues with the body”</p>
          </div>
        </div>
      </div>
    </section>

    <section class="my-16 ">
      <div class="bg-black bg-opacity-5 w-full py-16">
        <Galery :artworks="artworks"></Galery> 
      </div>
    </section>

  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      artworks: [
        {
          name: 'AS YA NDOMBÉ, 2023, ACRYLIC ON CANVAS',
          size: '200 cm x 200 cm',
          image: 'https://i.ibb.co/kHbfjRH/As-Ya-Ndombe2.jpg',
        },
        {
          name: 'Nanga-Boko 2, 2019, Acrylic on canvas',
          size: '200 cm x 160 cm',
          image: 'https://i.ibb.co/DKjyfn6/Naga-boko-2.jpg',
        },
        {
          name: 'Vis-À-Vis, 2019-2020, Acrylic on canvas',
          size: '220 cm x 195 cm',
          image: 'https://i.ibb.co/MR09gFq/Vis-a-vis1-Copie.jpg',
        },
        {
          name: 'Bayern de Munich, 2023, Acrylic on canvas',
          size: '220 cm x 195 cm',
          image: 'https://i.ibb.co/4ZPTmVS/Bayern-de-Munich.jpg',
        } 
      ]
    }
  },
})
</script>

<style lang="scss"></style>
