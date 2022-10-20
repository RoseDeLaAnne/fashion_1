<template>
    <div class="page">
        <Header />

        <main class="main">
            <div class="main__box main__box_1">
                <div class="main__box main__box_11">
                    <h1 class="title main__title main__title_1">New winter</h1>
                    <div class="main__box main__box_111">
                        <div class="line-decor"></div>
                        <h1 class="title main__title main__title_2">
                            Arrivals
                        </h1>
                    </div>
                </div>
            </div>

            <div class="main__box main__box_2">
                <Slider :page="page" :count="count" @update="sliderUpdate" />
            </div>

            <div v-if="page === 1" class="main__box main__box_3">
                <div class="main__item">
                    <div class="main__box main__box_31">
                        <h2 class="main__item-name">Bomber Jacket</h2>
                        <img
                            src="@/assets/images/bomber-jacket.jpg"
                            alt=""
                            class="main__item-img main__item-img_1"
                        />
                    </div>
                    <router-link to="/" class="btn main__item-btn"
                        >Shop Now</router-link
                    >
                </div>
                <div class="main__item">
                    <div class="main__box main__box_31">
                        <h2 class="main__item-name">Shearling Denim Jacket</h2>
                        <img
                            src="@/assets/images/shearling-denim-jacket.jpg"
                            alt=""
                            class="main__item-img main__item-img_2"
                        />
                    </div>
                    <router-link to="/" class="btn main__item-btn"
                        >Shop Now</router-link
                    >
                </div>
                <div class="main__item">
                    <div class="main__box main__box_31">
                        <h2 class="main__item-name">Windbreaker Jacket</h2>
                        <img
                            src="@/assets/images/windbreaker-jacket.jpg"
                            alt=""
                            class="main__item-img main__item-img_3"
                        />
                    </div>
                    <router-link to="/" class="btn main__item-btn"
                        >Shop Now</router-link
                    >
                </div>
            </div>
            <div v-else-if="page === 2" class="main__box main__box_3">
                <div class="main__item">
                    <div class="main__box main__box_31">
                        <h2 class="main__item-name">Bomber Jacket 2</h2>
                        <img
                            src="@/assets/images/bomber-jacket_2.jpg"
                            alt=""
                            class="main__item-img main__item-img_1"
                        />
                    </div>
                    <router-link to="/" class="btn main__item-btn"
                        >Shop Now</router-link
                    >
                </div>
                <div class="main__item">
                    <div class="main__box main__box_31">
                        <h2 class="main__item-name">Shearling Denim Jacket 2</h2>
                        <img
                            src="@/assets/images/shearling-denim-jacket.jpg"
                            alt=""
                            class="main__item-img main__item-img_2"
                        />
                    </div>
                    <router-link to="/" class="btn main__item-btn"
                        >Shop Now</router-link
                    >
                </div>
                <div class="main__item">
                    <div class="main__box main__box_31">
                        <h2 class="main__item-name">Windbreaker Jacket 2</h2>
                        <img
                            src="@/assets/images/windbreaker-jacket.jpg"
                            alt=""
                            class="main__item-img main__item-img_3"
                        />
                    </div>
                    <router-link to="/" class="btn main__item-btn"
                        >Shop Now</router-link
                    >
                </div>
            </div>
            <div v-else-if="page === 3" class="main__box main__box_3">
                <div class="main__item">
                    <div class="main__box main__box_31">
                        <h2 class="main__item-name">Bomber Jacket 3</h2>
                        <img
                            src="@/assets/images/bomber-jacket.jpg"
                            alt=""
                            class="main__item-img main__item-img_1"
                        />
                    </div>
                    <router-link to="/" class="btn main__item-btn"
                        >Shop Now</router-link
                    >
                </div>
                <div class="main__item">
                    <div class="main__box main__box_31">
                        <h2 class="main__item-name">Shearling Denim Jacket 3</h2>
                        <img
                            src="@/assets/images/shearling-denim-jacket.jpg"
                            alt=""
                            class="main__item-img main__item-img_2"
                        />
                    </div>
                    <router-link to="/" class="btn main__item-btn"
                        >Shop Now</router-link
                    >
                </div>
                <div class="main__item">
                    <div class="main__box main__box_31">
                        <h2 class="main__item-name">Windbreaker Jacket 3</h2>
                        <img
                            src="@/assets/images/windbreaker-jacket.jpg"
                            alt=""
                            class="main__item-img main__item-img_3"
                        />
                    </div>
                    <router-link to="/" class="btn main__item-btn"
                        >Shop Now</router-link
                    >
                </div>
            </div>
            <div v-else class="main__box main__box_3">
                <div class="main__item">
                    <div class="main__box main__box_31">
                        <h2 class="main__item-name">Bomber Jacket</h2>
                        <img
                            src="@/assets/images/bomber-jacket.jpg"
                            alt=""
                            class="main__item-img main__item-img_1"
                        />
                    </div>
                    <router-link to="/" class="btn main__item-btn"
                        >Shop Now</router-link
                    >
                </div>
                <div class="main__item">
                    <div class="main__box main__box_31">
                        <h2 class="main__item-name">Shearling Denim Jacket</h2>
                        <img
                            src="@/assets/images/shearling-denim-jacket.jpg"
                            alt=""
                            class="main__item-img main__item-img_2"
                        />
                    </div>
                    <router-link to="/" class="btn main__item-btn"
                        >Shop Now</router-link
                    >
                </div>
                <div class="main__item">
                    <div class="main__box main__box_31">
                        <h2 class="main__item-name">Windbreaker Jacket</h2>
                        <img
                            src="@/assets/images/windbreaker-jacket.jpg"
                            alt=""
                            class="main__item-img main__item-img_3"
                        />
                    </div>
                    <router-link to="/" class="btn main__item-btn"
                        >Shop Now</router-link
                    >
                </div>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Header from "@/components/main/HeaderComp.vue";
import Slider from "@/components/main/SliderComp.vue";

export default defineComponent({
    components: {
        Header,
        Slider,
    },
    data() {
        return {
            page: 1,
            count: 3,
        }
    },
    methods: {
        sliderUpdate(direction: string) {
            if (direction === 'left' && this.page > 1) {
                this.page--
            } else if (direction === 'right' && this.page < this.count) {
                this.page++
            }
        }
    },
    setup() {
        //
    },
});
</script>

<style lang="sass" scoped>
.main
    padding: 0 192px

    row-gap: 16px

.main__box
    &.main__box_1
        display: inline-flex
        flex-direction: column

        align-items: center
        justify-content: center

    &.main__box_11
        display: flex
        flex-direction: column

        align-items: flex-end

    &.main__box_111
        width: 100%

        display: flex
        
        align-items: center

        column-gap: 32px

    &.main__box_2
        display: flex

        justify-content: flex-end

    &.main__box_3
        display: grid
        grid-template-columns: 1fr 1fr 1fr

        align-items: center

        column-gap: 64px

    &.main__box_31
        display: flex
        flex-direction: column

        row-gap: 16px

.main__title
    position: relative

    text-align: center

.main__item
    display: flex
    flex-direction: column

    row-gap: 24px

.main__item-name
    font-style: italic

.main__item-name,
.main__item-btn
    text-align: center

.main__item-img
    width: 100%
    height: 512px

    &.main__item-img_2
        height: 576px

.line-decor
    width: 100%
    height: 1px

    background-color: #000
</style>
