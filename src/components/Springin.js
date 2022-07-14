import React from 'react';
import { useSpring, animated } from 'react-spring';

const Springin = ({ children }) => {
  const animatedProps = useSpring({
    to: {
      marginLeft: 0,  
      marginTop: 0,
      opacity: 1,
    },
    from: {
      marginLeft: 1500,  
      marginTop: -1000,
      opacity: 0,
    },
    config: { mass: 1.5, tension: 300, friction: 55 },
  });

  return <animated.div style={{ ...animatedProps }}>{children}</animated.div>;
};

export default Springin;
