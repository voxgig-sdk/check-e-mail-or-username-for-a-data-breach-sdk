# CheckEMailOrUsernameForADataBreach SDK configuration

module CheckEMailOrUsernameForADataBreachConfig
  def self.make_config
    {
      "main" => {
        "name" => "CheckEMailOrUsernameForADataBreach",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://leakcheck.io/api",
        "auth" => {
          "prefix" => "Bearer",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "data_breach_check" => {},
        },
      },
      "entity" => {
        "data_breach_check" => {
          "fields" => [
            {
              "active" => true,
              "name" => "date",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "name",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 1,
            },
          ],
          "name" => "data_breach_check",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "query" => [
                      {
                        "active" => true,
                        "example" => "example@example.com",
                        "kind" => "query",
                        "name" => "check",
                        "orig" => "check",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/public",
                  "parts" => [
                    "public",
                  ],
                  "select" => {
                    "exist" => [
                      "check",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "list",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    CheckEMailOrUsernameForADataBreachFeatures.make_feature(name)
  end
end
