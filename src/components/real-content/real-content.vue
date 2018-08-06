<style lang="scss" scoped>
@import "./real-content.scss";
</style>

<template lang="html" src="./real-content.html"></template>

<script>
var testLists = [
  {
    id: 1,
    title: 'Grocery List',
    listItems: [
      'milk',
      'eggs',
      'bread'
    ]
  },
  {
    id: 2,
    title: 'To Do List',
    listItems: [
      'clean room',
      'take out trash',
      'wash car'
    ]
  }
];

export default {
  name: "z-real-content",
  data: function() {
    return {
      lists: testLists
    };
  }
};
</script>
