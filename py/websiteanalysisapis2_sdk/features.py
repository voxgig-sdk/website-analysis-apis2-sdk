# WebsiteAnalysisApis2 SDK feature factory

from websiteanalysisapis2_sdk.feature.base_feature import WebsiteAnalysisApis2BaseFeature
from websiteanalysisapis2_sdk.feature.ratelimit_feature import WebsiteAnalysisApis2RatelimitFeature
from websiteanalysisapis2_sdk.feature.retry_feature import WebsiteAnalysisApis2RetryFeature
from websiteanalysisapis2_sdk.feature.test_feature import WebsiteAnalysisApis2TestFeature
from websiteanalysisapis2_sdk.feature.timeout_feature import WebsiteAnalysisApis2TimeoutFeature


_FEATURES = {
    "base": lambda: WebsiteAnalysisApis2BaseFeature(),
    "ratelimit": lambda: WebsiteAnalysisApis2RatelimitFeature(),
    "retry": lambda: WebsiteAnalysisApis2RetryFeature(),
    "test": lambda: WebsiteAnalysisApis2TestFeature(),
    "timeout": lambda: WebsiteAnalysisApis2TimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
