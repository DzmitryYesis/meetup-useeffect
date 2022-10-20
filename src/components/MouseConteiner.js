import {useState} from "react";
import {ClassMouse} from "../components/ClassMouse";
import {HookMouse} from "../components/HookMouse";

export const MouseContainer = () => {

    const [isDisplayed, setIsDisplayed] = useState(true)

    const toggle = () => {
        setIsDisplayed(!isDisplayed)
    }

    return (
        <div>
            <button onClick={toggle}>{isDisplayed ? 'Unmount' : 'Mount'}</button>
            {isDisplayed && <HookMouse/>}
        </div>
    )
}