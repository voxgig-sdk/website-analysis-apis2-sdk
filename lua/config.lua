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
          ["now"] = "`$FUNCTION`",
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
            ["title"] = "Status Code",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "url",
            ["title"] = "Url",
            ["type"] = "`$STRING`",
            ["format"] = "uri",
          },
        },
        ["name"] = "dead_link_checker",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/deadlinks",
                ["segments"] = {
                  {
                    ["lit"] = "deadlinks",
                  },
                },
                ["parts"] = {
                  "deadlinks",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.deadLinks`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "https://example.com",
                      ["field"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "url",
                  },
                },
                ["response"] = {
                  ["kind"] = "json",
                  ["media"] = "application/json",
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
            ["title"] = "Load Time",
            ["type"] = "`$NUMBER`",
            ["short"] = "Load time in milliseconds",
          },
          {
            ["name"] = "pageSize",
            ["title"] = "Page Size",
            ["type"] = "`$INTEGER`",
            ["short"] = "Page size in bytes",
          },
          {
            ["name"] = "performanceScore",
            ["title"] = "Performance Score",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "requests",
            ["title"] = "Requests",
            ["type"] = "`$INTEGER`",
            ["short"] = "Number of HTTP requests",
          },
          {
            ["name"] = "success",
            ["title"] = "Success",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "url",
            ["title"] = "Url",
            ["type"] = "`$STRING`",
            ["format"] = "uri",
          },
        },
        ["name"] = "performance",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/performance",
                ["segments"] = {
                  {
                    ["lit"] = "performance",
                  },
                },
                ["parts"] = {
                  "performance",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "https://example.com",
                      ["field"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "url",
                  },
                },
                ["response"] = {
                  ["kind"] = "json",
                  ["media"] = "application/json",
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
            ["title"] = "Screenshot",
            ["type"] = "`$STRING`",
            ["short"] = "Base64 encoded screenshot image or URL to the screenshot",
          },
          {
            ["name"] = "success",
            ["title"] = "Success",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "url",
            ["title"] = "Url",
            ["type"] = "`$STRING`",
            ["format"] = "uri",
          },
        },
        ["name"] = "screenshot",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/screenshot",
                ["segments"] = {
                  {
                    ["lit"] = "screenshot",
                  },
                },
                ["parts"] = {
                  "screenshot",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "https://example.com",
                      ["field"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "url",
                  },
                },
                ["response"] = {
                  ["kind"] = "json",
                  ["media"] = "application/json",
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
            ["title"] = "Description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "headings",
            ["title"] = "Headings",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "keywords",
            ["title"] = "Keywords",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "recommendations",
            ["title"] = "Recommendations",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "score",
            ["title"] = "Score",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "success",
            ["title"] = "Success",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "title",
            ["title"] = "Title",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["title"] = "Url",
            ["type"] = "`$STRING`",
            ["format"] = "uri",
          },
        },
        ["name"] = "seo",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/seo",
                ["segments"] = {
                  {
                    ["lit"] = "seo",
                  },
                },
                ["parts"] = {
                  "seo",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "https://example.com",
                      ["field"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "url",
                  },
                },
                ["response"] = {
                  ["kind"] = "json",
                  ["media"] = "application/json",
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
            ["title"] = "Days Remaining",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "issuer",
            ["title"] = "Issuer",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "subject",
            ["title"] = "Subject",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "success",
            ["title"] = "Success",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "url",
            ["title"] = "Url",
            ["type"] = "`$STRING`",
            ["format"] = "uri",
          },
          {
            ["name"] = "valid",
            ["title"] = "Valid",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "validFrom",
            ["title"] = "Valid From",
            ["type"] = "`$STRING`",
            ["format"] = "date-time",
          },
          {
            ["name"] = "validTo",
            ["title"] = "Valid To",
            ["type"] = "`$STRING`",
            ["format"] = "date-time",
          },
        },
        ["name"] = "ssl",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/ssl",
                ["segments"] = {
                  {
                    ["lit"] = "ssl",
                  },
                },
                ["parts"] = {
                  "ssl",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "https://example.com",
                      ["field"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "url",
                  },
                },
                ["response"] = {
                  ["kind"] = "json",
                  ["media"] = "application/json",
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
            ["title"] = "Category",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "version",
            ["title"] = "Version",
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
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/techstack",
                ["segments"] = {
                  {
                    ["lit"] = "techstack",
                  },
                },
                ["parts"] = {
                  "techstack",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.technologies`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "https://example.com",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "url",
                  },
                },
                ["response"] = {
                  ["kind"] = "json",
                  ["media"] = "application/json",
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
