<?php
declare(strict_types=1);

// WebsiteAnalysisApis2 SDK utility: prepare_headers

class WebsiteAnalysisApis2PrepareHeaders
{
    public static function call(WebsiteAnalysisApis2Context $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
