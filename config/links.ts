import {
  Github,
  Google,
  Props,
  Linkedin,
  Instagram,
  Twitter,
} from '@icons-pack/react-simple-icons'
import { FC } from 'react'
import Sspai from '../assets/sspai.svg'
import Zhihu from '../assets/zhihu.svg'

export type LinkType = {
  url: string
  icon: FC<Props> | string
  color: string
  fill: string
  border: string
  text: string
  shadow: string
  id?: string
  name?: string
}

export const links: readonly [
  LinkType,
  LinkType,
  LinkType,
  LinkType,
  LinkType
] = [
  {
    url: 'https://github.com/morethanmin',
    icon: Github,
    color: 'from-bg-[#24292f] to-bg-[#040d21]',
    fill: 'fill-[#181717]',
    border: 'border-[#181717]',
    text: 'text-[#181717]',
    shadow: 'shadow-true-gray-400',
    id: 'morethanmin',
    name: 'GitHub',
  },
  {
    url: 'http://linkedin.com/in/morethanmin/',
    icon: Linkedin,
    fill: 'fill-[#0A66C2]',
    border: 'border-[#0A66C2]',
    shadow: 'shadow-blue-300',
    text: 'text-[#0A66C2]',
    color: 'from-bg-[#0b66c2] to-bg-[#008bff]',
    name: 'LinkedIn',
  },
  {
    url: 'https://instagram.com/more-dev-min',
    icon: Instagram,
    color: 'from-bg-[#C13584] to-bg-[#F56040]',
    fill: 'fill-[#da282a]',
    border: 'border-[#da282a]',
    shadow: 'shadow-red-300',
    text: 'text-[#da282a]',
    name: 'Instagram',
  },
  {
    url: 'https://twitter.com/more_than_min',
    icon: Twitter,
    color:
      'from-bg-[#1DA1F2] to-bg-[#1DA1F2] dark:(from-bg-[#1DA1F2] to-bg-[#1DA1F2])',
    fill: 'fill-[#1DA1F2]',
    border: 'border-[#1DA1F2]',
    shadow: 'shadow-blue-300',
    text: 'text-[#1DA1F2]',
    id: 'optional',
    name: 'Twitter',
  },
  {
    url: 'mailto:morethanmin.dev@gmail.com',
    icon: Google,
    fill: 'fill-[#DB4437]',
    border: 'border-[#DB4437]',
    shadow: 'shadow-pink-300',
    text: 'text-[#DB4437]',
    color: 'from-bg-[#DB4437] to-bg-[#DB4437]',
    name: 'Dribbble',
  },
]
