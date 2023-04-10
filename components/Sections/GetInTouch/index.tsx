import { Heading, Link, Stack, Text } from '@chakra-ui/react';
import { Variants, motion } from 'framer-motion';

import { memo } from 'react';
import { useInView } from 'react-intersection-observer';

const rimuruVariant: Variants = {
  shake: {
    rotate: [0, 15, 0, -15, 0],
    transition: {
      delay: 1.2,
      duration: 0.5,
      repeat: 2,
      ease: 'easeInOut',
    },
  },
  jump: {
    y: [0, -35, 0],
    transition: {
      delay: 1.8,
      duration: 0.5,
      repeat: 3,
      ease: 'easeInOut',
    },
  },
};

const GetInTouch = () => {
  const [ref, inView] = useInView();
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
      as="footer"
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Say hi!{' '}
        <Text as="span" fontSize="2xl" variant="emphasis">
          <motion.div
            style={{ display: 'inline-block' }}
            variants={rimuruVariant}
            ref={ref}
            animate={inView ? ['shake', 'jump'] : false}
          >
            👋
          </motion.div>
        </Text>
      </Heading>
      <Text variant="description">
        So Feel free to message me on any of my social media or shoot me an{' '}
        <Link
          href="mailto:ahmedalian400@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          email
        </Link>
        .
      </Text>
    </Stack>
  );
};

export default memo(GetInTouch);
