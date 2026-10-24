# CheckEMailOrUsernameForADataBreach SDK utility: prepare_body
require_relative 'media'
module CheckEMailOrUsernameForADataBreachUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return CheckEMailOrUsernameForADataBreachUtilities.raw_body(ctx.reqdata) if CheckEMailOrUsernameForADataBreachUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
