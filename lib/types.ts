export interface Post {
  id: string
  slug: string
  title: string
  date: Date
  updateDate: Date
  cover: { light: string; dark: string; blurLight: any; blurDark: any }
  category: { name: string; color: string }
  tags: [{ name: string; color: string }]
  series: { name: string; color: string }
  excerpt: string
  tip: string
  sspai: string
  originalCover: boolean
  colorTitle: boolean
}

export type Tag = {
  name: string
  color: string
  count: number
}

export type TPostStatus = 'Private' | 'Public' | 'PublicOnDetail'
export type TPostType = 'Post' | 'Paper' | 'Page'

export type TPost = {
  id: string
  date: { start_date: string }
  type: TPostType[]
  slug: string
  tags?: string[]
  category?: string[]
  summary?: string
  author?: {
    id: string
    name: string
    profile_photo?: string
  }[]
  title: string
  status: TPostStatus[]
  createdTime: string
  fullWidth: boolean
  thumbnail?: string
}

export type TPosts = TPost[]

export type TTags = {
  [tagName: string]: number
}
export type TCategories = {
  [category: string]: number
}

export type ThemeType = 'dark' | 'light'
