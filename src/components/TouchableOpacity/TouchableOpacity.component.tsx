import { FC } from 'react';
import { styles } from './TouchableOpacity.component.styles';
import { ITouchableOpacity } from './TouchableOpacity.types';

const TouchableOpacity: FC<ITouchableOpacity> = ({
  ref,
  idx,
  onPress,
  styleContainer,
  children,
}) => {
  const handleOnpress: any = () => {
    if (onPress) onPress();
  };

  return (
    <div
      ref={ref && ref}
      key={idx && idx}
      style={{ ...styles.content, ...styleContainer }}
      onClick={handleOnpress}
    >
      {children}
    </div>
  );
};

export default TouchableOpacity;
