<?php
declare(strict_types=1);

// WebsiteAnalysisApis2 SDK utility: result_headers

class WebsiteAnalysisApis2ResultHeaders
{
    public static function call(WebsiteAnalysisApis2Context $ctx): ?WebsiteAnalysisApis2Result
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
