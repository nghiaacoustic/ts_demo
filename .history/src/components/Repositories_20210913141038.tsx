import React, { useState } from 'react'

const Repositories: React.FC = () => {
    const [input, setInput] = useState('')

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={onSubmit}>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <button >Submit</button>
        </form>
    )
}

export default Repositories
