
import { Todo } from './models/Todo.js'
import { Value } from './models/Value.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { isValidProp } from './utils/IsValidProp.js'
import { loadState } from './utils/Store.js'




class ObservableAppState extends EventEmitter {
  

isVisible = true


  /**@type {Todo[]} */
  myTodoList = [
    
    // new Todo({
    //   id: '',
    //   description: 'creating clock'
    // }),

    // new Todo({
    //   id: '',
    //   description: 'making food'
    // })

  ]


  activePicture = null
  
  weather = null

  quotes = null
  
  page = ''
  user = null
  /** @type {import('./models/Account.js').Account | null} */
  // @ts-ignore
  account = null
  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])
  socketData = []

  // Used to load initial data
  init() {

  }
}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})