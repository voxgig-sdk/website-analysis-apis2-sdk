// Typed models for the WebsiteAnalysisApis2 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface DeadLinkChecker {
  statusCode?: number
  url?: string
}

export interface DeadLinkCheckerListMatch {
  url: string
}

export interface Performance {
  loadTime?: number
  pageSize?: number
  performanceScore?: number
  requests?: number
  success?: boolean
  url?: string
}

export interface PerformanceLoadMatch {
  url: string
}

export interface Screenshot {
  screenshot?: string
  success?: boolean
  url?: string
}

export interface ScreenshotLoadMatch {
  url: string
}

export interface Seo {
  description?: string
  headings?: Record<string, any>
  keywords?: any[]
  recommendations?: any[]
  score?: number
  success?: boolean
  title?: string
  url?: string
}

export interface SeoListMatch {
  url: string
}

export interface Ssl {
  daysRemaining?: number
  issuer?: string
  subject?: string
  success?: boolean
  url?: string
  valid?: boolean
  validFrom?: string
  validTo?: string
}

export interface SslLoadMatch {
  url: string
}

export interface TechStackDetection {
  category?: string
  name?: string
  version?: string
}

export interface TechStackDetectionListMatch {
  url: string
}

