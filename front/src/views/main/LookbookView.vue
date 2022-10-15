<template>
    <div class="page">
        <Header />

        <main class="main">
            <h1 class="title main__title">Lookbook</h1>

            <div class="main__box">
                <div class="main__item">
                    <div class="main__box">
                        <img
                            src="@/assets/images/shearling-denim-jacket.jpg"
                            alt=""
                            class="main__item-img"
                        />
                        <h3 class="main__item-name">Shearling Denim Jacket</h3>
                        <h4 class="main__item-price">$125.00</h4>
                    </div>
                </div>
                <div class="main__item">
                    <div class="main__box">
                        <p class="text text_medium main__text">Our selection of essentials, designed to be season-proof and made from quality materials.</p>
                    </div>
                    <div class="main__box">
                        <img
                            src="@/assets/images/suede-effect-shirts.jpg"
                            alt=""
                            class="main__item-img"
                        />
                        <h3 class="main__item-name">Suede-effect Shirts</h3>
                        <h4 class="main__item-price">$199.50</h4>
                    </div>
                </div>
                <div class="main__item">
                    <div class="main__box">
                        <img
                            src="@/assets/images/bomber-jacket_2.jpg"
                            alt=""
                            class="main__item-img"
                        />
                        <h3 class="main__item-name">Bomber Jacket</h3>
                        <h4 class="main__item-price">$245.00</h4>
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
    components: {},
    setup() {
        //
    },
});
</script>
