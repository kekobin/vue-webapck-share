<template>
  <div class="home-detail">
    <appheader title="虎牙屌丝(7)">
      <a href="javascript:history.back();" slot="left" ><i class="fa fa-checron-left"></i>微信</a>
        <p slot="right"><i class="fa fa-users"></i></p>
    </appheader>
    <footer>
      <a class="voice"></a>
      <input type="text">
    </footer>
  </div>
</template>

<script>
import Appheader from 'components/header.vue';

export default {
  data (){
    return {
    }
  },
  components: {
    Appheader
  },
  route:{
    data (transition) {
      transition.next();
    }
  }
}
</script>

<style lang="scss">
  .home-detail{
    footer{
      position: fixed;
      z-index: 999;
      bottom:0;
      left:0;
      border:1px solid #eee;
      background:#cecece;
      padding:3px;
    }
  }
</style>
