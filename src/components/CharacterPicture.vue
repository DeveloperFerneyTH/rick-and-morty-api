<template>
    <div>
        <img :src="imgSrc" alt="rick-and-morty">
    </div>
</template>

<script>
export default {
    props: {
        characterID : {
            type: Number,
            required: true
        }
    },
    computed: {
        imgSrc() {
            return `https://rickandmortyapi.com/api/character/avatar/${this.characterID}.jpeg`
        }
    }
}
</script>