-- CheckEMailOrUsernameForADataBreach SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "CheckEMailOrUsernameForADataBreach",
      slug = "check-e-mail-or-username-for-a-data-breach",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://leakcheck.io/api",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["data_breach_check"] = {},
      },
    },
    entity = {
      ["data_breach_check"] = {
        ["fields"] = {
          {
            ["name"] = "date",
            ["req"] = true,
            ["short"] = "Date of the breach in YYYY-MM format",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["short"] = "Name of the breached service or database",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "data_breach_check",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "example@example.com",
                      ["kind"] = "query",
                      ["name"] = "check",
                      ["orig"] = "check",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/public",
                ["parts"] = {
                  "public",
                },
                ["select"] = {
                  ["exist"] = {
                    "check",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
