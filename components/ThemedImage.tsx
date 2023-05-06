import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { TPost } from '../types'

type Props = {
  post: TPost
  quality?: number
  className?: string
}

function ThemedImage({ post, quality, className }: Props) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const emptyImage =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

  if (!mounted) {
    return (
      <Image
        src={post.thumbnail || emptyImage}
        quality={quality || 100}
        layout="fill"
        objectFit="cover"
        sizes="100%"
        alt={post.title}
        // onLoadingComplete={handleLoad}
        placeholder="blur"
        // TODO: Blur image
        blurDataURL={emptyImage}
        // blurDataURL={post.cover.blurLight }
        className={className}
      />
    )
  }

  let src
  let blurSrc
  switch (resolvedTheme) {
    case 'light':
      src = post.thumbnail
      // TODO: Blur image
      //   blurSrc = post.cover.blurLight
      blurSrc = emptyImage
      break
    case 'dark':
      src = post.thumbnail
      // TODO: Blur image
      //   blurSrc = post.cover.blurDark
      blurSrc = emptyImage
      break
    default:
      src = emptyImage
      blurSrc = emptyImage
      break
  }

  return (
    <Image
      priority={true}
      src={src || emptyImage}
      quality={quality || 100}
      layout="fill"
      objectFit="cover"
      alt={post.title}
      // onLoadingComplete={handleLoad}
      placeholder="blur"
      blurDataURL={blurSrc}
      className={className}
    />
  )
}

export default ThemedImage
