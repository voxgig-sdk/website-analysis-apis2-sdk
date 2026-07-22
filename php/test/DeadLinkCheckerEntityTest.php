<?php
declare(strict_types=1);

// DeadLinkChecker entity test

require_once __DIR__ . '/../websiteanalysisapis2_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class DeadLinkCheckerEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = WebsiteAnalysisApis2SDK::test(null, null);
        $ent = $testsdk->DeadLinkChecker(null);
        $this->assertNotNull($ent);
    }

    // Feature #4: the entity stream(action, ...) method runs the op pipeline
    // and yields result items. With the streaming feature active it yields the
    // feature's incremental output; otherwise it falls back to the materialised
    // list so stream always yields.
    public function test_stream(): void
    {
        $seed = [
            "entity" => [
                "dead_link_checker" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = WebsiteAnalysisApis2SDK::test($seed, null);
        $seen = iterator_to_array($base->DeadLinkChecker(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = WebsiteAnalysisApis2Config::make_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = WebsiteAnalysisApis2SDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->DeadLinkChecker(null)->stream("list", null, null) as $item) {
                if (is_array($item) && array_is_list($item)) {
                    foreach ($item as $sub) {
                        $got[] = $sub;
                    }
                } else {
                    $got[] = $item;
                }
            }
            $this->assertCount(3, $got);
        }
    }

    public function test_basic_flow(): void
    {
        $setup = dead_link_checker_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "dead_link_checker." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set WEBSITEANALYSISAPIS__TEST_DEAD_LINK_CHECKER_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $dead_link_checker_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.dead_link_checker")));
        $dead_link_checker_ref01_data = null;
        if (count($dead_link_checker_ref01_data_raw) > 0) {
            $dead_link_checker_ref01_data = Helpers::to_map($dead_link_checker_ref01_data_raw[0][1]);
        }

        // LIST
        $dead_link_checker_ref01_ent = $client->DeadLinkChecker(null);
        $dead_link_checker_ref01_match = [];

        $dead_link_checker_ref01_list_result = $dead_link_checker_ref01_ent->list($dead_link_checker_ref01_match, null);
        $this->assertIsArray($dead_link_checker_ref01_list_result);

    }
}

function dead_link_checker_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/dead_link_checker/DeadLinkCheckerTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = WebsiteAnalysisApis2SDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["dead_link_checker01", "dead_link_checker02", "dead_link_checker03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("WEBSITEANALYSISAPIS__TEST_DEAD_LINK_CHECKER_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "WEBSITEANALYSISAPIS__TEST_DEAD_LINK_CHECKER_ENTID" => $idmap,
        "WEBSITEANALYSISAPIS__TEST_LIVE" => "FALSE",
        "WEBSITEANALYSISAPIS__TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["WEBSITEANALYSISAPIS__TEST_DEAD_LINK_CHECKER_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["WEBSITEANALYSISAPIS__TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new WebsiteAnalysisApis2SDK(Helpers::to_map($merged_opts));
    }

    $live = $env["WEBSITEANALYSISAPIS__TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["WEBSITEANALYSISAPIS__TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
