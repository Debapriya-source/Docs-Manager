import { SimpleGrid } from "@chakra-ui/react";
import { TopicCard, AddNewTopic } from "./topicCard";
import { useState } from "react";
import { dummyTopics } from "../data/topics";

// console.log(dummyTopics);

export const Topics = () => {
  const [topics, setTopic] = useState(dummyTopics);
  // console.log(topics);
  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        px={{ base: 30, md: 20 }}
        py={{ base: 30, md: 20 }}
      >
        <TopicCard topics={topics} />
        <AddNewTopic />
      </SimpleGrid>
    </>
  );
};
