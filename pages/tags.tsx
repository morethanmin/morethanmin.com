import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { ReactElement } from 'react'
import { BlogLayoutPure } from '../components/layout/BlogLayout'
import ListLayout from '../components/layout/ListLayout'
import { Colors, getColorClassByName } from '../lib/colors'
import { NextPageWithLayout } from './_app'
import { getPosts } from '../lib/apis'
import { getAllSelectItemsFromPosts } from '../lib/apis/getAllSelectItemsFromPosts'
import { TTags } from '../types'
import { NextSeo } from 'next-seo'
import { CONFIG } from '../config/blog'
import { useRouter } from 'next/router'
import { filterPosts } from '../lib/apis/filterPosts'

const TagCard = ({
  name,
  color,
  count,
}: {
  name: string
  color: string
  count: number
}) => {
  return (
    <Link href="/tags/[name]" as={`/tags/${name}`} key={name}>
      <a>
        <div
          className={`${
            Colors[color]?.bg.msg ?? Colors['gray'].bg.msg
          } bg-gradient-to-bl from-white/30 text-white flex items-center font-semibold py-3 px-5  rounded-full justify-between transform transition ease-in-out duration-200 hover:scale-95`}
          dark="bg-gradient-to-tr from-black/30"
        >
          <p className="line-clamp-1"># {name}</p>
          <p
            className={`bg-white ${
              Colors[color]?.text.normal ?? Colors['gray'].text.normal
            } text-sm px-1.5 text-center rounded-full`}
          >
            {count}
          </p>
        </div>
      </a>
    </Link>
  )
}

const Tags: NextPage<{ tags: TTags }> = ({ tags }) => {
  const router = useRouter()
  return (
    <>
      <NextSeo
        title={`Tags | ${CONFIG.BLOG_TITLE}`}
        canonical={router.asPath}
        description={`tags in morethanmin's blog`}
        openGraph={{
          title: `${CONFIG.BLOG_TITLE}`,
          description: `tags in morethanmin's blog`,
          locale: router.locale,
          type: 'website',
          url: `${router.asPath}`,
          // images: [featuredImage],
        }}
      />
      <ListLayout>
        <h1 className="mb-4 text-2xl font-bold md:text-3xl lg:mb-8">Tags✨</h1>
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 pb-4 lg:pb-8 md:grid-cols-3 lg:grid-cols-4">
          {Object.keys(tags).map((tagName) =>
            TagCard({
              name: tagName,
              color: getColorClassByName(tagName),
              count: tags[tagName],
            })
          )}
        </div>
      </ListLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts()
  const filteredPosts = filterPosts(posts)
  const tags = getAllSelectItemsFromPosts('tags', filteredPosts)

  return {
    props: {
      tags,
    },
    revalidate: 60 * 60,
  }
}
;(Tags as NextPageWithLayout).getLayout = function getLayout(
  page: ReactElement
) {
  return <BlogLayoutPure>{page}</BlogLayoutPure>
}

export default Tags
