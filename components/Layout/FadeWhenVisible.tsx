/* eslint-disable import/order */

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import { fadeInUpSlower } from 'config/animations';
import { useInView } from 'react-intersection-observer';

const FadeInWhenVisible = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  return (
    <motion.div
      style={{ margin: 0 }}
      ref={ref}
      animate={controls}
      initial="initial"
      variants={fadeInUpSlower}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
