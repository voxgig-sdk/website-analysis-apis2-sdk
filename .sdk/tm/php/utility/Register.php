<?php
declare(strict_types=1);

// WebsiteAnalysisApis2 SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

WebsiteAnalysisApis2Utility::setRegistrar(function (WebsiteAnalysisApis2Utility $u): void {
    $u->clean = [WebsiteAnalysisApis2Clean::class, 'call'];
    $u->done = [WebsiteAnalysisApis2Done::class, 'call'];
    $u->make_error = [WebsiteAnalysisApis2MakeError::class, 'call'];
    $u->feature_add = [WebsiteAnalysisApis2FeatureAdd::class, 'call'];
    $u->feature_hook = [WebsiteAnalysisApis2FeatureHook::class, 'call'];
    $u->feature_init = [WebsiteAnalysisApis2FeatureInit::class, 'call'];
    $u->fetcher = [WebsiteAnalysisApis2Fetcher::class, 'call'];
    $u->make_fetch_def = [WebsiteAnalysisApis2MakeFetchDef::class, 'call'];
    $u->make_context = [WebsiteAnalysisApis2MakeContext::class, 'call'];
    $u->make_options = [WebsiteAnalysisApis2MakeOptions::class, 'call'];
    $u->make_request = [WebsiteAnalysisApis2MakeRequest::class, 'call'];
    $u->make_response = [WebsiteAnalysisApis2MakeResponse::class, 'call'];
    $u->make_result = [WebsiteAnalysisApis2MakeResult::class, 'call'];
    $u->make_point = [WebsiteAnalysisApis2MakePoint::class, 'call'];
    $u->make_spec = [WebsiteAnalysisApis2MakeSpec::class, 'call'];
    $u->make_url = [WebsiteAnalysisApis2MakeUrl::class, 'call'];
    $u->param = [WebsiteAnalysisApis2Param::class, 'call'];
    $u->prepare_auth = [WebsiteAnalysisApis2PrepareAuth::class, 'call'];
    $u->prepare_body = [WebsiteAnalysisApis2PrepareBody::class, 'call'];
    $u->prepare_headers = [WebsiteAnalysisApis2PrepareHeaders::class, 'call'];
    $u->prepare_method = [WebsiteAnalysisApis2PrepareMethod::class, 'call'];
    $u->prepare_params = [WebsiteAnalysisApis2PrepareParams::class, 'call'];
    $u->prepare_path = [WebsiteAnalysisApis2PreparePath::class, 'call'];
    $u->prepare_query = [WebsiteAnalysisApis2PrepareQuery::class, 'call'];
    $u->result_basic = [WebsiteAnalysisApis2ResultBasic::class, 'call'];
    $u->result_body = [WebsiteAnalysisApis2ResultBody::class, 'call'];
    $u->result_headers = [WebsiteAnalysisApis2ResultHeaders::class, 'call'];
    $u->transform_request = [WebsiteAnalysisApis2TransformRequest::class, 'call'];
    $u->transform_response = [WebsiteAnalysisApis2TransformResponse::class, 'call'];
});
