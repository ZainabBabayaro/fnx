<script setup>
import Footer from '@/components/Footer.vue'
import Hero from '@/components/Hero.vue'
</script>

<template>
    <div class="">
        <div class="bg-[url('../assets/contact-bg.svg')]  w-full h-[317px] md:h-full relative md:bg-cover">
            <div class=" p-7 py-10">
                <Hero />
            </div>

            <div
                class="bg-[url('../assets/slant-rectangle.svg')] w-full pb-4 bg-cover lg:h-[600px] md:h-[500px] md:flex md:items-end  md:justify-evenly">
                <div class="bg-white m-5 rounded-lg  md:w-[500px] lg:w-[700px]">
                    <div class=" py-14 p-5 font-sans space-y-7 px-6 lg:px-20 lg:space-y-14">

                        <div class="space-y-5">
                            <fieldset class=" p-1 w-full flex border border-[#23272B] rounded">
                                <legend class="text-xs"><label for="" class="px-2">Your full name</label></legend>
                                <img src="" alt="" class="p-1 ">
                                <input type="text" class="form-control w-full focus:border-blue-500 ">
                            </fieldset>
                            <fieldset class="m-0 p-1  flex border border-[#23272B] rounded">
                                <legend class="text-xs"><label for="" class="px-2">Your Email</label></legend>
                                <img src="" alt="" class="p-1 ">
                                <input type="text" class="form-control w-full focus:border-blue-500 ">
                            </fieldset>
                            <fieldset class="m-0 p-1  flex border border-[#23272B] rounded">
                                <legend class="text-xs"><label for="" class="px-2">Your Website</label></legend>
                                <img src="" alt="" class="p-1 ">
                                <input type="text" class="form-control w-full focus:border-blue-500 ">
                            </fieldset>

                            <fieldset class="m-0 p-1  flex border border-[#23272B] rounded">
                                <legend class="text-xs"><label for="" class="px-2">Your Message</label></legend>
                                <img src="" alt="" class="p-1 ">
                                <textarea name="" id="" cols="20" rows=""></textarea>
                            </fieldset>
                        </div>
                        <div class="text-xs border bg-[#9F836C]  text-center  text-white rounded-md px-24 py-3 mt-10">
                            Send Message
                        </div>

                    </div>

                </div>
                <div class=" text-white text-center md:w-52 px-5 md:p-10 ">
                    <p class="font-semibold pb-4 text-[14px]">FNX Dublin Limited</p>
                    <p class="text-[12px]">Unit 1, Block 1
                        Northwood Court
                        Santry, D09 E438
                        Ireland
                        +353 1963 7090</p>
                </div>
            </div>
            <Footer />
        </div>

    </div>
</template>

<style scoped>
.form-control {
    fill: none;
    background: transparent;
    border: none;
    outline: none;
}
</style>