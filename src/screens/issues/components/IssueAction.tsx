import { Tag } from "@/ui/atoms/Tag";
import { useMemo } from "react";
import { useGetIssuesQuery } from "src/queries/issue.query";

export const IssueAction = () => {
  const { issuesData } = useGetIssuesQuery();
  const { open } = useMemo(
    () =>
      issuesData.reduce(
        (prev, curr) => {
          if (curr.state === "open") {
            prev.open++;
          }

          return prev;
        },
        { open: 0 }
      ),
    [issuesData]
  );

  return <Tag name={String(open)} color={"afb8c133"} />;
};
