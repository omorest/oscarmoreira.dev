import { Post } from './types/post.types'
import { Project } from './types/project.types'

type TypeSort = 'desc' | 'asc'

export const sortPosts = (posts: Post[], typeSort: TypeSort) => {
  const sort = {
    desc: {
      lessThan: 1,
      greaterThan: -1
    },
    asc: {
      lessThan: -1,
      greaterThan: 1
    }
  }

  const sortedPosts = [...posts].sort((a: Post, b: Post) => {
    if (a.data.date < b.data.date) return sort[typeSort].lessThan
    if (a.data.date > b.data.date) return sort[typeSort].greaterThan
    return 0
  })

  return sortedPosts
}

export const sortProjects = (projects: Project[], typeSort: TypeSort) => {
  const sort = {
    desc: {
      lessThan: 1,
      greaterThan: -1
    },
    asc: {
      lessThan: -1,
      greaterThan: 1
    }
  }

  const sortedProjects = [...projects].sort((a: Project, b: Project) => {
    if (a.date < b.date) return sort[typeSort].lessThan
    if (a.date > b.date) return sort[typeSort].greaterThan
    return 0
  })

  return sortedProjects
}
