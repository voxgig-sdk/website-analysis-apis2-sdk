// Typed models for the WebsiteAnalysisApis2 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/website-analysis-apis2-sdk/go/core"
)

// DeadLinkChecker is the typed data model for the dead_link_checker entity.
type DeadLinkChecker struct {
}

// DeadLinkCheckerListMatch is the typed request payload for DeadLinkChecker.ListTyped.
type DeadLinkCheckerListMatch struct {
	Url string `json:"url"`
}

// Performance is the typed data model for the performance entity.
type Performance struct {
}

// PerformanceLoadMatch is the typed request payload for Performance.LoadTyped.
type PerformanceLoadMatch struct {
	Url string `json:"url"`
}

// Screenshot is the typed data model for the screenshot entity.
type Screenshot struct {
}

// ScreenshotLoadMatch is the typed request payload for Screenshot.LoadTyped.
type ScreenshotLoadMatch struct {
	Url string `json:"url"`
}

// Seo is the typed data model for the seo entity.
type Seo struct {
}

// SeoListMatch is the typed request payload for Seo.ListTyped.
type SeoListMatch struct {
	Url string `json:"url"`
}

// Ssl is the typed data model for the ssl entity.
type Ssl struct {
}

// SslLoadMatch is the typed request payload for Ssl.LoadTyped.
type SslLoadMatch struct {
	Url string `json:"url"`
}

// TechStackDetection is the typed data model for the tech_stack_detection entity.
type TechStackDetection struct {
}

// TechStackDetectionListMatch is the typed request payload for TechStackDetection.ListTyped.
type TechStackDetectionListMatch struct {
	Url string `json:"url"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
