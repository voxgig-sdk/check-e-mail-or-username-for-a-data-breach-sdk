# CheckEMailOrUsernameForADataBreach SDK configuration


def make_config():
    return {
        "main": {
            "name": "CheckEMailOrUsernameForADataBreach",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://leakcheck.io/api",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "data_breach_check": {},
            },
        },
        "entity": {
      "data_breach_check": {
        "fields": [
          {
            "name": "date",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
        ],
        "name": "data_breach_check",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "example@example.com",
                      "kind": "query",
                      "name": "check",
                      "orig": "check",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/public",
                "parts": [
                  "public",
                ],
                "select": {
                  "exist": [
                    "check",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
