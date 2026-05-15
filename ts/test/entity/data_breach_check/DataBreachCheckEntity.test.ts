
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { CheckEMailOrUsernameForADataBreachSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


describe('DataBreachCheckEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CHECKEMAILORUSERNAMEFORADATABREACH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CHECKEMAILORUSERNAMEFORADATABREACH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CheckEMailOrUsernameForADataBreachSDK.test()
    const ent = testsdk.DataBreachCheck()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_LIVE
    for (const op of ['list']) {
      if (maybeSkipControl(t, 'entityOp', 'data_breach_check.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_DATA_BREACH_CHECK_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let data_breach_check_ref01_data = Object.values(setup.data.existing.data_breach_check)[0] as any

    // LIST
    const data_breach_check_ref01_ent = client.DataBreachCheck()
    const data_breach_check_ref01_match: any = {}

    const data_breach_check_ref01_list = await data_breach_check_ref01_ent.list(data_breach_check_ref01_match)


  })
})



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

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_DATA_BREACH_CHECK_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_DATA_BREACH_CHECK_ENTID': idmap,
    'CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_LIVE': 'FALSE',
    'CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_EXPLAIN': 'FALSE',
    'CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_APIKEY': 'NONE',
  })

  idmap = env['CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_DATA_BREACH_CHECK_ENTID']

  const live = 'TRUE' === env.CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_LIVE

  if (live) {
    client = new CheckEMailOrUsernameForADataBreachSDK(merge([
      {
        apikey: env.CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_APIKEY,
      },
      extra
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
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
