import { signin, signout, getCurrentUser, type LoginInfo } from '@/apis'

const TOKEN_KEY = '_csz*'

function isAuthenticated() {
  return !!getToken()
}

function getToken() {
  return sessionStorage.getItem(TOKEN_KEY) ?? localStorage.getItem(TOKEN_KEY)
}

async function checkAuth() {
  if (isAuthenticated()) {
    const token = getToken()
    const user = await getCurrentUser({ token })
    return { token, user }
  }
  return null
}

async function login({ username, password, isRemember }: LoginInfo) {
  const { token, user } = await signin({ username, password })

  if (isRemember) {
    localStorage.setItem(TOKEN_KEY, token)
  } else {
    sessionStorage.setItem(TOKEN_KEY, token)
  }

  return { token, user }
}

async function logout() {
  await signout()
  sessionStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(TOKEN_KEY)
}

export { isAuthenticated, getToken, login, logout, checkAuth }
