<template>
    <nav class="nav">
        <router-link to="/new" class="nav__item">New</router-link>
        <router-link to="/shop" class="nav__item">Shop</router-link>
        <router-link to="/collections" class="nav__item"
            >Collections</router-link
        >
        <router-link to="/about" class="nav__item">About</router-link>
    </nav>
</template>

<style lang="sass" scoped>
.nav
    display: flex

    align-items: center

    column-gap: 32px

.nav__item
    font-weight: 600
</style>
