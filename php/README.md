# WebsiteAnalysisApis2 PHP SDK



The PHP SDK for the WebsiteAnalysisApis2 API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->DeadLinkChecker()` — with named operations (`list`/`load`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/website-analysis-apis2-sdk/releases](https://github.com/voxgig-sdk/website-analysis-apis2-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'websiteanalysisapis2_sdk.php';

$client = new WebsiteAnalysisApis2SDK();
```

### 2. List deadlinkchecker records

```php
try {
    // list() returns an array of DeadLinkChecker records — iterate directly.
    $deadlinkcheckers = $client->DeadLinkChecker()->list();
    foreach ($deadlinkcheckers as $item) {
        echo $item["status_code"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $deadlinkcheckers = $client->DeadLinkChecker()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required:

```php
$client = WebsiteAnalysisApis2SDK::test();

// Entity ops return the bare mock record (throws on error).
$deadlinkchecker = $client->DeadLinkChecker()->list();
print_r($deadlinkchecker);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new WebsiteAnalysisApis2SDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
WEBSITE_ANALYSIS_APIS2_TEST_LIVE=TRUE
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### WebsiteAnalysisApis2SDK

```php
require_once 'websiteanalysisapis2_sdk.php';
$client = new WebsiteAnalysisApis2SDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = WebsiteAnalysisApis2SDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### WebsiteAnalysisApis2SDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `DeadLinkChecker` | `($data): DeadLinkCheckerEntity` | Create a DeadLinkChecker entity instance. |
| `Performance` | `($data): PerformanceEntity` | Create a Performance entity instance. |
| `Screenshot` | `($data): ScreenshotEntity` | Create a Screenshot entity instance. |
| `Seo` | `($data): SeoEntity` | Create a Seo entity instance. |
| `Ssl` | `($data): SslEntity` | Create a Ssl entity instance. |
| `TechStackDetection` | `($data): TechStackDetectionEntity` | Create a TechStackDetection entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the bare result data (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Create an instance: `$dead_link_checker = $client->DeadLinkChecker();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `status_code` | `int` |  |
| `url` | `string` |  |

#### Example: List

```php
// list() returns an array of DeadLinkChecker records (throws on error).
$dead_link_checkers = $client->DeadLinkChecker()->list();
```


### Performance

Create an instance: `$performance = $client->Performance();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `load_time` | `float` |  |
| `page_size` | `int` |  |
| `performance_score` | `int` |  |
| `request` | `int` |  |
| `success` | `bool` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the bare Performance record (throws on error).
$performance = $client->Performance()->load();
```


### Screenshot

Create an instance: `$screenshot = $client->Screenshot();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `screenshot` | `string` |  |
| `success` | `bool` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the bare Screenshot record (throws on error).
$screenshot = $client->Screenshot()->load();
```


### Seo

Create an instance: `$seo = $client->Seo();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `heading` | `array` |  |
| `keyword` | `array` |  |
| `recommendation` | `array` |  |
| `score` | `int` |  |
| `success` | `bool` |  |
| `title` | `string` |  |
| `url` | `string` |  |

#### Example: List

```php
// list() returns an array of Seo records (throws on error).
$seos = $client->Seo()->list();
```


### Ssl

Create an instance: `$ssl = $client->Ssl();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `days_remaining` | `int` |  |
| `issuer` | `string` |  |
| `subject` | `string` |  |
| `success` | `bool` |  |
| `url` | `string` |  |
| `valid` | `bool` |  |
| `valid_from` | `string` |  |
| `valid_to` | `string` |  |

#### Example: Load

```php
// load() returns the bare Ssl record (throws on error).
$ssl = $client->Ssl()->load();
```


### TechStackDetection

Create an instance: `$tech_stack_detection = $client->TechStackDetection();`

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

```php
// list() returns an array of TechStackDetection records (throws on error).
$tech_stack_detections = $client->TechStackDetection()->list();
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

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── websiteanalysisapis2_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`websiteanalysisapis2_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$deadlinkchecker = $client->DeadLinkChecker();
$deadlinkchecker->list();

// $deadlinkchecker->data_get() now returns the deadlinkchecker data from the last list
// $deadlinkchecker->match_get() returns the last match criteria
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
