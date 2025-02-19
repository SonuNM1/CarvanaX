import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Home from './home'
import { RouterProvider } from 'react-router'
import Contact from './contact'
import { ClerkProvider } from '@clerk/clerk-react'
import Profile from './profile'
import AddListing from './add-listing'
import { Toaster } from 'sonner'
import SearchByCategory from './search/[category]'
import SearchByOptions from './search'
import ListingDetail from './listing-details/[id]'
import SignInPage from './Shared/SignInPage'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: 'sign-in',
    element: <SignInPage/>
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: '/profile',
    element: <Profile/>
  },
  {
    path: '/add-listing',
    element: <AddListing/>
  },
  {
    path: '/search',
    element: <SearchByOptions/>
  },
  {
    path: '/search/:category',
    element: <SearchByCategory/>
  },
  {
    path: '/listing-details/:id',
    element: <ListingDetail/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <RouterProvider router={router} />
    <Toaster/>
    </ClerkProvider>
  </StrictMode>,
)
