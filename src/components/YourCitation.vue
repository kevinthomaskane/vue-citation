<template>
  <div class="your-citation">
    <h3>Your Citation:</h3>
    {{ formattedCitation }}
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'YourCitation',
  computed: {
    ...mapGetters([
      'formattedCitation'
    ])
  }
}
</script>

<style lang="scss">

.your-citation {
  border: solid 1px rgba(0,0,0,.2);
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,.2);
  margin: 20px auto;
   h3 {
    margin: 5px 0 10px 0;
  }
}

</style>
