import { IssueStatusBadge } from "../../components/index";
import prisma from "@/prisma/client";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import { HiPencilSquare } from "react-icons/hi2";
import React from "react";
import Link from "next/link";

interface Props {
  params: { id: string };
}

const IssueDetailsPage = async ({ params }: Props) => {
  // await delay(2000);
  //   if (typeof params.id !== "number") notFound();
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) }
  });

  if (!issue) notFound();
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="4">
      <Box>
        <Heading>{issue.title}</Heading>
        <Flex className="space-x-2" my="2">
          <IssueStatusBadge status={issue.status} />
          <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card className="prose" mt="4">
          <Markdown>{issue.description}</Markdown>
        </Card>
      </Box>
      <Box>
        <Button>
          <HiPencilSquare />
          <Link href="/issues/edit">Edit Issue</Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default IssueDetailsPage;
