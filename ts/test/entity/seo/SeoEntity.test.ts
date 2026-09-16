

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


describe('SeoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when WEBSITE_ANALYSIS_APIS2_TEST_LIVE=TRUE.
  afterEach(liveDelay('WEBSITE_ANALYSIS_APIS2_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = WebsiteAnalysisApis2SDK.test()
    const ent = testsdk.Seo()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.WEBSITE_ANALYSIS_APIS2_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'seo.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"description","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"headings","req":false,"type":"`$OBJECT`","index$":1},{"active":true,"name":"keywords","req":false,"type":"`$ARRAY`","index$":2},{"active":true,"name":"recommendations","req":false,"type":"`$ARRAY`","index$":3},{"active":true,"name":"score","req":false,"type":"`$INTEGER`","index$":4},{"active":true,"name":"success","req":false,"type":"`$BOOLEAN`","index$":5},{"active":true,"name":"title","req":false,"type":"`$STRING`","index$":6},{"active":true,"format":"uri","name":"url","req":false,"type":"`$STRING`","index$":7}],"name":"seo","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"https://example.com","kind":"query","name":"url","orig":"url","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /seo","json":"{\"operationId\":\"performSeoAudit\",\"parameters\":[{\"description\":\"The URL of the website to audit for SEO\",\"in\":\"query\",\"name\":\"url\",\"required\":true,\"schema\":{\"example\":\"https://example.com\",\"format\":\"uri\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"description\":{\"type\":\"string\"},\"headings\":{\"properties\":{\"h1\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"h2\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"},\"keywords\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"recommendations\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"score\":{\"maximum\":100,\"minimum\":0,\"type\":\"integer\"},\"success\":{\"example\":true,\"type\":\"boolean\"},\"title\":{\"type\":\"string\"},\"url\":{\"example\":\"https://example.com\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"SEO audit completed successfully\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Invalid URL parameter\",\"type\":\"string\"},\"message\":{\"example\":\"The provided URL is not valid or is missing\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid or missing URL parameter\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Invalid URL parameter\",\"type\":\"string\"},\"message\":{\"example\":\"The provided URL is not valid or is missing\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/seo","segments":[{"lit":"seo"}],"select":{"exist":["url"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"seo","name__orig":"seo","Name":"Seo","name_":"seo","name-":"seo","NAME":"SEO","index$":3}, {"active":true,"entity":"seo","key$":"BasicSeoFlow","kind":"basic","name":"BasicSeoFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"seo_ref01"}}],"index$":0}]}, 'Seo')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let seo_ref01_data = Object.values(setup.data.existing.seo)[0] as any

    // LIST
    const seo_ref01_ent = client.Seo()
    const seo_ref01_match: any = {}

    const seo_ref01_list = (await seo_ref01_ent.list(seo_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/seo/SeoTestData.json')

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
    ['seo01','seo02','seo03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'WEBSITE_ANALYSIS_APIS2_TEST_SEO_ENTID': idmap,
    'WEBSITE_ANALYSIS_APIS2_TEST_LIVE': 'FALSE',
    'WEBSITE_ANALYSIS_APIS2_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['WEBSITE_ANALYSIS_APIS2_TEST_SEO_ENTID']

  const live = 'TRUE' === env.WEBSITE_ANALYSIS_APIS2_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['WEBSITE_ANALYSIS_APIS2_TEST_SEO_ENTID']
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
  
