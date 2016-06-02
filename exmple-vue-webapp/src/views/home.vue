<template>
  <div class="homepage">
    <appheader title="微信"></appheader>
    <section class="content">
      <ul class="msg-list">
        <li v-link="{path: '/home/homeDetail/111'}">
          <a>
            <img src="../assets/img/avatar.png">
            <div class="more">
              <h3>虎牙屌丝</h3>
              <p>页面切割机:撸一撸</p>
            </div>
          </a>
        </li>
      </ul>
    </section>
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
  .msg-list{
    padding-left:10px;
    li{
      padding: 10px 0;
      border-bottom:1px solid #eee;

      *zoom: 1;
      &:before,
      &:after{
        content: "";
        display: table;
        line-height: 0;
      }
      &:after{
        clear: both;
      }
    }
    img, .more{
      float:left;
    }
    img{
      width:35px;
      height:35px;
    }
    .more{
      margin-left:15px;
      h3{
        font-size:14px;
        padding-bottom:3px;
      }
      p{
        font-size:12px;
      }
    }
  }
</style>
