import Vue from 'vue'
import Router from 'vue-router'
import HelloWord from "@/components/HelloWorld"
import Hello2 from "@/components/Hello2"
import Hello3 from "@/components/Hello3"
import MyForm from "@/pages/form"

Vue.use(Router)

export default new Router({
  routes:[
  	{
  		path:"/",
  		component:HelloWord
  	},{
  		path:"/hello2",
  		component:Hello2
  	},{
  		path:"/hello3",
  		component:Hello3
  	},{
  		path:"/form",
  		component:MyForm
  	}
  ]
})
