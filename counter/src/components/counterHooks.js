import React, { useState } from 'react'

export default function CounterHooks({ initialCount }){
    const [count, setCount] = useState(initialCount)



    return(
        <div>
            <button onClick={() => setCount(previousCount => previousCount - 1)}>+</button>
            <span>{count}</span> 
            <button onClick={() => setCount(previousCount => previousCount + 1)}>+</button>
        </div>
    )
}