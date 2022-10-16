<template>
    <div class="page">
        <Header />

        <main class="main">
            <h1 class="title main__title">Collections</h1>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Header from '@/components/main/HeaderComp.vue'

export default defineComponent({
    components: {
        Header
    },
    setup() {
        // 
    },
})
</script>

<style lang="sass" scoped>
.main__title
    text-align: center
</style>
