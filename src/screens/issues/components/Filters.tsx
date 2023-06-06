import { tx } from "@twind/core";
import { useMemo } from "react";
import { useGetIssuesQuery } from "../../../queries/issue.query";

const Filters = () => {
  const { issuesData } = useGetIssuesQuery();
  const { open, closed } = useMemo(
    () =>
      issuesData.reduce(
        (prev, curr) => {
          if (curr.state === "open") {
            prev.open++;
          } else {
            prev.closed++;
          }

          return prev;
        },
        { open: 0, closed: 0 }
      ),
    [issuesData]
  );

  return (
    <section
      className={tx("p-4 flex justify-between items-center bg-canvas-subtle")}
    >
      <section className={tx("flex gap-2.5 text-sm")}>
        <h5 className={tx("text-fg-default font-semibold cursor-pointer")}>
          {open} Open
        </h5>
        <h5 className={tx("text-fg-muted")}>{closed} Closed</h5>
      </section>

      <section>done</section>
    </section>
  );
};

export default Filters;
