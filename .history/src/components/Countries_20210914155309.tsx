import React, { useState } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'


const Countries: React.FC = () => {
    const { Countries } = useActions();
    const { data, error, loading } = useTypedSelector(
        state => state.repositories
    )
    return (
        <div>
            <h1>Countries</h1>
        </div>
    )
}

export default Countries