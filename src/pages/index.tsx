import { useParams } from 'react-router-dom'

import { AppBridgeProvider } from '../components/Providers'

const IndexPage = () => {
  const { userId } = useParams()

  return (
    <AppBridgeProvider>
      <div>User Main Page</div>
      <div>userId: {userId}</div>
    </AppBridgeProvider>
  )
}

export default IndexPage
