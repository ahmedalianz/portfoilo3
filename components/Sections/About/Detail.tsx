import {
  Box,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { SiAngular, SiJavascript, SiReact, SiTypescript } from 'react-icons/si';

import { FaNode } from 'react-icons/fa';
import { IoMdOpen } from 'react-icons/io';
import { memo } from 'react';

type ISkillSetModal = {
  onOpen(): void;
};

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200');
  const currentYear = new Date().getFullYear();
  const professionalYears = currentYear - 2019;
  return (
    <Stack
      width={{ base: '100%', lg: '70%' }}
      spacing={{ base: 6, xl: 8 }}
      as="section"
    >
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        What i do.
      </Heading>
      <Text variant="description">
        {`Creative and skilled frontend developer with a background in electrical engineering. After discovering my passion for software development, I transitioned to this field and have since gained +3 years of experience in designing and developing user-friendly and responsive websites and applications. Proficient in JavaScript, React, React Native, and familiar with other front-end technologies like Angular, and Vue, I am dedicated to delivering high-quality code, collaborating effectively with team members, and solving complex problems. I am always eager to learn and stay up-to-date with the latest trends and best practices in web / mobile development.`}
        <br /> <br />
        Here are the Technologies that i use
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiJavascript} color={emphasis} fontSize="2em" />
            Javascript (ES6+)
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTypescript} color={emphasis} fontSize="2em" />
            Typescript
          </ListItem>

          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={FaNode} color={emphasis} fontSize="2em" />
            Node JS
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiReact} color={emphasis} fontSize="2em" />
            React
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiReact} color={emphasis} fontSize="2em" />
            React Native
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiAngular} color={emphasis} fontSize="2em" />
            Angular
          </ListItem>
        </List>
        <Box>
          <Text
            as="button"
            variant="emphasis"
            fontSize="smaller"
            textAlign="left"
            onClick={onOpen}
          >
            See my full arsenal <Icon as={IoMdOpen} />
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  );
};

export default memo(Detail);
