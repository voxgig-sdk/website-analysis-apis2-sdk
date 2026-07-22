<?php
declare(strict_types=1);

// WebsiteAnalysisApis2 SDK utility: result_body

class WebsiteAnalysisApis2ResultBody
{
    public static function call(WebsiteAnalysisApis2Context $ctx): ?WebsiteAnalysisApis2Result
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
