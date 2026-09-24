
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CheckEMailOrUsernameForADataBreachSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CheckEMailOrUsernameForADataBreachSDK.test()
    equal(testsdk instanceof CheckEMailOrUsernameForADataBreachSDK, true,
      'CheckEMailOrUsernameForADataBreachSDK.test() must return a client synchronously')
  })

})
