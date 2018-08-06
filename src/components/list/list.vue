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
    description: String,
    listItems: Array
  },
  data: function() {
    return {
      items: this.listItems ? this.listItems.slice() : [],
      newListItemTitle: null
    };
  },
  methods: {
    addListItem: function () {
      if (!this.newListItemTitle || this.newListItemTitle == '') return;

      let tempId = (this.items.length > 0)
                    ? Math.max.apply(Math, this.items.map(x => x.id)) + 1
                    : 1;

      let newListItem = {
        id: tempId,
        title: this.newListItemTitle,
        isComplete: false
      }

      this.items.push(newListItem);
      this.newListItemTitle = null;
    },
    removeCompletedItems: function () {
      this.items = this.items.filter(x => !x.isComplete);
    },
    removeListItem: function (id) {
      this.items = this.items.filter(x => x.id !== id);
    }
  }
};
</script>

