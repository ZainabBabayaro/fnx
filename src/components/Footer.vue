<template>
    <div>
        <section class="bg-[#002D3C] p-7 text-white">

            <div class="md:flex md:justify-between my-6">
                <div>
                    <img src="../assets/logo.svg" alt="" class="py-6">
                </div>
                <div>
                    <p class=" text-[12px] text-right md:flex  md:justify-end">Send us an email or give us your information
                        and
                        we
                        wil
                        get
                        back
                        to
                        you.
                    </p>
                    <div class="flex justify-start mb-10 md:justify-end">
                        <router-link :to="{ name: 'contact-us' }">
                            <p Contact class="bg-[#9F836C] text-white  px-8 py-2 mt-3 rounded-md text-center">
                                Contact Us</p>
                        </router-link>
                    </div>
                </div>
            </div>

            <p class=" text-[12px]">FNX Dublin Limited is registered in the Republic of Ireland with <b>Company Number
                    682114.</b>
                FNX Dublin Limited is authorised under AIFMD by Central Bank of Ireland with <b>registration number
                    C441669.</b>
            </p>
            <div class="flex my-6 text-[12px] justify-between md:block md:space-y-2">
                <router-link :to="{ name: 'disclaimer' }">
                    <p class="underline font-semibold">DISCLAIMER</p>
                </router-link>
                <router-link :to="{ name: 'privacy' }">
                    <p class="underline font-semibold">PRIVACY POLICY</p>
                </router-link>
                <router-link :to="{ name: 'sustainabilityDisclosures' }">
                    <p class="underline font-semibold">SFDR Disclosures</p>
                </router-link>

            </div>
            <p class="text-[12px] ">©️ 2023 FNX Dublin Limited, All Rights Reserved.</p>

        </section>
    </div>
</template>