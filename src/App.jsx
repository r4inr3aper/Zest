import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/Landing'
import Onboarding from './pages/Onboarding'
import AppLayout from './layouts/app-layout'
import JobListing from './pages/JobListing'
import Job from './pages/Job'
import PostJob from './pages/PostJob'
import SavedJobs from './pages/SavedJobs'
import MyJobs from './pages/MyJobs'
import { ThemeProvider } from './components/ui/theme-provider'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/onboarding',
        element: <Onboarding />
      },
      {
        path: '/jobs',
        element: <JobListing />
      },
      {
        path: '/job:id',
        element: <Job />
      },
      {
        path: '/postjob',
        element: <PostJob />
      },
      {
        path: '/saved',
        element: <SavedJobs />
      },
      {
        path: '/myjobs',
        element: <MyJobs />
      },
    ]
  }
])

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
