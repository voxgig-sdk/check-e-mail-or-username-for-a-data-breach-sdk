# CheckEMailOrUsernameForADataBreach SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CheckEMailOrUsernameForADataBreachUtility.registrar = ->(u) {
  u.clean = CheckEMailOrUsernameForADataBreachUtilities::Clean
  u.done = CheckEMailOrUsernameForADataBreachUtilities::Done
  u.make_error = CheckEMailOrUsernameForADataBreachUtilities::MakeError
  u.feature_add = CheckEMailOrUsernameForADataBreachUtilities::FeatureAdd
  u.feature_hook = CheckEMailOrUsernameForADataBreachUtilities::FeatureHook
  u.feature_init = CheckEMailOrUsernameForADataBreachUtilities::FeatureInit
  u.fetcher = CheckEMailOrUsernameForADataBreachUtilities::Fetcher
  u.make_fetch_def = CheckEMailOrUsernameForADataBreachUtilities::MakeFetchDef
  u.make_context = CheckEMailOrUsernameForADataBreachUtilities::MakeContext
  u.make_options = CheckEMailOrUsernameForADataBreachUtilities::MakeOptions
  u.make_request = CheckEMailOrUsernameForADataBreachUtilities::MakeRequest
  u.make_response = CheckEMailOrUsernameForADataBreachUtilities::MakeResponse
  u.make_result = CheckEMailOrUsernameForADataBreachUtilities::MakeResult
  u.make_point = CheckEMailOrUsernameForADataBreachUtilities::MakePoint
  u.make_spec = CheckEMailOrUsernameForADataBreachUtilities::MakeSpec
  u.make_url = CheckEMailOrUsernameForADataBreachUtilities::MakeUrl
  u.param = CheckEMailOrUsernameForADataBreachUtilities::Param
  u.prepare_auth = CheckEMailOrUsernameForADataBreachUtilities::PrepareAuth
  u.prepare_body = CheckEMailOrUsernameForADataBreachUtilities::PrepareBody
  u.prepare_headers = CheckEMailOrUsernameForADataBreachUtilities::PrepareHeaders
  u.prepare_method = CheckEMailOrUsernameForADataBreachUtilities::PrepareMethod
  u.prepare_params = CheckEMailOrUsernameForADataBreachUtilities::PrepareParams
  u.prepare_path = CheckEMailOrUsernameForADataBreachUtilities::PreparePath
  u.prepare_query = CheckEMailOrUsernameForADataBreachUtilities::PrepareQuery
  u.result_basic = CheckEMailOrUsernameForADataBreachUtilities::ResultBasic
  u.result_body = CheckEMailOrUsernameForADataBreachUtilities::ResultBody
  u.result_headers = CheckEMailOrUsernameForADataBreachUtilities::ResultHeaders
  u.transform_request = CheckEMailOrUsernameForADataBreachUtilities::TransformRequest
  u.transform_response = CheckEMailOrUsernameForADataBreachUtilities::TransformResponse
}
