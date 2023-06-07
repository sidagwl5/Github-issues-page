import StatisticButton from "@/ui/atoms/StatisticButton";
import { Tag } from "@/ui/atoms/Tag";
import { Tab } from "@headlessui/react";
import { tx } from "@twind/core";
import { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitPullRequest } from "react-icons/bi";
import { FiCode } from "react-icons/fi";
import { GoGraph, GoRepo } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuBookOpen, LuLayout } from "react-icons/lu";
import { MdPlayCircleOutline, MdSecurity } from "react-icons/md";
import { TbGitFork } from "react-icons/tb";
import { VscIssues } from "react-icons/vsc";
import Content from "./components/Content";
import Filters from "./components/Filters";
import { IssueAction } from "./components/IssueAction";
import { IssuesContainer } from "./components/IssuesContainer";
import { Tabs } from "./components/Tabs";

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
    {
      title: "Projects",
      icon: <LuLayout className={tx("scale-[1.1] top-[1px] relative")} />,
    },
    {
      title: "Wiki",
      icon: <LuBookOpen className={tx("scale-[1.2] top-[1px] relative")} />,
    },
    {
      title: "Security",
      icon: <MdSecurity className={tx("scale-[1.15] relative")} />,
    },
    {
      title: "Insights",
      icon: <GoGraph className={tx("scale-[1.1] relative")} />,
    },
  ])[0];

  return (
    <Tab.Group defaultIndex={1}>
      <section
        className={tx(
          "p-4 md:p-6 !pb-0 bg-canvas-subtle border-b border-b-border-mute"
        )}
      >
        <section className={tx("flex gap-2 items-center mb-8")}>
          <GoRepo className={tx("relative text-fg-muted top-0.5")} />

          <h1
            className={tx(
              "leading-none text-xl text-accent-fg cursor-pointer font-semibold"
            )}
          >
            <a href={"https://github.com/facebook/react"} target="_blank">
              facebook / react
            </a>
          </h1>
          <Tag
            name={"Public"}
            color={"7d8590"}
            className={"!bg-transparent top-[2px] relative"}
          />
          <StatisticButton className={tx("ml-auto hidden !sm:flex")}>
            <IoIosNotificationsOutline className={tx("text-base")} />
            Notifications
          </StatisticButton>
          <StatisticButton stats={"175k"} className={tx("hidden !sm:flex")}>
            <AiOutlineStar className={tx("text-base")} />
            Star
          </StatisticButton>
          <StatisticButton stats={"35.3k"} className={tx("hidden !sm:flex")}>
            <TbGitFork className={tx("text-base")} />
            Fork
          </StatisticButton>
        </section>
        <Tabs tabsConfig={tabsConfig} />
      </section>
      <Content tabsConfig={tabsConfig} />
    </Tab.Group>
  );
};

export default Issues;
