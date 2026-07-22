-- WebsiteAnalysisApis2 SDK exists test

local sdk = require("website-analysis-apis2_sdk")

describe("WebsiteAnalysisApis2SDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
