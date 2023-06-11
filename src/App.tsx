import { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'

import AppConstant from './constants/app'

import router from './router'

import './styles/index.css'

const App = () => {
  const [isAppInstalled, setAppInstalled] = useState(false)

  const query = new URLSearchParams(window.location.search)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location) {
      const apiKey = 'f67acbbd02e3a48277cc91d50d7294ed'
      const hmac = query.get('hmac')
      const shop = query.get('shop')
      // const host = query.get('host')
      const timestamp = query.get('timestamp')
      const embedded = query.get('embedded')

      if (timestamp && hmac && shop && embedded != '1') {
        const redirect_uri = `${AppConstant.BACKEND_API}/auth/shopify/callback`
        const nonce = 'nonce'
        const access_mode = 'per-user'
        const client_id = apiKey
        const scopes = 'write_products'
        const authorizeUrl = `https://${shop}/admin/oauth/authorize?client_id=${client_id}&scope=${scopes}&redirect_uri=${redirect_uri}&state=${nonce}&grant_options[]=${access_mode}`
        window.location.replace(authorizeUrl)

        setAppInstalled(false)
      } else {
        setAppInstalled(true)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="layout-grid">
      <div className="layout-grid">You Must Install App Before Use It</div>
      <button className="btn">button</button>
    </div>
  )

  return <RouterProvider router={router} />
}

export default App
