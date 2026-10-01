"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "dead_link_checker",
        "accessor": "DeadLinkChecker",
        "op": "list",
        "method": "GET",
        "path": "/deadlinks",
        "args": [],
        "select": {
            "url": "https://example.com"
        },
        "headers": [],
        "query": [
            "url"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "success": true,
            "url": "https://example.com",
            "deadLinks": [
                {
                    "statusCode": 1,
                    "url": "x"
                }
            ],
            "totalLinks": 1
        },
        "idField": "id"
    },
    {
        "entity": "performance",
        "accessor": "Performance",
        "op": "load",
        "method": "GET",
        "path": "/performance",
        "args": [],
        "select": {
            "url": "https://example.com"
        },
        "headers": [],
        "query": [
            "url"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "success": true,
            "url": "https://example.com",
            "loadTime": 1,
            "pageSize": 1,
            "performanceScore": 1,
            "requests": 1
        },
        "idField": "id"
    },
    {
        "entity": "screenshot",
        "accessor": "Screenshot",
        "op": "load",
        "method": "GET",
        "path": "/screenshot",
        "args": [],
        "select": {
            "url": "https://example.com"
        },
        "headers": [],
        "query": [
            "url"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "success": true,
            "url": "https://example.com",
            "screenshot": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        },
        "idField": "id"
    },
    {
        "entity": "seo",
        "accessor": "Seo",
        "op": "list",
        "method": "GET",
        "path": "/seo",
        "args": [],
        "select": {
            "url": "https://example.com"
        },
        "headers": [],
        "query": [
            "url"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "success": true,
            "url": "https://example.com",
            "title": "x",
            "description": "x",
            "keywords": [
                "x"
            ],
            "headings": {
                "h1": [
                    "x"
                ],
                "h2": [
                    "x"
                ]
            },
            "score": 1,
            "recommendations": [
                "x"
            ]
        },
        "idField": "id"
    },
    {
        "entity": "ssl",
        "accessor": "Ssl",
        "op": "load",
        "method": "GET",
        "path": "/ssl",
        "args": [],
        "select": {
            "url": "https://example.com"
        },
        "headers": [],
        "query": [
            "url"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "success": true,
            "url": "https://example.com",
            "valid": true,
            "issuer": "x",
            "validFrom": "2026-01-01T00:00:00Z",
            "validTo": "2026-01-01T00:00:00Z",
            "daysRemaining": 1,
            "subject": "x"
        },
        "idField": "id"
    },
    {
        "entity": "tech_stack_detection",
        "accessor": "TechStackDetection",
        "op": "list",
        "method": "GET",
        "path": "/techstack",
        "args": [],
        "select": {
            "url": "https://example.com"
        },
        "headers": [],
        "query": [
            "url"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "success": true,
            "url": "https://example.com",
            "technologies": [
                {
                    "category": "x",
                    "name": "x",
                    "version": "x"
                }
            ]
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map