<template>
    <nav class="app-nav">
      <div class="tab-bar">
         <a class="bar-item" v-link="{ name: 'home', exact: true }">
            <i class="fa fa-comment"></i>
            <p>微信</p>
         </a>
         <a class="bar-item" v-link="{ path: '/contacts' }">
            <i class="fa fa-user-plus"></i>
            <p>通讯录</p>
         </a>
         <a class="bar-item" v-link="{ name: 'discovery', exact: true }">
            <i class="fa fa-compass"></i>
            <p>发现</p>
         </a>
         <a class="bar-item" v-link="{ path: '/me' }">
            <i class="fa fa-user"></i>
            <p>我</p>
         </a>
      </div>
    </nav>
</template>

<style lang="scss">
  $base-font-size: 23.4375px;

  @function pxToRem($px) {
    @return $px / $base-font-size /2 * 1rem;
  }
  .app-nav{
    z-index: 9999;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    transform: translateZ(0);
    background: rgba(251, 248, 248, 0.89);

    &:before {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 1px;
      border-top: 1px solid #d9d9d9;
      color: #d9d9d9;
      transform-origin: 0 0;
      transform: scaleY(.5);
    }


    .tab-bar{
      padding-top: 2px;
      width: 100%;
      height: 55px;
      text-align: center;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      justify-content: space-between;

      a{
        color: #B1ADAD;
        flex: 1;
        text-align: center;
        box-sizing: border-box;
        display: block;
        font-size: 14px;

        .icon{
          font-size: 18px;
          margin-bottom: 5px;
          display: block;
        }
      }
    }
  }
  .custom-active{color:#0DBB07 !important;}
</style>