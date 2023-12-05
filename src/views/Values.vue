<template>
    <div class="">
        <main class="bg-[url('../assets/values-bg.svg')] w-full h-[317px] md:h-[450px] relative md:bg-cover ">
            <section class="p-7">
                <Hero />
                <h2 class="text-white mt-10 px-6 text-center text-[14px] py-5">Our Values
                </h2>
                <p class="text-white text-center text-[18px]">In an industry paralysed by complexity and cost, our
                    values
                    are simple but they are crucial and core to our undertaking.</p>

            </section>
        </main>
        <div class="md:flex md:flex-row-reverse px-5">
            <section class="mt-8  space-y-5 p-7 text-[12px]">
                <div>
                    <h3 class="underline text-lg py-2">Simplicity</h3>
                    <p>We prioritize straightforward, actionable solutions. We're mindful of the time and financial
                        implications
                        of our advice, keeping things direct and efficient.</p>
                </div>

                <div>
                    <h3 class="underline  text-lg py-2">Integrity</h3>
                    <p>Our unwavering commitment to integrity means we're responsible and accountable to regulators,
                        clients, and ourselves. Transparency and honesty define our approach.</p>
                </div>
                <div>
                    <h3 class="underline  text-lg py-2">Respect</h3>
                    <p>We deeply respect the time, effort, and commitment of our stakeholders, particularly our clients. We
                        honor their dedication with unwavering support and integrity.</p>
                </div>
                <div>
                    <h3 class="underline  text-lg py-2">Efficiency</h3>
                    <p>We're fanatical about efficiency, keeping costs low and operations effective. We optimize our
                        services to empower clients in achieving their financial goals.</p>
                </div>

            </section>
            <section class=" space-y-5 p-7">

                <div class="flex justify-center">
                    <p class="bg-[#9F836C] text-white w-full px-8 py-2 mt-6 rounded-md text-center"> <router-link
                            :to="{ name: 'contact-us' }">Contact Us </router-link>
                    </p>
                </div>
                <div class="flex justify-center">
                    <p class="text-[#9F836C] border  border-[#9F836C] w-full  px-8 py-2 mt-3 rounded-md text-center">Request
                        a
                        Consultation
                    </p>
                </div>
            </section>
        </div>
        <Footer />


    </div>
</template>
  
<script setup>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Hero from '@/components/Hero.vue'


</script>
  