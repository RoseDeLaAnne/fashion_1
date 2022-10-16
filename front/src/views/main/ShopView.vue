<template>
    <div class="page">
        <Header />

        <main class="main">
            <h1 class="title main__title">Lookbook</h1>

            <div class="main__box main__box_1">
                <div class="main__item">
                    <div class="main__box main__box_12">
                        <div class="main__box main__box_121">
                            <img
                                src="@/assets/images/shearling-denim-jacket.jpg"
                                alt=""
                                class="main__item-img main__item-img_1"
                            />
                            <h2 class="main__item-name">
                                Shearling Denim Jacket
                            </h2>
                        </div>
                        <h3 class="main__item-price">$125.00</h3>
                    </div>
                </div>
                <div class="main__item">
                    <div class="main__box main__box_11">
                        <p class="text text_medium main__text">
                            Our selection of essentials, designed to be
                            season-proof and made from quality materials.
                        </p>
                    </div>
                    <div class="main__box main__box_12">
                        <div class="main__box main__box_121">
                            <img
                                src="@/assets/images/suede-effect-shirts.jpg"
                                alt=""
                                class="main__item-img main__item-img_2"
                            />
                            <h2 class="main__item-name">Suede-effect Shirts</h2>
                        </div>
                        <h3 class="main__item-price">$199.50</h3>
                    </div>
                </div>
                <div class="main__item">
                    <div class="main__box main__box_12">
                        <div class="main__box main__box_121">
                            <img
                                src="@/assets/images/bomber-jacket_2.jpg"
                                alt=""
                                class="main__item-img main__item-img_3"
                            />
                            <h2 class="main__item-name">Bomber Jacket</h2>
                        </div>
                        <h3 class="main__item-price">$245.00</h3>
                    </div>
                </div>
            </div>
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
    &.main__box_1
        padding-left: 448px

        display: grid
        grid-template-columns: 1fr 1fr 1fr
        
        align-items: center

        column-gap: 24px

    &.main__box_11
        padding: 96px 64px

        background-color: #F2EBDD

    &.main__box_12
        display: flex
        flex-direction: column

        row-gap: 8px

    &.main__box_121
        display: flex
        flex-direction: column

        row-gap: 16px

.main__title
    padding-left: 224px

.main__item
    display: flex
    flex-direction: column

    row-gap: 24px

.main__item-img
    width: 100%

    &.main__item-img_1,
    &.main__item-img_3
        height: 640px

    &.main__item-img_2
        height: 416px
</style>
