import css from './template.module.css'
import { useState } from 'react'

import { ListItem } from './components/ListItem'
import { Item } from './types/item'
import { AddArea } from './components/ListItem/AddArea'

const App = () => {

  const [list, setList] = useState<Item[]>([
    
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  const handleDoneClick = (key: number) => {
    let tmpList = [...list]

    if(tmpList[key].done === false) {
      tmpList[key].done = true
    } else {
      tmpList[key].done = false
    }
  }

  return (
    <div className={css.Container}>
      <div className={css.Area}>
        <header>
          <h1>Lista de Tarefas</h1>

          <AddArea onEnter={handleAddTask} />


          {list.map((item, key) => (
            <ListItem key={key} item={item} onClick={()=> handleDoneClick(key)} />
            ))}

        </header>
      </div>
    </div>
  )
}

export default App