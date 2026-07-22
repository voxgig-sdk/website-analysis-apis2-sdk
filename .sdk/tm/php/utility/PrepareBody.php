<?php
declare(strict_types=1);

// WebsiteAnalysisApis2 SDK utility: prepare_body

class WebsiteAnalysisApis2PrepareBody
{
    public static function call(WebsiteAnalysisApis2Context $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
