  /**
   * 公共路由>>>>>>
   */
  import DD from './components/HelloWorld'
  import Login from './components/Login'


  /** 
   *  index>>>>>
   * 患者简介、病例档案
   * 凝血指标、疾病简介
   * 住院情况、手术概况
   *  */
  import patient from './components/patient'
  import M_case from './components/M_case'
  import cruor from './components/cruor'
  import illness from './components/illness'
  import hospital from './components/hospital'
  import operation from './components/operation'


  /**
   * 底部导航栏>>>>>
   * 首页
   * 近况
   * 病史
   *  */
  import Home from './components/index'
  import recent from './components/recent'
  import M_history from './components/M_history'





  export const routes = [
      /**
       * 公共路由>>>>>>
       */
      {
          path: '/dd',
          name: 'dd',
          component: DD
      }, {
          path: '/Login',
          name: 'Login',
          component: Login
      },

      /** 
       *  首页index>>>>>>
       * 患者简介、病例档案
       * 凝血指标、疾病简介
       * 住院情况、手术概况
       *  */
      {
          path: '/patient',
          name: "patient",
          component: patient
      },
      {
          path: '/M_case',
          name: "M_case",
          component: M_case
      },
      {
          path: '/cruor',
          name: "cruor",
          component: cruor
      },
      {
          path: '/illness',
          name: "illness",
          component: illness
      },
      {
          path: '/hospital',
          name: "hospital",
          component: hospital
      },
      {
          path: '/operation',
          name: "operation",
          component: operation
      },

      /**
       * 底部导航栏>>>>>
       * 首页
       * 近况
       * 病史
       *  */
      {
          path: '/',
          name: "homeLink",
          component: Home
      },
      {
          path: '/recent',
          name: 'recent',
          component: recent
      },
      {
          path: '/M_history',
          name: 'M_history',
          component: M_history
      }
  ]