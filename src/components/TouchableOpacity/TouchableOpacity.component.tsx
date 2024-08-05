import { ReactNode } from 'react';

import { styles } from './TouchableOpacity.component.styles';
import { ITouchableOpacityProps } from './TouchableOpacity.types';

const TouchableOpacity = ({
  children,
  onPress,
  style,
  ...props
}: ITouchableOpacityProps): ReactNode => {
  const handleOnPress = () => {
    if (onPress) onPress();
  };

  return (
    <div onClick={handleOnPress} style={{ ...styles.content, ...style }} {...props}>
      {children}
    </div>
  );
};

export default TouchableOpacity;
