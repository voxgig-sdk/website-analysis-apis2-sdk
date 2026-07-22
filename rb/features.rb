# WebsiteAnalysisApis2 SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module WebsiteAnalysisApis2Features
  def self.make_feature(name)
    case name
    when "base"
      WebsiteAnalysisApis2BaseFeature.new
    when "test"
      WebsiteAnalysisApis2TestFeature.new
    else
      WebsiteAnalysisApis2BaseFeature.new
    end
  end
end
