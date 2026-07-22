# WebsiteAnalysisApis2 SDK utility: make_context

from core.context import WebsiteAnalysisApis2Context


def make_context_util(ctxmap, basectx):
    return WebsiteAnalysisApis2Context(ctxmap, basectx)
