<template>
  <div class="dialog-wrap" ng-if="isShowing">
    <div class="mask" :class="{show: isShowing}"></div>
    <section class="dialog" :class="{show: isShowing}">
      <header class="dialog-hd">
        <h3>Dialog Title</h3>
      </header>
      <div class="dialog-bd">
        <p class="v-center">Hello Dialog</p>
        <button class="close" @click="closeDialog">Close</button>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    props: ['isShowing'],
    methods: {
      closeDialog () {
        this.isShowing = false;
      }
    }
  }
</script>

<style scoped>
  .dialog{
    position:absolute;
    left:50%;
    top:40%;
    margin-left:-250px;
    width:500px;
    border-radius: 10px;
    box-shadow:0px 2px 2px #f2f2f2;
    background:#444;
    visibility:hidden;  
    z-index:10;

    -webkit-transition:all .2s ease-in-out;
    transition:all .2s ease-in-out;
  }
  .show.dialog{
    visibility:visible;
    -webkit-animation: slide-from-top .4s ease-in;
    animation: slide-from-top .4s ease-in;
  }
  .dialog .dialog-hd{
    height: 50px;
    line-height:50px;
  }
  .dialog .dialog-hd h3{
    text-align:left;
    padding-left:15px;
    color:#fff;
  }
  .dialog .dialog-bd{
    min-height:300px;
    background:#fff;
    padding:10px;
    text-align:center;
  }
  .mask{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.4);
    visibility:hidden;
  }
  .show.mask{
    visibility:visible;
  }
  .close{
    border:none;
    padding:15px 40px;
    font-size:20px;
    color:#fff;
    text-align:center;
    margin:15% auto 0;
    background:#ccc;
    border-radius: 8px;
  }

  @-webkit-keyframes slide-from-top{
    0% {
      -webkit-transform: scale(.1);
      transform: scale(.1);
    }
    70%{
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    100%{
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes slide-from-top{
    0% {
      -webkit-transform: scale(.1);
      transform: scale(.1);
    }
    70%{
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    100%{
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
</style>
