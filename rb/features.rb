# CheckEMailOrUsernameForADataBreach SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CheckEMailOrUsernameForADataBreachFeatures
  def self.make_feature(name)
    case name
    when "base"
      CheckEMailOrUsernameForADataBreachBaseFeature.new
    when "test"
      CheckEMailOrUsernameForADataBreachTestFeature.new
    else
      CheckEMailOrUsernameForADataBreachBaseFeature.new
    end
  end
end
