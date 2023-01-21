import Gallery from '../components/Gallery'
import PostCard from '../components/Cards/PostCard'
import { getPosts } from '../helpers/utilsPost'
import { sortPosts } from '../utils'
import HeadInfo from '../components/HeadInfo/HeadInfo'

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
      <HeadInfo namePage='Blog' metaDescription='Blog de Oscar Moreira' />
      <Gallery title="Posts">
        {postCards}
      </Gallery>
    </div>
  )
}

export default Blog
