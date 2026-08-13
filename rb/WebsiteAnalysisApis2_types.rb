# frozen_string_literal: true

# Typed models for the WebsiteAnalysisApis2 SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# DeadLinkChecker entity data model.
#
# @!attribute [rw] statusCode
#   @return [Integer, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
DeadLinkChecker = Struct.new(
  :statusCode,
  :url,
  keyword_init: true
)

# Request payload for DeadLinkChecker#list.
#
# @!attribute [rw] statusCode
#   @return [Integer, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
DeadLinkCheckerListMatch = Struct.new(
  :statusCode,
  :url,
  keyword_init: true
)

# Performance entity data model.
#
# @!attribute [rw] loadTime
#   @return [Float, nil]
#
# @!attribute [rw] pageSize
#   @return [Integer, nil]
#
# @!attribute [rw] performanceScore
#   @return [Integer, nil]
#
# @!attribute [rw] requests
#   @return [Integer, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Performance = Struct.new(
  :loadTime,
  :pageSize,
  :performanceScore,
  :requests,
  :success,
  :url,
  keyword_init: true
)

# Request payload for Performance#load.
#
# @!attribute [rw] loadTime
#   @return [Float, nil]
#
# @!attribute [rw] pageSize
#   @return [Integer, nil]
#
# @!attribute [rw] performanceScore
#   @return [Integer, nil]
#
# @!attribute [rw] requests
#   @return [Integer, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
PerformanceLoadMatch = Struct.new(
  :loadTime,
  :pageSize,
  :performanceScore,
  :requests,
  :success,
  :url,
  keyword_init: true
)

# Screenshot entity data model.
#
# @!attribute [rw] screenshot
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Screenshot = Struct.new(
  :screenshot,
  :success,
  :url,
  keyword_init: true
)

# Request payload for Screenshot#load.
#
# @!attribute [rw] screenshot
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
ScreenshotLoadMatch = Struct.new(
  :screenshot,
  :success,
  :url,
  keyword_init: true
)

# Seo entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] headings
#   @return [Hash, nil]
#
# @!attribute [rw] keywords
#   @return [Array, nil]
#
# @!attribute [rw] recommendations
#   @return [Array, nil]
#
# @!attribute [rw] score
#   @return [Integer, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Seo = Struct.new(
  :description,
  :headings,
  :keywords,
  :recommendations,
  :score,
  :success,
  :title,
  :url,
  keyword_init: true
)

# Request payload for Seo#list.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] headings
#   @return [Hash, nil]
#
# @!attribute [rw] keywords
#   @return [Array, nil]
#
# @!attribute [rw] recommendations
#   @return [Array, nil]
#
# @!attribute [rw] score
#   @return [Integer, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
SeoListMatch = Struct.new(
  :description,
  :headings,
  :keywords,
  :recommendations,
  :score,
  :success,
  :title,
  :url,
  keyword_init: true
)

# Ssl entity data model.
#
# @!attribute [rw] daysRemaining
#   @return [Integer, nil]
#
# @!attribute [rw] issuer
#   @return [String, nil]
#
# @!attribute [rw] subject
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] valid
#   @return [Boolean, nil]
#
# @!attribute [rw] validFrom
#   @return [String, nil]
#
# @!attribute [rw] validTo
#   @return [String, nil]
Ssl = Struct.new(
  :daysRemaining,
  :issuer,
  :subject,
  :success,
  :url,
  :valid,
  :validFrom,
  :validTo,
  keyword_init: true
)

# Request payload for Ssl#load.
#
# @!attribute [rw] daysRemaining
#   @return [Integer, nil]
#
# @!attribute [rw] issuer
#   @return [String, nil]
#
# @!attribute [rw] subject
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] valid
#   @return [Boolean, nil]
#
# @!attribute [rw] validFrom
#   @return [String, nil]
#
# @!attribute [rw] validTo
#   @return [String, nil]
SslLoadMatch = Struct.new(
  :daysRemaining,
  :issuer,
  :subject,
  :success,
  :url,
  :valid,
  :validFrom,
  :validTo,
  keyword_init: true
)

# TechStackDetection entity data model.
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
TechStackDetection = Struct.new(
  :category,
  :name,
  :version,
  keyword_init: true
)

# Request payload for TechStackDetection#list.
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
TechStackDetectionListMatch = Struct.new(
  :category,
  :name,
  :version,
  keyword_init: true
)

