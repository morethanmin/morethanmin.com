import {
  SiGithub,
  SiGoogle,
  SiLinkedin,
  SiInstagram,
  SiTwitter,
  SiFacebook,
} from '@icons-pack/react-simple-icons'
import { FC } from 'react'

export type LinkType = {
  url: string
  icon: FC<any> | string
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
    icon: SiGithub,
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
    icon: SiLinkedin,
    fill: 'fill-[#0A66C2]',
    border: 'border-[#0A66C2]',
    shadow: 'shadow-blue-300',
    text: 'text-[#0A66C2]',
    color: 'from-bg-[#0b66c2] to-bg-[#008bff]',
    name: 'LinkedIn',
  },
  {
    url: 'https://www.facebook.com/people/%EC%9D%B4%EC%83%81%EB%AF%BC/pfbid0B4L2YBvSqKVkJ5JKGcUeJTGMhRj8puad8dAnbtKAVbZC7Y1zHnbLGAnym6P6thsxl/',
    // icon: SiGoogle,
    icon: SiFacebook,
    fill: 'fill-[#1877F2]',
    border: 'border-[#1877F2]',
    shadow: 'shadow-blue-300',
    text: 'text-[#1877F2]',
    color: 'from-bg-[#1877F2] to-bg-[#1877F2]',
    name: 'Facebook',
  },
  {
    url: 'https://twitter.com/more_than_min',
    icon: SiTwitter,
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
    url: 'https://instagram.com/more-dev-min',
    icon: SiInstagram,
    color: 'from-bg-[#C13584] to-bg-[#F56040]',
    fill: 'fill-[#da282a]',
    border: 'border-[#da282a]',
    shadow: 'shadow-red-300',
    text: 'text-[#da282a]',
    name: 'Instagram',
  },
]
