import { useInfiniteQuery, useQuery } from "react-query";
import { axiosInstance } from "../configs/axios.config";
import { useMemo } from "react";
import { enqueueSnackbar } from "notistack";

export interface IIssue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: IAssignee;
  labels: ILabel[];
  state: string;
  pull_request: Partial<{
    url: string;
    html_url: string;
    diff_url: string;
    patch_url: string;
    merged_at: null | string;
  }> | null;
  locked: boolean;
  assignee: IAssignee;
  assignees: IAssignee[];
  milestone: null;
  comments: number;
  created_at: Date;
  updated_at: Date;
  closed_at: null;
  author_association: string;
  active_lock_reason: null;
  body: string;
  reactions: IReactions;
  timeline_url: string;
  performed_via_github_app: null;
  state_reason: null;
}

export interface IAssignee {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface ILabel {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: null | string;
}

export interface IReactions {
  url: string;
  total_count: number;
  "+1": number;
  "-1": number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}

export const useGetIssuesQuery = () => {
  const fallback = useMemo(() => [], []);

  const { data: issuesData = fallback, isLoading: isIssuesLoading } = useQuery({
    queryKey: "issues",
    queryFn: async () => {
      const { data } = await axiosInstance.get("/repos/facebook/react/issues");
      return data;
    },
    enabled: true,
    onError: (err: any) => {
      enqueueSnackbar({
        variant: "error",
        message:
          err?.response?.data?.message ??
          err?.message ??
          "Something went wrong!",
      });
    },
  });

  return { issuesData, isIssuesLoading } as {
    issuesData: IIssue[];
    isIssuesLoading: boolean;
  };
};

export const useGetIssuesInfiniteQuery = () => {
  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery<{
    data: IIssue[];
    next: number;
  }>(
    "infinite-scroll-issues",
    async ({ pageParam = 1 }) => {
      const { data } = await axiosInstance.get(
        `/repos/facebook/react/issues?page=${pageParam}`
      );
      return { data, next: pageParam + 1 };
    },
    {
      getNextPageParam: (page) => page.next,
      enabled: true,
      onError: (err: any) => {
        enqueueSnackbar({
          variant: "error",
          message:
            err?.response?.data?.message ??
            err?.message ??
            "Something went wrong!",
        });
      },
    }
  );

  return { data, fetchNextPage, hasNextPage, isLoading };
};
