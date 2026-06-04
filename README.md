# CheckEMailOrUsernameForADataBreach SDK

Check whether an email address, username, or hashed email appears in known data breaches

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About LeakCheck Public API

[LeakCheck](https://leakcheck.io/) is a credential-exposure lookup service. Its public API lets you query whether a given email address, username, or truncated SHA256 hash of an email has been seen in a documented breach corpus.

What you get from the API:
- A single `GET` against `/api/public?check=<value>` returns a JSON object
- `success` — boolean indicating whether the query was processed
- `found` — number of breach records matched
- `fields` — array of exposed data categories (e.g. password, ip, name)
- `sources` — array of breach records, each with a `name` and `date`

The `check` parameter accepts three input types and the search type is detected automatically: a full email address, a SHA256 hash truncated to 24 characters, or a username (minimum 3 characters).

Operational notes: the public endpoint does not require an API key. CORS is disabled, so calls must be made server-side. Any site or tool that uses the API must include a "Powered by LeakCheck" attribution link.

## Try it

**TypeScript**
```bash
npm install check-e-mail-or-username-for-a-data-breach
```

**Python**
```bash
pip install check-e-mail-or-username-for-a-data-breach-sdk
```

**PHP**
```bash
composer require voxgig/check-e-mail-or-username-for-a-data-breach-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/check-e-mail-or-username-for-a-data-breach-sdk/go
```

**Ruby**
```bash
gem install check-e-mail-or-username-for-a-data-breach-sdk
```

**Lua**
```bash
luarocks install check-e-mail-or-username-for-a-data-breach-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { CheckEMailOrUsernameForADataBreachSDK } from 'check-e-mail-or-username-for-a-data-breach'

const client = new CheckEMailOrUsernameForADataBreachSDK({})

// List all databreachchecks
const databreachchecks = await client.DataBreachCheck().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o check-e-mail-or-username-for-a-data-breach-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "check-e-mail-or-username-for-a-data-breach": {
      "command": "/abs/path/to/check-e-mail-or-username-for-a-data-breach-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **DataBreachCheck** | A lookup against the breach corpus for a given email, username, or truncated email hash via `GET /api/public?check=<value>`, returning the number of matches, exposed field categories, and the list of source breaches. | `/public` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from checkemailorusernameforadatabreach_sdk import CheckEMailOrUsernameForADataBreachSDK

client = CheckEMailOrUsernameForADataBreachSDK({})

# List all databreachchecks
databreachchecks, err = client.DataBreachCheck(None).list(None, None)
```

### PHP

```php
<?php
require_once 'checkemailorusernameforadatabreach_sdk.php';

$client = new CheckEMailOrUsernameForADataBreachSDK([]);

// List all databreachchecks
[$databreachchecks, $err] = $client->DataBreachCheck(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/check-e-mail-or-username-for-a-data-breach-sdk/go"

client := sdk.NewCheckEMailOrUsernameForADataBreachSDK(map[string]any{})

// List all databreachchecks
databreachchecks, err := client.DataBreachCheck(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "CheckEMailOrUsernameForADataBreach_sdk"

client = CheckEMailOrUsernameForADataBreachSDK.new({})

# List all databreachchecks
databreachchecks, err = client.DataBreachCheck(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("check-e-mail-or-username-for-a-data-breach_sdk")

local client = sdk.new({})

-- List all databreachchecks
local databreachchecks, err = client:DataBreachCheck(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = CheckEMailOrUsernameForADataBreachSDK.test()
const result = await client.DataBreachCheck().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = CheckEMailOrUsernameForADataBreachSDK.test(None, None)
result, err = client.DataBreachCheck(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = CheckEMailOrUsernameForADataBreachSDK::test(null, null);
[$result, $err] = $client->DataBreachCheck(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.DataBreachCheck(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = CheckEMailOrUsernameForADataBreachSDK.test(nil, nil)
result, err = client.DataBreachCheck(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:DataBreachCheck(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the LeakCheck Public API

- Upstream: [https://leakcheck.io/](https://leakcheck.io/)
- API docs: [https://wiki.leakcheck.io/en/api/public](https://wiki.leakcheck.io/en/api/public)

- Free public endpoint operated by LeakCheck
- Implementations must display a "Powered by LeakCheck" attribution link (affiliate links are accepted as an alternative)
- See the [LeakCheck API wiki](https://wiki.leakcheck.io/en/api/public) for terms
- Rate limits and other usage policies are not formally documented

---

Generated from the LeakCheck Public API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
