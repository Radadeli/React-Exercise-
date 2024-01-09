import { useContext } from "react"
import { useEffect, useState } from "react"
import styles from "./Clock.module.scss"
import { LanguageContext } from "./LanguageContext"

export function Clock() {
    const language = useContext(LanguageContext)
    const [date, setDate] = useState(new Date()) 

    useEffect (() => {
        setInterval (() => { 
        setDate(new Date())
        }, 1000)
    }, [])
    
    return  ( 
    <div className={styles.Clock}>
        <h2>{language === 'en' ? 'Current time is: ' + date.toLocaleTimeString() : 'La hora es: ' + date.toLocaleTimeString()} </h2>
    </div>
    )
}

export default Clock