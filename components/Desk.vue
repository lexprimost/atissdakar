<template>

<section>
 

    <div class="bg-gray-300 h-96 flex items-center justify-center hero-banner relative ">
        <div class="sm:w-2/3 absolute">
            <p class="md:text-6xl text-2xl font-extrabold leading-10 text-center text-white mb-4">1-54 NEW YORK 2023</p>
            <p class="text-base leading-7 text-center text-white font-light ">Dakar, Senegal - GALERIE ATISS DAKAR is pleased to announce its participation in the upcoming 2023 edition of the 1-54 Contemporary African Art Fair, set to take place in New York. Following its particpation at the 1-54 fair in London in 2021, GALERIE ATISS DAKAR present a curated selection of artworks by African artists.
            </p>

    </div>
</div>
</section>
</template>
<style lang="scss">
    .hero-banner {
        background-image: url('https://galerieatissdakar.com/wp-content/uploads/2020/08/home4-1024x683.jpg');
        background-size: cover;
        background-position: center;
        //add overlay dark to the hero banner image
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            // background: rgba(0, 0, 0, 0.5);
            background: rgba(0, 0, 0, 0.7);
        }
    }
</style>