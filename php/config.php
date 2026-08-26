<?php
declare(strict_types=1);

// CheckEMailOrUsernameForADataBreach SDK configuration

class CheckEMailOrUsernameForADataBreachConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "CheckEMailOrUsernameForADataBreach",
                "slug" => "check-e-mail-or-username-for-a-data-breach",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://leakcheck.io/api",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "data_breach_check" => [],
                ],
            ],
            "entity" => [
        'data_breach_check' => [
          'fields' => [
            [
              'name' => 'date',
              'req' => true,
              'short' => 'Date of the breach in YYYY-MM format',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'req' => true,
              'short' => 'Name of the breached service or database',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'data_breach_check',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'example@example.com',
                        'kind' => 'query',
                        'name' => 'check',
                        'orig' => 'check',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/public',
                  'parts' => [
                    'public',
                  ],
                  'select' => [
                    'exist' => [
                      'check',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return CheckEMailOrUsernameForADataBreachFeatures::make_feature($name);
    }
}
