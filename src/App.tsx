import BaseLayout from '@/components/layouts/baseLayout'
import HomePage from '@/pages/homepage'
import { useRoutes } from 'react-router-dom'

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomePage />
    }
  ])

  return <BaseLayout>{routes}</BaseLayout>
}

export default App
