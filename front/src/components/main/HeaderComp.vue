<template>
    <header class="header">
        <div class="header__box header__box_1">
            <Logo />
        </div>

        <div class="header__box header__box_2">
            <Nav />
        </div>

        <div class="header__box header__box_3">
            <div class="header__box header__box_31">
                <!-- <div class="custom-input">
                    <svg class="icon icon_small custom-input__icon">
                        <use href="@/assets/icons/sprites.svg#search" />
                    </svg>
                    <input
                        type="text"
                        class="custom-input__input"
                        placeholder="Search"
                    />
                </div> -->
                <svg class="icon icon_small header__icon">
                    <use href="@/assets/icons/sprites.svg#search" />
                </svg>
            </div>

            <div class="header-decor">|</div>

            <div class="header__box header__box_32">
                <router-link to="/auth/login" class="login">
                    <div class="login__name">Login</div>
                </router-link>
                <router-link to="/bags" class="bags">
                    <div class="bags__name">Bags (0)</div>
                </router-link>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Logo from "@/components/LogoComp.vue";
import Nav from "@/components/main/NavComp.vue";

export default defineComponent({
    components: {
        Logo,
        Nav,
    },
    setup() {
        //
    },
});
</script>

<style lang="sass" scoped>
.header
    padding: 48px 64px

    display: grid
    grid-template-columns: 1fr 2fr 1fr

.header__box
    display: inline-flex

    align-items: center

    &.header__box_1
        justify-content: flex-start

    &.header__box_2
        justify-content: center

    &.header__box_3
        justify-content: flex-end

        column-gap: 64px

    &.header__box_32
        column-gap: 64px
</style>
