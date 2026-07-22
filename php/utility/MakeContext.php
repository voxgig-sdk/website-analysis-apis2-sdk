<?php
declare(strict_types=1);

// WebsiteAnalysisApis2 SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class WebsiteAnalysisApis2MakeContext
{
    public static function call(array $ctxmap, ?WebsiteAnalysisApis2Context $basectx): WebsiteAnalysisApis2Context
    {
        return new WebsiteAnalysisApis2Context($ctxmap, $basectx);
    }
}
