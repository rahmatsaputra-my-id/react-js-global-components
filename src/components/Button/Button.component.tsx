import { FC, ReactNode } from 'react';
import { Colors } from '../../constants/Colors';
import { styles } from './Button.component.styles';
import { LoadingSpinner } from '../LoadingSpinner';

import { IButtonProps } from './Button.types';

const Button = ({
  bold = false,
  borderRadius = 8,
  bottom = 0,
  center = true,
  disabled = false,
  isLoading = false,
  label,
  left = 0,
  onPress = () => {},
  padding = 16,
  right = 0,
  size = 12,
  style = {},
  transparent = false,
  top = 0,
  ...props
}: IButtonProps): ReactNode => (
  <button
    style={{
      backgroundColor:
        disabled || isLoading ? Colors.grey2 : transparent ? 'transparent' : Colors.black,
      borderRadius,
      color: Colors.white,
      fontSize: size,
      fontWeight: bold && 'bold',
      marginTop: top,
      marginRight: right,
      marginBottom: bottom,
      marginLeft: left,
      padding,
      textAlign: center ? 'center' : 'left',
      ...style,
      ...styles.content,
    }}
    disabled={isLoading || disabled}
    onClick={onPress}
    type={'submit'}
    {...props}
  >
    {!isLoading ? label : null}
    {isLoading ? <LoadingSpinner /> : null}
  </button>
);

export default Button;
