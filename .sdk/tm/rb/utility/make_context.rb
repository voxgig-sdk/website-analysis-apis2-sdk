# WebsiteAnalysisApis2 SDK utility: make_context
require_relative '../core/context'
module WebsiteAnalysisApis2Utilities
  MakeContext = ->(ctxmap, basectx) {
    WebsiteAnalysisApis2Context.new(ctxmap, basectx)
  }
end
