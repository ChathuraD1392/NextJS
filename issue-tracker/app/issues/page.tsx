import prisma from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import React from "react";
import IssueStatusBadge from "../components/IssueStatusBadge";
import delay from "delay";
import IssueActions from "./IssueActions";
import NextLink from "../components/NextLink";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  //await delay(2000);
  return (
    <div className="max-w-xl space-y-3">
      <IssueActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created At
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <NextLink href={`/issues/${issue.id}`}>{issue.title}</NextLink>

                <div className="block md:hidden">
                  <IssueStatusBadge status={issue.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <IssueStatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};
export const dynamic = "force-dynamic";
export default IssuesPage;
