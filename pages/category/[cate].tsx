import { GetStaticProps, NextPage } from 'next'
import PostList from '../../components/PostList'
import { ParsedUrlQuery } from 'querystring'
import { getPosts } from '../../lib/apis'
import { getAllSelectItemsFromPosts } from '../../lib/apis/getAllSelectItemsFromPosts'
import { TPost } from '../../types'
import { getColorClassByName } from '../../lib/colors'
import { NextSeo } from 'next-seo'
import { CONFIG } from '../../config/blog'
import { useRouter } from 'next/router'
import { filterPosts } from '../../lib/apis/filterPosts'

const CatePage: NextPage<{
  posts: TPost[]
  cate: { name: string; count: number }
}> = ({ posts, cate }) => {
  const router = useRouter()
  const { locale } = router
  return (
    <>
      <NextSeo
        title={`${cate.name} | ${CONFIG.BLOG_TITLE}`}
        canonical={router.asPath}
        description={`${cate.name} in morethanmin's blog`}
        openGraph={{
          title: `${CONFIG.BLOG_TITLE}`,
          description: `${cate.name} in morethanmin's blog`,
          locale,
          type: 'website',
          url: `${router.asPath}`,
        }}
      />
      <PostList
        posts={posts}
        filter={cate.name}
        color={getColorClassByName(cate.name)}
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
  const filteredPosts = filterPosts(posts)
  const categories = getAllSelectItemsFromPosts('category', filteredPosts)

  const cateFilteredPosts = filteredPosts.filter(
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
      posts: cateFilteredPosts,
      cate: { name: cate, count: categories[cate] },
    },
    revalidate: 60 * 60,
  }
}

export default CatePage
