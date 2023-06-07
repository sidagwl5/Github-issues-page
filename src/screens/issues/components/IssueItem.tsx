import { tx } from "@twind/core";
import { Tag } from "@/ui/atoms/Tag";
import { FaRegCommentAlt } from "react-icons/fa";
import { VscIssues } from "react-icons/vsc";
import { IIssue } from "src/queries/issue.query";
import dayjs from "dayjs";
import { BiGitPullRequest } from "react-icons/bi";

interface Iprops extends IIssue {
  index?: number;
}

export const IssueItem = ({
  title,
  labels,
  number,
  comments,
  html_url,
  user,
  index,
  created_at,
  assignee,
  pull_request,
}: Iprops) => {
  return (
    <section
      className={tx(
        "px-4 py-3 gap-2 flex hover:bg-canvas-subtle",
        index !== 0 && "border-t border-t-border-mute"
      )}
    >
      <section>
        <VscIssues className={tx("scale-[1.15] top-1 text-open-fg relative")} />
      </section>
      <section className={tx("flex flex-col gap-1")}>
        <section className={tx("flex flex-wrap gap-1")}>
          <a
            target="_blank"
            href={html_url}
            className={tx(
              "text-fg-default hover:text-accent-fg cursor-pointer font-semibold"
            )}
          >
            {title}
          </a>
          {labels.map((label) => (
            <Tag {...label} />
          ))}
        </section>
        <a className={tx("text-xs text-fg-muted")}>
          #{number} opened {dayjs(created_at).fromNow()} by {user?.login}
        </a>
      </section>

      <section
        className={tx("ml-auto max-w-[80px] flex min-w-[80px] hidden !md:flex")}
      >
        {pull_request?.html_url && (
          <>
            <BiGitPullRequest
              onClick={() => {
                window.open(pull_request.html_url, "_blank");
              }}
              className={tx(
                "cursor-pointer text-fg-muted group-hover:text-accent-fg scale-90"
              )}
            />
            <span
              className={tx(
                "text-xs font-semibold text-fg-muted group-hover:text-accent-fg relative"
              )}
            >
              1
            </span>
          </>
        )}
      </section>

      <section className={tx("max-w-[80px] min-w-[80px] hidden !md:block")}>
        {assignee?.avatar_url && (
          <img
            src={assignee?.avatar_url}
            alt="user-profile"
            className={tx("w-5 h-5 rounded-full object-cover")}
          />
        )}
      </section>

      <section
        onClick={() => {
          window.open(html_url, "_blank");
        }}
        className={tx("gap-1 items-center h-max group hidden !md:flex")}
      >
        <FaRegCommentAlt
          className={tx(
            "cursor-pointer text-fg-muted group-hover:text-accent-fg scale-90"
          )}
        />
        <span
          className={tx(
            "text-xs font-semibold text-fg-muted group-hover:text-accent-fg relative -top-0.5"
          )}
        >
          {comments}
        </span>
      </section>
    </section>
  );
};
