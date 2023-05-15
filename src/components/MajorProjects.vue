<script setup lang="ts">
    import {data as dataStore} from '@/js/store'
    import MajorProjectItem from './MajorProjectItem.vue'
    const data = dataStore()
</script>

<template>
    <h2>{{ $t("projects") }}</h2>

    <div v-for="project in data.projects">
        <MajorProjectItem :project="project"></MajorProjectItem>
    </div>
</template>