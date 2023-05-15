<script setup lang="ts">
    import {type LanguageSkill} from '@/js/store'
    defineProps<{
        skills: LanguageSkill[]
    }>()
</script>

<template>
    <vue-collapsible-panel-group>
        <vue-collapsible-panel v-for="skill in skills" :expanded="false" :hasContent="skill.frameworks ? skill.frameworks.length > 0 : false">
            <template #title>
                {{ skill.name }}
            </template>
            <template v-if="skill.frameworks ? skill.frameworks.length > 0 : false" #content>
                <div v-for="framework in skill.frameworks">
                    {{ framework }}
                </div>
            </template>
        </vue-collapsible-panel>
    </vue-collapsible-panel-group>
</template>