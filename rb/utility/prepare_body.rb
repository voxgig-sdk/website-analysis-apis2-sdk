# WebsiteAnalysisApis2 SDK utility: prepare_body
require_relative 'media'
module WebsiteAnalysisApis2Utilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return WebsiteAnalysisApis2Utilities.raw_body(ctx.reqdata) if WebsiteAnalysisApis2Utilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
