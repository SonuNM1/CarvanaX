import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Header = () => {

    const {user, isSignedIn} = useUser() ; 

  return (
    <div className='flex justify-between items-center shadow-sm p-5'>
      <img src='/logo.jpg' width={70} height={80} />

      <ul className='hidden md:flex gap-16'>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer'>Home</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer'>Search</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer'>New</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer'>Preowned</li>
      </ul>

      {
        isSignedIn ? 
            <div className='flex items-center gap-5'>
                <UserButton/>
                <Link to={'/profile'}>
                  <Button>Submit Listing</Button>
                </Link>
            </div>
            : 
            <Button>Submit Listing</Button>
      }

    </div>
  )
}

export default Header
