

import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Contact from './components/about/Contact'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'
import Delivery from './components/about/Delivery'
import PersonName from './components/about/contact/PersonName'
import Phone from './components/about/contact/Phone'
export const routes = [
    
        {path: "/",name: "homeLink",components:{
            default: Home,
            orderingGuide: OrderingGuide,
            history: History,
            delivery: Delivery
        }},
        {path: "/menu",name: "menuLink",component: Menu},
        {path: "/admin",name: "adminLink",component: Admin},
        {path: "/login",name: "loginLink",component: Login},
        {path: "/register",name: "registerLink",component: Register},
        {path: "/about",name: "aboutLink",redirect:"/contact",component: About,children: [
          {path:"/history", name: "historyLink",component: History},
          {path:"/contact", name: "contactLink",redirect:"/personName",component: Contact,children:[
            {path: "/personName",name: "personName",component: PersonName},
            {path: "/phone",name: "phoneNumber",component: Phone}
          ]},
          {path:"/orderingGuide", name: "orderingGuideLink",component: OrderingGuide},
          {path:"/delivery", name: "deliveryLink",component: Delivery}
        ]},
        {path: "*",redirect: "/"}
      
]