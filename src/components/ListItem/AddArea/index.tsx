import { useState, KeyboardEvent } from 'react'
import css from './template.module.css'

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({onEnter}: Props) => {
    const[inputText, setInputText] = useState('')

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== '') {
            onEnter(inputText);
            setInputText('')
        }
    }
    

    return(
        <div className={css.addAreaContainer}>
            <div className={css.image}>➕</div>
            <input 
                type="text"
                placeholder='Adicione um tarefa'
                value={inputText}
                onChange={e=>setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </div>
    )
}