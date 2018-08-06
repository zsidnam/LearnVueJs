<style lang="scss" scoped>
@import "./list-item.scss";
</style>

<template lang="html" src="./list-item.html"></template>

<script>
export default {
  name: "z-list-item",
  props: {
    id: Number,
    title: String,
    listItems: Array
  },
  data: function() {
    return {
      newListItem: null
    };
  }
};
</script>

