# WebsiteAnalysisApis2 Python SDK Reference

Complete API reference for the WebsiteAnalysisApis2 Python SDK.


## WebsiteAnalysisApis2SDK

### Constructor

```python
from websiteanalysisapis2_sdk import WebsiteAnalysisApis2SDK

client = WebsiteAnalysisApis2SDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `WebsiteAnalysisApis2SDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = WebsiteAnalysisApis2SDK.test()
```


### Instance Methods

#### `DeadLinkChecker(data=None)`

Create a new `DeadLinkCheckerEntity` instance. Pass `None` for no initial data.

#### `Performance(data=None)`

Create a new `PerformanceEntity` instance. Pass `None` for no initial data.

#### `Screenshot(data=None)`

Create a new `ScreenshotEntity` instance. Pass `None` for no initial data.

#### `Seo(data=None)`

Create a new `SeoEntity` instance. Pass `None` for no initial data.

#### `Ssl(data=None)`

Create a new `SslEntity` instance. Pass `None` for no initial data.

#### `TechStackDetection(data=None)`

Create a new `TechStackDetectionEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## DeadLinkCheckerEntity

```python
dead_link_checker = client.DeadLinkChecker()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `statusCode` | `int` | No |  |
| `url` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DeadLinkChecker().list()
for dead_link_checker in results:
    print(dead_link_checker)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeadLinkCheckerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PerformanceEntity

```python
performance = client.Performance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `loadTime` | `float` | No |  |
| `pageSize` | `int` | No |  |
| `performanceScore` | `int` | No |  |
| `requests` | `int` | No |  |
| `success` | `bool` | No |  |
| `url` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Performance().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PerformanceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ScreenshotEntity

```python
screenshot = client.Screenshot()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `screenshot` | `str` | No |  |
| `success` | `bool` | No |  |
| `url` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Screenshot().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScreenshotEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SeoEntity

```python
seo = client.Seo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No |  |
| `headings` | `dict` | No |  |
| `keywords` | `list` | No |  |
| `recommendations` | `list` | No |  |
| `score` | `int` | No |  |
| `success` | `bool` | No |  |
| `title` | `str` | No |  |
| `url` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Seo().list()
for seo in results:
    print(seo)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SeoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SslEntity

```python
ssl = client.Ssl()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `daysRemaining` | `int` | No |  |
| `issuer` | `str` | No |  |
| `subject` | `str` | No |  |
| `success` | `bool` | No |  |
| `url` | `str` | No |  |
| `valid` | `bool` | No |  |
| `validFrom` | `str` | No |  |
| `validTo` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Ssl().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SslEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TechStackDetectionEntity

```python
tech_stack_detection = client.TechStackDetection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `str` | No |  |
| `name` | `str` | No |  |
| `version` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TechStackDetection().list()
for tech_stack_detection in results:
    print(tech_stack_detection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TechStackDetectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = WebsiteAnalysisApis2SDK({
    "feature": {
        "test": {"active": True},
    },
})
```

