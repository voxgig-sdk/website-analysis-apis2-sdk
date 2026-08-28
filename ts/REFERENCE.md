# WebsiteAnalysisApis2 TypeScript SDK Reference

Complete API reference for the WebsiteAnalysisApis2 TypeScript SDK.


## WebsiteAnalysisApis2SDK

### Constructor

```ts
new WebsiteAnalysisApis2SDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `WebsiteAnalysisApis2SDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = WebsiteAnalysisApis2SDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `WebsiteAnalysisApis2SDK` instance in test mode.


### Instance Methods

#### `DeadLinkChecker(data?: object)`

Create a new `DeadLinkChecker` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeadLinkCheckerEntity` instance.

#### `Performance(data?: object)`

Create a new `Performance` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PerformanceEntity` instance.

#### `Screenshot(data?: object)`

Create a new `Screenshot` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScreenshotEntity` instance.

#### `Seo(data?: object)`

Create a new `Seo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SeoEntity` instance.

#### `Ssl(data?: object)`

Create a new `Ssl` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SslEntity` instance.

#### `TechStackDetection(data?: object)`

Create a new `TechStackDetection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TechStackDetectionEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `WebsiteAnalysisApis2SDK.test()`.

**Returns:** `WebsiteAnalysisApis2SDK` instance in test mode.


---

## DeadLinkCheckerEntity

```ts
const dead_link_checker = client.DeadLinkChecker()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `statusCode` | `number` | No |  |
| `url` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DeadLinkChecker().list({ url: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeadLinkCheckerEntity` instance with the same client and
options.

#### `client()`

Return the parent `WebsiteAnalysisApis2SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PerformanceEntity

```ts
const performance = client.Performance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `loadTime` | `number` | No | Load time in milliseconds |
| `pageSize` | `number` | No | Page size in bytes |
| `performanceScore` | `number` | No |  |
| `requests` | `number` | No | Number of HTTP requests |
| `success` | `boolean` | No |  |
| `url` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Performance().load({ url: 'url' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PerformanceEntity` instance with the same client and
options.

#### `client()`

Return the parent `WebsiteAnalysisApis2SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScreenshotEntity

```ts
const screenshot = client.Screenshot()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `screenshot` | `string` | No | Base64 encoded screenshot image or URL to the screenshot |
| `success` | `boolean` | No |  |
| `url` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Screenshot().load({ url: 'url' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScreenshotEntity` instance with the same client and
options.

#### `client()`

Return the parent `WebsiteAnalysisApis2SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SeoEntity

```ts
const seo = client.Seo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `headings` | `Record<string, any>` | No |  |
| `keywords` | `any[]` | No |  |
| `recommendations` | `any[]` | No |  |
| `score` | `number` | No |  |
| `success` | `boolean` | No |  |
| `title` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Seo().list({ url: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SeoEntity` instance with the same client and
options.

#### `client()`

Return the parent `WebsiteAnalysisApis2SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SslEntity

```ts
const ssl = client.Ssl()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `daysRemaining` | `number` | No |  |
| `issuer` | `string` | No |  |
| `subject` | `string` | No |  |
| `success` | `boolean` | No |  |
| `url` | `string` | No |  |
| `valid` | `boolean` | No |  |
| `validFrom` | `string` | No |  |
| `validTo` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Ssl().load({ url: 'url' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SslEntity` instance with the same client and
options.

#### `client()`

Return the parent `WebsiteAnalysisApis2SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TechStackDetectionEntity

```ts
const tech_stack_detection = client.TechStackDetection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No |  |
| `name` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TechStackDetection().list({ url: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TechStackDetectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `WebsiteAnalysisApis2SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new WebsiteAnalysisApis2SDK({
  feature: {
    test: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

