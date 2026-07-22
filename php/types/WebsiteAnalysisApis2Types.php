<?php
declare(strict_types=1);

// Typed models for the WebsiteAnalysisApis2 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** DeadLinkChecker entity data model. */
class DeadLinkChecker
{
    public ?int $status_code = null;
    public ?string $url = null;
}

/** Request payload for DeadLinkChecker#list. */
class DeadLinkCheckerListMatch
{
    public ?int $status_code = null;
    public ?string $url = null;
}

/** Performance entity data model. */
class Performance
{
    public ?float $load_time = null;
    public ?int $page_size = null;
    public ?int $performance_score = null;
    public ?int $request = null;
    public ?bool $success = null;
    public ?string $url = null;
}

/** Request payload for Performance#load. */
class PerformanceLoadMatch
{
    public ?float $load_time = null;
    public ?int $page_size = null;
    public ?int $performance_score = null;
    public ?int $request = null;
    public ?bool $success = null;
    public ?string $url = null;
}

/** Screenshot entity data model. */
class Screenshot
{
    public ?string $screenshot = null;
    public ?bool $success = null;
    public ?string $url = null;
}

/** Request payload for Screenshot#load. */
class ScreenshotLoadMatch
{
    public ?string $screenshot = null;
    public ?bool $success = null;
    public ?string $url = null;
}

/** Seo entity data model. */
class Seo
{
    public ?string $description = null;
    public ?array $heading = null;
    public ?array $keyword = null;
    public ?array $recommendation = null;
    public ?int $score = null;
    public ?bool $success = null;
    public ?string $title = null;
    public ?string $url = null;
}

/** Request payload for Seo#list. */
class SeoListMatch
{
    public ?string $description = null;
    public ?array $heading = null;
    public ?array $keyword = null;
    public ?array $recommendation = null;
    public ?int $score = null;
    public ?bool $success = null;
    public ?string $title = null;
    public ?string $url = null;
}

/** Ssl entity data model. */
class Ssl
{
    public ?int $days_remaining = null;
    public ?string $issuer = null;
    public ?string $subject = null;
    public ?bool $success = null;
    public ?string $url = null;
    public ?bool $valid = null;
    public ?string $valid_from = null;
    public ?string $valid_to = null;
}

/** Request payload for Ssl#load. */
class SslLoadMatch
{
    public ?int $days_remaining = null;
    public ?string $issuer = null;
    public ?string $subject = null;
    public ?bool $success = null;
    public ?string $url = null;
    public ?bool $valid = null;
    public ?string $valid_from = null;
    public ?string $valid_to = null;
}

/** TechStackDetection entity data model. */
class TechStackDetection
{
    public ?string $category = null;
    public ?string $name = null;
    public ?string $version = null;
}

/** Request payload for TechStackDetection#list. */
class TechStackDetectionListMatch
{
    public ?string $category = null;
    public ?string $name = null;
    public ?string $version = null;
}

