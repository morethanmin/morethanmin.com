import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NotionRenderer } from 'react-notion-x'

// TODO: type error in build time
const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code as any)
)
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection as any
  )
)
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then(
    (m) => m.Equation as any
  )
)
const Pdf = dynamic(
  () =>
    import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf as any),
  {
    ssr: false,
  }
)
const Modal = dynamic(
  () =>
    import('react-notion-x/build/third-party/modal').then(
      (m) => m.Modal as any
    ),
  {
    ssr: false,
  }
)

type Props = {
  recordMap: any
}

const ContentRenderer = ({ recordMap }: Props) => {
  const { resolvedTheme } = useTheme()
  return (
    <NotionRenderer
      darkMode={resolvedTheme === 'dark'}
      recordMap={recordMap}
      components={{
        Code,
        Collection,
        Equation,
        Modal,
        Pdf,
        nextImage: Image,
        nextLink: Link,
      }}
    />
  )
}

export default ContentRenderer
