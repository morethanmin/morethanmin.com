import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const Utterances = dynamic(
  () => {
    return import('../components/comments/Utterances')
  },
  { ssr: false }
)

type Props = {}

const Comment = ({}: Props) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="pb-4 md:pb-8">
      <h1 className="my-4 text-2xl font-bold md:text-3xl lg:my-8 text-center">
        Comments
      </h1>
      <div className="my-8">
        <Utterances />
      </div>
    </div>
  )
}

export default Comment
