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
  const [threshold, setThreshold] = useState(50); // Minimum swipe distance (pixels)

  const handleTouchStart = (event: any) => {
    setStartX(event?.touches?.[0]?.clientX); // Store initial touch position (X-coordinate)
  };

  const handleTouchEnd = (event: any) => {
    if (startX !== null) {
      const endX = event?.changedTouches?.[0]?.clientX;
      const deltaX = endX - startX;

      if (deltaX > threshold) {
        onSwipeLeft();
      } else if (deltaX < -threshold) {
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
