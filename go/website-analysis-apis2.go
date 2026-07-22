package voxgigwebsiteanalysisapis2sdk

import (
	"github.com/voxgig-sdk/website-analysis-apis2-sdk/go/core"
	"github.com/voxgig-sdk/website-analysis-apis2-sdk/go/entity"
	"github.com/voxgig-sdk/website-analysis-apis2-sdk/go/feature"
	_ "github.com/voxgig-sdk/website-analysis-apis2-sdk/go/utility"
)

// Type aliases preserve external API.
type WebsiteAnalysisApis2SDK = core.WebsiteAnalysisApis2SDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type WebsiteAnalysisApis2Entity = core.WebsiteAnalysisApis2Entity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type WebsiteAnalysisApis2Error = core.WebsiteAnalysisApis2Error

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewDeadLinkCheckerEntityFunc = func(client *core.WebsiteAnalysisApis2SDK, entopts map[string]any) core.WebsiteAnalysisApis2Entity {
		return entity.NewDeadLinkCheckerEntity(client, entopts)
	}
	core.NewPerformanceEntityFunc = func(client *core.WebsiteAnalysisApis2SDK, entopts map[string]any) core.WebsiteAnalysisApis2Entity {
		return entity.NewPerformanceEntity(client, entopts)
	}
	core.NewScreenshotEntityFunc = func(client *core.WebsiteAnalysisApis2SDK, entopts map[string]any) core.WebsiteAnalysisApis2Entity {
		return entity.NewScreenshotEntity(client, entopts)
	}
	core.NewSeoEntityFunc = func(client *core.WebsiteAnalysisApis2SDK, entopts map[string]any) core.WebsiteAnalysisApis2Entity {
		return entity.NewSeoEntity(client, entopts)
	}
	core.NewSslEntityFunc = func(client *core.WebsiteAnalysisApis2SDK, entopts map[string]any) core.WebsiteAnalysisApis2Entity {
		return entity.NewSslEntity(client, entopts)
	}
	core.NewTechStackDetectionEntityFunc = func(client *core.WebsiteAnalysisApis2SDK, entopts map[string]any) core.WebsiteAnalysisApis2Entity {
		return entity.NewTechStackDetectionEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewWebsiteAnalysisApis2SDK = core.NewWebsiteAnalysisApis2SDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewWebsiteAnalysisApis2SDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *WebsiteAnalysisApis2SDK  { return NewWebsiteAnalysisApis2SDK(nil) }
func Test() *WebsiteAnalysisApis2SDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
