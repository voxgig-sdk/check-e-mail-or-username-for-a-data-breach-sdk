<?php
declare(strict_types=1);

// DataBreachCheck entity test

require_once __DIR__ . '/../checkemailorusernameforadatabreach_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class DataBreachCheckEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CheckEMailOrUsernameForADataBreachSDK::test(null, null);
        $ent = $testsdk->DataBreachCheck(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = data_breach_check_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "data_breach_check." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CHECKEMAILORUSERNAMEFORADATABREACH_TEST_DATA_BREACH_CHECK_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $data_breach_check_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.data_breach_check")));
        $data_breach_check_ref01_data = null;
        if (count($data_breach_check_ref01_data_raw) > 0) {
            $data_breach_check_ref01_data = Helpers::to_map($data_breach_check_ref01_data_raw[0][1]);
        }

        // LIST
        $data_breach_check_ref01_ent = $client->DataBreachCheck(null);
        $data_breach_check_ref01_match = [];

        [$data_breach_check_ref01_list_result, $err] = $data_breach_check_ref01_ent->list($data_breach_check_ref01_match, null);
        $this->assertNull($err);
        $this->assertIsArray($data_breach_check_ref01_list_result);

    }
}

function data_breach_check_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/data_breach_check/DataBreachCheckTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CheckEMailOrUsernameForADataBreachSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["data_breach_check01", "data_breach_check02", "data_breach_check03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CHECKEMAILORUSERNAMEFORADATABREACH_TEST_DATA_BREACH_CHECK_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CHECKEMAILORUSERNAMEFORADATABREACH_TEST_DATA_BREACH_CHECK_ENTID" => $idmap,
        "CHECKEMAILORUSERNAMEFORADATABREACH_TEST_LIVE" => "FALSE",
        "CHECKEMAILORUSERNAMEFORADATABREACH_TEST_EXPLAIN" => "FALSE",
        "CHECKEMAILORUSERNAMEFORADATABREACH_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CHECKEMAILORUSERNAMEFORADATABREACH_TEST_DATA_BREACH_CHECK_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["CHECKEMAILORUSERNAMEFORADATABREACH_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
                "apikey" => $env["CHECKEMAILORUSERNAMEFORADATABREACH_APIKEY"],
            ],
            $extra ?? [],
        ]);
        $client = new CheckEMailOrUsernameForADataBreachSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["CHECKEMAILORUSERNAMEFORADATABREACH_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["CHECKEMAILORUSERNAMEFORADATABREACH_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
