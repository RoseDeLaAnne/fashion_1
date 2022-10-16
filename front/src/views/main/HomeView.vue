<template>
    <div class="page">
        <Header />

        <main class="main">
            <div class="main__box main__box_1">
                <img
                    src="@/assets/images/new_1.jpg"
                    alt=""
                    class="main__img main__img_1"
                />

                <div class="main__box main__box_11">
                    <div class="main__box main__box_111">
                        <h6 class="subtitle main__subtitle">Smart • Casual</h6>
                        <h1 class="title main__title">
                            Elegance is a way<br />of expression
                        </h1>
                    </div>
                    <p class="text text_small main__text">
                        79% of our garments already have sustainable properties.
                        By 2022, it will be 100%. We are on a journey.
                    </p>
                </div>

                <img
                    src="@/assets/images/new_2.jpg"
                    alt=""
                    class="main__img main__img_2"
                />
            </div>

            <div class="main__box main__box_2">
                <div class="main__box main__box_21">
                    <div class="scroll-decor">Scroll</div>
                </div>

                <div class="main__box main__box_22">
                    <div class="number-decor">03</div>
                </div>
            </div>

            <img
                src="@/assets/images/new_3.jpg"
                alt=""
                class="main__img main__img_3"
            />
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
.main__box
    display: flex

    &.main__box_1
        display: grid
        grid-template-columns: 1fr 1.5fr 1fr

        z-index: 2

    &.main__box_11
        padding: 0 32px

        display: flex
        flex-direction: column

        align-items: center
        justify-content: center

        row-gap: 32px

    &.main__box_111
        flex-direction: column

        row-gap: 8px

    &.main__box_2
        margin-top: -128px

        min-height: calc(100vh - 136.55px - 640px + 128px)

        display: grid
        grid-template-columns: 1fr 2.5fr

        background-color: #F9F6EE

        z-index: 1

    &.main__box_22
        padding: 32px 640px 0 0

        justify-content: flex-end

.main__title,
.main__subtitle,
.main__text
    text-align: center

.main__title
    line-height: .9em

.main__subtitle
    font-size: 14px
    font-weight: 600

    text-transform: uppercase

.main__text
    padding: 0 96px

    font-size: 20px

.main__img
    width: 100%

    &.main__img_1
        margin-top: 64px

        height: 576px

    &.main__img_2
        height: 704px

    &.main__img_3
        width: 448px
        height: 576px

        position: absolute

        bottom: -192px
        right: 192px

        z-index: 3

.number-decor
    font-size: 128px

    color: #E3DFDA
</style>
