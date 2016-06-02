<template>
  <div class="home-detail">
    <appheader title="虎牙屌丝(7)">
      <a href="javascript:history.back();" slot="left" ><i class="fa fa-chevron-left"></i>&nbsp;微信</a>
        <p slot="right"><i class="fa fa-users"></i></p>
    </appheader>
    
    <section class="detail-content">
      <div class="inner">
        <ul>
          <li v-for="item in data" :class="{'msg-mine': item.belong == 'me', 'msg-other': item.belong == 'other'}">
            <article :class="{'msg-normal': item.type == 'normal', 'msg-img': item.type == 'img'}">
              <img v-if="item.uid == 1" class="avatar" src="../assets/img/long.jpg">
              <img v-if="item.uid == 2" class="avatar" src="../assets/img/xing.jpg">
              <img v-if="item.uid == 0" class="avatar" src="../assets/img/default.jpg">
              <div class="pop">
                <span v-text="item.msg"></span>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>
    <footer>
      <a class="voice"><i class="fa fa-spotify"></i></a>
      <input type="text" @keyup.enter="submit" v-model="chatMsg">
      <i class="fa fa-smile-o icon-smile"></i>
      <i class="fa fa-plus-square-o icon-smile"></i>
    </footer>
  </div>
</template>

<script>
import Appheader from 'components/header.vue';

export default {
  data (){
    return {
      data: [
      ],
      chatMsg: ''
    }
  },
  components: {
    Appheader
  },
  route:{
    data (transition) {
      this.getAjaxData(transition);
      transition.next();
    },
    deactivate (transition){
       this.data = [];
       this.page = 1;
       transition.next();
    }
  },
  methods: {
    getAjaxData (transition) {
      let temp = [
        {
          uid: 1,
          type: 'normal',
          belong: 'other',
          msg: '小猩猩'
        },{
          uid: 2,
          type: 'normal',
          belong: 'other',
          msg: '龙爷'
        },{
          uid: 0,
          type: 'normal',
          belong: 'me',
          msg: '龙爷'
        }
      ];

      this.data = temp;
    },
    getScrollData (transition) {

    },
    submit () {
      this.data.push({
        uid: 0,
        type: 'normal',
        belong: 'me',
        msg: this.chatMsg
      });

      this.chatMsg = '';
    }
  }
}
</script>

<style lang="scss">
  .home-detail{
    width:100%;
    height:100%;
    background:url(../assets/img/detail-bg.jpg) no-repeat;
    footer{
      position: fixed;
      z-index: 999;
      bottom:0;
      left:0;
      width:100%;
      border:1px solid #eee;
      background:#F1EEEE;
      height: 45px;
      line-height: 45px;
      padding:0 5px;

      input{
        display: inline-block;
        border-radius:3px;
        border:1px solid #ccc;
        outline:none;
        margin-top: -4px;
        &:focus{
          border:none;
          outline:none;
        }
      }
    }
  }
  .voice i, .icon-smile{
    color:#B1ACAC;
    vertical-align: -2px;
  }
  .detail-content{
    position:absolute;
    top:50px;
    bottom:50px;
    width:100%;
    overflow-y: scroll;
    .inner{
      padding:0 5px;
    }
    li{
      position: relative;
      min-height: 60px;
      margin-bottom:10px;
      *zoom:1;
      &:before,&:after{
        content:'';
        display:table;
        line-height: 0;
      }
      &:after{
        clear:both;
      }
    }
    article{
      *zoom:1;
      &:before,&:after{
        content:'';
        display:table;
        line-height: 0;
      }
      &:after{
        clear:both;
      }
      img{
        width:45px;
        height:45px;
      }
    }
  }
  .msg-other .msg-normal{
    float:left;
  }
  .msg-mine .msg-normal{
    float:right;
  }
  .msg-other{
    img{
      float:left;
    }
    .pop{
      left:60px;

      &:before{
        top: 8px;
        left: -8px;
        border-width: 5px 8px 5px 0;
        border-color: transparent #fdfdfd;
      }
    }
  }
  .msg-mine{
    img{
      float:right;
    }
    .pop{
      right:60px;

      &:before{
        top: 8px;
        right: -8px;
        border-width: 5px 0 5px 8px;
        border-color: transparent #fdfdfd;
      }
    }
  }
  .pop{
    position: absolute;
    top: 9px;
    padding: 5px;
    background: #fdfdfd;
    border-radius: 6px;
    font-size: 14px;
    color:#191313;

    &:before{
      position: absolute;
      border-style: solid;
      
      z-index: 1;
      content: '';
    }
  }
</style>

