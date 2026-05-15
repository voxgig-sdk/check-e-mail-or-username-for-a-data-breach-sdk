package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/check-e-mail-or-username-for-a-data-breach-sdk"
	"github.com/voxgig-sdk/check-e-mail-or-username-for-a-data-breach-sdk/core"

	vs "github.com/voxgig/struct"
)

func TestDataBreachCheckEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.DataBreachCheck(nil)
		if ent == nil {
			t.Fatal("expected non-nil DataBreachCheckEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := data_breach_checkBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "data_breach_check." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set CHECKEMAILORUSERNAMEFORADATABREACH_TEST_DATA_BREACH_CHECK_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		dataBreachCheckRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.data_breach_check", setup.data)))
		var dataBreachCheckRef01Data map[string]any
		if len(dataBreachCheckRef01DataRaw) > 0 {
			dataBreachCheckRef01Data = core.ToMapAny(dataBreachCheckRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = dataBreachCheckRef01Data

		// LIST
		dataBreachCheckRef01Ent := client.DataBreachCheck(nil)
		dataBreachCheckRef01Match := map[string]any{}

		dataBreachCheckRef01ListResult, err := dataBreachCheckRef01Ent.List(dataBreachCheckRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, dataBreachCheckRef01ListOk := dataBreachCheckRef01ListResult.([]any)
		if !dataBreachCheckRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", dataBreachCheckRef01ListResult)
		}

	})
}

func data_breach_checkBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "data_breach_check", "DataBreachCheckTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read data_breach_check test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse data_breach_check test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"data_breach_check01", "data_breach_check02", "data_breach_check03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("CHECKEMAILORUSERNAMEFORADATABREACH_TEST_DATA_BREACH_CHECK_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CHECKEMAILORUSERNAMEFORADATABREACH_TEST_DATA_BREACH_CHECK_ENTID": idmap,
		"CHECKEMAILORUSERNAMEFORADATABREACH_TEST_LIVE":      "FALSE",
		"CHECKEMAILORUSERNAMEFORADATABREACH_TEST_EXPLAIN":   "FALSE",
		"CHECKEMAILORUSERNAMEFORADATABREACH_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CHECKEMAILORUSERNAMEFORADATABREACH_TEST_DATA_BREACH_CHECK_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["CHECKEMAILORUSERNAMEFORADATABREACH_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["CHECKEMAILORUSERNAMEFORADATABREACH_APIKEY"],
			},
			extra,
		})
		client = sdk.NewCheckEMailOrUsernameForADataBreachSDK(core.ToMapAny(mergedOpts))
	}

	live := env["CHECKEMAILORUSERNAMEFORADATABREACH_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["CHECKEMAILORUSERNAMEFORADATABREACH_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
