<style lang="scss" scoped>
@import "./list.scss";
</style>

<template lang="html" src="./list.html"></template>

<script>
export default {
  name: "z-list",
  props: {
    id: Number,
    title: String,
    listItems: Array
  },
  data: function() {
    return {
      newListItem: null
    };
  },
  methods: {
    addListItem: function () {
      if (!this.newListItem || this.newListItem == '') return;
      this.listItems.push(this.newListItem);
    }
  }
};
</script>

