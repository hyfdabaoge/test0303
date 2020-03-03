<template>
  <div id="app">
    <toolbar></toolbar>
    <note-list></note-list> 
    <!-- <editor></editor>  -->
  </div>
</template>

<script>
import Toolbar from './components/Toolbar'
import NoteList from './components/NoteList'
import Editor from './components/Editor'
export default {
  components: {
    Toolbar,
    NoteList,
    Editor
  }
}
</script>

<style>
#app {
 /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
html, #app{
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  border: 0;
  height: 100%;
 /* max-height: 100%;*/
  position: relative;
}
</style>
