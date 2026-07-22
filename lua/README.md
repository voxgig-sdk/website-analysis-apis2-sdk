# WebsiteAnalysisApis2 Lua SDK



The Lua SDK for the WebsiteAnalysisApis2 API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:DeadLinkChecker()` — each with the same small set of operations (`list`, `load`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/website-analysis-apis2-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("website-analysis-apis2_sdk")

local client = sdk.new()
```

### 2. List deadlinkchecker records

Entity operations return `(value, err)`. For `list`, `value` is the
array of records itself — iterate it directly (there is no wrapper).

```lua
local deadlinkcheckers, err = client:DeadLinkChecker():list()
if err then error(err) end

for _, item in ipairs(deadlinkcheckers) do
  print(item["url"])
end
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local deadlinkcheckers, err = client:DeadLinkChecker():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:DeadLinkChecker():list()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
WEBSITE_ANALYSIS_APIS2_TEST_LIVE=TRUE
```

Then run:

```bash
cd lua && busted test/
```


## Reference

### WebsiteAnalysisApis2SDK

```lua
local sdk = require("website-analysis-apis2_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### WebsiteAnalysisApis2SDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `DeadLinkChecker` | `(data) -> DeadLinkCheckerEntity` | Create a DeadLinkChecker entity instance. |
| `Performance` | `(data) -> PerformanceEntity` | Create a Performance entity instance. |
| `Screenshot` | `(data) -> ScreenshotEntity` | Create a Screenshot entity instance. |
| `Seo` | `(data) -> SeoEntity` | Create a Seo entity instance. |
| `Ssl` | `(data) -> SslEntity` | Create a Ssl entity instance. |
| `TechStackDetection` | `(data) -> TechStackDetectionEntity` | Create a TechStackDetection entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local dead_link_checker, err = client:DeadLinkChecker():load()
    if err then error(err) end
    -- dead_link_checker is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### DeadLinkChecker

| Field | Description |
| --- | --- |
| `status_code` |  |
| `url` |  |

Operations: List.

API path: `/deadlinks`

#### Performance

| Field | Description |
| --- | --- |
| `load_time` |  |
| `page_size` |  |
| `performance_score` |  |
| `request` |  |
| `success` |  |
| `url` |  |

Operations: Load.

API path: `/performance`

#### Screenshot

| Field | Description |
| --- | --- |
| `screenshot` |  |
| `success` |  |
| `url` |  |

Operations: Load.

API path: `/screenshot`

#### Seo

| Field | Description |
| --- | --- |
| `description` |  |
| `heading` |  |
| `keyword` |  |
| `recommendation` |  |
| `score` |  |
| `success` |  |
| `title` |  |
| `url` |  |

Operations: List.

API path: `/seo`

#### Ssl

| Field | Description |
| --- | --- |
| `days_remaining` |  |
| `issuer` |  |
| `subject` |  |
| `success` |  |
| `url` |  |
| `valid` |  |
| `valid_from` |  |
| `valid_to` |  |

Operations: Load.

API path: `/ssl`

#### TechStackDetection

| Field | Description |
| --- | --- |
| `category` |  |
| `name` |  |
| `version` |  |

Operations: List.

API path: `/techstack`



## Entities


### DeadLinkChecker

Create an instance: `local dead_link_checker = client:DeadLinkChecker(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `status_code` | `number` |  |
| `url` | `string` |  |

#### Example: List

```lua
local dead_link_checkers, err = client:DeadLinkChecker():list()
```


### Performance

Create an instance: `local performance = client:Performance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `load_time` | `number` |  |
| `page_size` | `number` |  |
| `performance_score` | `number` |  |
| `request` | `number` |  |
| `success` | `boolean` |  |
| `url` | `string` |  |

#### Example: Load

```lua
local performance, err = client:Performance():load()
```


### Screenshot

Create an instance: `local screenshot = client:Screenshot(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `screenshot` | `string` |  |
| `success` | `boolean` |  |
| `url` | `string` |  |

#### Example: Load

```lua
local screenshot, err = client:Screenshot():load()
```


### Seo

Create an instance: `local seo = client:Seo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `heading` | `table` |  |
| `keyword` | `table` |  |
| `recommendation` | `table` |  |
| `score` | `number` |  |
| `success` | `boolean` |  |
| `title` | `string` |  |
| `url` | `string` |  |

#### Example: List

```lua
local seos, err = client:Seo():list()
```


### Ssl

Create an instance: `local ssl = client:Ssl(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `days_remaining` | `number` |  |
| `issuer` | `string` |  |
| `subject` | `string` |  |
| `success` | `boolean` |  |
| `url` | `string` |  |
| `valid` | `boolean` |  |
| `valid_from` | `string` |  |
| `valid_to` | `string` |  |

#### Example: Load

```lua
local ssl, err = client:Ssl():load()
```


### TechStackDetection

Create an instance: `local tech_stack_detection = client:TechStackDetection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` |  |
| `name` | `string` |  |
| `version` | `string` |  |

#### Example: List

```lua
local tech_stack_detections, err = client:TechStackDetection():list()
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── website-analysis-apis2_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`website-analysis-apis2_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local deadlinkchecker = client:DeadLinkChecker()
deadlinkchecker:list()

-- deadlinkchecker:data_get() now returns the deadlinkchecker data from the last list
-- deadlinkchecker:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
