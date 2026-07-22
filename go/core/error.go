package core

type WebsiteAnalysisApis2Error struct {
	IsWebsiteAnalysisApis2Error bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewWebsiteAnalysisApis2Error(code string, msg string, ctx *Context) *WebsiteAnalysisApis2Error {
	return &WebsiteAnalysisApis2Error{
		IsWebsiteAnalysisApis2Error: true,
		Sdk:              "WebsiteAnalysisApis2",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *WebsiteAnalysisApis2Error) Error() string {
	return e.Msg
}
