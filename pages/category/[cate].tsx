import { GetStaticProps, NextPage } from 'next'
import PostList from '../../components/PostList'
import { ParsedUrlQuery } from 'querystring'
import { getPosts } from '../../lib/apis'
import { getAllSelectItemsFromPosts } from '../../lib/apis/getAllSelectItemsFromPosts'
import { TPost } from '../../types'

const CatePage: NextPage<{
  posts: TPost[]
  cate: { name: string; count: number }
}> = ({ posts, cate }) => {
  return (
    <>
      <PostList
        posts={posts}
        filter={cate.name}
        // TODO: tag color
        color={'default'}
        count={cate.count}
      />
    </>
  )
}

export const getStaticPaths = async () => {
  const posts = await getPosts()
  const categories = getAllSelectItemsFromPosts('category', posts)

  return {
    paths: Object.keys(categories).map((p: any) => ({ params: { cate: p } })),
    fallback: 'blocking',
  }
}

interface Props extends ParsedUrlQuery {
  cate: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { cate } = params as Props

  const posts = await getPosts()
  const categories = getAllSelectItemsFromPosts('category', posts)

  const filteredPosts = posts.filter(
    (post) =>
      (post.category ?? []).filter((categoryName) => categoryName === cate)
        .length > 0
  )

  // TODO: blur
  /*
  for (let post of db) {
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
      cate: { name: cate, count: categories[cate] },
    },
    revalidate: 60 * 60,
  }
}

export default CatePage
