import React from 'react'
import { useNavigate } from 'react-router-dom'
import './AlertBox.css'
export default function AlertBox({ title, showBtn }) {
    const navigate = useNavigate()
    return (
        <div className='Alret-empty'>
            <h1>{title}</h1>
            {
                showBtn ? (
                    <button onClick={() => navigate(-1)}>
                        برگشت
                    </button>
                ) : null
            }

        </div>
    )
}
