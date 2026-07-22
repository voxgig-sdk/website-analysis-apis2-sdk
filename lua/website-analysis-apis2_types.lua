-- Typed models for the WebsiteAnalysisApis2 SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class DeadLinkChecker
---@field status_code? number
---@field url? string

---@class DeadLinkCheckerListMatch
---@field status_code? number
---@field url? string

---@class Performance
---@field load_time? number
---@field page_size? number
---@field performance_score? number
---@field request? number
---@field success? boolean
---@field url? string

---@class PerformanceLoadMatch
---@field load_time? number
---@field page_size? number
---@field performance_score? number
---@field request? number
---@field success? boolean
---@field url? string

---@class Screenshot
---@field screenshot? string
---@field success? boolean
---@field url? string

---@class ScreenshotLoadMatch
---@field screenshot? string
---@field success? boolean
---@field url? string

---@class Seo
---@field description? string
---@field heading? table
---@field keyword? table
---@field recommendation? table
---@field score? number
---@field success? boolean
---@field title? string
---@field url? string

---@class SeoListMatch
---@field description? string
---@field heading? table
---@field keyword? table
---@field recommendation? table
---@field score? number
---@field success? boolean
---@field title? string
---@field url? string

---@class Ssl
---@field days_remaining? number
---@field issuer? string
---@field subject? string
---@field success? boolean
---@field url? string
---@field valid? boolean
---@field valid_from? string
---@field valid_to? string

---@class SslLoadMatch
---@field days_remaining? number
---@field issuer? string
---@field subject? string
---@field success? boolean
---@field url? string
---@field valid? boolean
---@field valid_from? string
---@field valid_to? string

---@class TechStackDetection
---@field category? string
---@field name? string
---@field version? string

---@class TechStackDetectionListMatch
---@field category? string
---@field name? string
---@field version? string

local M = {}

return M
