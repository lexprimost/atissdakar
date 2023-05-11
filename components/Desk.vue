<template>

<section>
 

    <div class="bg-gray-300 h-96 flex items-center justify-center hero-banner relative ">
        <div class="sm:w-2/3 absolute">
            <p class="md:text-6xl text-2xl font-extrabold leading-10 text-center text-white mb-4">1-54 NEW YORK 2023</p>
            <p class="text-base leading-7 text-center text-white font-light ">Gallery Atiss Dakar is excited to announce its participation
                in the upcoming 1-54 Contemporary African Art Fair. Following successful showcases in London, Paris, and
                Marrakech, our gallery will be exhibiting at the New York edition from May 19 to 21, 2023. 1-54 is renowned
                as the pioneering art fair dedicated to contemporary African art, and we are thrilled to be a part of this
                prestigious event.
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
            background: rgba(0, 0, 0, 0.6);
        }
    }
</style>