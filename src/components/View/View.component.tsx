import { FC } from 'react';
import { IView } from './View.types';

const View: FC<IView> = ({
  bottom = 0,
  children,
  display = 'flex',
  flexDirection = 'column',
  left = 0,
  ref = null,
  right = 0,
  style = {},
  top = 0,
}) => (
  <div
    ref={ref}
    style={{
      display,
      flexDirection,
      marginTop: top,
      marginRight: right,
      marginBottom: bottom,
      marginLeft: left,
      ...style,
    }}
  >
    {children}
  </div>
);

export default View;
