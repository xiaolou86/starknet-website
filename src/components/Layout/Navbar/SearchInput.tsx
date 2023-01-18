import {
  Button,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Kbd,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

import { Text } from "../../Typography/Text";

export const SearchInput = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.100" backdropFilter="blur(7px)" />
  );

  if (!isDesktop) {
    return (
      <IconButton
        variant="ghost"
        icon={<Icon as={HiOutlineMagnifyingGlass} fontSize="xl" />}
        aria-label="Open Menu"
      />
    );
  }
  return (
    <>
      <InputGroup>
        <InputLeftElement>
          <Icon as={HiOutlineMagnifyingGlass} color="gray.500" fontSize="lg" />
        </InputLeftElement>
        <Input
          bg={"card-bg"}
          focusBorderColor="blue.900"
          borderColor="gray.800"
          width="full"
          fontSize="sm"
          variant="filled"
          type="text"
          placeholder="Search"
          autoComplete="off"
          onClick={() => onOpen()}
        />
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <OverlayOne />
          <ModalContent bg="card-bg">
            <ModalBody>
              <Text>Algolia search</Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <InputRightElement>
          <Kbd>/</Kbd>
        </InputRightElement>
      </InputGroup>
    </>
  );
};
