import { useParams } from 'react-router-dom'

const IndexPage = () => {
  const { userId } = useParams()

  return (
    <div>
      <div>User Main Page</div>
    </div>
  )
}

export default IndexPage
