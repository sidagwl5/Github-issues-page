import { tx } from "@twind/core";
import { useMemo } from "react";
import { useGetIssuesQuery } from "../../../queries/issue.query";
import { VscIssues } from "react-icons/vsc";
import { AiFillCaretDown } from "react-icons/ai";

const filtersConfig = [
  {
    title: "Author",
  },
  {
    title: "Label",
  },
  {
    title: "Projects",
  },
  {
    title: "Milestones",
  },
  {
    title: "Assignee",
  },
  {
    title: "Sort",
  },
];

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
    <section className={tx("p-4 flex items-center bg-canvas-subtle gap-2")}>
      <VscIssues className={tx("scale-[1.15] text-fg-default relative")} />
      <section className={tx("flex gap-2.5 text-sm")}>
        <h5 className={tx("text-fg-default font-semibold cursor-pointer")}>
          {open} Open
        </h5>
        <h5 className={tx("text-fg-muted")}>{closed} Closed</h5>
      </section>

      <section className={tx("ml-auto flex text-fg-muted text-sm")}>
        {filtersConfig.map((filter) => (
          <span className={tx("px-4 flex gap-0.5 cursor-pointer items-center")}>
            {filter.title}
            <AiFillCaretDown className={tx("relative top-0.5 scale-75")} />
          </span>
        ))}
      </section>
    </section>
  );
};

export default Filters;
