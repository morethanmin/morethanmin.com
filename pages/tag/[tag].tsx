import { GetStaticProps, NextPage } from 'next'
import PostList from '../../components/PostList'
import { ParsedUrlQuery } from 'querystring'
import { getAllSelectItemsFromPosts } from '../../lib/apis/getAllSelectItemsFromPosts'
import { getPosts } from '../../lib/apis'
import { TPost } from '../../types'
import { getColorClassByName } from '../../lib/colors'
import { NextSeo } from 'next-seo'
import { CONFIG } from '../../config/blog'
import { useRouter } from 'next/router'
import { filterPosts } from '../../lib/apis/filterPosts'

const TagPage: NextPage<{
  posts: TPost[]
  tag: { name: string; count: number }
}> = ({ posts, tag }) => {
  const router = useRouter()
  const { locale } = router
  return (
    <>
      <NextSeo
        title={`${tag.name} | ${CONFIG.BLOG_TITLE}`}
        canonical={router.asPath}
        description={`${tag.name} in morethanmin's blog`}
        openGraph={{
          title: `${CONFIG.BLOG_TITLE}`,
          description: `${tag.name} in morethanmin's blog`,
          locale,
          type: 'website',
          url: `${router.asPath}`,
        }}
      />
      <PostList
        posts={posts}
        filter={tag.name}
        color={getColorClassByName(tag.name)}
        count={tag.count}
      />
    </>
  )
}

export const getStaticPaths = async () => {
  const posts = await getPosts()
  const filteredPosts = filterPosts(posts)
  const tags = getAllSelectItemsFromPosts('tags', filteredPosts)

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
  const filteredPosts = filterPosts(posts)
  const tags = getAllSelectItemsFromPosts('tags', filteredPosts)

  const tagFilteredPosts = filteredPosts.filter(
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
      posts: tagFilteredPosts,
      tag: { name: tag, count: tags[tag] },
    },
    revalidate: 60 * 60,
  }
}

export default TagPage
