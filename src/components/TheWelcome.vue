<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import CharacterPicture from '@/components/CharacterPicture.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import getCharater from '../helpers/getCharacters'
</script>

<template>
  <h1>Personajes</h1>
  <button @click="getCharacterRamdon">Ponte Rickoso</button>
  <WelcomeItem v-if="showCharacter">
    <template #icon>
      <DocumentationIcon />
    </template>
    <CharacterPicture :characterID="charater.id"/>
    <template #heading>{{charater.name}}</template>
      <p>Especie: {{ charater.species }}</p>
      <p>Estado: {{ charater.status }}</p>

  </WelcomeItem>
</template>

<script>
export default {
  name: 'TheWelcome',
  components: {
    WelcomeItem,
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