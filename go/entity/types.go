// Typed models for the WebsiteAnalysisApis2 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// DeadLinkChecker is the typed data model for the dead_link_checker entity.
type DeadLinkChecker struct {
	StatusCode *int `json:"status_code,omitempty"`
	Url *string `json:"url,omitempty"`
}

// DeadLinkCheckerListMatch is the typed request payload for DeadLinkChecker.ListTyped.
type DeadLinkCheckerListMatch struct {
	StatusCode *int `json:"status_code,omitempty"`
	Url *string `json:"url,omitempty"`
}

// Performance is the typed data model for the performance entity.
type Performance struct {
	LoadTime *float64 `json:"load_time,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	PerformanceScore *int `json:"performance_score,omitempty"`
	Request *int `json:"request,omitempty"`
	Success *bool `json:"success,omitempty"`
	Url *string `json:"url,omitempty"`
}

// PerformanceLoadMatch is the typed request payload for Performance.LoadTyped.
type PerformanceLoadMatch struct {
	LoadTime *float64 `json:"load_time,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	PerformanceScore *int `json:"performance_score,omitempty"`
	Request *int `json:"request,omitempty"`
	Success *bool `json:"success,omitempty"`
	Url *string `json:"url,omitempty"`
}

// Screenshot is the typed data model for the screenshot entity.
type Screenshot struct {
	Screenshot *string `json:"screenshot,omitempty"`
	Success *bool `json:"success,omitempty"`
	Url *string `json:"url,omitempty"`
}

// ScreenshotLoadMatch is the typed request payload for Screenshot.LoadTyped.
type ScreenshotLoadMatch struct {
	Screenshot *string `json:"screenshot,omitempty"`
	Success *bool `json:"success,omitempty"`
	Url *string `json:"url,omitempty"`
}

// Seo is the typed data model for the seo entity.
type Seo struct {
	Description *string `json:"description,omitempty"`
	Heading *map[string]any `json:"heading,omitempty"`
	Keyword *[]any `json:"keyword,omitempty"`
	Recommendation *[]any `json:"recommendation,omitempty"`
	Score *int `json:"score,omitempty"`
	Success *bool `json:"success,omitempty"`
	Title *string `json:"title,omitempty"`
	Url *string `json:"url,omitempty"`
}

// SeoListMatch is the typed request payload for Seo.ListTyped.
type SeoListMatch struct {
	Description *string `json:"description,omitempty"`
	Heading *map[string]any `json:"heading,omitempty"`
	Keyword *[]any `json:"keyword,omitempty"`
	Recommendation *[]any `json:"recommendation,omitempty"`
	Score *int `json:"score,omitempty"`
	Success *bool `json:"success,omitempty"`
	Title *string `json:"title,omitempty"`
	Url *string `json:"url,omitempty"`
}

// Ssl is the typed data model for the ssl entity.
type Ssl struct {
	DaysRemaining *int `json:"days_remaining,omitempty"`
	Issuer *string `json:"issuer,omitempty"`
	Subject *string `json:"subject,omitempty"`
	Success *bool `json:"success,omitempty"`
	Url *string `json:"url,omitempty"`
	Valid *bool `json:"valid,omitempty"`
	ValidFrom *string `json:"valid_from,omitempty"`
	ValidTo *string `json:"valid_to,omitempty"`
}

// SslLoadMatch is the typed request payload for Ssl.LoadTyped.
type SslLoadMatch struct {
	DaysRemaining *int `json:"days_remaining,omitempty"`
	Issuer *string `json:"issuer,omitempty"`
	Subject *string `json:"subject,omitempty"`
	Success *bool `json:"success,omitempty"`
	Url *string `json:"url,omitempty"`
	Valid *bool `json:"valid,omitempty"`
	ValidFrom *string `json:"valid_from,omitempty"`
	ValidTo *string `json:"valid_to,omitempty"`
}

// TechStackDetection is the typed data model for the tech_stack_detection entity.
type TechStackDetection struct {
	Category *string `json:"category,omitempty"`
	Name *string `json:"name,omitempty"`
	Version *string `json:"version,omitempty"`
}

// TechStackDetectionListMatch is the typed request payload for TechStackDetection.ListTyped.
type TechStackDetectionListMatch struct {
	Category *string `json:"category,omitempty"`
	Name *string `json:"name,omitempty"`
	Version *string `json:"version,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
