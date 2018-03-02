import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main/main'
import Login from '@/components/login/login'
//import HelloWorld from '@/components/HelloWorld'

// vue-router路由懒加载（解决vue项目首次加载慢）延迟加载
const HelloWorld = r => require.ensure([], () => r(require('@/components/HelloWorld')), 'HelloWorld')

const CTable = (resolve) => {
  import('@/components/content/tab').then((module) => {
    resolve(module);
  })
}
const advancedComponent = (resolve) => {
  import('@/components/content/advancedComponent').then((module) => {
    resolve(module);
  })
}

/**解决路由问题**/
Vue.use(Router)

const routes  = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/main',
    component: Main,
    name:'main',
    children :[
      {
        path: '/',
        component :HelloWorld,
        meta :['HelloWorld','Aalon']
      },
      {
        path: 'home',
        component :CTable,
        meta :['Ctable','Aalon']
      },
      {
        path: 'advance',
        component :advancedComponent,
        meta :['advancedComponent','Aalon']
      }
    ]
  }
]


export default new Router({
  routes
})
