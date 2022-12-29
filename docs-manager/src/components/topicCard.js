import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Text,
  Center,
  keyframes,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { BsJournalPlus } from "react-icons/bs";
// import { RiDeleteBinLine } from "react-icons/ri";
import uuid from "react-uuid";
import { DeleteButton } from "./deleteButton";

const spin = keyframes`
  0%, 100% { transform: rotate(0deg); }
  10%,40% { transform: rotate(10deg); }
    40%,70% { transform: rotate(-10deg); }
    70%,90% { transform: rotate(0deg); }
`;

// const zoom = keyframes`
//   from { transform: scale(1); }
//   to { transform: scale(1.05); }
// `;

export const TopicCard = (props) => {
  //   console.log(props.topics);
  // console.log("TopicCard");

  const animation = `${spin} 1s ease-in-out`;

  return (
    <>
      {props.topics.map((topic) => {
        return (
          <Card
            background={"black"}
            borderRadius={"3xl"}
            boxShadow="0px 0px 4px 1px rgba(57,255,20,.6)"
            _hover={{ animation: animation }}
            key={topic.id}
            color={"white"}
          >
            <CardHeader>
              <HStack>
                <Heading size="md"> {topic.title}</Heading>
                <Spacer />
                <DeleteButton topic={topic} />
              </HStack>
            </CardHeader>

            <CardBody>
              <Text>{topic.description}</Text>
            </CardBody>
            <CardFooter>
              <Button bgColor={"gray.700"}>View More</Button>
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
};

export const AddNewTopic = (props) => {
  // console.log("AddNewTopic");
  //   const animation = `${zoom} infinite 1s `;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const titleref = React.useRef();
  const descriptionref = React.useRef();

  //   console.log(props);
  let inputTopic = {};
  const saveNewTopic = () => {
    // console.log(titleref.current.value, descriptionref.current.value);

    //setting values from input fields and adding new topic to the list
    inputTopic.id = uuid();
    inputTopic.title = titleref.current.value;
    inputTopic.description = descriptionref.current.value;

    if (inputTopic.title !== "") {
      props.setTopic((prev) => {
        return [...prev, inputTopic];
      });
      // console.log(topic);
      onClose();
    } else {
      alert("Title cannot be empty");
    }
  };

  return (
    <>
      <center>
        <Card
          background={"black"}
          borderRadius={"3xl"}
          margin="1em"
          w={{ base: "140px", md: "140px", lg: "140px" }}
          boxShadow="0px 0px 5px -2px rgba(2,166,150,1)"
          _hover={{ transform: "scale(1.05)" }}
          onClick={onOpen}
        >
          <CardBody>
            <Center>
              {/* <Button> */}
              <BsJournalPlus size={100} color={"rgb(250, 230, 230)"} />
              {/* </Button> */}
            </Center>
          </CardBody>
        </Card>
      </center>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new Topic</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input ref={titleref} placeholder="Title" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input ref={descriptionref} placeholder="Description" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={saveNewTopic}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
