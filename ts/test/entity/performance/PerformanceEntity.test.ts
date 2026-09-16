

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


describe('PerformanceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when WEBSITE_ANALYSIS_APIS2_TEST_LIVE=TRUE.
  afterEach(liveDelay('WEBSITE_ANALYSIS_APIS2_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = WebsiteAnalysisApis2SDK.test()
    const ent = testsdk.Performance()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.WEBSITE_ANALYSIS_APIS2_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'performance.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"loadTime","req":false,"short":"Load time in milliseconds","type":"`$NUMBER`","index$":0},{"active":true,"name":"pageSize","req":false,"short":"Page size in bytes","type":"`$INTEGER`","index$":1},{"active":true,"name":"performanceScore","req":false,"type":"`$INTEGER`","index$":2},{"active":true,"name":"requests","req":false,"short":"Number of HTTP requests","type":"`$INTEGER`","index$":3},{"active":true,"name":"success","req":false,"type":"`$BOOLEAN`","index$":4},{"active":true,"format":"uri","name":"url","req":false,"type":"`$STRING`","index$":5}],"name":"performance","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"example":"https://example.com","kind":"query","name":"url","orig":"url","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /performance","json":"{\"operationId\":\"measurePerformance\",\"parameters\":[{\"description\":\"The URL of the website to measure performance\",\"in\":\"query\",\"name\":\"url\",\"required\":true,\"schema\":{\"example\":\"https://example.com\",\"format\":\"uri\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"loadTime\":{\"description\":\"Load time in milliseconds\",\"type\":\"number\"},\"pageSize\":{\"description\":\"Page size in bytes\",\"type\":\"integer\"},\"performanceScore\":{\"maximum\":100,\"minimum\":0,\"type\":\"integer\"},\"requests\":{\"description\":\"Number of HTTP requests\",\"type\":\"integer\"},\"success\":{\"example\":true,\"type\":\"boolean\"},\"url\":{\"example\":\"https://example.com\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Performance measurement completed successfully\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Invalid URL parameter\",\"type\":\"string\"},\"message\":{\"example\":\"The provided URL is not valid or is missing\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid or missing URL parameter\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Invalid URL parameter\",\"type\":\"string\"},\"message\":{\"example\":\"The provided URL is not valid or is missing\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/performance","segments":[{"lit":"performance"}],"select":{"exist":["url"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"performance","name__orig":"performance","Name":"Performance","name_":"performance","name-":"performance","NAME":"PERFORMANCE","index$":1}, {"active":true,"entity":"performance","key$":"BasicPerformanceFlow","kind":"basic","name":"BasicPerformanceFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"performance_ref01","srcdatavar":"performance_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-performance_ref01"}}],"index$":0}]}, 'Performance')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let performance_ref01_data = Object.values(setup.data.existing.performance)[0] as any

    // LOAD
    const performance_ref01_ent = client.Performance()
    const performance_ref01_match_dt0: any = {}
    const performance_ref01_data_dt0 = (await performance_ref01_ent.load(performance_ref01_match_dt0)).data()
    assert(null != performance_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/performance/PerformanceTestData.json')

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
    ['performance01','performance02','performance03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'WEBSITE_ANALYSIS_APIS2_TEST_PERFORMANCE_ENTID': idmap,
    'WEBSITE_ANALYSIS_APIS2_TEST_LIVE': 'FALSE',
    'WEBSITE_ANALYSIS_APIS2_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['WEBSITE_ANALYSIS_APIS2_TEST_PERFORMANCE_ENTID']

  const live = 'TRUE' === env.WEBSITE_ANALYSIS_APIS2_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['WEBSITE_ANALYSIS_APIS2_TEST_PERFORMANCE_ENTID']
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
  
