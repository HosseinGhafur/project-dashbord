import React from 'react'
import { useState } from 'react'

export default function Customhook(init) {
    const [Count, setCount] = useState(init)

    const addcount = () => {
        setCount(prevCount => prevCount + 1)
    }

    const minuscount = () => {
        setCount(prevCount => prevCount - 1)
    }

    return [Count, addcount, minuscount]
}
