export function configRouter(router) {
  router.map({
    "/": {//首页
      name:'home',
      component: require("./views/home.vue")
    },
    "/contacts": {//通讯录
      name:'contacts',
      component: require("./views/contacts.vue")
    },
    "/discovery": {//通讯录
      name:'discovery',
      component: require("./views/discovery.vue")
    },
    "/me": {//通讯录
      name:'me',
      component: require("./views/me.vue")
    },
    // 我的红包
    '/home/homeDetail/:id': {
      name:'homeDetail',
      component(resolve){ require(['./views/homeDetail.vue'],resolve) }
    }
  });

  //全局放一个routlist
  window.routeList = [];
  window.pageList = ['home', 'contacts', 'discovery', 'me'];
  window.prevPage = 'home';

  router.beforeEach(transition => {
    window.scrollTo(0, 0);

    if (routeList.length > 1 && transition.to.name == routeList[routeList.length - 2]['name']) {
      if(containsInPageList(transition.to.name)) {
        router.app.effect = 'normal';
      } else {
        router.app.effect = 'prev'; //返回
      }

      routeList.splice(routeList.length - 1, 1);
    } else {
      if(containsInPageList(transition.to.name)) {
        router.app.effect = 'normal';
      } else {
        router.app.effect = 'next'; //前进
      }
      
      routeList.push({
        name: transition.to.name,
        path: transition.to.path,
        query: transition.to.query,
        params: transition.to.params,
        timer: +new Date
      });
    }

    //使底部菜单栏在一级路由切换时一直保持显示
    //在二级页时隐藏
    var toPath = transition.to.path;
    if (toPath.replace(/[^/]/g, "").length > 1) {
      router.app.isIndex = false;
    } else {
      router.app.isIndex = true;
    }

    setTimeout(function() {
      //这里加上延迟是要在afterEach之后在执行
      transition.next();
    }, 150);
  });

  //可以记录访问路径
  router.afterEach(transition => {
    //这里必须要加上， 此钩子函数会在beforeEach之后马上执行,没有这句会导致
    //当你浏览顺序为，首页->页面二->页面三
    //此时点击页面二正常返回，然后再次选择页面三，本应该是前进，结果还是返回。

    if(containsInPageList(transition.to.name)) {
      router.app.effect = 'normal';
    } else {
      router.app.effect = 'next'; //前进
    }
    // router.app.effect = 'next'; //重置前进
    
    window.prevPage = transition.to.name;
  });

  function containsInPageList(path) {
    let currentPathresult = false, prevPathresult = false;

    for(let i=0, len=pageList.length;i<len;i++) {
      let item = pageList[i];

      if(item == path) currentPathresult = true;
      if(item == prevPage) prevPathresult = true;
    }

    return prevPathresult && currentPathresult;
  }
}