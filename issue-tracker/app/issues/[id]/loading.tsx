import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";
import { Skeleton } from "@/app/components";

const loading = () => {
  return (
    <div className="max-w-xl">
      <Heading>
        <Skeleton />
      </Heading>
      <Flex className="space-x-2" my="2">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
        <Text>
          <Skeleton />
        </Text>
      </Flex>
      <Card className="prose" mt="4">
        <Skeleton />
      </Card>
    </div>
  );
};

export default loading;
