<style lang="scss" scoped>
@import "./real-content.scss";
</style>

<template lang="html" src="./real-content.html"></template>

<script>
var testLists = [
  {
    id: 1,
    title: 'Grocery List',
    description: 'A list of groceries needed from the store',
    listItems: [
      {
        id: 1,
        title: 'milk',
        isComplete: true
      },
      {
        id: 2,
        title: 'eggs',
        isComplete: false
      },
      {
        id: 3,
        title: 'bread',
        isComplete: false
      }
    ]
  },
  {
    id: 2,
    title: 'To Do List',
    description: 'A list of chores to do around the house',
    listItems: [
      {
        id: 1,
        title: 'wash car',
        isComplete: false
      },
      {
        id: 2,
        title: 'clean room',
        isComplete: false
      },
      {
        id: 3,
        title: 'make dinner',
        isComplete: false
      }
    ]
  }
];

export default {
  name: "z-real-content",
  data: function() {
    return {
      lists: testLists
    };
  },
  methods: {
    saveLists: function () {
      alert('Coming Soon!');
    }
  }
};
</script>
