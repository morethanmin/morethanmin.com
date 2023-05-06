import type { GetStaticProps, NextPage } from 'next'

import PostList from '../components/PostList'

import { WidgetMeMedium, WidgetMeSmall } from '../components/widget/WidgetMe'
import ListLayout from '../components/layout/ListLayout'
import {
  WidgetOverViewMedium,
  WidgetOverViewSmall,
} from '../components/widget/WidgetOverview'
import { Media, MediaContextProvider } from '../components/utility/Breakpoints'
import { useRouter } from 'next/router'
import { me } from '../config/me'
import { getPosts } from '../lib/apis'
import { TPost } from '../types'
import { NextSeo } from 'next-seo'
import { CONFIG } from '../config/blog'
import { filterPosts } from '../lib/apis/filterPosts'

const Home: NextPage<{ posts: TPost[] }> = ({ posts }) => {
  const mainPosts = posts.slice(0, 17)
  const router = useRouter()
  const { locale } = router
  const description = 'Home Description'
  return (
    <>
      <NextSeo
        title={`${CONFIG.BLOG_TITLE}`}
        canonical={router.asPath}
        description={`welcome to morethanmin's blog!`}
        openGraph={{
          title: `${CONFIG.BLOG_TITLE}`,
          description,
          locale,
          type: 'website',
          url: `${router.asPath}`,
          // images: [featuredImage],
        }}
      />
      <ListLayout>
        <MediaContextProvider>
          <Media
            greaterThanOrEqual="md"
            className="grid grid-cols-2 gap-6.5 lg:gap-10"
          >
            <WidgetMeMedium />
            <WidgetOverViewMedium posts={posts} />
          </Media>
          <Media lessThan="md" className="grid grid-cols-2 gap-4">
            <WidgetMeSmall />
            <WidgetOverViewSmall posts={posts} />
          </Media>
        </MediaContextProvider>
      </ListLayout>
      <PostList posts={mainPosts} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts()
  const filteredPosts = filterPosts(posts)
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
    },
    revalidate: 60 * 60,
  }
}

export default Home
