import Home from './components/index'
import DD from './components/HelloWorld'
import Login from './components/Login'

export const routes = [{
    path: '/',
    name: "homeLink",
    component: Home
  },
  {
    path: '/dd',
    name: 'dd',
    component: DD
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  }
]
