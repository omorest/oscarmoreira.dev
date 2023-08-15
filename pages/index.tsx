import type { NextPage } from 'next'
import Description from '../components/Description'
import PostCard from '../components/Cards/PostCard'
import Gallery from '../components/Gallery'
import { getPosts } from '../helpers/utilsPost'
import homeContent from '../content/home.json'
import { sortPosts, sortProjects } from '../utils'
import ProjectCard from '../components/Cards/ProjectCard'
import { type Project } from '../types/project.types'
import { projects } from '../content/projects'
import HeadInfo from '../components/HeadInfo/HeadInfo'

export const getStaticProps = () => {
  const posts = getPosts()
  return {
    props: {
      posts
    }
  }
}

const Home: NextPage = ({ posts }: any) => {
  const { desc: { title, titleColored, description } } = homeContent

  const lastestPosts = sortPosts(posts, 'desc').slice(0, 3)
  const postCards = lastestPosts.map((post, index) => <PostCard post={post} key={index}/>)

  const latestsProjects: Project[] = sortProjects(projects, 'desc').slice(0, 3)
  const projectCards = latestsProjects.map((project, index) => <ProjectCard project={project} key={index}/>)

  return (
    <>
      <HeadInfo namePage='Home' metaDescription='Página de Oscar Moreira, Software Developer'/>
      <Description title={title} titleColored={titleColored} description={description}/>
      <div className='mt-20 flex flex-col gap-20 '>
        <div className=''>
          <Gallery title="Últimos posts" pathViewMore='/blog'>
            {postCards}
          </Gallery>
        </div>
        <div className=''>
          <Gallery title="Últimos proyectos" pathViewMore='/projects'>
            {projectCards}
          </Gallery>
        </div>
      </div>
    </>
  )
}

export default Home
