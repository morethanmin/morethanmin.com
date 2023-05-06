import { NextSeo, ArticleJsonLd } from 'next-seo'
import { me } from '../config/me'
import { FC } from 'react'
import { CONFIG } from '../config/blog'

type PostSeoProps = {
  author?: string
  date: Date
  description: string
  image: string
  locale: string
  title: string
  url: string
}

const PostSeo: FC<PostSeoProps> = ({
  author = me.name,
  date,
  description,
  image,
  //us locale
  locale = 'en_US',
  title,
  url,
}) => {
  const publishedAt = new Date(date).toISOString()
  const featuredImage = {
    url: image ? `${image}` : `${me.site}/static/images/og.png`,
    alt: title,
  }
  return (
    <>
      <NextSeo
        title={`${title} | ${CONFIG.BLOG_TITLE}`}
        description={description}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: publishedAt,
          },
          locale,
          url,
          title,
          description: description,
          images: [featuredImage],
        }}
      />
      <ArticleJsonLd
        authorName={author}
        dateModified={publishedAt}
        datePublished={publishedAt}
        description={description}
        images={[featuredImage.toString()]}
        publisherLogo="/android-chrome-192x192.png"
        publisherName={author}
        title={title}
        url={url}
      />
    </>
  )
}

export default PostSeo
