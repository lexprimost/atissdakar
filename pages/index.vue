<template>
  <div>
    <section class="overflow-hidden">

      <Tutorial />
      <Desk />
      <section class="flex justify-center mt-12 mb-12">
        <div class="sm:w-2/3 mx-6">
          <p class="text-base leading-7 sm:text-center font-light ">Dakar, Senegal - GALERIE ATISS DAKAR is pleased to announce its participation in the upcoming 2023 edition of the 1-54 Contemporary African Art Fair, set to take place in New York. Following its particpation at the 1-54 fair in London in 2021, GALERIE ATISS DAKAR present a curated selection of artworks by African artists.
            </p>
        </div>
      </section>

      <section v-for="(artist, index) of artists" :key="index">
        <div class="mx-auto sm:max-w-8xl   sm:px-0  px-3 lg:mt-20">

          <div class="lg:inline-flex md:space-x-10 space-y-10 items-center  w-full ">
            <img :src="artist.img" :alt="artist.name" class="lg:w-96 md:w-full sm:w-full ">

            <div class="w-full">
              <div class="flex flex-col space-y-4 items-start justify-start">
                <p class="text-lg font-light tracking-widest leading-3 text-black uppercase">A R T I S T</p>
                <p class="text-3xl font-light tracking-widest leading-9 text-black uppercase">{{ artist.name }}</p>
                <div class="flex md:flex-row flex-col col-span-2 md:row-span-2 md:space-x-10 space-y-6 md:space-y-0">
                  <p class="text-sm font-light    leading-snug text-gray-500" v-html="artist.description"></p>
                  <div v-html="artist.youtube " class=" hidden md:block">


                  </div>
                  <div v-html="artist.youtubeMobile" class="youtube-video block md:hidden ">


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="my-16 w-full overflow-hidden ">
          <div class="bg-black bg-opacity-5 w-full py-16">
            <p
              class="text-lg font-light tracking-widest leading-9 text-black uppercase mx-auto max-w-8xl sm:px-0 mb-5 text-center">
              A R T W O R K S</p>
            <Galery :artworks="artist.artworks"></Galery>
          </div>
        </section>
      </section>



    </section>

    <footer>

      <section>

        <div class="bg-white">
          <main>
            <div class="relative isolate">
              <div
                class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                aria-hidden="true">
                <div class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                  style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)" />
              </div>
              <div class="overflow-hidden">
                <div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                  <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                    <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                      <p class="text-lg font-light tracking-widest leading-3 text-black uppercase mb-2">A b o u t</p>
                      <h1 class="text-4xl font-light tracking-tight text-black sm:text-6xl">Galerie Atiss Dakar</h1>
                      <p class="relative mt-6 text-base font-light leading-7 text-gray-600 sm:max-w-md lg:max-w-none">
                        Established by Aïssa Dione, GALERIE ATISS DAKAR opened its doors during the first Dakar Biennial
                        in 1996. Since then, the gallery has been a prominent participant in every edition of Dak'Art,
                        showcasing a wide range of contemporary artists from Senegal and across the African continent. The
                        gallery also takes part in other significant international art events. Through its involvement
                        GALERIE ATISS DAKAR aims to support and promote the work of African artists to a wider audience
                        and foster cross-cultural exchange.</p>
                      <br>
                      <p class="text-base font-normal leading-7  text-black">Tel : +221 33 824 80 48<br />Email :
                        info@galerieatissdakar.com<br />Instagram : @galerieatissdakar</p>
                      <p class="text-base font-normal leading-7  text-black">Rue 23, Medina x Boulevard Martin Luther King
                        (Corniche Ouest), Dakar, Senegal</p>
                      <div class="mt-10 flex items-center gap-x-6">
                        <a href="https://galerieatissdakar.com"
                          class="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Home</a>
                        <a href="https://galerieatissdakar.com/contact-2/"
                          class="text-sm font-semibold leading-6 text-black">Contact us <span
                            aria-hidden="true">→</span></a>
                      </div>
                    </div>
                    <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                      <div
                        class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                        <div class="relative">
                          <img src="https://galerieatissdakar.com/wp-content/uploads/2020/08/home4-1024x683.jpg" alt=""
                            class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                          <div class="pointer-events-none absolute inset-0 rounded-xl  " />
                        </div>
                      </div>
                      <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                        <div class="relative">
                          <img src="https://galerieatissdakar.com/wp-content/uploads/2020/07/galerieinter-1024x683.jpg"
                            alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                          <div class="pointer-events-none absolute inset-0 rounded-xl  " />
                        </div>
                        <div class="relative">
                          <img src="https://galerieatissdakar.com/wp-content/uploads/2020/07/accueilgal2-1024x720.jpg"
                            alt="" class="aspect-[2/3]  h-72 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                          <div class="pointer-events-none absolute inset-0 rounded-xl  " />
                        </div>
                      </div>
                      <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                        <div class="relative">
                          <img src="https://galerieatissdakar.com/wp-content/uploads/2020/08/home1-1024x684.jpg" alt=""
                            class="aspect-[2/3] h-60 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                          <div class="pointer-events-none absolute inset-0 rounded-xl ringv-1 rinvg-inset ring-blvack" />
                        </div>
                        <div class="relative">
                          <img src="https://galerieatissdakar.com/wp-content/uploads/2020/07/showroom2-1024x683.jpg"
                            alt="" class="h-60 aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                          <div class="pointer-events-none absolute inset-0 rounded-xl  " />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

      </section>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {

      artists: [
        {
          youtube: ``,
          youtubeMobile: ``,
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
          youtube: `<iframe width="560" height="315" src="https://www.youtube.com/embed/YMEwfesF9zA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`, name: "THEMBA KHUMALO",
          youtubeMobile:`<iframe  src="https://www.youtube.com/embed/YMEwfesF9zA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>` ,
          img: "https://i.ibb.co/xMvHLG5/Z6B7541.jpg",
          description: `<p class="text-sm leading-snug text-gray-500"  >Themba Khumalo is an Orange Farm raised, and now Johannesburg based visual artist, born in 1987.<br/>In his 10-year professional career, he’s had over 20 group show appearances, featured in just over 10 art fairs, and has had 5 solo shows – both locally and internationally.<br/>His current art subject Emhlabeni reflects the social, political, and spiritual landscape in current South Africa and the understanding of land as identity.<br/>Themba Khumalo looks at the subject of land measured through the lens of his drawings. These renditions portray pieces of land as a witness to the dispossession of the people, the use of illegal occupation as protest, and the loss of hope.<br/><br/>Contrasted with his use of Baba Wethu Osezulwini (prayer) which depicts land as a refuge, and space for faith and healing.<br/>Graduated as a printmaker at Artist Proof Studios, his preferred form of expression is with charcoal, coffee stains, pastel on paper, and at times produces etched prints. His work is also a reflection of his life experiences and close observations, in search of a narrative that seeks to find even the least form of justice, and retribution be it spiritually, socially, or politically.</p>`,
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
          youtube: ``,         
          youtubeMobile: ``, name: "MALICK WELLI",
          img: "https://i.ibb.co/QF6n1Pq/IMG-1048.jpg",
          description: `<p class="text-sm leading-snug text-gray-500"  >MALICK WELLI is a Senegalese visual artist who lives and works in Dakar, Senegal. His work tackles themes of duality, spirituality, history and restitution of memory, pedagogy and displaced identity. Welli is interested in the convergence of religion with material influences; economics and power dynamics and how these shape visual culture. There is a questing for ecology and interdependence and how apparently independent events coincide and influence each other.<br/><br/>Welli brings these material community concerns into sharp contrast with individual spiritual needs.<br/><br/>Welli’s works have been collected and exhibited internationally including: « Sur le fil... « an exhibition organized by the 19m Chanel at the Theodore Monod Museum, IFAN (Institut Fondamental d’Afrique Noire) in Dakar (2023), Art x Lagos (2022), «Lightness of Being» a monographic exhibition at Galerie Atiss Dakar (2022); «Les Invincibles» at Dakar Biennale (2022); Blackstar Film Festival, Philadelphia, USA (2022); 1-54 Contemporary African Art Fair, New York (2021); EXPO CHGO, Chicago, USA (2019); Cairo Biennale, Egypt (2019); AKAA : Also Known As Africa fair, Paris, France (2018). His work has recently been acquired by the Chazen Museum of Art, Madison, Wisconsin, USA.</p>`,
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
              image: 'https://i.ibb.co/cTM31rq/Forgotten-Paridise-III-2022-Pigment-inkjet-print-on-Hahnemuhle-photo-rag-paper.jpg',
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

        },
        {
          youtube: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Yom9k462UAU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
            youtubeMobile: `<iframe  src="https://www.youtube.com/embed/Yom9k462UAU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
           name: "OUSMANE BÂ",
          img: "https://i.ibb.co/Nn6LsCP/Ousmane-Ba-galerie-atiss-dakar-600x901.jpg",
          description: `<p class="text-sm leading-snug text-gray-500"  >Ousmane Ba was born and raised in France, Strasbourg, at the border with Germany. He earned his Bachelor of Fine Arts from L’Institut Supérieur des Arts Appliqués.<br/>Ousmane was inspired to become an artist while managing startups in Europe, developing analysis capabilities and also understanding human psychology and design.<br/>He found inspiration in the Japanese arts and decided to move to Japan to develop his style in 2017. He has shown his work in a variety of Japanese galleries such as FUKAGAWA GARAGE or Trunk Hotel. Today, Ousmane takes a new course in his work. He considers himself a vagabond between painting and digital drawing, always searching for Eldorado, promised by a picture of inner peace.</p>`,
          artworks: [
            {
              name: 'Le Ballet Aérien, 2021, Wood panel, Material: Sumi, japanese pigment on washi, (japanese paper), Technique: Collage and painting, ',
              size: '380 cm x 170 cm',
              image: 'https://i.ibb.co/Dwc17Sd/Ballet-Ae-rien.jpg',
            },
            {
              name: 'La Victoire de Samothrace ou l’ Envolée, 2021 Wood panel, Material: Sumi, japanese pigment on washi, (japanese paper) Technique: Collage and painting ',
              size: '100 cm x 70 cm',
              image: 'https://i.ibb.co/98PYtXr/Samothrace.png',
            },
            {
              name: 'L’Esquive, Bamboo Paper and Washi, Technique Katazone',
              size: '59,4 cm x 42 cm',
              image: 'https://i.ibb.co/rpC8xHv/l-esquive.jpg',
            },
            {
              name: 'L’Écorché, Bamboo Paper and Washi, Technique Katazone',
              size: '59,4 cm x 42 cm',
              image: 'https://i.ibb.co/7zdrttr/l-e-corche.jpg',
            }



          ]

        },
        {
          youtube: `<iframe width="560" height="315"  src="https://www.youtube.com/embed/KX_hD_vWHCI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
`,     youtubeMobile: `<iframe   src="https://www.youtube.com/embed/KX_hD_vWHCI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
`, name: "CEDRIC MIZERO",
          img: "https://i.ibb.co/SQZ34fJ/Whats-App-Image-2023-05-04-at-17-14-37.jpg",
          description: `<p class="text-sm leading-snug text-gray-500"  >Born in 1993 in Gishoma, Rwanda, Cedric is a Visual Artist & Storyteller with a strong<br/>relation to nature, culture and people. His inspiration comes from emotional and sensual experiences with the world that surrounds him and is touched by what he defines as “the beauty of the small moments of day-to-day”.<br/>His work has been exhibited in Rwanda, England, United States, Ivory Coast, Kenya and other African and European countries. In 2019 he represented Rwanda for the first time in the International Fashion Showcase (IFS) with the installation “Dreaming My Memory” at the Summerset House and was awarded a Special Mention to Curation for his work.<br/>“A New Life in The Village” (2019) was exhibited at The Temple, 180 Strand, London, his most recent installation “Protection” was displayed at Aby Concept, Abidjan, Ivory Coast with the Galerie Cecile Fakhoury, also displayed at the Frick Museum in Pittsburgh and at the Creshaw Dairy Mart Gallery in Los Angeles, California, US.</p>`,
          artworks: [
            {
              youtube: `<iframe  src="https://www.youtube.com/embed/KX_hD_vWHCI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
`, name: 'Protection 6, 2019, Series of sculptural dress and jackets embellished with rosaries and medallions, Silver dress',
              size: '',
              image: 'https://i.ibb.co/hY2XYkr/2022-08-30-356.jpg',
            },
            {
      name: 'Protection 6, 2019, Series of sculptural dress and jackets embellished with rosaries and medallions, Silver dress',
              size: '',
              image: 'https://i.ibb.co/FDH2kvx/2022-08-30-364.jpg',
            },
            {
    name: 'Protection 6, 2019, Series of sculptural dress and jackets embellished with rosaries and medallions, Blue Jacket',
              size: '',
              image: 'https://i.ibb.co/tXJ7f6P/Blue-Jacket.jpg',
            }
            ,
            {
     name: 'Protection 6, 2019, Series of sculptural dress and jackets embellished with rosaries and medallions, Red Jacket',
              size: '',
              image: 'https://i.ibb.co/Jdtpgyq/Red-Jacket.jpg',
            },
 




          ]

        }
      ]

    }
  },
})
</script>

<style lang="scss">
.youtube-video {
    iframe {
      aspect-ratio: 16 / 9;
      width: 100%;
    }
}
</style>
