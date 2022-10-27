import Gallery from '../components/Gallery'
import PostCard from '../components/Cards/PostCard'
import { getPosts } from '../helpers/utilsPost'
import { sortPosts } from '../utils'

export const getStaticProps = () => {
  const posts = getPosts()
  return {
    props: {
      posts
    }
  }
}

const Blog = ({ posts }: any) => {
  const lastestPosts = sortPosts(posts, 'desc')
  const postCards = lastestPosts.map((post, index) => <PostCard post={post} isWithCompletedInfo key={index}/>)
  return (
    <div>
      <Gallery title="Posts">
        {postCards}
      </Gallery>
    </div>
  )
}

export default Blog
