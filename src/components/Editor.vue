<template>
  <div id="note-editor">
    <textarea v-bind:value="activeNoteText" v-on:input="editNote" class="form-control"></textarea>
  </div>
</template>

<script>
  export default {
    methods: {

    }
}
</script>

<style>
	
</style>
