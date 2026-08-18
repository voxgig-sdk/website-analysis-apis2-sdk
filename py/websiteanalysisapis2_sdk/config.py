# WebsiteAnalysisApis2 SDK configuration


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
            "name": "WebsiteAnalysisApis2",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://51-68-119-197.sslip.io/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "dead_link_checker": {},
                "performance": {},
                "screenshot": {},
                "seo": {},
                "ssl": {},
                "tech_stack_detection": {},
            },
        },
        "entity": {
      "dead_link_checker": {
        "fields": [
          {
            "name": "statusCode",
            "type": "`$INTEGER`",
          },
          {
            "name": "url",
            "type": "`$STRING`",
          },
        ],
        "name": "dead_link_checker",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "https://example.com",
                      "kind": "query",
                      "name": "url",
                      "orig": "url",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/deadlinks",
                "parts": [
                  "deadlinks",
                ],
                "select": {
                  "exist": [
                    "url",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.deadLinks`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "performance": {
        "fields": [
          {
            "name": "loadTime",
            "type": "`$NUMBER`",
          },
          {
            "name": "pageSize",
            "type": "`$INTEGER`",
          },
          {
            "name": "performanceScore",
            "type": "`$INTEGER`",
          },
          {
            "name": "requests",
            "type": "`$INTEGER`",
          },
          {
            "name": "success",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "url",
            "type": "`$STRING`",
          },
        ],
        "name": "performance",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "https://example.com",
                      "kind": "query",
                      "name": "url",
                      "orig": "url",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/performance",
                "parts": [
                  "performance",
                ],
                "select": {
                  "exist": [
                    "url",
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
      "screenshot": {
        "fields": [
          {
            "name": "screenshot",
            "type": "`$STRING`",
          },
          {
            "name": "success",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "url",
            "type": "`$STRING`",
          },
        ],
        "name": "screenshot",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "https://example.com",
                      "kind": "query",
                      "name": "url",
                      "orig": "url",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/screenshot",
                "parts": [
                  "screenshot",
                ],
                "select": {
                  "exist": [
                    "url",
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
      "seo": {
        "fields": [
          {
            "name": "description",
            "type": "`$STRING`",
          },
          {
            "name": "headings",
            "type": "`$OBJECT`",
          },
          {
            "name": "keywords",
            "type": "`$ARRAY`",
          },
          {
            "name": "recommendations",
            "type": "`$ARRAY`",
          },
          {
            "name": "score",
            "type": "`$INTEGER`",
          },
          {
            "name": "success",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "title",
            "type": "`$STRING`",
          },
          {
            "name": "url",
            "type": "`$STRING`",
          },
        ],
        "name": "seo",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "https://example.com",
                      "kind": "query",
                      "name": "url",
                      "orig": "url",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/seo",
                "parts": [
                  "seo",
                ],
                "select": {
                  "exist": [
                    "url",
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
      "ssl": {
        "fields": [
          {
            "name": "daysRemaining",
            "type": "`$INTEGER`",
          },
          {
            "name": "issuer",
            "type": "`$STRING`",
          },
          {
            "name": "subject",
            "type": "`$STRING`",
          },
          {
            "name": "success",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "url",
            "type": "`$STRING`",
          },
          {
            "name": "valid",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "validFrom",
            "type": "`$STRING`",
          },
          {
            "name": "validTo",
            "type": "`$STRING`",
          },
        ],
        "name": "ssl",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "https://example.com",
                      "kind": "query",
                      "name": "url",
                      "orig": "url",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/ssl",
                "parts": [
                  "ssl",
                ],
                "select": {
                  "exist": [
                    "url",
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
      "tech_stack_detection": {
        "fields": [
          {
            "name": "category",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "version",
            "type": "`$STRING`",
          },
        ],
        "name": "tech_stack_detection",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "https://example.com",
                      "kind": "query",
                      "name": "url",
                      "orig": "url",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/techstack",
                "parts": [
                  "techstack",
                ],
                "select": {
                  "exist": [
                    "url",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.technologies`",
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
