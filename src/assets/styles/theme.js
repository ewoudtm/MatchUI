// src/assets/styles/theme.js
import mui from 'material-ui'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Colors
const green        = '#00AA86'
const red          = '#D32F2F'
const darkRed      = '#C1272D'
const white        = '#ffffff'
const black        = '#000000'
const darkGrey     = '#757575'
const grey         = '#DEDEDE'
const grey50       = 'rgba(222, 222, 222, 0.5)'
const grey30       = 'rgba(222, 222, 222, 0.7)'
const pink         = '#ff69b4'

// Palette
export const palette = {
  primary1Color: red,
  primary2Color: green,
  primary3Color: green,
  accent1Color: green,
  textColor: black,
  alternateTextColor: white,
  canvasColor: white,
  borderColor: grey,
  disabledColor: grey30
}

export default getMuiTheme({ palette })
