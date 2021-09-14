import React, { useState } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const Repositories: React.FC = () => {
    const [input, setInput] = useState('')
    const { searchRepositories } = useActions()
    const { data, error, loading } = useTypedSelector(
        state => state.repositories
    )

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        searchRepositories(input)
    }
    return (
        <form onSubmit={onSubmit}>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <button >Submit</button>
        </form>
    )
}

export default Repositories
