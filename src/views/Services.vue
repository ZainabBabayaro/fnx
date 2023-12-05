<template>
  <div class="">
    <main class="bg-[url('../assets/hero-bg.svg')] w-full h-[317px] md:h-[450px] relative md:bg-cover  ">

      <section class="p-7">

        <Hero />

        <h2 class="text-white mt-16 px-6 text-center text-[14px] py-5  md:mt-32">Our AIFMD Services
        </h2>
        <p class="text-white text-center text-[18px]">Expect more from your Management Company.</p>
      </section>



    </main>
    <div class="md:flex md:flex-row-reverse ">
      <div>
        <section class="space-y-5 p-7">
          <h3 class="font-semibold text-[16px] pt-5">Our Comprehensive Services</h3>
          <p class=" text-[12px]">At FNX.IE, we're committed to providing an extensive range of services to meet the
            diverse
            needs of our clients. Our expertise extends to every aspect of managing UCITS and AIF Funds, raising assets,
            and
            addressing regulatory matters in key global markets, including the US, UK, and Europe. We offer a
            comprehensive
            suite of services tailored to your specific requirements, including:</p>
          <ul class=" text-[12px] space-y-4 list-decimal">
            <li> <b>Fund Management:</b> Our experienced team offers end-to-end fund management services, ensuring the
              effective
              administration and performance optimization of your UCITS and AIF Funds.</li>
            <li><b>Asset Raising:</b> We specialize in helping you raise assets through strategic marketing, investor
              relations,
              and market analysis, enhancing your fund's growth potential.</li>
            <li><b>Regulatory Compliance:</b> Stay ahead of evolving regulations with our expert guidance. We provide
              thorough
              regulatory compliance services, helping you navigate the complexities of the US, UK, and European
              regulatory
              landscape.</li>
            <li> <b>Global Reach:</b> FNX.IE's international presence and network of industry experts allow us to serve
              clients
              globally, facilitating cross-border fund management and asset raising.</li>
            <li><b>Agile Solutions:</b> We pride ourselves on being an agile and adaptive firm. Our ability to respond
              swiftly to
              changing customer demands ensures that your investments remain flexible and future-proof.</li>
          </ul>
        </section>
        <section class=" space-y-5 p-7">
          <h3 class="font-semibold text-[16px] ">Our Approach</h3>
          <p class=" text-[12px]">Our approach to servicing your needs is characterized by:</p>
          <ul class=" text-[12px] space-y-4 list-decimal">
            <li> <b>Client-Centric Solutions:</b> We tailor our services to meet your unique requirements, ensuring that
              your goals are our top priority.
            </li>
            <li><b>Strategic Insights:</b> Our team of seasoned professionals provides strategic insights and
              recommendations based on market trends and regulatory changes.</li>
            <li><b>Transparency</b> We maintain open and clear communication with our clients throughout our
              partnership,
              offering complete transparency in all our services.</li>
          </ul>
        </section>
      </div>

      <div class="mt-52 px-10">
        <div class="flex justify-center">
          <p class="bg-[#9F836C] text-white w-full px-8 py-2 mt-6 rounded-md text-center"> <router-link
              :to="{ name: 'contact-us' }">Contact Us </router-link>
          </p>
        </div>
        <div class="flex justify-center">
          <p class="text-[#9F836C] border  border-[#9F836C] w-full  px-8 py-2 mt-3 rounded-md text-center">Request a
            Consultation
          </p>
        </div>
      </div>

    </div>
    <Footer />

  </div>
</template>

<script setup>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Hero from '@/components/Hero.vue'


</script>
