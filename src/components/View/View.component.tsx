import { FC } from 'react';

import { IViewProps } from './View.types';

const View: FC<IViewProps> = ({
  bottom = 0,
  children,
  display = 'flex',
  flexDirection = 'column',
  left = 0,
  right = 0,
  style = {},
  top = 0,
  ...props
}: IViewProps) => (
  <>
    <div
      style={{
        display,
        flexDirection,
        marginTop: top,
        marginRight: right,
        marginBottom: bottom,
        marginLeft: left,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  </>
);

export default View;
