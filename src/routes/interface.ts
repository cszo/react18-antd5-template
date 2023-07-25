export type MenuRoute = {
  name?: string
  path: string
  icon?: React.ReactNode
  auth?: boolean
  hideInMenu?: boolean
  index?: boolean
  element?: React.ReactNode
  children?: MenuRoute[]
}

export type RoutesType = Pick<MenuRoute, 'path' | 'element'> & {
  children?: RoutesType[]
}

export type MenuItem = {
  key: string
  icon?: React.ReactNode
  label: string | React.ReactNode
  children?: MenuItem[]
}

export type BreadcrumbMap<T extends MenuRoute> = Record<T['path'], T['name']>
