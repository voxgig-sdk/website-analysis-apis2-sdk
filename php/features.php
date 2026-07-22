<?php
declare(strict_types=1);

// WebsiteAnalysisApis2 SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class WebsiteAnalysisApis2Features
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new WebsiteAnalysisApis2BaseFeature();
            case "test":
                return new WebsiteAnalysisApis2TestFeature();
            default:
                return new WebsiteAnalysisApis2BaseFeature();
        }
    }
}
