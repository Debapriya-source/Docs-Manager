import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { TopicContext } from "./topics";
export const DeleteButton = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const { topics, setTopic } = React.useContext(TopicContext);

  const deleteTopic = (currentTopic) => {
    setTopic(() => {
      return topics.filter((topic) => currentTopic.id !== topic.id);
    });
    // console.log("delete", currentTopic);
  };
  return (
    <>
      <Button
        colorScheme="red"
        size={"sm"}
        onClick={onOpen}
        // onClick={() => {
        //   deleteTopic(topic);
        // }}
      >
        <RiDeleteBinLine />
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Topic
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => deleteTopic(props.topic)}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
