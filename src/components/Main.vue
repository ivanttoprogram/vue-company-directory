<script setup>
    import MainSearch from './MainSearch.vue'
    import MainCards from './MainCards.vue'
</script>

<template>
    <div class="wrapper">
        <MainSearch />
        <MainCards />
    </div>
</template>

<style scoped lang="postcss">
    .wrapper {
        @apply fcontainer mx-auto flex flex-col gap-4
    }

</style>
