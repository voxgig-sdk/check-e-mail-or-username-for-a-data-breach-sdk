<?php
declare(strict_types=1);

// CheckEMailOrUsernameForADataBreach SDK configuration

class CheckEMailOrUsernameForADataBreachConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "CheckEMailOrUsernameForADataBreach",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://leakcheck.io/api",
                "auth" => [
                    "prefix" => "Bearer",
                ],
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
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 1,
            ],
          ],
          'name' => 'data_breach_check',
          'op' => [
            'list' => [
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
                        'active' => true,
                      ],
                    ],
                  ],
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
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'list',
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
