<template>
  <h1>Personajes</h1>
  <button @click="getCharacterRamdon" class="button-41" role="button">Ponte Rickoso</button>
  <Item v-if="showCharacter">
    <template #icon>
      <DocumentationIcon />
    </template>
    <CharacterPicture :characterID="charater.id"/>
    <template #heading>{{charater.name}}</template>
      <p>Especie: {{ charater.species }}</p>
      <p>Estado: {{ charater.status }}</p>
      <p>Genero: {{ charater.gender }}</p>
      <p>Ubicación: {{ charater.location.name }}</p>
  </Item>
</template>

<script setup>
import Item from '@/components/Item.vue'
import DocumentationIcon from '@/components/icons/IconDocumentation.vue'
import CharacterPicture from '@/components/CharacterPicture.vue'
import getCharater from '../helpers/getCharacters'
</script>

<script>
export default {
  name: 'Character',
  components: {
    Item,
    CharacterPicture
  },
  data() {
    return {
      showCharacter: false,
      charater: null
    }
  },
  methods: {
    async getCharacterRamdon() {
      this.showCharacter = true
      const rndInt = Math.floor(Math.random() *826) + 1
      this.charater = await getCharater(rndInt)
    }
  }
}
</script>

<style>
.button-41 {
  background-color: initial;
  background-image: linear-gradient(-180deg, #00D775, #00BD68);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Inter,-apple-system,system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
  height: 44px;
  line-height: 44px;
  outline: 0;
  overflow: hidden;
  padding: 0 20px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: top;
  white-space: nowrap;
  width: 100%;
  z-index: 9;
  border: 0;
}

.button-41:hover {
  background: #00bd68;
}
</style>