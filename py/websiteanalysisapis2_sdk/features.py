# WebsiteAnalysisApis2 SDK feature factory

from websiteanalysisapis2_sdk.feature.base_feature import WebsiteAnalysisApis2BaseFeature
from websiteanalysisapis2_sdk.feature.test_feature import WebsiteAnalysisApis2TestFeature


def _make_feature(name):
    features = {
        "base": lambda: WebsiteAnalysisApis2BaseFeature(),
        "test": lambda: WebsiteAnalysisApis2TestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
