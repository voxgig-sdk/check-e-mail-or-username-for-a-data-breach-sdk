-- ProjectName SDK configuration

local function make_config()
  return {
    main = {
      name = "CheckEMailOrUsernameForADataBreach",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
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
            ["active"] = true,
            ["name"] = "date",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
        },
        ["name"] = "data_breach_check",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["example"] = "example@example.com",
                      ["kind"] = "query",
                      ["name"] = "check",
                      ["orig"] = "check",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
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
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
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
