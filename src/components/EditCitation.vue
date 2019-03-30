<template>
  <div class="edit-citation">
    <h3>Edit Your Citation:</h3>
    <div v-for="(title, idx) of (citationType === 'MLA' ? MLA : citationType === 'APA' ? APA : Chicago)" :key="idx" >
        <p :class="title.flag">{{ title.string }}</p>
        <input type="text" :value="getInputValue(title)" @input="handleUserInput($event, title.key)">
    </div>
    <div class="submit-button" @click="updateCitation">submit</div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'EditCitation',
  data: () => ({
    author: '',
    articleTitle: '',
    website: '',
    date: '',
    url: '',
    MLA: [
      {
        string: "Author's Last name, First name",
        flag: null,
        key: 'author'
      },
      {
        string: "Title of Article or Individual Page",
        flag: null,
        key: 'articleTitle'
      },
      {
        string: "Title of Website",
        flag: 'italics',
        key: 'website'
      },
      {
        string: "Date of Publication",
        flag: null,
        key: 'date'
      },
      {
        string: 'URL',
        flag: null,
        key: 'url'
      }],
    APA: [
      {
        string: "Author's Last name, First name",
        flag: null,
        key: 'author'
      },
      {
        string: "Date of Publication",
        flag: null,
        key: 'date'
      },
       {
        string: "Title of Article or Individual Page",
        flag: null,
        key: 'articleTitle'
      },
      {
        string: 'URL',
        flag: null,
        key: 'url'
      }],
    Chicago: [
      {
        string: "Author's Last name, First name",
        flag: null,
        key: 'author'
      },
       {
        string: "Title of Article or Individual Page",
        flag: null,
        key: 'articleTitle'
      },
       {
        string: "Title of Website",
        flag: 'italics',
        key: 'website'
      },
      {
        string: "Date of Publication",
        flag: null,
        key: 'date'
      },
      {
        string: 'URL',
        flag: null,
        key: 'url'
      }],
  }),
  methods: {
    getInputValue (title) {
      if (title.key === "author") {
        this[title.key] = this.fullState.authorLastname + ', ' + this.fullState.authorFirstname
        return this.fullState.authorLastname + ', ' + this.fullState.authorFirstname
      } else if (title.key === "articleTitle") {
        this[title.key] = this.fullState.articleTitle
        return this.fullState.articleTitle
      } else if (title.key === "website") {
        this[title.key] = this.fullState.website
        return this.fullState.website
      } else if (title.key === "date") {
        this[title.key] = this.fullState.dateOfPublication
        return this.fullState.dateOfPublication
      } else if (title.key === "url") {
        this[title.key] = this.fullState.url
        return this.fullState.url
      } else  {
        return 'n/a'
      }
    },
    handleUserInput (e, key) {
      this[key] = e.target.value
    },
    updateCitation () {
      this.$store.dispatch('updateCitationValues', {
        url: this.url,
        articleTitle: this.articleTitle,
        dateOfPublication: this.date,
        authorFirstname: this.author.split(', ')[1],
        authorLastname: this.author.split(', ')[0],
        website: this.website,
      }).then(() => {
        this.$store.dispatch('updateFormattedCitation', this.citationType)
      })
    }
  },
  computed: {
    ...mapGetters([
      'formattedCitation',
      'citationType',
      'fullState'
    ])
  }
}
</script>

<style lang="scss">

.edit-citation {
  border: solid 1px rgba(0,0,0,.2);
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,.2);
  margin: 20px auto;
   h3 {
    margin: 5px 0 10px 0;
  }
  input {
    border: solid 1px rgba(0,0,0,.2);
  }
}

</style>
