import { useGetIssuesQuery } from "../../../queries/issue.query";
import { IssueItem } from "./IssueItem";

export const IssuesContainer = () => {
  const { isIssuesLoading, issuesData } = useGetIssuesQuery();

  console.log({ issuesData });

  return issuesData.map((issue) => <IssueItem {...issue} />);
};
