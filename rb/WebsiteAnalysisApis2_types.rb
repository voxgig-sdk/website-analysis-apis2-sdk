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
# @!attribute [rw] status_code
#   @return [Integer, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
DeadLinkChecker = Struct.new(
  :status_code,
  :url,
  keyword_init: true
)

# Request payload for DeadLinkChecker#list.
#
# @!attribute [rw] status_code
#   @return [Integer, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
DeadLinkCheckerListMatch = Struct.new(
  :status_code,
  :url,
  keyword_init: true
)

# Performance entity data model.
#
# @!attribute [rw] load_time
#   @return [Float, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] performance_score
#   @return [Integer, nil]
#
# @!attribute [rw] request
#   @return [Integer, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Performance = Struct.new(
  :load_time,
  :page_size,
  :performance_score,
  :request,
  :success,
  :url,
  keyword_init: true
)

# Request payload for Performance#load.
#
# @!attribute [rw] load_time
#   @return [Float, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] performance_score
#   @return [Integer, nil]
#
# @!attribute [rw] request
#   @return [Integer, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
PerformanceLoadMatch = Struct.new(
  :load_time,
  :page_size,
  :performance_score,
  :request,
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
# @!attribute [rw] heading
#   @return [Hash, nil]
#
# @!attribute [rw] keyword
#   @return [Array, nil]
#
# @!attribute [rw] recommendation
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
  :heading,
  :keyword,
  :recommendation,
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
# @!attribute [rw] heading
#   @return [Hash, nil]
#
# @!attribute [rw] keyword
#   @return [Array, nil]
#
# @!attribute [rw] recommendation
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
  :heading,
  :keyword,
  :recommendation,
  :score,
  :success,
  :title,
  :url,
  keyword_init: true
)

# Ssl entity data model.
#
# @!attribute [rw] days_remaining
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
# @!attribute [rw] valid_from
#   @return [String, nil]
#
# @!attribute [rw] valid_to
#   @return [String, nil]
Ssl = Struct.new(
  :days_remaining,
  :issuer,
  :subject,
  :success,
  :url,
  :valid,
  :valid_from,
  :valid_to,
  keyword_init: true
)

# Request payload for Ssl#load.
#
# @!attribute [rw] days_remaining
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
# @!attribute [rw] valid_from
#   @return [String, nil]
#
# @!attribute [rw] valid_to
#   @return [String, nil]
SslLoadMatch = Struct.new(
  :days_remaining,
  :issuer,
  :subject,
  :success,
  :url,
  :valid,
  :valid_from,
  :valid_to,
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

