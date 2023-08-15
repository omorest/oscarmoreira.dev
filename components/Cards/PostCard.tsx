import Image from 'next/image'
import Link from 'next/link'
import { type FC } from 'react'
import { type Post } from '../../types/post.types'
import { Tag } from '../Tag/Tag'

interface PostCardProps {
  post: Post
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <Link href={`/${post.slug}`}>
      <div
        className="transition ease-in-out delay-100 w-80 h-80 flex flex-col bg-white dark:bg-dark-mate shadow-md hover:shadow-lg hover:cursor-pointer overflow-hidden rounded-md ">
        <div>
          <Image src={post.data.image} alt={post.data.title} width="400px" height="200px" objectFit={'cover'}/>
        </div>
        <div className="px-4 py-2 flex flex-col  h-[100%] justify-around">
          <div>
            <span className="text-xs text-gray italic">{post.data.date}</span>
            <h3
              className="transition ease-in-out delay-100 text-xl font-semibold dark:text-white">{post.data.title}</h3>
          </div>
          <div className="text-stone-500 text-md font-medium">
            By
            <Link href="/about">
              <span className="text-blue-400 hover:text-blue-500"> {post.data.author}</span>
            </Link>
          </div>
          <div className="flex gap-2">{post.data.tags?.map(tag => <Tag text={tag} key={tag}/>)}</div>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
