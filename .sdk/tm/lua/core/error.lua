-- WebsiteAnalysisApis2 SDK error

local json = require("dkjson")

local WebsiteAnalysisApis2Error = {}
WebsiteAnalysisApis2Error.__index = WebsiteAnalysisApis2Error

-- Reachable for a debugger, absent from the table itself: the context holds
-- the live spec and options, and an error is what gets dumped or encoded.
local CONTEXT = setmetatable({}, { __mode = "k" })


function WebsiteAnalysisApis2Error.new(code, msg, ctx)
  local self = setmetatable({}, WebsiteAnalysisApis2Error)
  self.is_sdk_error = true
  self.sdk = "WebsiteAnalysisApis2"
  self.code = code or ""
  self.msg = msg or ""
  self.result = nil
  self.spec = nil
  CONTEXT[self] = ctx
  return self
end


function WebsiteAnalysisApis2Error:context()
  return CONTEXT[self]
end


function WebsiteAnalysisApis2Error:error()
  return self.msg
end


-- What make_error attached is already cleaned; the context is not part of
-- the record.
function WebsiteAnalysisApis2Error:to_table()
  return {
    sdk = self.sdk,
    code = self.code,
    msg = self.msg,
    status = self.status,
    result = self.result,
    spec = self.spec,
  }
end


function WebsiteAnalysisApis2Error:to_json()
  return json.encode(self:to_table())
end


function WebsiteAnalysisApis2Error:__tostring()
  return self.msg
end


function WebsiteAnalysisApis2Error.__tojson(self)
  return self:to_json()
end


return WebsiteAnalysisApis2Error
