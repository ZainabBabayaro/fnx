<template>
  <div class="">
    <main class="bg-[url('../assets/hero-bg.svg')] w-full h-[317px] md:h-[430px] relative md:bg-cover">
      <section class="p-7">
        <Hero />
        <div class="flex items-center justify-center mt-16 md:mt-32">
          <h2 class="text-white  px-6 text-center md:w-[500px] ">AIFMD and Management Company
            Services,
            by Practitioners for Practitioners.
          </h2>
        </div>

        <div class="flex justify-center pb-10">
          <router-link :to="{ name: 'contact-us' }">
            <p class="bg-[#9F836C] text-white  px-8 py-2 mt-8 rounded-md text-center">Get In Touch</p>
          </router-link>
        </div>
      </section>


      <section class=" space-y-5 p-7 md:pt-10">
        <h3 class="font-semibold text-[16px] md:mt-16">How We Manage And Secure Your Investments </h3>
        <div class="md:grid md:grid-cols-2 md:space-x-4  ">
          <div class="">
            <h3 class="underline text-[14px] pt-4 py-2">Expect more from your Management Company </h3>
            <p class=" text-[12px]">Demand a team which has real and direct experience of managing UCITS and AIF Funds,
              raising assets, and
              regulatory matters in the US, UK and Europe. Demand an agile firm which adapts to new customer demands
              efficiently and effectively</p>
            <div class="flex justify-start">
              <router-link :to="{ name: 'services' }">
                <p class="text-[#9F836C] border  border-[#9F836C]   px-8 py-2 mt-4 rounded-md text-center">Our AIFMD
                  Services

                </p>
              </router-link>
            </div>
          </div>
          <div class="my-4">
            <h3 class="underline text-[14px] pt-4 py-2">A partnership that extends beyond management services</h3>
            <p class=" text-[12px]">Work with a Partner with a background in investor Due Diligence, Fund
              Structuring,
              and Operations.</p>
            <div class="flex justify-start">
              <router-link :to="{ name: 'values' }">
                <p class="text-[#9F836C] border  border-[#9F836C]   px-8 py-2 mt-4 rounded-md text-center">Our Values
                </p>
              </router-link>
            </div>
          </div>


        </div>

      </section>

      <Footer />

    </main>
  </div>
</template>

<script setup>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Hero from '@/components/Hero.vue'

</script>
