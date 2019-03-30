<template>
  <div id="app">
    <div class="buttons-container">
      <citation-choice-button 
        v-for="(ctype, idx) of citationTypes" 
        :key="idx"
        :ctype="ctype" />
    </div>
    <div class="proper-formatting-container">
      <proper-format v-if="citationType !== ''" />
    </div>
    <div class="your-citation-container">
      <your-citation v-if="citationType !== ''" />
    </div>
    <div class="edit-citation-container">
      <edit-citation v-if="citationType !== ''" />
    </div>
  </div>
</template>

<script>
import CitationChoiceButton from './components/CitationChoiceButton.vue'
import ProperFormat from './components/ProperFormat.vue'
import YourCitation from './components/YourCitation.vue'
import EditCitation from './components/EditCitation.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    'citation-choice-button': CitationChoiceButton,
    'proper-format': ProperFormat,
    'your-citation': YourCitation,
    'edit-citation': EditCitation,
  },
  data: () => ({
    citationTypes: ['MLA', 'APA', 'Chicago']
  }),
  computed: {
    ...mapGetters([
      'citationType'
    ])
  }
}
</script>

<style lang="scss">
#app {
  width: 300px;
  height: 700px;
  border: solid 1px rgba(0,0,0,.1);
  margin: 100px auto;
  overflow: hidden;
  padding: 20px;
  * {
    box-sizing: border-box;
  }
  .buttons-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
}
</style>
