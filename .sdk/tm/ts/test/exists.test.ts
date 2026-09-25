
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { WebsiteAnalysisApis2SDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = WebsiteAnalysisApis2SDK.test()
    equal(testsdk instanceof WebsiteAnalysisApis2SDK, true,
      'WebsiteAnalysisApis2SDK.test() must return a client synchronously')
  })

})
