<template>
  <div :class="['citation-choice-button', {'selected': citationType === ctype}]" @click="handleClick(ctype)">
    {{ ctype }}
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'CitationChoiceButton',
  props: {
    ctype: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick (ctype) {
      this.$store.dispatch('setCitationType', ctype)
      this.$store.dispatch('updateFormattedCitation', ctype)
    }
  },
  computed: {
    ...mapGetters([
      'citationType'
    ])
  }
}
</script>

<style lang="scss">

.citation-choice-button {
  padding: 10px 20px;
  border: solid 1px rgba(0,0,0,.5);
  font-size: 16px;
  text-transform: uppercase;
  position: relative;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,.2);
  border-radius: 4px;
  &:after, &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0px;
    height: 100%;
    background: red;
    transition: all .2s ease-in-out;
    z-index: -1;
  }
  &:hover, &.selected {
    color: white;
    &:after {
      right: 0;
      width: 50%;
    }
    &:before {
      left: 0; 
      right: 50%;
      width: 50%;
    }
  }

}

</style>
