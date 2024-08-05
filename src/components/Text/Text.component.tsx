import { ReactNode } from 'react';
import { Colors } from '../../constants/Colors';

import { ITextProps } from './Text.types';

const Text = ({
  bottom = 0,
  center = true,
  children,
  color = Colors.black,
  left = 0,
  lineHeight,
  right = 0,
  size = 12,
  style = {},
  top = 0,
  ...props
}: ITextProps): ReactNode => (
  <p
    style={{
      marginTop: top,
      marginRight: right,
      marginBottom: bottom,
      marginLeft: left,
      color,
      fontSize: size,
      lineHeight,
      textAlign: center ? 'center' : 'left',
      ...style,
    }}
    {...props}
  >
    {children}
  </p>
);

export default Text;
