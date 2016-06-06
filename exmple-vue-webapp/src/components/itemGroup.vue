<template>
    <section class="item-group">
      <ul>
        <li v-for="item in list">
          <a v-link="{path: item.link}">
            <img v-if="item.avatar" src="../assets/img/avatar.png">
            <i v-if="item.icon" class="fa {{item.icon}}"></i>
            <span v-text="item.name"></span>
            <i class="fa fa-angle-right fr" v-if="item.arrow"></i>
          </a>
        </li>
      </ul>
    </section>
</template>

<script>
  export default {
    props: ['list'],
    data (){
      return {

      }
    }
  }  
</script>

<style lang="scss">
 .item-group{
  ul{
    background: #fff;
    padding-left:10px;
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
  li {
    padding:10px 0;
    border-top:1px solid #eee;
    a{
      display:block;
      width:100%;
      height:100%;
      color:#000;
      font-size: 14px;
    }
    &:first-child{
      border-top:none;
    }
    img{
      width:25px;
      heihgt:25px;
    }
    .fa-angle-right{
      margin-right:10px;
    }
  }
 }
</style>