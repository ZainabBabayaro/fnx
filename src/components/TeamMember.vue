<script setup >
import { ref } from 'vue'
const viewDetails = ref(false)
</script>


<template>
    <div>
        <router-link :to="{ name: 'team-details' }">
            <div class="my-3">
                <img src="../assets/team-img.svg" alt="">
                <div class="text-[14px] text-center">
                    <p class="font-semibold">Mark Flanagan</p>
                    <p>Co-Founder</p>
                </div>
            </div>
        </router-link>


    </div>
</template>