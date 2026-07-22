
import { Context } from './Context'


class WebsiteAnalysisApis2Error extends Error {

  isWebsiteAnalysisApis2Error = true

  sdk = 'WebsiteAnalysisApis2'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  WebsiteAnalysisApis2Error
}

