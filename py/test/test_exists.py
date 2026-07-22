# ProjectName SDK exists test

import pytest
from websiteanalysisapis2_sdk import WebsiteAnalysisApis2SDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = WebsiteAnalysisApis2SDK.test(None, None)
        assert testsdk is not None
