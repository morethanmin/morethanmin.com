import { useEffect } from 'react'
import { CONFIG } from '../../config/blog'
import { useTheme } from 'next-themes'

type Props = {}

const Utterances: React.FC<Props> = () => {
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const theme = resolvedTheme === 'dark' ? 'github-dark' : 'github-light'
    const script = document.createElement('script')
    const anchor = document.getElementById('comments')
    if (!anchor) return

    script.setAttribute('src', 'https://utteranc.es/client.js')
    script.setAttribute('crossorigin', 'anonymous')
    script.setAttribute('async', `true`)
    script.setAttribute('theme', theme)
    const config: { [key: string]: string } = CONFIG.UTTERANCES.CONFIG
    Object.keys(config).forEach((key) => {
      script.setAttribute(key, config[key])
    })
    anchor.appendChild(script)
    return () => {
      anchor.innerHTML = ''
    }
  }, [resolvedTheme])
  return (
    <>
      <div id="comments" className=""></div>
    </>
  )
}

export default Utterances
