export function loginAccount (username, password) {
  if (!username || !password) {
    throw new Error(`No username and/or password was speciefied in loginAccount action`)
  }
  return {
    type: 'LOGIN',
    username,
    password
  }
}

export function logoutAccount () {
  return {
    type: 'LOGOUT'
  }
}
