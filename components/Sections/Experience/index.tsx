/* eslint-disable import/order */

import { Heading, Link, Stack, Text } from '@chakra-ui/react';

import ExperienceTab from './ExperienceTab';
import { memo } from 'react';

const DetailSection = () => (
  <Stack
    width={{ base: '99%', lg: '60%', xl: '75%' }}
    height="100%"
    spacing={{ base: 6, xl: 8 }}
  >
    <Heading
      size="2xl"
      style={{
        fontVariantCaps: 'small-caps',
      }}
    >
      Places i’ve worked.
    </Heading>
    <Text variant="description">
      {`Since 2021, had a privilege to work with several companies that enables me
      to hone my skills and talents.`}
      Currently I am working with
      <Link href="https://ejada.com/" target="_blank" rel="noreferrer">
        Ejada Systems LTD
      </Link>
      .
    </Text>

    <ExperienceTab />
  </Stack>
);

export default memo(DetailSection);
