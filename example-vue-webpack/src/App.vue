<template>
  <div id="app" class="app">
    <button class="btn" @click="show">Show Dialog</button>
  </div>
  <dialog :is-showing.sync="showDialog"></dialog>
</template>

<script>
import Dialog from './components/Dialog'

export default {
  data () {
    return {
      showDialog: false
    }
  },
  components: {
    Dialog
  },
  methods: {
    show () {
      this.showDialog = true;
    }
  }
}
</script>

