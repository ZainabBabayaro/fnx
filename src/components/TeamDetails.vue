<template>
    <div class="">
        <main class="">
            <section class="">
                <div class="flex justify-between p-7 items-center py-4">
                    <img src="../assets/black-logo.svg" alt="">
                    <img src="../assets/cancel.svg" alt="" @click="openHamburger = false">
                </div>
            </section>
            <section>
                <div class="flex flex-col justify-center items-center">
                    <img src="../assets/team-img.svg" alt="">
                    <p class="font-semibold">Mark Flanagan</p>
                    <p class="underline font-light text-[12px]">Co-Founder </p>
                </div>

            </section>
            <section>
                <div class="font-light p-7 text-left text-sm">
                    Mark has been working in Financial Services since 1994 working in senior roles in AON’s Investment team
                    within Operational Due Diligence, as a Director in the Risk, Structuring and Operations team with AXA
                    Investment Managers and as Deputy Head of Cayman National Fund Services. As such he has overseen
                    hundreds of managers and fund launches across most asset classes. He has acted as COO, Advisor and
                    Non-Executive Director to multiple companies. Mark is a Fellow of the Institute of Chartered Accountants
                    in Ireland and a Chartered Alternative Investment Analyst. 
                </div>
                <div class="font-light px-7 py-3 text-left">
                    <p class="font-semibold py-3">Contact Mark</p>
                    <p class="mr-52 text-sm">mark.flanagan@fnx.ie </p>
                    <p> +353 1963 7091</p>
                    <p>LinkedIn Profile</p>
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
  