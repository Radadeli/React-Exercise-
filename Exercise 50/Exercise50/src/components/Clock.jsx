import { useEffect, useState } from "react"
import styles from "./Clock.module.scss"

export function Clock() {
    const [date, setDate] = useState(new Date()) 

    useEffect (() => {
        setInterval (() => { 
        setDate(new Date())
        }, 1000)
    }, [])
    
    return  ( 
    <div className={styles.Clock}>
        <h2>Current time: {date.toLocaleTimeString()}</h2>
    </div>
    )
}

export default Clock