import { FC } from 'react';
import { styles } from './TouchableOpacity.component.styles';
import { ITouchableOpacity } from './TouchableOpacity.types';

const TouchableOpacity: FC<ITouchableOpacity> = ({ children, idx, onPress, ref, style }) => {
  const handleOnpress: any = () => {
    if (onPress) onPress();
  };

  return (
    <div
      key={idx && idx}
      onClick={handleOnpress}
      ref={ref && ref}
      style={{ ...styles.content, ...style }}
    >
      {children}
    </div>
  );
};

export default TouchableOpacity;
