import { nanoid } from '@reduxjs/toolkit'

export type LoginInfo = {
  username: string
  password: string
  isRemember?: boolean
}

type ApiContext = {
  token?: string | null
}

type UserInfo = {
  username: string
  firstName: string
  lastName: string
}

type LoginResult = {
  token: string
  user: UserInfo
}

export function getCurrentUser(apiContext: ApiContext) {
  const username = (apiContext.token || '').split(':')[0]
  return getUser(username, apiContext)
}

export function getUser(username: string, apiContext: ApiContext): Promise<UserInfo> {
  const { token } = apiContext

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token) {
        if (username === 'user') {
          const user = {
            username: 'user',
            firstName: 'u',
            lastName: 'ser'
          }
          return resolve(user)
        }
        if (username === 'admin') {
          const user = {
            username: 'admin',
            firstName: 'a',
            lastName: 'dmin'
          }
          return resolve(user)
        }
        return reject(new Error(`Username "${username}" does not exist.`))
      }
      return reject(new Error('Unauthorized User API call: missing auth token.'))
    }, 0)
  })
}

export function signin({ username, password }: LoginInfo): Promise<LoginResult> {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      if (['user', 'admin'].includes(username) && password === '123456') {
        try {
          const token = `${username}:${nanoid()}`
          const user = await getUser(username, { token })
          return resolve({ token, user })
        } catch (e) {
          return reject(e)
        }
      }
      return reject(
        new Error(
          'Invalid username and password. Please login with (username: user, password: 123456).'
        )
      )
    }, 2000)
  })
}

export function signout(apiContext = {}) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
}
