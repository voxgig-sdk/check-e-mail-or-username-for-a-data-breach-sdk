package sdktest

import (
	"encoding/json"
	"os"
	"strings"
	"testing"

	sdk "github.com/voxgig-sdk/check-e-mail-or-username-for-a-data-breach-sdk"
	"github.com/voxgig-sdk/check-e-mail-or-username-for-a-data-breach-sdk/core"
)

func TestDataBreachCheckDirect(t *testing.T) {
	t.Run("direct-list-data_breach_check", func(t *testing.T) {
		setup := data_breach_checkDirectSetup([]any{
			map[string]any{"id": "direct01"},
			map[string]any{"id": "direct02"},
		})
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		if _shouldSkip, _reason := isControlSkipped("direct", "direct-list-data_breach_check", _mode); _shouldSkip {
			if _reason == "" {
				_reason = "skipped via sdk-test-control.json"
			}
			t.Skip(_reason)
			return
		}
		client := setup.client


		result, err := client.Direct(map[string]any{
			"path":   "public",
			"method": "GET",
			"params": map[string]any{},
		})
		if setup.live {
			// Live mode is lenient: synthetic IDs frequently 4xx and the
			// list-response shape varies wildly across public APIs. Skip
			// rather than fail when the call doesn't return a usable list.
			if err != nil {
				t.Skipf("list call failed (likely synthetic IDs against live API): %v", err)
			}
			if result["ok"] != true {
				t.Skipf("list call not ok (likely synthetic IDs against live API): %v", result)
			}
			status := core.ToInt(result["status"])
			if status < 200 || status >= 300 {
				t.Skipf("expected 2xx status, got %v", result["status"])
			}
		} else {
			if err != nil {
				t.Fatalf("direct failed: %v", err)
			}
			if result["ok"] != true {
				t.Fatalf("expected ok to be true, got %v", result["ok"])
			}
			if core.ToInt(result["status"]) != 200 {
				t.Fatalf("expected status 200, got %v", result["status"])
			}
		}

		if !setup.live {
			if dataList, ok := result["data"].([]any); ok {
				if len(dataList) != 2 {
					t.Fatalf("expected 2 items, got %d", len(dataList))
				}
			} else {
				t.Fatalf("expected data to be an array, got %T", result["data"])
			}

			if len(*setup.calls) != 1 {
				t.Fatalf("expected 1 call, got %d", len(*setup.calls))
			}
		}
	})

}

type data_breach_checkDirectSetupResult struct {
	client *sdk.CheckEMailOrUsernameForADataBreachSDK
	calls  *[]map[string]any
	live   bool
	idmap  map[string]any
}

func data_breach_checkDirectSetup(mockres any) *data_breach_checkDirectSetupResult {
	loadEnvLocal()

	calls := &[]map[string]any{}

	env := envOverride(map[string]any{
		"CHECKEMAILORUSERNAMEFORADATABREACH_TEST_DATA_BREACH_CHECK_ENTID": map[string]any{},
		"CHECKEMAILORUSERNAMEFORADATABREACH_TEST_LIVE":    "FALSE",
		"CHECKEMAILORUSERNAMEFORADATABREACH_APIKEY":       "NONE",
	})

	live := env["CHECKEMAILORUSERNAMEFORADATABREACH_TEST_LIVE"] == "TRUE"

	if live {
		mergedOpts := map[string]any{
			"apikey": env["CHECKEMAILORUSERNAMEFORADATABREACH_APIKEY"],
		}
		client := sdk.NewCheckEMailOrUsernameForADataBreachSDK(mergedOpts)

		idmap := map[string]any{}
		if entidRaw, ok := env["CHECKEMAILORUSERNAMEFORADATABREACH_TEST_DATA_BREACH_CHECK_ENTID"]; ok {
			if entidStr, ok := entidRaw.(string); ok && strings.HasPrefix(entidStr, "{") {
				json.Unmarshal([]byte(entidStr), &idmap)
			} else if entidMap, ok := entidRaw.(map[string]any); ok {
				idmap = entidMap
			}
		}

		return &data_breach_checkDirectSetupResult{client: client, calls: calls, live: true, idmap: idmap}
	}

	mockFetch := func(url string, init map[string]any) (map[string]any, error) {
		*calls = append(*calls, map[string]any{"url": url, "init": init})
		return map[string]any{
			"status":     200,
			"statusText": "OK",
			"headers":    map[string]any{},
			"json": (func() any)(func() any {
				if mockres != nil {
					return mockres
				}
				return map[string]any{"id": "direct01"}
			}),
		}, nil
	}

	client := sdk.NewCheckEMailOrUsernameForADataBreachSDK(map[string]any{
		"base": "http://localhost:8080",
		"system": map[string]any{
			"fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
		},
	})

	return &data_breach_checkDirectSetupResult{client: client, calls: calls, live: false, idmap: map[string]any{}}
}

var _ = os.Getenv
var _ = json.Unmarshal
