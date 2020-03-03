<template>
  <!-- <div id="notes-list">
    <div id="list-header">
      <h2>Notes</h2>
      <div class="btn-group btn-group-justified" role="group">
        <div class="btn-group" role="group">
          <button @click="show='all'" type="button" class="btn btn-default" v-bind:class="{active:show=='all'}">
            All Notes
          </button>
        </div>
        <div class="btn-group" role="group">
          <button @click="show='favorites'" type="button" class="btn btn-default" v-bind:class="{active:show=='favorites'}">
            Favorites
          </button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="list-group">
        <a v-for="item in notes" class="list-group-item" v-bind:class="{active:activeNote == item}" v-on:click="updateActiveNote(item)" href="#">
          <h4 class="list-group-item-heading">
            {{item.text}}
          </h4>
        </a>
      </div>
    </div>
  </div> -->
  <div>
    <el-row>
      <el-col :span="5" :offset="5">
        <el-tabs>
          <el-tab-pane label="AllNOTES" name="first">
          <el-col  class="container">
            <li v-for="item in notes" class="list-group-item">
            	{{item.text}}
            </li>
          </el-col>
          </el-tab-pane>
          <el-tab-pane label="important" name="second">
            <!-- <important></important> -->
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import important from './components/important'
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  components: {
    // important
  }
}
</script>

<style>
/*.container {
  height: calc(100% - 137px);
  max-height: calc(100% - 137px);
  overflow: auto;
  width: 100%;
  padding: 0;
}

.container .list-group-item {
  font-weight: 300;
  font-size: 15px;
}*/
</style>
