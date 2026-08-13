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
            "active": True,
            "name": "date",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
        ],
        "name": "data_breach_check",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "example@example.com",
                      "kind": "query",
                      "name": "check",
                      "orig": "check",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
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
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
