<template>
    <header class="header">
        <router-link to="/" class="logo">
            <img src="" alt="" class="logo__img" />
        </router-link>

        <Nav />

        <div class="header__box">
            <div class="custom-input">
                <svg class="icon icon_small custom-input__icon">
                    <use href="@/assets/icons/sprites.svg#search" />
                </svg>
                <input
                    type="text"
                    class="custom-input__input"
                    placeholder="Search"
                />
            </div>

            <router-link to="/auth/login" class="login">
                <div class="login__name">Login</div>
            </router-link>
            <router-link to="/bags" class="bags">
                <div class="bags__name">Bags (0)</div>
            </router-link>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Nav from "@/components/main/NavComp.vue";

export default defineComponent({
    components: {
        Nav,
    },
    setup() {
        //
    },
});
</script>

<style lang="sass" scoped>
.header
    display: grid
    grid-template-columns: 1fr 2fr 1fr

.header__box
    display: flex

    align-items: center
</style>
