import { tx } from "@twind/core";
import { useCallback } from "react";
import InfiniteScroller from "react-infinite-scroller";
import { useGetIssuesInfiniteQuery } from "../../../queries/issue.query";
import { IssueItem } from "./IssueItem";

export const IssuesContainer = () => {
  const { data, fetchNextPage, hasNextPage, isLoading } =
    useGetIssuesInfiniteQuery();

  const loadMore = useCallback(() => fetchNextPage(), []);

  return (
    <section
      id="scrollable-target"
      className={tx("relative h-[80vh] w-full overflow-auto")}
    >
      <InfiniteScroller
        loadMore={loadMore}
        hasMore={hasNextPage && !isLoading}
        useWindow={false}
        loader={
          <div
            className={tx(
              "w-full border-t border-t-border-mute flex justify-center px-4 py-6 text-black"
            )}
          >
            Loading...
          </div>
        }
      >
        {data?.pages.map((issue) =>
          issue.data.map((issue) => <IssueItem {...issue} />)
        )}
      </InfiniteScroller>
    </section>
  );
};
