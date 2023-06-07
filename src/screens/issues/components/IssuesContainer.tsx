import { useGetIssuesQuery } from "../../../queries/issue.query";
import { IssueItem } from "./IssueItem";

export const IssuesContainer = () => {
  const { isIssuesLoading, issuesData } = useGetIssuesQuery();

  return issuesData.map((issue) => <IssueItem {...issue} />);
};
