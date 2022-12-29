import { SimpleGrid } from "@chakra-ui/react";
import { TopicCard, AddNewTopic } from "./topicCard";
import { useState, createContext } from "react";
import { dummyTopics } from "../data/topics";

// console.log(dummyTopics);
export const TopicContext = createContext();

export const Topics = () => {
  // console.log("Topics");

  const [topics, setTopic] = useState(dummyTopics);
  const values = { topics, setTopic };
  // console.log(topics);
  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        px={{ base: 30, md: 20 }}
        py={{ base: 30, md: 20 }}
      >
        <TopicContext.Provider value={values}>
          <TopicCard topics={topics} setTopic={setTopic} />
        </TopicContext.Provider>
        <AddNewTopic setTopic={setTopic} />
      </SimpleGrid>
    </>
  );
};
