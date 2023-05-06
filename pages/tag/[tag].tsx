import { GetStaticProps, NextPage } from 'next'
import PostList from '../../components/PostList'
import { ParsedUrlQuery } from 'querystring'
import { getAllSelectItemsFromPosts } from '../../lib/apis/getAllSelectItemsFromPosts'
import { getPosts } from '../../lib/apis'
import { TPost } from '../../types'

const TagPage: NextPage<{
  posts: TPost[]
  tag: { name: string; count: number }
}> = ({ posts, tag }) => {
  return (
    <>
      <PostList
        posts={posts}
        filter={tag.name}
        // TODO: tag color
        color={'default'}
        count={tag.count}
      />
    </>
  )
}

export const getStaticPaths = async () => {
  const posts = await getPosts()
  const tags = getAllSelectItemsFromPosts('tags', posts)

  return {
    paths: Object.keys(tags).map((p: any) => ({ params: { tag: p } })),
    fallback: 'blocking',
  }
}

interface Props extends ParsedUrlQuery {
  tag: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { tag } = params as Props

  const posts = await getPosts()
  const tags = getAllSelectItemsFromPosts('tags', posts)

  const filteredPosts = posts.filter(
    (post) => (post.tags ?? []).filter((tagName) => tagName === tag).length > 0
  )

  // TODO: blur
  /*
  for (let post of filteredPosts) {
    if (post) {
      try {
        post.cover.blurLight = (
          await getPlaiceholder(post.cover.light, {
            size: 10,
          })
        ).base64
        post.cover.blurDark = (
          await getPlaiceholder(post.cover.dark, {
            size: 10,
          })
        ).base64
      } catch (e) {
        post.cover.blurLight = ''
        post.cover.blurDark = ''
      }
    }
  }
  */

  return {
    props: {
      posts: filteredPosts,
      tag: { name: tag, count: tags[tag] },
    },
    revalidate: 60 * 60,
  }
}

export default TagPage
