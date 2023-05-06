import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { ReactElement } from 'react'
import { BlogLayoutPure } from '../components/layout/BlogLayout'
import ListLayout from '../components/layout/ListLayout'
import { Colors, getColorClassByName } from '../lib/colors'
import { NextPageWithLayout } from './_app'
import { getAllSelectItemsFromPosts } from '../lib/apis/getAllSelectItemsFromPosts'
import { getPosts } from '../lib/apis'
import { TCategories } from '../types'
import { NextSeo } from 'next-seo'
import { CONFIG } from '../config/blog'
import { useRouter } from 'next/router'
import { filterPosts } from '../lib/apis/filterPosts'

const CateCard = ({
  name,
  color,
  count,
}: {
  name: string
  color: string
  count: number
}) => {
  return (
    <Link href="/category/[name]" as={`/category/${name}`} key={name}>
      <a className="select-none transform transition ease-in-out duration-200 hover:scale-95">
        <div
          className={`aspect-square ${
            Colors[color]?.bg.msg ?? Colors['gray'].bg.msg
          } rounded-xl p-3 md:p-4 text-white relative z-0 font-semibold overflow-hidden`}
          before="content-DEFAULT text-transparent absolute h-full w-full top-0 left-0 z-10 bg-gradient-to-l from-white opacity-50 to-transparent rounded-xl"
          dark="before:from-black"
        >
          <div className="flex flex-row items-center justify-between text-normal md:text-lg lg:text-xl">
            <p className="z-20">{name}</p>
            <p
              className={`bg-white z-20 ${
                Colors[color]?.text.normal ?? Colors['gray'].text.normal
              } px-2 text-center rounded-full`}
            >
              {count}
            </p>
          </div>
          <p
            className={`px-3 py-2 md:(px-4 py-3) text-8xl md:text-8xl font-semibold absolute left-0 bottom-0  ${
              Colors[color]?.text.normal ?? Colors['gray'].text.normal
            } filter brightness-95 w-full whitespace-nowrap z-0`}
          >
            {name}
          </p>
        </div>
      </a>
    </Link>
  )
}

const Cates: NextPage<{ categories: TCategories }> = ({ categories }) => {
  const router = useRouter()
  return (
    <>
      <NextSeo
        title={`Categories | ${CONFIG.BLOG_TITLE}`}
        canonical={router.asPath}
        description={`categories in morethanmin's blog`}
        openGraph={{
          title: `${CONFIG.BLOG_TITLE}`,
          description: `categories in morethanmin's blog`,
          locale: router.locale,
          type: 'website',
          url: `${router.asPath}`,
        }}
      />
      <ListLayout>
        <h1 className="mb-4 text-2xl font-bold md:text-3xl lg:mb-8">
          Category🪐
        </h1>
        <div className="grid grid-cols-2 gap-3 xs:gap-5 md:gap-6 pb-4 lg:pb-8 md:grid-cols-3 lg:grid-cols-4">
          {Object.keys(categories).map((categoryName) =>
            CateCard({
              name: categoryName,
              color: getColorClassByName(categoryName),
              count: categories[categoryName],
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
  const categories = getAllSelectItemsFromPosts('category', filteredPosts)

  return {
    props: {
      categories,
    },
    revalidate: 60 * 60,
  }
}
;(Cates as NextPageWithLayout).getLayout = function getLayout(
  page: ReactElement
) {
  return <BlogLayoutPure>{page}</BlogLayoutPure>
}

export default Cates
