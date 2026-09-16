-- WebsiteAnalysisApis2 SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "WebsiteAnalysisApis2",
      slug = "website-analysis-apis2",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://51-68-119-197.sslip.io/api",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["dead_link_checker"] = {},
        ["performance"] = {},
        ["screenshot"] = {},
        ["seo"] = {},
        ["ssl"] = {},
        ["tech_stack_detection"] = {},
      },
    },
    entity = {
      ["dead_link_checker"] = {
        ["fields"] = {
          {
            ["name"] = "statusCode",
            ["type"] = "`$INTEGER`",
          },
          {
            ["format"] = "uri",
            ["name"] = "url",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "dead_link_checker",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "https://example.com",
                      ["kind"] = "query",
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/deadlinks",
                ["segments"] = {
                  {
                    ["lit"] = "deadlinks",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "url",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.deadLinks`",
                },
                ["parts"] = {
                  "deadlinks",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["performance"] = {
        ["fields"] = {
          {
            ["name"] = "loadTime",
            ["short"] = "Load time in milliseconds",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "pageSize",
            ["short"] = "Page size in bytes",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "performanceScore",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "requests",
            ["short"] = "Number of HTTP requests",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "success",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["format"] = "uri",
            ["name"] = "url",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "performance",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "https://example.com",
                      ["kind"] = "query",
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/performance",
                ["segments"] = {
                  {
                    ["lit"] = "performance",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "url",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "performance",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["screenshot"] = {
        ["fields"] = {
          {
            ["name"] = "screenshot",
            ["short"] = "Base64 encoded screenshot image or URL to the screenshot",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "success",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["format"] = "uri",
            ["name"] = "url",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "screenshot",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "https://example.com",
                      ["kind"] = "query",
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/screenshot",
                ["segments"] = {
                  {
                    ["lit"] = "screenshot",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "url",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "screenshot",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["seo"] = {
        ["fields"] = {
          {
            ["name"] = "description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "headings",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "keywords",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "recommendations",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "score",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "success",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "title",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uri",
            ["name"] = "url",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "seo",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "https://example.com",
                      ["kind"] = "query",
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/seo",
                ["segments"] = {
                  {
                    ["lit"] = "seo",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "url",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "seo",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["ssl"] = {
        ["fields"] = {
          {
            ["name"] = "daysRemaining",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "issuer",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "subject",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "success",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["format"] = "uri",
            ["name"] = "url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "valid",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "validFrom",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "validTo",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "ssl",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "https://example.com",
                      ["kind"] = "query",
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/ssl",
                ["segments"] = {
                  {
                    ["lit"] = "ssl",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "url",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "ssl",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["tech_stack_detection"] = {
        ["fields"] = {
          {
            ["name"] = "category",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "version",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "tech_stack_detection",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "https://example.com",
                      ["kind"] = "query",
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/techstack",
                ["segments"] = {
                  {
                    ["lit"] = "techstack",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "url",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.technologies`",
                },
                ["parts"] = {
                  "techstack",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
