/* TEXT */
/* Component | Stateless | Styled */
/* This is the main text component. Takes props to adjust it's size, type, padding, color etc */
import React, { Component } from 'react';
import { Text as _text } from 'react-native';
import PropTypes from 'prop-types';
import { normalizeFontSize } from '../../../utils/general';

class Text extends Component {
  typography(typeScale) {
    const { design } = this.props;

    let fontSize = 16;
    let fontStyle = 'normal';
    let fontWeight = 'normal';
    let letterSpacing = 0.5;
    let lineHeight;
    switch (typeScale) {
      case 'h1':
        fontSize = 48;
        fontWeight = '300';
        
        letterSpacing = -1.5;
        break;
      case 'h2':
        fontSize = 34;
        letterSpacing = -0.5;
        break;
      case 'h3':
        fontSize = 28;
        letterSpacing = 0;
        break;
      case 'h4':
        fontSize = 24;
        letterSpacing = 0.25;
        break;
      case 'h5':
        fontSize = 21;
        letterSpacing = 0;
        break;
      case 'h6':
        fontSize = 19;
        // fontWeight = '700';
        letterSpacing = 0.15;
        break;
      case 's1':
        fontSize = 14;
        letterSpacing = 0.15;
        // fontStyle = 'italic';
        break;
      case 's2':
        fontSize = 12;
        letterSpacing = 0.1;
        // fontStyle = 'italic';
        break;
      case 'b1':
        fontSize = 16;
        break;
      case 'b2':
        fontSize = 14;
        letterSpacing = 0.25;
        lineHeight = 21;
        break;
      case 'bu':
        fontSize = 14;
        letterSpacing = 1.25;
        fontWeight = design.buttons.bold ? '700' : '500';
        
        break;
      case 'c':
        fontSize = 12;
        letterSpacing = 0.4;
        break;
      case 'o':
        fontSize = 10;
        letterSpacing = 1.5;
        break;
      case 'bold':
        break;
      default:
        break;
    }
    return {
      fontSize,
      fontStyle,
      fontWeight,
      letterSpacing,
      lineHeight,
    };
  }

  textStyle() {
    const {
      s,
      m,
      p,
      o,
      c,
      t,
      tA,
      lH,
      colors,
      rem,
      style,
      fW,
      paragraph,
    } = this.props;

    const temp = this.typography(t);

    return {
      ...temp,
      ...{
        color: colors[c] ? colors[c] : c === 'font' ? '#747474' : c,
        margin: m * rem,
        padding: p * rem,
        opacity: o,
        textAlign: tA,
      },
      ...{
        fontSize: s
          ? normalizeFontSize(s)
          : temp.fontSize
          ? normalizeFontSize(temp.fontSize)
          : normalizeFontSize(16),
      },
      ...(lH ? { lineHeight: lH } : {}),
      ...(fW ? {  } : {}),
      ...(paragraph ? { paddingBottom: 8 } : {}),
      ...style,
    };
  }

  familyForFontWeight(weight) {
    switch (weight) {
      case '300':
        return 'Roboto_300Light';
      case '500':
        return 'Roboto_500Medium';
      case '700':
      case 'bold':
        return 'Roboto_700Bold';
      case '400':
      default:
        return 'Roboto_400Regular';
    }
  }

  render() {
    const { children } = this.props;
    const style = this.textStyle();
    return (
      <_text {...this.props} style={style}>
        {children}
      </_text>
    );
  }
}

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]), // string passed to RN <Text />
  s: PropTypes.number, // fontSize
  m: PropTypes.number, // margin
  p: PropTypes.number, // padding
  o: PropTypes.number, // opacity
  t: PropTypes.string, // type scale
  c: PropTypes.string, // color
  colors: PropTypes.object, // colors object from context
  rem: PropTypes.number, // rem value,
  tA: PropTypes.string, // textAlign
  lH: PropTypes.number, // lineHeight
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]), // TODO: TextPropTypes.style, // override text style
};

Text.defaultProps = {
  children: [''], // empty
  s: 0,
  m: 0, // 0-8: 0|0.25|0.5|1|2|4|8|16|32 rem
  p: 0, // 0-8: 0|0.25|0.5|1|2|4|8|16|32 rem
  o: 1, // 0-1
  t: 'b1', // h1:heading1, h2, h3, s1:subtitle1, s2, b1:body1, b2, bu: button, c:caption, o:overline.
  c: 'font', // see colors object
  colors: {}, // from context
  rem: 16, // rem value TODO: explain
  tA: 'auto',
  lH: null,
  style: null,
  fW: '400',
};

export { Text };