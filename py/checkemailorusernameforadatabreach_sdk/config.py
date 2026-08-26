# CheckEMailOrUsernameForADataBreach SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "CheckEMailOrUsernameForADataBreach",
            "slug": "check-e-mail-or-username-for-a-data-breach",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
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
            "name": "date",
            "req": True,
            "short": "Date of the breach in YYYY-MM format",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "Name of the breached service or database",
            "type": "`$STRING`",
          },
        ],
        "name": "data_breach_check",
        "op": {
          "list": {
            "input": "data",
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
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
