import userEvent from '@testing-library/user-event'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate();
  return (
    <div>
      About <br />
      <button onClick={() => navigate('/menu')} >menu</button>
    </div>
  )
}
