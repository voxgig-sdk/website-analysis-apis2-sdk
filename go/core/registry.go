package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewDeadLinkCheckerEntityFunc func(client *WebsiteAnalysisApis2SDK, entopts map[string]any) WebsiteAnalysisApis2Entity

var NewPerformanceEntityFunc func(client *WebsiteAnalysisApis2SDK, entopts map[string]any) WebsiteAnalysisApis2Entity

var NewScreenshotEntityFunc func(client *WebsiteAnalysisApis2SDK, entopts map[string]any) WebsiteAnalysisApis2Entity

var NewSeoEntityFunc func(client *WebsiteAnalysisApis2SDK, entopts map[string]any) WebsiteAnalysisApis2Entity

var NewSslEntityFunc func(client *WebsiteAnalysisApis2SDK, entopts map[string]any) WebsiteAnalysisApis2Entity

var NewTechStackDetectionEntityFunc func(client *WebsiteAnalysisApis2SDK, entopts map[string]any) WebsiteAnalysisApis2Entity

