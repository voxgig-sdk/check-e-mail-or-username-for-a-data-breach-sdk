# CheckEMailOrUsernameForADataBreach SDK utility: make_context
require_relative '../core/context'
module CheckEMailOrUsernameForADataBreachUtilities
  MakeContext = ->(ctxmap, basectx) {
    CheckEMailOrUsernameForADataBreachContext.new(ctxmap, basectx)
  }
end
