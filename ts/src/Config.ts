
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'WebsiteAnalysisApis2',
        slug: "website-analysis-apis2",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://51-68-119-197.sslip.io/api",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      dead_link_checker: {
      },

      performance: {
      },

      screenshot: {
      },

      seo: {
      },

      ssl: {
      },

      tech_stack_detection: {
      },

    }
  }


  entity = {
    "dead_link_checker": {
      "fields": [
        {
          "name": "statusCode",
          "type": "`$INTEGER`"
        },
        {
          "name": "url",
          "type": "`$STRING`"
        }
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/deadlinks",
              "parts": [
                "deadlinks"
              ],
              "select": {
                "exist": [
                  "url"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.deadLinks`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "performance": {
      "fields": [
        {
          "name": "loadTime",
          "short": "Load time in milliseconds",
          "type": "`$NUMBER`"
        },
        {
          "name": "pageSize",
          "short": "Page size in bytes",
          "type": "`$INTEGER`"
        },
        {
          "name": "performanceScore",
          "type": "`$INTEGER`"
        },
        {
          "name": "requests",
          "short": "Number of HTTP requests",
          "type": "`$INTEGER`"
        },
        {
          "name": "success",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "url",
          "type": "`$STRING`"
        }
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/performance",
              "parts": [
                "performance"
              ],
              "select": {
                "exist": [
                  "url"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "screenshot": {
      "fields": [
        {
          "name": "screenshot",
          "short": "Base64 encoded screenshot image or URL to the screenshot",
          "type": "`$STRING`"
        },
        {
          "name": "success",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "url",
          "type": "`$STRING`"
        }
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/screenshot",
              "parts": [
                "screenshot"
              ],
              "select": {
                "exist": [
                  "url"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "seo": {
      "fields": [
        {
          "name": "description",
          "type": "`$STRING`"
        },
        {
          "name": "headings",
          "type": "`$OBJECT`"
        },
        {
          "name": "keywords",
          "type": "`$ARRAY`"
        },
        {
          "name": "recommendations",
          "type": "`$ARRAY`"
        },
        {
          "name": "score",
          "type": "`$INTEGER`"
        },
        {
          "name": "success",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "title",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "type": "`$STRING`"
        }
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/seo",
              "parts": [
                "seo"
              ],
              "select": {
                "exist": [
                  "url"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "ssl": {
      "fields": [
        {
          "name": "daysRemaining",
          "type": "`$INTEGER`"
        },
        {
          "name": "issuer",
          "type": "`$STRING`"
        },
        {
          "name": "subject",
          "type": "`$STRING`"
        },
        {
          "name": "success",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "url",
          "type": "`$STRING`"
        },
        {
          "name": "valid",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "validFrom",
          "type": "`$STRING`"
        },
        {
          "name": "validTo",
          "type": "`$STRING`"
        }
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/ssl",
              "parts": [
                "ssl"
              ],
              "select": {
                "exist": [
                  "url"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "tech_stack_detection": {
      "fields": [
        {
          "name": "category",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "version",
          "type": "`$STRING`"
        }
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/techstack",
              "parts": [
                "techstack"
              ],
              "select": {
                "exist": [
                  "url"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.technologies`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

