<template>
  <div class="proper-format">
    <h3>Proper format:</h3>
    {{ formattedString }}
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'ProperFormat',
   data: () => ({
    formattedString: ''
  }),
  mounted () {
    this.returnProperFormat(this.citationType)
  },
  methods: {
    returnProperFormat (ctype) {
      switch (ctype) {
        case 'MLA':
          this.formattedString = "Author’s Last name, First name. “Title of the Article or Individual Page.” Title of the Website, Date of Publication, URL."
          break;
        case 'APA': 
          this.formattedString = "Author's Last name, First name. (Year, Month Day Published). Article title or individual page. Retrieved from URL."
          break;
        case 'Chicago': 
          this.formattedString = "Author's Last name, First name. “Article Title or Individual Page.” Website Title. Month Day, Year of publication. URL."
          break;
        default:
          null;
          break;
      }
    }
  },
  computed: {
    ...mapGetters([
      'citationType'
    ])
  },
  // watch updates to the store in order to re-render proper formatted string
  watch: {
    citationType (newType, /* oldType */) {
      this.returnProperFormat(newType)
    }
  }
}
</script>

<style lang="scss">

.proper-format {
  border: solid 1px rgba(0,0,0,.2);
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,.2);
  margin: 20px auto;
  h3 {
    margin: 5px 0 10px 0;
  }
}

</style>
