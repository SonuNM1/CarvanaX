import { SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Header = () => {

    const {user, isSignedIn} = useUser() ; 

  return (
    <div className='flex justify-between items-center shadow-sm p-5'>

      <Link to={'/'}>
      <img src='/logo.jpg' width={70} height={80} />
      </Link>

      <ul className='hidden md:flex gap-16'>
        <a href = '/' className='font-medium hover:scale-105 transition-all cursor-pointer'>Home</a>
        <a href = '/contact' className='font-medium hover:scale-105 transition-all cursor-pointer'>Contact</a>
      </ul>

      {
        isSignedIn ? 
            <div className='flex items-center gap-5'>
                <UserButton/>
                <Link to={'/profile'}>
                  <Button className='cursor-pointer bg-blue-600 hover:bg-blue-700 text-white'>Submit Listing</Button>
                </Link>
            </div>
            : 
            <div className='flex items-center gap-4'>

              {/* Sign-in Button */}

              <SignInButton mode='modal'>
                <Button className='cursor-pointer bg-blue-500 hover:bg-blue-700 text-white'>
                    Login
                </Button>
              </SignInButton>

              {/* Disabled submit listing button */}

              <Button className='cursor-not-allowed bg-gray-400 text-white'
              disabled
              > 
                Submit Listing
              </Button>

            </div>
      }

    </div>
  )
}

export default Header
