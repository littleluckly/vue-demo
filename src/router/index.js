import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import eventHanding1 from '@/components/eventHanding1'
import eventHanding2 from '@/components/eventHanding2'
import eventHanding3 from '@/components/eventHanding3'
import eventHanding4 from '@/components/eventHanding4'
import keyModifiers from  '@/components/keyModifiers'

import Conditionals1 from '@/components/Conditionals1'
import Conditionals2 from '@/components/Conditionals2'
import Conditionals3 from '@/components/Conditionals3'
import Conditionals4 from '@/components/Conditionals4'
import Conditionals5 from '@/components/Conditionals5'

import loops1 from '@/components/loops1'
import loops2 from '@/components/loops2'
import loops3 from '@/components/loops3'
import loops4 from '@/components/loops4'

import formInput1    from '@/components/formInput1'
import formInput2    from '@/components/formInput2'
import formInput3    from '@/components/formInput3'
import formInput4    from '@/components/formInput4'
import formInput5    from '@/components/formInput5'
import formInput6    from '@/components/formInput6'
import handUserInput from '@/components/handUserInput'
import dataBind from '@/components/dataBind'
import filters from '@/components/filters'
import computed1 from '@/components/computed1'

import bindClass1 from '@/components/bindClass1'
import bindClass2 from '@/components/bindClass2'
import bindClass3 from '@/components/bindClass3'
import bindClass4 from '@/components/bindClass4'
import toDoList from '@/components/toDoList'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/eventHanding1',
      name: 'eventHanding1',
      component: eventHanding1
    },
    {
      path: '/eventHanding2',
      name: 'eventHanding2',
      component: eventHanding2
    },
    {
    	path: '/eventHanding3',
    	name: 'eventHanding3',
    	component: eventHanding3
    },   
    {
    	path: '/eventHanding4',
    	name: 'eventHanding4',
    	component: eventHanding4
    },
    {
    	path: '/keyModifiers',
    	name: 'keyModifiers',
    	component: keyModifiers
    },
    {
    	path: '/Conditionals1',
    	name: 'Conditionals1',
    	component: Conditionals1
    },    
    {
    	path: '/Conditionals2',
    	name: 'Conditionals2',
    	component: Conditionals2
    },    
    {
    	path: '/Conditionals3',
    	name: 'Conditionals3',
    	component: Conditionals3
    },    
    {
    	path: '/Conditionals4',
    	name: 'Conditionals4',
    	component: Conditionals4
    },    
    {
    	path: '/Conditionals5',
    	name: 'Conditionals5',
    	component: Conditionals5
    },
    {
    	path: '/loops1',
    	name: 'loops1',
    	component: loops1
    },    
    {
    	path: '/loops2',
    	name: 'loops2',
    	component: loops2
    },    
    {
    	path: '/loops3',
    	name: 'loops3',
    	component: loops3
    },    
    {
    	path: '/loops4',
    	name: 'loops4',
    	component: loops4
    },
    {
    	path: '/formInput1',
    	name: 'formInput1',
    	component: formInput1
    },    
    {
    	path: '/formInput2',
    	name: 'formInput2',
    	component: formInput2
    },    
    {
    	path: '/formInput3',
    	name: 'formInput3',
    	component: formInput3
    },    
    {
    	path: '/formInput4',
    	name: 'formInput4',
    	component: formInput4
    },    
    {
    	path: '/formInput5',
    	name: 'formInput5',
    	component: formInput5
    },    
    {
    	path: '/formInput6',
    	name: 'formInput6',
    	component: formInput6
    },
    {
    	path: '/handUserInput',
    	name: 'handUserInput',
    	component: handUserInput
    },
    {
    	path: '/dataBind',
    	name: 'dataBind',
    	component: dataBind
    },
    {
    	path: '/filters',
    	name: 'filters',
    	component: filters
    },
    {
    	path: '/computed1',
    	name: 'computed1',
    	component: computed1
    },
    {
    	path: '/bindClass1',
    	name:'bindClass1',
    	component: bindClass1
    },
    {
    	path: '/bindClass2',
    	name:'bindClass2',
    	component: bindClass2
    },
    {
    	path: '/bindClass3',
    	name:'bindClass3',
    	component: bindClass3
    },
    {
    	path: '/bindClass4',
    	name:'bindClass4',
    	component: bindClass4
    },
    {
    	path: '/toDoList',
    	name: 'toDoList',
    	component:toDoList
    }
  ]
})
