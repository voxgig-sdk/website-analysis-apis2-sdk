

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('DeadLinkCheckerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when WEBSITE_ANALYSIS_APIS2_TEST_LIVE=TRUE.
  afterEach(liveDelay('WEBSITE_ANALYSIS_APIS2_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = WebsiteAnalysisApis2SDK.test()
    const ent = testsdk.DeadLinkChecker()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.WEBSITE_ANALYSIS_APIS2_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dead_link_checker.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"statusCode":{"a":true,"h":"Status Code","n":"statusCode","r":false,"t":"`$INTEGER`","key$":"statusCode","index$":0},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":false,"t":"`$STRING`","key$":"url","index$":1}},"name":"dead_link_checker","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /deadlinks","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"https://example.com","k":"query","n":"url","or":"url","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/deadlinks","q":{"exist":["url"]},"r":{},"s":[{"lit":"deadlinks"}],"t":{"req":"`reqdata`","res":"`body.deadLinks`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"dead_link_checker","name__orig":"dead_link_checker","Name":"DeadLinkChecker","name_":"dead_link_checker","name-":"dead-link-checker","NAME":"DEAD_LINK_CHECKER","index$":0}, {"active":true,"entity":"dead_link_checker","key$":"BasicDeadLinkCheckerFlow","kind":"basic","name":"BasicDeadLinkCheckerFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"dead_link_checker_ref01"}}],"index$":0}]}, 'DeadLinkChecker', {"GET /deadlinks":{"protocol":"http","operationId":"checkDeadLinks","responses":{"200":{"description":"Dead links check completed successfully","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"example":true,"key$":"success","type":"boolean"},"url":{"example":"https://example.com","format":"uri","key$":"url","type":"string"},"deadLinks":{"items":{"properties":{"statusCode":{"type":"integer","key$":"statusCode"},"url":{"format":"uri","type":"string","key$":"url"}},"type":"object","index$":0},"key$":"deadLinks","type":"array"},"totalLinks":{"key$":"totalLinks","type":"integer"}}}}}},"400":{"description":"Bad request - invalid or missing URL parameter","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"string","example":"Invalid URL parameter"},"message":{"type":"string","example":"The provided URL is not valid or is missing"}},"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"string","example":"Invalid URL parameter"},"message":{"type":"string","example":"The provided URL is not valid or is missing"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"url","in":"query","description":"The URL of the website to check for dead links","required":true,"schema":{"type":"string","format":"uri","example":"https://example.com"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let dead_link_checker_ref01_data = Object.values(setup.data.existing.dead_link_checker)[0] as any

    // LIST
    const dead_link_checker_ref01_ent = client.DeadLinkChecker()
    const dead_link_checker_ref01_match: any = {}

    const dead_link_checker_ref01_list = (await dead_link_checker_ref01_ent.list(dead_link_checker_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/dead_link_checker/DeadLinkCheckerTestData.json')

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
    ['dead_link_checker01','dead_link_checker02','dead_link_checker03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'WEBSITE_ANALYSIS_APIS2_TEST_DEAD_LINK_CHECKER_ENTID': idmap,
    'WEBSITE_ANALYSIS_APIS2_TEST_LIVE': 'FALSE',
    'WEBSITE_ANALYSIS_APIS2_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['WEBSITE_ANALYSIS_APIS2_TEST_DEAD_LINK_CHECKER_ENTID']

  const live = 'TRUE' === env.WEBSITE_ANALYSIS_APIS2_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['WEBSITE_ANALYSIS_APIS2_TEST_DEAD_LINK_CHECKER_ENTID']
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
  
