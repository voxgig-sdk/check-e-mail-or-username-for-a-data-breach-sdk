# CheckEMailOrUsernameForADataBreach SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module CheckEMailOrUsernameForADataBreachFeatures
  def self.make_feature(name)
    case name
    when "base"
      CheckEMailOrUsernameForADataBreachBaseFeature.new
    when "ratelimit"
      CheckEMailOrUsernameForADataBreachRatelimitFeature.new
    when "retry"
      CheckEMailOrUsernameForADataBreachRetryFeature.new
    when "test"
      CheckEMailOrUsernameForADataBreachTestFeature.new
    when "timeout"
      CheckEMailOrUsernameForADataBreachTimeoutFeature.new
    else
      CheckEMailOrUsernameForADataBreachBaseFeature.new
    end
  end
end
