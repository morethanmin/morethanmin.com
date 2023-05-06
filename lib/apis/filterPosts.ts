import { TPostStatus, TPosts } from '../../types'

type Options = {
  acceptStatus?: TPostStatus[]
}

const initialOption: Options = {
  acceptStatus: ['Public'],
}
const current = new Date()
const tomorrow = new Date(current)
tomorrow.setDate(tomorrow.getDate() + 1)
tomorrow.setHours(0, 0, 0, 0)

export function filterPosts(posts: TPosts, options: Options = initialOption) {
  const { acceptStatus = ['Public'] } = options
  const filteredPosts = posts
    // filter date
    .filter((post) => {
      const postDate = new Date(post?.date?.start_date || post.createdTime)
      if (!post.title || !post.slug || postDate > tomorrow) return false
      return true
    })
    // filter status
    .filter((post) => {
      const postStatus = post.status[0]
      return acceptStatus.includes(postStatus)
    })
  return filteredPosts
}
