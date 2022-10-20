import {useEffect, useState} from "react";

export const HookExample = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    const increment = () => {
        setCount(count + 1)
    }

    const handleChange = (event) => {
        setName(event.target.value)
    }

    useEffect(() => {
        console.log(`HOOK. Компонент обновился...`)
        document.title = `Вы нажали ${count} раз`
    },[])

    return (
        <div>
            <input type={'text'} value={name} onChange={handleChange}/>
            <button onClick={increment}>Click</button>
        </div>
    )
}