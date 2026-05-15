
import { Context } from './Context'


class CheckEMailOrUsernameForADataBreachError extends Error {

  isCheckEMailOrUsernameForADataBreachError = true

  sdk = 'CheckEMailOrUsernameForADataBreach'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  CheckEMailOrUsernameForADataBreachError
}

