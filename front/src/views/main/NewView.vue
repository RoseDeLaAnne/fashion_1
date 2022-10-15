<template>
    <div class="page">
        <Header />

        <main class="main">
            <h1 class="title main__title">New winter</h1>
            <h1 class="title main__title">Arrivals</h1>

            <div class="slider">
                <div class="slider__item">
                    <svg class="slider__icon">
                        <use href="@/assets/icons/sprites.svg#arrow_left" />
                    </svg>
                </div>
                <div class="slider__item">
                    <svg class="slider__icon">
                        <use href="@/assets/icons/sprites.svg#arrow_right" />
                    </svg>
                </div>
            </div>

            <div class="main__box">
                <div class="main__item">
                    <h2 class="main__item-name">Bomber Jacket</h2>
                    <img
                        src="@/assets/images/bomber-jacket.jpg"
                        alt=""
                        class="main__item-img"
                    />
                    <router-link to="/" class="btn main__item-btn"
                        >Shop Now</router-link
                    >
                </div>
                <div class="main__item">
                    <h2 class="main__item-name">Shearling Denim Jacket</h2>
                    <img
                        src="@/assets/images/shearling-denim-jacket.jpg"
                        alt=""
                        class="main__item-img"
                    />
                    <router-link to="/" class="btn main__item-btn"
                        >Shop Now</router-link
                    >
                </div>
                <div class="main__item">
                    <h2 class="main__item-name">Windbreaker Jacket</h2>
                    <img
                        src="@/assets/images/windbreaker-jacket.jpg"
                        alt=""
                        class="main__item-img"
                    />
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

</style>
