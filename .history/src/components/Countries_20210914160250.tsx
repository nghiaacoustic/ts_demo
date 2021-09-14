import React, { useEffect, useState } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'


const Countries: React.FC = () => {
    const { Countries } = useActions();
    const { data, error, loading } = useTypedSelector(
        state => state.repositories
    )
    useEffect(() => {
        Countries()
    }, [])
    return (
        <div>
            <h1>Countries</h1>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading &&
                data.map((item, index) => {
                    return <div key={index}>{item}</div>
                })}
        </div>
    )
}

export default Countries