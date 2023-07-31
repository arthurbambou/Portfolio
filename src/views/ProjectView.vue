<script setup lang="ts">
    import {data as dataStore, type ProjectData} from '@/js/store'
    const data = dataStore()

    function getProject(id:string) {
        let proj: ProjectData | null = null

        for (let index = 0; index < data.projects.length; index++) {
            const project = data.projects[index];
            
            if (project.id == id) {
                proj = project
                break
            }
        }

        return proj;
    }
</script>

<template>
    <main>
        <h1>{{ getProject($route.params.id)?.name }}</h1>
        <picture>
            <source :srcSet="getProject($route.params.id)?.images.jxl" type="image/jxl" />
            <source :srcSet="getProject($route.params.id)?.images.avif" type="image/avif" />
            <img width="200" height="200" decoding="async" loading="lazy" :src="getProject($route.params.id)?.images.original" :alt="`${getProject($route.params.id)?.name} icon`">
        </picture>
        <p class="project-date">{{ getProject($route.params.id)?.dates.end == -1 ? $t("project-today", {
            begin: Date.UTC(getProject($route.params.id)?.dates.start, 0)
        }) : $t("project-date", {
            begin: Date.UTC(getProject($route.params.id)?.dates.start, 0),
            end: Date.UTC(getProject($route.params.id)?.dates.end, 0)
        }) }}</p>
        <p class="project-techs">{{ $t("project-techs", {techs:getProject($route.params.id)?.techs.join(", ")}) }}</p>
        <p class="project-desc">{{ $t(`project-${getProject($route.params.id)?.id}-desc`) }}</p>
    </main>
</template>