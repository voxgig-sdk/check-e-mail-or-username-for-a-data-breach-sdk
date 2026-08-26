# CheckEMailOrUsernameForADataBreach SDK configuration

module CheckEMailOrUsernameForADataBreachConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "CheckEMailOrUsernameForADataBreach",
        "slug" => "check-e-mail-or-username-for-a-data-breach",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
        },
      },
      "options" => {
        "base" => "https://leakcheck.io/api",
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
              "name" => "date",
              "req" => true,
              "short" => "Date of the breach in YYYY-MM format",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "req" => true,
              "short" => "Name of the breached service or database",
              "type" => "`$STRING`",
            },
          ],
          "name" => "data_breach_check",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "example@example.com",
                        "kind" => "query",
                        "name" => "check",
                        "orig" => "check",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
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
                },
              ],
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
