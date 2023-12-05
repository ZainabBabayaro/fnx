<template>
    <div class="">
        <main class="bg-[url('../assets/team-bg.svg')] w-full h-[317px]  md:h-[450px] relative md:bg-cover">
            <section class="p-7">
                <Hero />
                <h2 class="text-white mt-10 px-6 text-center text-[14px] py-5">Our Team
                </h2>
                <p class="text-white text-center text-[18px]">Our people make our company. They can make yours too.</p>

            </section>
        </main>
        <section class="my-10 grid grid-cols-2 md:flex md:flex-col md:items-center ">
            <TeamMember class="" />

            <div class=" md:flex md:flex-wrap">
                <TeamMember />
                <TeamMember />
                <TeamMember />
                <TeamMember />
                <TeamMember />
            </div>



        </section>

        <Footer />


    </div>
</template>
  
<script setup>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import TeamMember from '@/components/TeamMember.vue';
import Hero from '@/components/Hero.vue'
</script>
  