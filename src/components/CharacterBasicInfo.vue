<template>
    <InfoText v-if="character.personal?.affiliation" :title="'Filiação:'" :value="character.personal.affiliation" />
    <InfoText v-if="character.personal?.clan" :title="'Clan:'" :value="character.personal.clan" />
</template>

<script>
import InfoText from '@/components/InfoText'

export default {
    name: 'CharacterBasicInfo',
    components: {
        InfoText
    },
    props: {
        character: {
            type: Object,
            required: true
        }
    }
}
</script>