/* eslint-disable import/order */
/* eslint-disable react/no-multi-comp */

import {
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Skill, Skills, splitSkills } from 'config/skills';

import styles from './styles.module.css';

type ISkillSetModal = {
  isOpen: boolean;
  onClose(): void;
};

const SkillList = ({
  title,
  columns,
}: {
  title: string;
  columns: Skill[][];
}) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200');
  const [colOne, colTwo = []] = columns;
  return (
    <>
      <Heading as="div" size="sm" paddingBottom={1} variant="description">
        {title}
      </Heading>
      <Divider marginBottom={4} />
      <SimpleGrid columns={2} spacing={4} paddingBottom={6}>
        <List spacing={3}>
          {colOne.map((item) => (
            <ListItem
              key={item.name}
              fontSize="small"
              display="flex"
              alignItems="center"
            >
              <ListIcon as={item.icon} color={emphasis} fontSize="2em" />
              {item.name}
            </ListItem>
          ))}
        </List>
        <List spacing={3}>
          {colTwo.map((item) => (
            <ListItem
              key={item.name}
              fontSize="small"
              display="flex"
              alignItems="center"
            >
              <ListIcon as={item.icon} color={emphasis} fontSize="2em" />
              {item.name}
            </ListItem>
          ))}
        </List>
      </SimpleGrid>
    </>
  );
};
const SkillSetModal = ({ isOpen, onClose }: ISkillSetModal) => {
  const backendCols = splitSkills(Skills.backend);
  const frontendCols = splitSkills(Skills.frontend);
  const CoreCols = splitSkills(Skills.core);
  const dataBaseCols = splitSkills(Skills.database);
  const uiFrameWorkCols = splitSkills(Skills['ui frameworks']);
  const productivityCols = splitSkills(Skills['productivity boost']);
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Full Skill Set List</ModalHeader>
        <ModalCloseButton />
        <ModalBody className={styles.skillModal}>
          <SkillList title="Core Languages" columns={CoreCols} />
          <SkillList title="Frontend" columns={frontendCols} />
          <SkillList title="Ui Frameworks" columns={uiFrameWorkCols} />
          <SkillList title="Backend" columns={backendCols} />
          <SkillList title="Database and Streams" columns={dataBaseCols} />
          <SkillList title="Productivity boosts" columns={productivityCols} />
        </ModalBody>
        <ModalFooter>
          <Text fontSize="x-small">*Some micro Technologies not included </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SkillSetModal;
