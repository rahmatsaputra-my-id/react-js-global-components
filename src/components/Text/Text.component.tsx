import { FC } from 'react';
import { Colors } from '../../constants/Colors';

import { ITextProps } from './Text.types';

const Text: FC<ITextProps> = ({
  bottom = 0,
  center = false,
  children,
  color = Colors.black,
  left = 0,
  lineHeight,
  right = 0,
  size = 12,
  style = {},
  top = 0,
  ...props
}: ITextProps) => (
  <>
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
  </>
);

export default Text;
