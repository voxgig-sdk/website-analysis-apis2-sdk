

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { WebsiteAnalysisApis2SDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('TechStackDetectionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when WEBSITE_ANALYSIS_APIS2_TEST_LIVE=TRUE.
  afterEach(liveDelay('WEBSITE_ANALYSIS_APIS2_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = WebsiteAnalysisApis2SDK.test()
    const ent = testsdk.TechStackDetection()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.WEBSITE_ANALYSIS_APIS2_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tech_stack_detection.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"category","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"version","req":false,"type":"`$STRING`","index$":2}],"name":"tech_stack_detection","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"https://example.com","kind":"query","name":"url","orig":"url","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /techstack","json":"{\"operationId\":\"detectTechStack\",\"parameters\":[{\"description\":\"The URL of the website to detect tech stack\",\"in\":\"query\",\"name\":\"url\",\"required\":true,\"schema\":{\"example\":\"https://example.com\",\"format\":\"uri\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"success\":{\"example\":true,\"type\":\"boolean\"},\"technologies\":{\"items\":{\"properties\":{\"category\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"version\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"url\":{\"example\":\"https://example.com\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Tech stack detection completed successfully\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Invalid URL parameter\",\"type\":\"string\"},\"message\":{\"example\":\"The provided URL is not valid or is missing\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid or missing URL parameter\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Invalid URL parameter\",\"type\":\"string\"},\"message\":{\"example\":\"The provided URL is not valid or is missing\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/techstack","segments":[{"lit":"techstack"}],"select":{"exist":["url"]},"transform":{"req":"`reqdata`","res":"`body.technologies`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"tech_stack_detection","name__orig":"tech_stack_detection","Name":"TechStackDetection","name_":"tech_stack_detection","name-":"tech-stack-detection","NAME":"TECH_STACK_DETECTION","index$":5}, {"active":true,"entity":"tech_stack_detection","key$":"BasicTechStackDetectionFlow","kind":"basic","name":"BasicTechStackDetectionFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"tech_stack_detection_ref01"}}],"index$":0}]}, 'TechStackDetection')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tech_stack_detection_ref01_data = Object.values(setup.data.existing.tech_stack_detection)[0] as any

    // LIST
    const tech_stack_detection_ref01_ent = client.TechStackDetection()
    const tech_stack_detection_ref01_match: any = {}

    const tech_stack_detection_ref01_list = (await tech_stack_detection_ref01_ent.list(tech_stack_detection_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tech_stack_detection/TechStackDetectionTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = WebsiteAnalysisApis2SDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['tech_stack_detection01','tech_stack_detection02','tech_stack_detection03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'WEBSITE_ANALYSIS_APIS2_TEST_TECH_STACK_DETECTION_ENTID': idmap,
    'WEBSITE_ANALYSIS_APIS2_TEST_LIVE': 'FALSE',
    'WEBSITE_ANALYSIS_APIS2_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['WEBSITE_ANALYSIS_APIS2_TEST_TECH_STACK_DETECTION_ENTID']

  const live = 'TRUE' === env.WEBSITE_ANALYSIS_APIS2_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['WEBSITE_ANALYSIS_APIS2_TEST_TECH_STACK_DETECTION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new WebsiteAnalysisApis2SDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.WEBSITE_ANALYSIS_APIS2_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
