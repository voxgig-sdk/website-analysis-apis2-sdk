-- WebsiteAnalysisApis2 SDK error

local WebsiteAnalysisApis2Error = {}
WebsiteAnalysisApis2Error.__index = WebsiteAnalysisApis2Error


function WebsiteAnalysisApis2Error.new(code, msg, ctx)
  local self = setmetatable({}, WebsiteAnalysisApis2Error)
  self.is_sdk_error = true
  self.sdk = "WebsiteAnalysisApis2"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function WebsiteAnalysisApis2Error:error()
  return self.msg
end


function WebsiteAnalysisApis2Error:__tostring()
  return self.msg
end


return WebsiteAnalysisApis2Error
