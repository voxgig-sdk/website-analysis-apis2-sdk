-- Typed models for the WebsiteAnalysisApis2 SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class DeadLinkChecker
---@field statusCode? number
---@field url? string

---@class DeadLinkCheckerListMatch
---@field url string

---@class Performance
---@field loadTime? number
---@field pageSize? number
---@field performanceScore? number
---@field requests? number
---@field success? boolean
---@field url? string

---@class PerformanceLoadMatch
---@field url string

---@class Screenshot
---@field screenshot? string
---@field success? boolean
---@field url? string

---@class ScreenshotLoadMatch
---@field url string

---@class Seo
---@field description? string
---@field headings? table
---@field keywords? table
---@field recommendations? table
---@field score? number
---@field success? boolean
---@field title? string
---@field url? string

---@class SeoListMatch
---@field url string

---@class Ssl
---@field daysRemaining? number
---@field issuer? string
---@field subject? string
---@field success? boolean
---@field url? string
---@field valid? boolean
---@field validFrom? string
---@field validTo? string

---@class SslLoadMatch
---@field url string

---@class TechStackDetection
---@field category? string
---@field name? string
---@field version? string

---@class TechStackDetectionListMatch
---@field url string

local M = {}

return M
