import css from './template.module.css'
import {Item} from '../../types/item'
import { useEffect, useState } from 'react'

type Props = {
    item: Item,
    onClick: () => void
    
    
}
//  return isChecked ? setTextDecoration('initial') : setTextDecoration('line-through')
export const ListItem = ({item, onClick}: Props) => {
    const[isChecked, setIsChecked] = useState(item.done)
    const[textDecoration2, setTextDecoration] = useState('initial')

    useEffect(() => {
        if(isChecked === true) {
            setTextDecoration('line-through')
        } else {
            setTextDecoration('initial')
        }
      });

    return (
        <div className={css.itemArea}>
            <input 
                checked={isChecked} 
                onChange={e => setIsChecked(e.target.checked)}
                onClick={onClick}
                type="checkbox" 
            />
            <label style={{textDecoration:textDecoration2}}>{item.name} `{item.done.toString()}`</label>
        </div>
    )
}