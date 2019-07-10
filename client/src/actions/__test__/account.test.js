/* globals describe test expect */
import { loginAccount, logoutAccount } from '../account'

describe('Generates proper action format', () => {
  test('Login with username + password', () => {
    const mockUsername = 'username'
    const mockPassword = '123'
    const action = loginAccount(mockUsername, mockPassword)

    expect(typeof action).toEqual('object')
    expect(action.type).toEqual('LOGIN')
    expect(action.username).toEqual(mockUsername)
    expect(action.password).toEqual(mockPassword)
  })

  test('Login without username', () => {
    const mockUsername = null
    const mockPassword = '123'
    expect(() => {
      loginAccount(mockUsername, mockPassword)
    }).toThrow()
  })

  test('Login without password', () => {
    const mockUsername = 'username'
    const mockPassword = null
    expect(() => {
      loginAccount(mockUsername, mockPassword)
    }).toThrow()
  })

  test('Logout', () => {
    const action = logoutAccount()

    expect(typeof action).toEqual('object')
    expect(action.type).toEqual('LOGOUT')
  })
})
