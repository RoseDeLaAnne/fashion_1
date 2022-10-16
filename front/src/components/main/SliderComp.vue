<template>
    <div class="slider">
        <div
            @click="slide('left')"
            class="slider__item"
            :class="{ slide__item_inactive: page <= 1 }"
        >
            <svg class="icon icon_small slider__icon">
                <use href="@/assets/icons/sprites.svg#arrow_left" />
            </svg>
        </div>
        <div @click="slide('right')" class="slider__item" :class="{ slide__item_inactive: page === count }">
            <svg class="icon icon_small slider__icon">
                <use href="@/assets/icons/sprites.svg#arrow_right" />
            </svg>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        page: Number,
        count: Number,
    },
    methods: {
        slide(direction: string) {
            this.$emit("update", direction);
        },
    },
    setup() {
        //
    },
});
</script>

<style lang="sass" scoped>
.slider
    display: flex

    column-gap: 16px

.slider__item
    padding: 10px

    background-color: #fff
    box-shadow: 0 5px 10px rgba(#000, .15)

    border-radius: 50%

    transition: background-color .5s ease-in-out

    cursor: pointer

    &:hover
        background-color: #F2EBDD

    &.slide__item_inactive
        background-color: rgba(#000, .125)
</style>
