import { tx } from "@twind/core";
import Filters from "./components/Filters";
import { IssuesContainer } from "./components/IssuesContainer";
import { Tab } from "@headlessui/react";
import { FiCode } from "react-icons/fi";
import { VscIssues } from "react-icons/vsc";
import { BiGitPullRequest } from "react-icons/bi";
import { MdPlayCircleOutline } from "react-icons/md";
import { useMemo, useState } from "react";
import { useGetIssuesQuery } from "src/queries/issue.query";
import { Tag } from "@/ui/atoms/Tag";

const IssueAction = () => {
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

  return <Tag name={open} color={"ffffff"} />;
};

const Issues = () => {
  const tabsConfig = useState([
    {
      title: "Code",
      icon: <FiCode />,
    },
    {
      title: "Issues",
      icon: <VscIssues className={tx("scale-[1.15] relative top-[1.5px]")} />,
      actions: <IssueAction />,
      content: (
        <>
          <Filters />
          <IssuesContainer />
        </>
      ),
    },
    {
      title: "Pull Requests",
      icon: <BiGitPullRequest className={tx("top-[1px] relative")} />,
    },
    {
      title: "Actions",
      icon: (
        <MdPlayCircleOutline className={tx("scale-[1.2] top-[1px] relative")} />
      ),
    },
  ])[0];

  return (
    <Tab.Group>
      <section className={tx("p-6 pb-0 border-b border-b-border-mute")}>
        <Tab.List className={tx("gap-4 flex")}>
          {tabsConfig.map((tag) => (
            <Tab className={tx("text-fg-default")}>
              {({ selected }) => (
                <>
                  <section
                    className={tx(
                      "flex gap-2 items-center hover:bg-canvas-subtle px-2 py-1 rounded-md",
                      selected && "border-b border-transparent"
                    )}
                  >
                    <span className={tx("text-fg-muted")}>{tag.icon}</span>
                    <span
                      className={tx(
                        selected && "font-semibold",
                        "text-sm leading-none"
                      )}
                    >
                      {tag.title}
                    </span>
                    {tag.actions ?? null}
                  </section>
                  <div
                    className={tx(
                      selected && "bg-border-active rounded-lg",
                      "h-[2px] mt-1 relative"
                    )}
                  />
                </>
              )}
            </Tab>
          ))}
        </Tab.List>
      </section>
      <Tab.Panels>
        <section className={tx("p-6 flex-1")}>
          <section
            className={tx(
              "max-w-[1280px] mx-auto border-border-default border"
            )}
          >
            {tabsConfig.map((tag) => (
              <Tab.Panel>{tag.content}</Tab.Panel>
            ))}
          </section>
        </section>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Issues;
