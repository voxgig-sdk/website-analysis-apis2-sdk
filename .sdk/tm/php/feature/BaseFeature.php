<?php
declare(strict_types=1);

// WebsiteAnalysisApis2 SDK base feature

class WebsiteAnalysisApis2BaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(WebsiteAnalysisApis2Context $ctx, array $options): void {}
    public function PostConstruct(WebsiteAnalysisApis2Context $ctx): void {}
    public function PostConstructEntity(WebsiteAnalysisApis2Context $ctx): void {}
    public function SetData(WebsiteAnalysisApis2Context $ctx): void {}
    public function GetData(WebsiteAnalysisApis2Context $ctx): void {}
    public function GetMatch(WebsiteAnalysisApis2Context $ctx): void {}
    public function SetMatch(WebsiteAnalysisApis2Context $ctx): void {}
    public function PrePoint(WebsiteAnalysisApis2Context $ctx): void {}
    public function PreSpec(WebsiteAnalysisApis2Context $ctx): void {}
    public function PreRequest(WebsiteAnalysisApis2Context $ctx): void {}
    public function PreResponse(WebsiteAnalysisApis2Context $ctx): void {}
    public function PreResult(WebsiteAnalysisApis2Context $ctx): void {}
    public function PreDone(WebsiteAnalysisApis2Context $ctx): void {}
    public function PreUnexpected(WebsiteAnalysisApis2Context $ctx): void {}
}
