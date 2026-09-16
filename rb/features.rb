# WebsiteAnalysisApis2 SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module WebsiteAnalysisApis2Features
  def self.make_feature(name)
    case name
    when "base"
      WebsiteAnalysisApis2BaseFeature.new
    when "ratelimit"
      WebsiteAnalysisApis2RatelimitFeature.new
    when "retry"
      WebsiteAnalysisApis2RetryFeature.new
    when "test"
      WebsiteAnalysisApis2TestFeature.new
    when "timeout"
      WebsiteAnalysisApis2TimeoutFeature.new
    else
      WebsiteAnalysisApis2BaseFeature.new
    end
  end
end
