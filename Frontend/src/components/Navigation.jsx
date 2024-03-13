import React, { useEffect } from 'react'

const Navigation = () => {
    const [profile, setProfile] = useState(false);

    useEffect(()=>{

        fetch('/api/users')
        .then(response=respomse.json())
        .then(data => setProfile(data))

    }, [])

  return (
    <>
    <div>
        <img src={profile.image} alt="Profile Image" />
    </div>
    </>
  )
}

export default Navigation