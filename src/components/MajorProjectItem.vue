<script setup lang="ts">
    import {type ProjectData} from '@/js/store'
    defineProps<{
        project: ProjectData
    }>()
</script>

<template>
    <div class="project-block container">
        <picture>
            <source :srcSet="project.images.jxl" type="image/jxl" />
            <source :srcSet="project.images.avif" type="image/avif" />
            <img width="200" height="200" decoding="async" loading="lazy" :src="project.images.original" :alt="`${project.name} icon`">
        </picture>
        <div class="project-infos">
            <h3>
                <RouterLink :to="`/project/${project.id}`">
                    {{ project.name }}
                </RouterLink> (<a :href="project.link">Github</a>)
            </h3>
            <p class="project-date">{{ project.dates.end == -1 ? $t("project-today", {
                begin: Date.UTC(project.dates.start, 0)
            }) : $t("project-date", {
                begin: Date.UTC(project.dates.start, 0),
                end: Date.UTC(project.dates.end, 0)
            }) }}</p>
            <p class="project-techs">{{ $t("project-techs", {techs:project.techs.join(", ")}) }}</p>
            <p class="project-role">{{ $t("project-role", {role:$t(project.role)}) }}</p>
            <p class="project-desc">{{ $t(`project-${project.id}-desc`) }}</p>
        </div>
    </div>
</template>