<template>
    <div>

        <div class=" px-12 text-[#002D3C] font-light leading-loose">
            <div class="flex justify-between items-center pt-6">
                <img src="../assets/black-logo.svg" alt="" class="w-12">
                <img src="../assets/black-hamburger.svg" alt="" class="cursor-pointer w-10"
                    @click="openHamburger = !openHamburger">
            </div>
            <h1 class="text-center text-2xl font-semibold">Disclaimer</h1>
            <section class="space-y-5 p-7">
                <h3 class="font-semibold text-[18px] pt-5">Introduction</h3>
                <p class="text-[12px]  md:text-[18px] "> This site is operated by FNX Dublin Limited. FFNX Dublin Limited is
                    registered
                    in
                    the Republic of Ireland with Company Number 682114. FNX Dublin Limited is registered by Central Bank of
                    Ireland with registration number C441669. By using this site, you are agreeing to these terms of use.
                    FNX Dublin Limited may change these terms at any time without further notice to you, and you are
                    responsible for periodically reviewing these terms for updates. Your continued use of this site
                    constitutes agreement by you to all such changes. This site is not intended for any person in any
                    jurisdiction where FNX Dublin Limited would become subject to license or registration regulations of
                    that jurisdiction, or the publication or availability of the contents is prohibited.</p>
            </section>

            <section class="space-y-5 p-7">
                <h3 class="font-semibold text-[18px] pt-5">Description of this Site</h3>
                <p class="text-[12px]  md:text-[18px] "> This site is for informational purposes only. It is not intended as
                    and should not be construed as financial, investment, tax, legal, regulatory, or other advice.
                    None of the contents of this site is an offer to sell or the solicitation of any offer to buy securities
                    in any investment vehicle or account sponsored, managed and/or advised by FNX Dublin Limited (each a
                    “Product”). It is not an offer or sale of securities in the United States or to, or for the account or
                    benefit of, any US person (as defined in relevant US securities laws, including residents of the United
                    States or partnerships or corporations organised there). Unless specifically stated, no fund referred to
                    on this site has been registered under the US Investment Company Act of 1940 and no interests therein
                    are registered under the US Securities Act of 1933.</p>
            </section>

            <section class="space-y-5 p-7">
                <h3 class="font-semibold text-[18px] pt-5">Intellectual Property</h3>
                <p class="text-[12px]  md:text-[18px] "> The contents of this site are the intellectual property of FNX
                    Dublin Limited and its third-party licensors and may not be copied, distributed, uploaded, posted,
                    republished, decompiled, disassembled, reverse-engineered or transmitted in any way without the prior
                    written consent of FNX Dublin Limited. The intellectual property rights in the FNX Dublin Limited name
                    and logo are owned by FNX Dublin Limited. Nothing in these terms or on this site should be construed as
                    granting any licence or right to use the FNX Dublin Limited name or logo or any other contents of this
                    site. FNX Dublin Limited enforces and will enforce any infringements of its intellectual property rights
                    to the fullest extent permitted by the law.</p>
            </section>

            <section class="space-y-5 p-7">
                <h3 class="font-semibold text-[18px] pt-5">No Warranty</h3>
                <p class="text-[12px]  md:text-[18px] "> None of FNX Dublin Limited , its directors or employees makes any
                    representations or warranties regarding this site or its contents (including but not limited to, with
                    respect to accuracy, adequacy, reliability, timeliness, completeness or suitability) and all contents
                    are provided “as is”. FNX Dublin Limited, to the fullest extent permitted by law, expressly disclaims
                    all representations and warranties, express or implied, as to this site and its contents, including any
                    implied warranties of merchantability, fitness for a particular purpose, title, non-infringement and
                    availability. FNX Dublin Limited also disclaims liability for errors and omissions in this site and its
                    contents.</p>
            </section>


            <section class=" space-y-5 p-7">
                <h3 class="font-semibold text-[16px] ">Our Approach</h3>
                <p class=" text-[12px]">Our approach to servicing your needs is characterized by:</p>
                <ul class=" text-[12px] space-y-4 list-decimal">
                    <li> <b>Client-Centric Solutions:</b> We tailor our services to meet your unique requirements,
                        ensuring that
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
        <Footer />

    </div>
</template>
  
<script setup>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Hero from '@/components/Hero.vue'


</script>
  