import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "data_breach_check",
    "accessor": "DataBreachCheck",
    "op": "list",
    "method": "GET",
    "path": "/public",
    "args": [],
    "select": {
      "check": "example@example.com"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "check"
    ],
    "queryArgs": [
      {
        "name": "check",
        "wire": "check"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "found": 3,
      "fields": [
        "username",
        "first_name",
        "address"
      ],
      "sources": [
        {
          "name": "Evony.com",
          "date": "2016-07"
        },
        {
          "name": "I-Dressup.com",
          "date": "2016-08"
        },
        {
          "name": "Zynga.com",
          "date": "2019-09"
        }
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
