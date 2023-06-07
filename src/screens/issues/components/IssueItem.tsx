import { tx } from "@twind/core";
import { Tag } from "@/ui/atoms/Tag";
import { FaRegCommentAlt } from "react-icons/fa";
import { VscIssues } from "react-icons/vsc";
import { IIssue } from "src/queries/issue.query";

export const IssueItem = ({
  title,
  labels,
  number,
  comments,
  html_url,
  user,
}: IIssue) => {
  return (
    <section
      className={tx(
        "px-4 py-3 gap-2 flex hover:bg-canvas-subtle border-t border-t-border-mute"
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
          #{number} oaened yesterday by {user?.login}
        </a>
      </section>

      <section
        className={tx("ml-auto max-w-[80px] min-w-[80px] hidden !sm:block")}
      >
        {user?.avatar_url && (
          <img
            src={user?.avatar_url}
            alt="user-profile"
            className={tx("w-5 h-5 rounded-full object-cover")}
          />
        )}
      </section>

      <section
        onClick={() => {
          window.open(html_url, "_blank");
        }}
        className={tx("gap-1 items-center h-max group hidden !sm:flex")}
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
