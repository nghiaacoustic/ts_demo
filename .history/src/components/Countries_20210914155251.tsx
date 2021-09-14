import React, { useState } from 'react'
import { useActions } from '../hooks/useActions'

const Countries: React.FC = () => {
    const { Countries } = useActions()
    return (
        <div>
            <h1>Countries</h1>
        </div>
    )
}

export default Countries