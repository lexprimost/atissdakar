<!-- Please remove this file from your project -->
<template>
<nav class="bg-white">

  <div class="mx-auto   px-2 sm:px-6 lg:px-8 ">
    <div class="relative flex h-16 items-center ">
      <div class="absolute inset-y-0 left-0 flex items-center md:hidden justify-between">
        <!-- Mobile menu button-->
        <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
        <div class="flex flex-shrink-0 items-center">
         <a href="https://galerieatissdakar.com"> <img class="block h-8 w-auto lg:hidden" src="https://galerieatissdakar.com/wp-content/uploads/2019/11/logoatisse.png" alt="Your Company"></a>
         <a href="https://galerieatissdakar.com"> <img class="hidden h-9 w-auto lg:block" src="https://galerieatissdakar.com/wp-content/uploads/2019/11/logoatisse.png" alt="Your Company"></a>
          
        </div>
        <div class="hidden sm:ml-6  md:flex align-middle items-center">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-black " -->
            <a href="https://galerieatissdakar.com/artistes-3" class=" text-black rounded-md px-3 py-2 text-sm font-medium" aria-current="page">ARTISTES</a>
            <a href="https://galerieatissdakar.com/expositions-3/" class="text-black  rounded-md px-3 py-2 text-sm font-medium">EXPOSITIONS</a>
            <a href="https://galerieatissdakar.com/residence/" class="text-black  rounded-md px-3 py-2 text-sm font-medium">RÉSIDENCES</a>
            <a href="https://galerieatissdakar.com/art-fairs-2/" class="text-black  rounded-md px-3 py-2 text-sm font-medium">FOIRES</a>
            <a href="https://galerieatissdakar.com/biennales/" class="text-black  rounded-md px-3 py-2 text-sm font-medium">BIENNALES</a>
            <a href="https://galerieatissdakar.com/apropos/" class="text-black  rounded-md px-3 py-2 text-sm font-medium">A PROPOS</a>
            <a href="https://galerieatissdakar.com/contact-2/" class="text-black  rounded-md px-3 py-2 text-sm font-medium">CONTACT</a>
 
          </div>
        </div>
      </div> 
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
<!--   <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
 
      <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
      <a href="#" class="text-black  block rounded-md px-3 py-2 text-base font-medium">Team</a>
      <a href="#" class="text-black  block rounded-md px-3 py-2 text-base font-medium">Projects</a>
      <a href="#" class="text-black  block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
    </div>
  </div> -->
</nav>
</template>
