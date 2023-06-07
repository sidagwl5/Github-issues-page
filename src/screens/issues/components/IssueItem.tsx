import { tx } from "@twind/core";
import { Tag } from "@/ui/atoms/Tag";
import { FaRegCommentAlt } from "react-icons/fa";
import { VscIssues } from "react-icons/vsc";

export const IssueItem = ({ title, labels, number, comments }: any) => {
  return (
    <section
      className={tx(
        "px-4 py-3 gap-2 flex hover:bg-canvas-subtle border-t border-t-border-mute"
      )}
    >
      <section>
        <VscIssues className={tx("scale-[1.15] text-open-fg relative")} />
      </section>
      <section className={tx("flex flex-col gap-1")}>
        <section className={tx("flex flex-wrap gap-1")}>
          <p
            className={tx(
              "text-fg-default leading-none hover:text-accent-fg cursor-pointer font-semibold"
            )}
          >
            {title}
          </p>
          {labels.map((label) => (
            <Tag {...label} />
          ))}
        </section>
        <a className={tx("text-xs text-fg-muted")}>
          #{number} oaened yesterday by someone
        </a>
      </section>

      <section
        className={tx("gap-1 items-center h-max group ml-auto hidden !sm:flex")}
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
