export type TPostStatus = 'Private' | 'Public'

export type TPost = {
  id: string
  date: { start_date: string }
  slug: string
  tags?: string[]
  category?: string[]
  summary?: string
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
