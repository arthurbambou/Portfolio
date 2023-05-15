<script setup lang="ts">
    import {data as dataStore} from '@/js/store'
    import {type LanguageSkill} from '@/js/store'
    import SkillItem from './SkillItem.vue'
    const data = dataStore()

    const frontSkills: LanguageSkill[] = []
    const commonSkills: LanguageSkill[] = []
    const backSkills: LanguageSkill[] = []
    
    data.skills.languages.forEach((val, index, array) => {
        let skills = frontSkills;

        if (val.side == "back") skills = backSkills;
        else if (val.side == "fullstack") skills = commonSkills;

        skills.push(val)
    })

    const tools = data.skills.tools
</script>

<template>
    <h2>{{ $t("skills") }}</h2>
    <div class="container skill-container">
        <div>
            <h3>{{ $t("skills-front") }}</h3>
            <SkillItem :skills="frontSkills"></SkillItem>
        </div>
        <div>
            <h3>{{ $t("skills-fullstack") }}</h3>
            <SkillItem :skills="commonSkills"></SkillItem>
        </div>
        <div>
            <h3>{{ $t("skills-back") }}</h3>
            <SkillItem :skills="backSkills"></SkillItem>
        </div>
        <div>
            <h3>{{ $t("skills-tools") }}</h3>
            <div v-for="tool in tools">
                {{ tool }}
            </div>
        </div>
    </div>
</template>