<template>
    <div class="page">
        <Header />

        <main class="main">
            <div class="main__box_1">
                <img src="@/assets/images/new_1.jpg" alt="" class="main__img main__img_1" />

                <h6 class="subtitle main__subtitle">Smart • Casual</h6>
                <h1 class="title main__title">
                    Elegance is a way<br />of expression
                </h1>
                <p class="text text_small main__text">
                    79% of our garments already have sustainable properties. By
                    2022, it will be 100%. We are on a journey.
                </p>

                <img src="@/assets/images/new_2.jpg" alt="" class="main__img main__img_2" />
            </div>

            <div class="main__box_2">
                <div class="scroll-decor">
                    <div class="scroll-decor__name">Scroll</div>
                </div>

                <div class="number-decor">
                    <div class="number-decor__number">03</div>
                </div>
            </div>

            <img src="@/assets/images/new_3.jpg" alt="" class="main__img main__img_3" />
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Header from "@/components/main/HeaderComp.vue";

export default defineComponent({
    components: {
        Header,
    },
    setup() {
        //
    },
});
</script>

<style lang="sass" scoped>
.main__box_1
    display: grid
    grid-template-columns: 1fr 1.5fr 1fr

.main__box_2
    display: grid
    grid-template-columns: 1fr 2.5fr

.main__img
    width: 256px
    height: 256px
</style>
