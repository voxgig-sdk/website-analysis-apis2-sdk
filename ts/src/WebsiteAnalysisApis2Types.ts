// Typed models for the WebsiteAnalysisApis2 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface DeadLinkChecker {
  status_code?: number
  url?: string
}

export interface DeadLinkCheckerListMatch {
  status_code?: number
  url?: string
}

export interface Performance {
  load_time?: number
  page_size?: number
  performance_score?: number
  request?: number
  success?: boolean
  url?: string
}

export interface PerformanceLoadMatch {
  load_time?: number
  page_size?: number
  performance_score?: number
  request?: number
  success?: boolean
  url?: string
}

export interface Screenshot {
  screenshot?: string
  success?: boolean
  url?: string
}

export interface ScreenshotLoadMatch {
  screenshot?: string
  success?: boolean
  url?: string
}

export interface Seo {
  description?: string
  heading?: Record<string, any>
  keyword?: any[]
  recommendation?: any[]
  score?: number
  success?: boolean
  title?: string
  url?: string
}

export interface SeoListMatch {
  description?: string
  heading?: Record<string, any>
  keyword?: any[]
  recommendation?: any[]
  score?: number
  success?: boolean
  title?: string
  url?: string
}

export interface Ssl {
  days_remaining?: number
  issuer?: string
  subject?: string
  success?: boolean
  url?: string
  valid?: boolean
  valid_from?: string
  valid_to?: string
}

export interface SslLoadMatch {
  days_remaining?: number
  issuer?: string
  subject?: string
  success?: boolean
  url?: string
  valid?: boolean
  valid_from?: string
  valid_to?: string
}

export interface TechStackDetection {
  category?: string
  name?: string
  version?: string
}

export interface TechStackDetectionListMatch {
  category?: string
  name?: string
  version?: string
}

