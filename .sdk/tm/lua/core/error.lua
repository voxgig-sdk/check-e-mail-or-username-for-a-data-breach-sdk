-- CheckEMailOrUsernameForADataBreach SDK error

local CheckEMailOrUsernameForADataBreachError = {}
CheckEMailOrUsernameForADataBreachError.__index = CheckEMailOrUsernameForADataBreachError


function CheckEMailOrUsernameForADataBreachError.new(code, msg, ctx)
  local self = setmetatable({}, CheckEMailOrUsernameForADataBreachError)
  self.is_sdk_error = true
  self.sdk = "CheckEMailOrUsernameForADataBreach"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CheckEMailOrUsernameForADataBreachError:error()
  return self.msg
end


function CheckEMailOrUsernameForADataBreachError:__tostring()
  return self.msg
end


return CheckEMailOrUsernameForADataBreachError
