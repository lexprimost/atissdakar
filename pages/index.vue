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

    <section v-for="(artist, index) of artists" :key="index">
      <div class="mx-auto max-w-8xl sm:px-0 px-6 lg:mt-20">

        <div class="lg:inline-flex md:space-x-10 space-y-10 items-center  w-full ">
          <img :src="artist.img" :alt="artist.name" class="lg:w-96 md:w-full sm:w-full ">

          <div class="w-full">
            <div class="flex flex-col space-y-4 items-start justify-start">
              <p class="text-3xl font-light tracking-widest leading-9 text-gray-900 uppercase">{{ artist.name }}</p>
              <p class="text-sm font-light    leading-snug text-gray-500" v-html="artist.description"></p>
            </div>
          </div>
        </div>
      </div>

      <section class="my-16 ">
        <div class="bg-black bg-opacity-5 w-full py-16">
          <Galery :artworks="artist.artworks"></Galery>
        </div>
      </section>
    </section>



  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {

      artists: [
        {
          name: "NGIMBI BAKAMBANA LUVE",
          img: "https://galerieatissdakar.com/wp-content/uploads/Artists/Ngimbi/profilephoto-600x900.jpg",
          description: `Ngimbi Bakambana Luve was born in Kinshasa, DRC, in 1977 and
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
              is a ritual, and the Nsoneki (artist) dialogues with the body”`,
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

        },
        {
          name: "THEMBA KHUMALO",
          img: "https://i.ibb.co/xMvHLG5/Z6B7541.jpg",
          description: `<p class="text-sm leading-snug text-gray-500" style="width: 738px;">Themba Khumalo is an Orange Farm raised, and now Johannesburg based visual artist, born in 1987.<br/>In his 10-year professional career, he’s had over 20 group show appearances, featured in just over 10 art fairs, and has had 5 solo shows – both locally and internationally.<br/>His current art subject Emhlabeni reflects the social, political, and spiritual landscape in current South Africa and the understanding of land as identity.<br/>Themba Khumalo looks at the subject of land measured through the lens of his drawings. These renditions portray pieces of land as a witness to the dispossession of the people, the use of illegal occupation as protest, and the loss of hope.<br/><br/>Contrasted with his use of Baba Wethu Osezulwini (prayer) which depicts land as a refuge, and space for faith and healing.<br/>Graduated as a printmaker at Artist Proof Studios, his preferred form of expression is with charcoal, coffee stains, pastel on paper, and at times produces etched prints. His work is also a reflection of his life experiences and close observations, in search of a narrative that seeks to find even the least form of justice, and retribution be it spiritually, socially, or politically.</p>`,
          artworks: [
            {
              name: 'Umthandazi, Monoprint',
              size: '100cm x 70cm ',
              image: 'https://i.ibb.co/ssj8Hfx/Umthandazi-100cm-x-70cm-Monoprint.png',
            },
            {
              name: 'Untitled, Charcoal on fabriano paper',
              size: '140 cm x 180 cm ',
              image: 'https://i.ibb.co/6tLnTPM/Screenshot-2023-04-06-at-17-43-50.png',
            },
            {
              name: 'Sikhanyisele, Oil on paper, 2022',
              size: '50 cm x 35 cm',
              image: 'https://i.ibb.co/k56hVZk/Sikhanyisele.jpg',
            },
            {
              name: 'Sikhanyisele 2, Oil on paper',
              size: '77 cm x 56 cm',
              image: 'https://i.ibb.co/60JqmwG/Sikhanyisele-2.jpg',
            },

            {
              name: 'Untitled, Oil on paper, 2022',
              size: '56 cm x 77cm',
              image: 'https://i.ibb.co/thtWVJ4/Untitled.jpg',
            },
          ]

        },
        {
          name: "MALICK WELLI",
          img: "https://i.ibb.co/QF6n1Pq/IMG-1048.jpg",
          description: `<p class="text-sm leading-snug text-gray-500" style="width: 738px;">MALICK WELLI is a Senegalese visual artist who lives and works in Dakar, Senegal. His work tackles themes of duality, spirituality, history and restitution of memory, pedagogy and displaced identity. Welli is interested in the convergence of religion with material influences; economics and power dynamics and how these shape visual culture. There is a questing for ecology and interdependence and how apparently independent events coincide and influence each other.<br/><br/>Welli brings these material community concerns into sharp contrast with individual spiritual needs.<br/><br/>Welli’s works have been collected and exhibited internationally including: « Sur le fil... « an exhibition organized by the 19m Chanel at the Theodore Monod Museum, IFAN (Institut Fondamental d’Afrique Noire) in Dakar (2023), Art x Lagos (2022), «Lightness of Being» a monographic exhibition at Galerie Atiss Dakar (2022); «Les Invincibles» at Dakar Biennale (2022); Blackstar Film Festival, Philadelphia, USA (2022); 1-54 Contemporary African Art Fair, New York (2021); EXPO CHGO, Chicago, USA (2019); Cairo Biennale, Egypt (2019); AKAA : Also Known As Africa fair, Paris, France (2018). His work has recently been acquired by the Chazen Museum of Art, Madison, Wisconsin, USA.</p>`,
          artworks: [
      {
              name: 'Untitled 2, Idol series, 2017, Pigment inkjet on fine art, Ed. 1/5',
              size: '90 x 120 cm',
              image: 'https://i.ibb.co/cTGYqSK/Untitled-2-Idol-series.png',
            },
                     {
              name: 'Forgotten Paradise I, 2022, Pigment inkjet print on Hahnemuhle photo rag paper, Ed 1/1',
              size: '120 cm x 160 cm',
              image: 'https://i.ibb.co/3yRrK0Q/Malick-Welli-Forgotten-Paradise-1.jpg',
            },
                        {
              name: 'Forgotten Paradise III, 2022, Pigment inkjet print on Hahnemuhle photo rag paper,Ed. 1/3 + 1AP ',
              size: '120 cm x 160 cm',
              image: 'https://i.ibb.co/BCCb40q/Forgotten-Paridise-II-2022-Pigment-inkjet-print-on-Hahnemuhle-photo-rag-paper.jpg',
            },
            {
              name: 'Forgotten Paradise II, 2022, Pigment inkjet print on Hahnemuhle photo rag paper Ed 1/1',
              size: '120 cm x 160 cm',
              image: 'https://i.ibb.co/BCCb40q/Forgotten-Paridise-II-2022-Pigment-inkjet-print-on-Hahnemuhle-photo-rag-paper.jpg',
            },
                          {
              name: 'Untitled 1, Idol series, 2017, Pigment inkjet on fine art, Ed. 3/5 + 2AP',
              size: '80 cm x 120 cm',
              image: 'https://i.ibb.co/WVG50WV/Untitled-1-Idol-series.png',
            }
                 



          ]

        }
      ]

    }
  },
})
</script>

<style lang="scss"></style>
