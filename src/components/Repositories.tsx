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
        <div>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={e => setInput(e.target.value)} />
                <button >Submit</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading &&
                data.map((item, index) => {
                    return <div key={index}>{item}</div>
                })}
        </div>
    )
}

export default Repositories
