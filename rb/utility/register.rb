# WebsiteAnalysisApis2 SDK utility registration
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
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

WebsiteAnalysisApis2Utility.registrar = ->(u) {
  u.clean = WebsiteAnalysisApis2Utilities::Clean
  u.done = WebsiteAnalysisApis2Utilities::Done
  u.make_error = WebsiteAnalysisApis2Utilities::MakeError
  u.feature_add = WebsiteAnalysisApis2Utilities::FeatureAdd
  u.feature_hook = WebsiteAnalysisApis2Utilities::FeatureHook
  u.feature_init = WebsiteAnalysisApis2Utilities::FeatureInit
  u.fetcher = WebsiteAnalysisApis2Utilities::Fetcher
  u.make_fetch_def = WebsiteAnalysisApis2Utilities::MakeFetchDef
  u.make_context = WebsiteAnalysisApis2Utilities::MakeContext
  u.make_options = WebsiteAnalysisApis2Utilities::MakeOptions
  u.make_request = WebsiteAnalysisApis2Utilities::MakeRequest
  u.make_response = WebsiteAnalysisApis2Utilities::MakeResponse
  u.make_result = WebsiteAnalysisApis2Utilities::MakeResult
  u.make_point = WebsiteAnalysisApis2Utilities::MakePoint
  u.make_spec = WebsiteAnalysisApis2Utilities::MakeSpec
  u.make_url = WebsiteAnalysisApis2Utilities::MakeUrl
  u.param = WebsiteAnalysisApis2Utilities::Param
  u.prepare_auth = WebsiteAnalysisApis2Utilities::PrepareAuth
  u.prepare_body = WebsiteAnalysisApis2Utilities::PrepareBody
  u.prepare_headers = WebsiteAnalysisApis2Utilities::PrepareHeaders
  u.prepare_method = WebsiteAnalysisApis2Utilities::PrepareMethod
  u.prepare_params = WebsiteAnalysisApis2Utilities::PrepareParams
  u.prepare_path = WebsiteAnalysisApis2Utilities::PreparePath
  u.prepare_query = WebsiteAnalysisApis2Utilities::PrepareQuery
  u.graphql_body = WebsiteAnalysisApis2Utilities::GraphqlBody
  u.graphql_errors = WebsiteAnalysisApis2Utilities::GraphqlErrors
  u.result_basic = WebsiteAnalysisApis2Utilities::ResultBasic
  u.result_body = WebsiteAnalysisApis2Utilities::ResultBody
  u.result_headers = WebsiteAnalysisApis2Utilities::ResultHeaders
  u.transform_request = WebsiteAnalysisApis2Utilities::TransformRequest
  u.transform_response = WebsiteAnalysisApis2Utilities::TransformResponse
}
