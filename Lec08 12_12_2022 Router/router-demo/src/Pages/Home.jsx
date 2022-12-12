import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();


  const btngo2User = () => {
    let userObj = {
      userId: 1,
      userName: "avi"
    };

    navigate('/user/' + 7,
      { state: userObj });
  }

  return (
    <div>
      Home <br />
      <button onClick={() => navigate('about')}>About</button> <br />
      <button onClick={btngo2User}>User</button>
    </div>
  )
}
