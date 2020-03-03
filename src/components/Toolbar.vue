<template>
  <div id="toolbar">
    <span @click="addOne" class="glyphicon glyphicon-plus"></span>
    <span @click="toggleFavorite" class="glyphicon glyphicon-star"></span>
    <span @click="deleteNote" class="glyphicon glyphicon-remove"></span>
  </div>
</template>

<script>
  export default {
    methods: {
      addOne () {
        this.$store.dispatch('addNote')
      },
      toggleFavorite () {
        this.$store.dispatch('toggleFavorite')
      },
      deleteNote () {
        this.$store.dispatch('deleteNote')
      }
    }
  }
</script>

<style>
#toolbar {
  float: left;
  width: 80px;
  height: 100%;
  background-color: #30414D;
  color: #767676;
  padding: 35px 25px 25px 25px;
}
#toolbar span {
  font-size: 30px;
  margin-bottom: 35px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.5s ease;
}
#toolbar span:hover {
  opacity: 1;
}
</style>
