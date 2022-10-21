import {useEffect, useState} from "react";

export const HookMouse = () => {
    const [xPos, setXPos] = useState()
    const [yPos, setYPos] = useState()

    const handleMouseMove = (event) => {
        setXPos(event.clientX)
        setYPos(event.clientY)

        console.log('HOOK Mouse move')
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)

        return ()=>{
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <div>
            X: {xPos} Y: {yPos}
        </div>
    )
}