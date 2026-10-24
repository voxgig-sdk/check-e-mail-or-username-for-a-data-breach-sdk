

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CheckEMailOrUsernameForADataBreachSDK, BaseFeature, config, stdutil } from '../../..'

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


describe('DataBreachCheckEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CheckEMailOrUsernameForADataBreachSDK.test()
    const ent = testsdk.DataBreachCheck()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('data_breach_check hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of CheckEMailOrUsernameForADataBreachSDK.test(offline).DataBreachCheck().stream('list')) { }
    }, /offline/)

    for await (const _item of CheckEMailOrUsernameForADataBreachSDK.test(offline).DataBreachCheck()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = CheckEMailOrUsernameForADataBreachSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.DataBreachCheck().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of CheckEMailOrUsernameForADataBreachSDK.test().DataBreachCheck().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new CheckEMailOrUsernameForADataBreachSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.DataBreachCheck().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.DataBreachCheck().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CheckEMailOrUsernameForADataBreachSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.DataBreachCheck().list({"check":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'data_breach_check.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"date":{"a":true,"h":"Date","n":"date","r":true,"sh":"Date of the breach in YYYY-MM format","t":"`$STRING`","key$":"date","index$":0},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Name of the breached service or database","t":"`$STRING`","key$":"name","index$":1}},"name":"data_breach_check","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /public","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"example@example.com","k":"query","n":"check","or":"check","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/public","q":{"exist":["check"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"public"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"data_breach_check","name__orig":"data_breach_check","Name":"DataBreachCheck","name_":"data_breach_check","name-":"data-breach-check","NAME":"DATA_BREACH_CHECK","index$":0}, {"active":true,"entity":"data_breach_check","key$":"BasicDataBreachCheckFlow","kind":"basic","name":"BasicDataBreachCheckFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"data_breach_check_ref01"}}],"index$":0}]}, 'DataBreachCheck', {"GET /public":{"protocol":"http","parameters":[{"name":"check","in":"query","description":"The value to check for data breaches. Can be:\n- Email address (e.g., example@example.com)\n- Username (minimum 3 characters)\n- Email hash (SHA256, truncated to 24 characters, e.g., 31c5543c1734d25c7206f5fd)","required":true,"schema":{"type":"string","minLength":3,"examples":["example@example.com","31c5543c1734d25c7206f5fd","username123"]},"example":"example@example.com","index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let data_breach_check_ref01_data = Object.values(setup.data.existing.data_breach_check)[0] as any

    // LIST
    const data_breach_check_ref01_ent = client.DataBreachCheck()
    const data_breach_check_ref01_match: any = {}

    const data_breach_check_ref01_list = (await data_breach_check_ref01_ent.list(data_breach_check_ref01_match)).map((e: any) => e.data())


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/data_breach_check/DataBreachCheckTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CheckEMailOrUsernameForADataBreachSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['data_breach_check01','data_breach_check02','data_breach_check03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_DATA_BREACH_CHECK_ENTID': idmap,
    'CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_LIVE': 'FALSE',
    'CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_DATA_BREACH_CHECK_ENTID']

  const live = 'TRUE' === env.CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_DATA_BREACH_CHECK_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CheckEMailOrUsernameForADataBreachSDK(merge([
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
    explain: 'TRUE' === env.CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
