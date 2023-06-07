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
    className: "hidden !md:flex",
  },
  {
    title: "Assignee",
    className: "hidden !md:flex",
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
    <section
      className={tx(
        "p-4 flex items-center flex-col border-b border-b-border-mute !sm:flex-row bg-canvas-subtle gap-y-4 gap-x-2"
      )}
    >
      <section className={tx("flex gap-2 w-full items-center")}>
        <VscIssues
          className={tx("scale-[1.15] top-[1px] text-fg-default relative")}
        />
        <section className={tx("flex gap-2.5 text-sm")}>
          <h5 className={tx("text-fg-default font-semibold cursor-pointer")}>
            {open} Open
          </h5>
          <h5 className={tx("text-fg-muted")}>{closed} Closed</h5>
        </section>
      </section>

      <section
        className={tx(
          "ml-auto flex w-full justify-around flex-1 gap-4 text-fg-muted text-sm"
        )}
      >
        {filtersConfig.map((filter) => (
          <span
            className={tx(
              "flex gap-0.5 cursor-pointer items-center",
              filter.className
            )}
          >
            {filter.title}
            <AiFillCaretDown
              className={tx("relative hidden !sm:block top-0.5 scale-75")}
            />
          </span>
        ))}
      </section>
    </section>
  );
};

export default Filters;
