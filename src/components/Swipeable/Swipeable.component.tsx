import { ReactNode, useState } from 'react';

import { ISwipeableProps } from './Swipeable.types';

const Swipeable = ({
  children,
  onSwipeLeft = () => {},
  onSwipeRight = () => {},
  style = {},
  ...props
}: ISwipeableProps): ReactNode => {
  const [startX, setStartX] = useState(null);

  const handleTouchStart = (event: any) => {
    setStartX(event?.touches?.[0]?.clientX); // Store initial touch position (X-coordinate)
  };

  const handleTouchEnd = (event: any) => {
    if (startX !== null) {
      const endX = event?.changedTouches?.[0]?.clientX;
      const deltaX = endX - startX;

      if (deltaX > 50) {
        onSwipeLeft();
      } else if (deltaX < -50) {
        onSwipeRight();
      }

      setStartX(null); // Reset touch position for next swipe
    }
  };

  return (
    <div style={style} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} {...props}>
      {children}
    </div>
  );
};

export default Swipeable;
