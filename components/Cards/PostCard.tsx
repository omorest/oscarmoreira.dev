import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { Post } from '../../types/post.types'

interface PostCardProps {
  post: Post
  isWithCompletedInfo?: boolean
}

const PostCard: FC<PostCardProps> = ({ post, isWithCompletedInfo }) => {
  if (isWithCompletedInfo) {
    return (
      <Link href={`/${post.slug}`}>
        <div className="w-96 flex flex-col justify-between bg-white dark:bg-dark-mate rounded-lg shadow-lg hover:cursor-pointer overflow-hidden ">
          <div className='h-[200px] w-[400px]'>
            <Image src={post.data.image} alt={post.data.title} width="400px" height="200px" />
          </div>
          <div className='p-4 flex flex-col justify-between h-[40%]'>
            <h3 className='text-xl text-black dark:text-white'>{post.data.title}</h3>
            <span className='text-sm text-gray italic'>{post.data.date}</span>
            <span className='text-purple-hard italic mt-4'>{post.data.tags?.map(tag => tag.toLocaleLowerCase()).join(' - ')}</span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/${post.slug}`}>
      <div className="w-80 p-4 gap-4 flex flex-col justify-between bg-white rounded-lg border-0 shadow-lg border-gray-200 hover:cursor-pointer overflow-hidden dark:bg-dark-mate">
        {/* <div className='h-[60%]'>
          <img src={post.data.image} alt="" className='rounded-t-lg w-full object-cover h-[100%]'/>
        </div> */}
        <h3 className='text-xl text-black dark:text-white'>{post.data.title}</h3>
        <span className='text-purple-hard italic'>{post.data.tags?.map(tag => tag).join(' - ')}</span>
      </div>
    </Link>
  )
}

export default PostCard
