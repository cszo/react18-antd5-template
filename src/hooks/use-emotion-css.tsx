import { css, CSSInterpolation } from '@emotion/css'
import { theme } from 'antd'

export type Theme = ReturnType<typeof theme.useToken>

export type cssFunc = (token: Theme) => CSSInterpolation | Array<CSSInterpolation>

export const useEmotionCss = (cssFn: cssFunc) => {
  const token = theme.useToken()
  return css(cssFn(token))
}
