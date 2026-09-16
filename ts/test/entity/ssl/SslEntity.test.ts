

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


describe('SslEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when WEBSITE_ANALYSIS_APIS2_TEST_LIVE=TRUE.
  afterEach(liveDelay('WEBSITE_ANALYSIS_APIS2_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = WebsiteAnalysisApis2SDK.test()
    const ent = testsdk.Ssl()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.WEBSITE_ANALYSIS_APIS2_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ssl.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"daysRemaining","req":false,"type":"`$INTEGER`","index$":0},{"active":true,"name":"issuer","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"subject","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"success","req":false,"type":"`$BOOLEAN`","index$":3},{"active":true,"format":"uri","name":"url","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"valid","req":false,"type":"`$BOOLEAN`","index$":5},{"active":true,"format":"date-time","name":"validFrom","req":false,"type":"`$STRING`","index$":6},{"active":true,"format":"date-time","name":"validTo","req":false,"type":"`$STRING`","index$":7}],"name":"ssl","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"example":"https://example.com","kind":"query","name":"url","orig":"url","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /ssl","json":"{\"operationId\":\"checkSslCertificate\",\"parameters\":[{\"description\":\"The URL of the website to check SSL certificate\",\"in\":\"query\",\"name\":\"url\",\"required\":true,\"schema\":{\"example\":\"https://example.com\",\"format\":\"uri\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"daysRemaining\":{\"type\":\"integer\"},\"issuer\":{\"type\":\"string\"},\"subject\":{\"type\":\"string\"},\"success\":{\"example\":true,\"type\":\"boolean\"},\"url\":{\"example\":\"https://example.com\",\"format\":\"uri\",\"type\":\"string\"},\"valid\":{\"type\":\"boolean\"},\"validFrom\":{\"format\":\"date-time\",\"type\":\"string\"},\"validTo\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"SSL certificate check completed successfully\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Invalid URL parameter\",\"type\":\"string\"},\"message\":{\"example\":\"The provided URL is not valid or is missing\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid or missing URL parameter\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Invalid URL parameter\",\"type\":\"string\"},\"message\":{\"example\":\"The provided URL is not valid or is missing\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/ssl","segments":[{"lit":"ssl"}],"select":{"exist":["url"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"ssl","name__orig":"ssl","Name":"Ssl","name_":"ssl","name-":"ssl","NAME":"SSL","index$":4}, {"active":true,"entity":"ssl","key$":"BasicSslFlow","kind":"basic","name":"BasicSslFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"ssl_ref01","srcdatavar":"ssl_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ssl_ref01"}}],"index$":0}]}, 'Ssl')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let ssl_ref01_data = Object.values(setup.data.existing.ssl)[0] as any

    // LOAD
    const ssl_ref01_ent = client.Ssl()
    const ssl_ref01_match_dt0: any = {}
    const ssl_ref01_data_dt0 = (await ssl_ref01_ent.load(ssl_ref01_match_dt0)).data()
    assert(null != ssl_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ssl/SslTestData.json')

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
    ['ssl01','ssl02','ssl03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'WEBSITE_ANALYSIS_APIS2_TEST_SSL_ENTID': idmap,
    'WEBSITE_ANALYSIS_APIS2_TEST_LIVE': 'FALSE',
    'WEBSITE_ANALYSIS_APIS2_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['WEBSITE_ANALYSIS_APIS2_TEST_SSL_ENTID']

  const live = 'TRUE' === env.WEBSITE_ANALYSIS_APIS2_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['WEBSITE_ANALYSIS_APIS2_TEST_SSL_ENTID']
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
  
