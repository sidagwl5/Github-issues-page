import { useInfiniteQuery, useQuery } from "react-query";
import { axiosInstance } from "../configs/axios.config";
import { useMemo } from "react";

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
  const fallback = useMemo(
    () => [
      {
        url: "https://api.github.com/repos/facebook/react/issues/26907",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26907/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26907/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26907/events",
        html_url: "https://github.com/facebook/react/pull/26907",
        id: 1743181240,
        node_id: "PR_kwDOAJy2Ks5SRP04",
        number: 26907,
        title: "chore: fix typo in a comment",
        user: {
          login: "MatanBobi",
          id: 12711091,
          node_id: "MDQ6VXNlcjEyNzExMDkx",
          avatar_url: "https://avatars.githubusercontent.com/u/12711091?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/MatanBobi",
          html_url: "https://github.com/MatanBobi",
          followers_url: "https://api.github.com/users/MatanBobi/followers",
          following_url:
            "https://api.github.com/users/MatanBobi/following{/other_user}",
          gists_url: "https://api.github.com/users/MatanBobi/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/MatanBobi/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/MatanBobi/subscriptions",
          organizations_url: "https://api.github.com/users/MatanBobi/orgs",
          repos_url: "https://api.github.com/users/MatanBobi/repos",
          events_url: "https://api.github.com/users/MatanBobi/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/MatanBobi/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 196858374,
            node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
            url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
            name: "CLA Signed",
            color: "e7e7e7",
            default: false,
            description: null,
          },
        ],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 1,
        created_at: "2023-06-06T06:34:35Z",
        updated_at: "2023-06-06T06:39:48Z",
        closed_at: null,
        author_association: "NONE",
        active_lock_reason: null,
        draft: false,
        pull_request: {
          url: "https://api.github.com/repos/facebook/react/pulls/26907",
          html_url: "https://github.com/facebook/react/pull/26907",
          diff_url: "https://github.com/facebook/react/pull/26907.diff",
          patch_url: "https://github.com/facebook/react/pull/26907.patch",
          merged_at: null,
        },
        body: "<!--\r\n  Thanks for submitting a pull request!\r\n  We appreciate you spending the time to work on these changes. Please provide enough information so that others can review your pull request. The three fields below are mandatory.\r\n\r\n  Before submitting a pull request, please make sure the following is done:\r\n\r\n  1. Fork [the repository](https://github.com/facebook/react) and create your branch from `main`.\r\n  2. Run `yarn` in the repository root.\r\n  3. If you've fixed a bug or added code that should be tested, add tests!\r\n  4. Ensure the test suite passes (`yarn test`). Tip: `yarn test --watch TestName` is helpful in development.\r\n  5. Run `yarn test --prod` to test in the production environment. It supports the same options as `yarn test`.\r\n  6. If you need a debugger, run `yarn test --debug --watch TestName`, open `chrome://inspect`, and press \"Inspect\".\r\n  7. Format your code with [prettier](https://github.com/prettier/prettier) (`yarn prettier`).\r\n  8. Make sure your code lints (`yarn lint`). Tip: `yarn linc` to only check changed files.\r\n  9. Run the [Flow](https://flowtype.org/) type checks (`yarn flow`).\r\n  10. If you haven't already, complete the CLA.\r\n\r\n  Learn more about contributing: https://reactjs.org/docs/how-to-contribute.html\r\n-->\r\n\r\n## Summary\r\n\r\nThis PR fixes a typo in a comment :)\r\n",
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26907/reactions",
          total_count: 0,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26907/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26906",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26906/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26906/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26906/events",
        html_url: "https://github.com/facebook/react/issues/26906",
        id: 1743092234,
        node_id: "I_kwDOAJy2Ks5n5XoK",
        number: 26906,
        title:
          "Bug: there is no renderToReadableStream function in react-dom@18.2.0 in Node.js",
        user: {
          login: "krutoo",
          id: 13140130,
          node_id: "MDQ6VXNlcjEzMTQwMTMw",
          avatar_url: "https://avatars.githubusercontent.com/u/13140130?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/krutoo",
          html_url: "https://github.com/krutoo",
          followers_url: "https://api.github.com/users/krutoo/followers",
          following_url:
            "https://api.github.com/users/krutoo/following{/other_user}",
          gists_url: "https://api.github.com/users/krutoo/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/krutoo/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/krutoo/subscriptions",
          organizations_url: "https://api.github.com/users/krutoo/orgs",
          repos_url: "https://api.github.com/users/krutoo/repos",
          events_url: "https://api.github.com/users/krutoo/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/krutoo/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 155984160,
            node_id: "MDU6TGFiZWwxNTU5ODQxNjA=",
            url: "https://api.github.com/repos/facebook/react/labels/Status:%20Unconfirmed",
            name: "Status: Unconfirmed",
            color: "d4c5f9",
            default: false,
            description:
              "A potential issue that we haven't yet confirmed as a bug",
          },
        ],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 2,
        created_at: "2023-06-06T05:08:00Z",
        updated_at: "2023-06-06T16:37:45Z",
        closed_at: null,
        author_association: "NONE",
        active_lock_reason: null,
        body: "I try to use `renderToReadableStream` function from `react-dom/server` in Node.js but there is no such function in package.\r\n\r\nReact version: 18.2.0\r\nNode.js version 16.15.0 or 18.16.0\r\n\r\n## Steps To Reproduce\r\n\r\n1. create `index.mjs` file\r\n2. insert code:\r\n   ```js\r\n   import { renderToString, renderToReadableStream } from \"react-dom/server\";\r\n\r\n   console.log({ renderToString, renderToReadableStream });\r\n   ```\r\n3. run `node index.mjs` in terminal\r\n\r\nLink to code example:\r\n\r\n[StackBlitz](https://stackblitz.com/edit/node-yn12fy?file=index.mjs)\r\n\r\n## The current behavior\r\n\r\nError in terminal:\r\n```sh\r\nfile:///Users/user/Projects/node-fetch-api-server/index.mjs:1\r\nimport { renderToString, renderToReadableStream } from \"react-dom/server\";\r\n                         ^^^^^^^^^^^^^^^^^^^^^^\r\nSyntaxError: Named export 'renderToReadableStream' not found. The requested module 'react-dom/server' is a CommonJS module, which may not support all module.exports as named exports.\r\nCommonJS modules can always be imported via the default export, for example using:\r\n\r\nimport pkg from 'react-dom/server';\r\nconst { renderToString, renderToReadableStream } = pkg;\r\n\r\n    at ModuleJob._instantiate (node:internal/modules/esm/module_job:124:21)\r\n    at async ModuleJob.run (node:internal/modules/esm/module_job:190:5)\r\n\r\nNode.js v18.16.0\r\n```\r\n\r\n## The expected behavior\r\n\r\nNode.js suupports web streams in experimental mode.\r\n\r\nThe package `react-dom/server` must have a function `renderToReadableStream` according to the documentation:\r\nhttps://react.dev/reference/react-dom/server/renderToReadableStream",
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26906/reactions",
          total_count: 1,
          "+1": 1,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26906/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26905",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26905/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26905/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26905/events",
        html_url: "https://github.com/facebook/react/pull/26905",
        id: 1742852786,
        node_id: "PR_kwDOAJy2Ks5SQIhY",
        number: 26905,
        title: "Warn when a hook call is an OptionalCallExpression",
        user: {
          login: "tyao1",
          id: 5868353,
          node_id: "MDQ6VXNlcjU4NjgzNTM=",
          avatar_url: "https://avatars.githubusercontent.com/u/5868353?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/tyao1",
          html_url: "https://github.com/tyao1",
          followers_url: "https://api.github.com/users/tyao1/followers",
          following_url:
            "https://api.github.com/users/tyao1/following{/other_user}",
          gists_url: "https://api.github.com/users/tyao1/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/tyao1/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/tyao1/subscriptions",
          organizations_url: "https://api.github.com/users/tyao1/orgs",
          repos_url: "https://api.github.com/users/tyao1/repos",
          events_url: "https://api.github.com/users/tyao1/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/tyao1/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 196858374,
            node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
            url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
            name: "CLA Signed",
            color: "e7e7e7",
            default: false,
            description: null,
          },
          {
            id: 1775958285,
            node_id: "MDU6TGFiZWwxNzc1OTU4Mjg1",
            url: "https://api.github.com/repos/facebook/react/labels/React%20Core%20Team",
            name: "React Core Team",
            color: "9149d1",
            default: false,
            description: "Opened by a member of the React Core Team",
          },
        ],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 2,
        created_at: "2023-06-06T00:20:16Z",
        updated_at: "2023-06-06T04:25:16Z",
        closed_at: null,
        author_association: "CONTRIBUTOR",
        active_lock_reason: null,
        draft: false,
        pull_request: {
          url: "https://api.github.com/repos/facebook/react/pulls/26905",
          html_url: "https://github.com/facebook/react/pull/26905",
          diff_url: "https://github.com/facebook/react/pull/26905.diff",
          patch_url: "https://github.com/facebook/react/pull/26905.patch",
          merged_at: null,
        },
        body: "<!--\r\n  Thanks for submitting a pull request!\r\n  We appreciate you spending the time to work on these changes. Please provide enough information so that others can review your pull request. The three fields below are mandatory.\r\n\r\n  Before submitting a pull request, please make sure the following is done:\r\n\r\n  1. Fork [the repository](https://github.com/facebook/react) and create your branch from `main`.\r\n  2. Run `yarn` in the repository root.\r\n  3. If you've fixed a bug or added code that should be tested, add tests!\r\n  4. Ensure the test suite passes (`yarn test`). Tip: `yarn test --watch TestName` is helpful in development.\r\n  5. Run `yarn test --prod` to test in the production environment. It supports the same options as `yarn test`.\r\n  6. If you need a debugger, run `yarn test --debug --watch TestName`, open `chrome://inspect`, and press \"Inspect\".\r\n  7. Format your code with [prettier](https://github.com/prettier/prettier) (`yarn prettier`).\r\n  8. Make sure your code lints (`yarn lint`). Tip: `yarn linc` to only check changed files.\r\n  9. Run the [Flow](https://flowtype.org/) type checks (`yarn flow`).\r\n  10. If you haven't already, complete the CLA.\r\n\r\n  Learn more about contributing: https://reactjs.org/docs/how-to-contribute.html\r\n-->\r\n\r\n## Summary\r\nThis happens in our codebase, we should catch these.\r\n<!--\r\n Explain the **motivation** for making this change. What existing problem does the pull request solve?\r\n-->\r\n\r\n## How did you test this change?\r\n\r\n<!--\r\n  Demonstrate the code is solid. Example: The exact commands you ran and their output, screenshots / videos if the pull request changes the user interface.\r\n  How exactly did you verify that your PR solves the issue you wanted to solve?\r\n  If you leave this empty, your PR will very likely be closed.\r\n-->\r\nyarn test",
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26905/reactions",
          total_count: 0,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26905/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26904",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26904/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26904/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26904/events",
        html_url: "https://github.com/facebook/react/pull/26904",
        id: 1742640492,
        node_id: "PR_kwDOAJy2Ks5SPdM0",
        number: 26904,
        title: "Eslint fixed",
        user: {
          login: "koyuncuoglum95",
          id: 77508734,
          node_id: "MDQ6VXNlcjc3NTA4NzM0",
          avatar_url: "https://avatars.githubusercontent.com/u/77508734?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/koyuncuoglum95",
          html_url: "https://github.com/koyuncuoglum95",
          followers_url:
            "https://api.github.com/users/koyuncuoglum95/followers",
          following_url:
            "https://api.github.com/users/koyuncuoglum95/following{/other_user}",
          gists_url:
            "https://api.github.com/users/koyuncuoglum95/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/koyuncuoglum95/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/koyuncuoglum95/subscriptions",
          organizations_url: "https://api.github.com/users/koyuncuoglum95/orgs",
          repos_url: "https://api.github.com/users/koyuncuoglum95/repos",
          events_url:
            "https://api.github.com/users/koyuncuoglum95/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/koyuncuoglum95/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 196858374,
            node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
            url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
            name: "CLA Signed",
            color: "e7e7e7",
            default: false,
            description: null,
          },
        ],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: "2023-06-05T21:18:58Z",
        updated_at: "2023-06-05T21:27:36Z",
        closed_at: null,
        author_association: "NONE",
        active_lock_reason: null,
        draft: false,
        pull_request: {
          url: "https://api.github.com/repos/facebook/react/pulls/26904",
          html_url: "https://github.com/facebook/react/pull/26904",
          diff_url: "https://github.com/facebook/react/pull/26904.diff",
          patch_url: "https://github.com/facebook/react/pull/26904.patch",
          merged_at: null,
        },
        body: "## Summary\r\n\r\n<!--\r\n Explain the **motivation** for making this change. What existing problem does the pull request solve?\r\n-->\r\n\r\n## How did you test this change?\r\n1.)  yarn\r\n\r\n2.) yarn start\r\n\r\n\r\nHow exactly did you verify that your PR solves the issue you wanted to solve?\r\n\r\n  When I start this fixture, the terminal says \r\n\r\nPS C:\\Users\\memo_\\OneDrive\\Masaüstü\\facebook-react\\fixtures\\eslint> yarn start\r\n\r\nyarn run v1.22.19\r\n$ ./watch.sh\r\nDone in 14.79s.\r\n\r\n![Screenshot 2023-06-05 141831](https://github.com/facebook/react/assets/77508734/9fffdf44-4433-4e86-8ff9-779565c25d67)\r\n",
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26904/reactions",
          total_count: 0,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26904/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26903",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26903/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26903/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26903/events",
        html_url: "https://github.com/facebook/react/issues/26903",
        id: 1742012066,
        node_id: "I_kwDOAJy2Ks5n1P6i",
        number: 26903,
        title: "[DevTools Bug]: Flame graph entries overlapping",
        user: {
          login: "OliverJAsh",
          id: 921609,
          node_id: "MDQ6VXNlcjkyMTYwOQ==",
          avatar_url: "https://avatars.githubusercontent.com/u/921609?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/OliverJAsh",
          html_url: "https://github.com/OliverJAsh",
          followers_url: "https://api.github.com/users/OliverJAsh/followers",
          following_url:
            "https://api.github.com/users/OliverJAsh/following{/other_user}",
          gists_url: "https://api.github.com/users/OliverJAsh/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/OliverJAsh/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/OliverJAsh/subscriptions",
          organizations_url: "https://api.github.com/users/OliverJAsh/orgs",
          repos_url: "https://api.github.com/users/OliverJAsh/repos",
          events_url:
            "https://api.github.com/users/OliverJAsh/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/OliverJAsh/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 40929151,
            node_id: "MDU6TGFiZWw0MDkyOTE1MQ==",
            url: "https://api.github.com/repos/facebook/react/labels/Type:%20Bug",
            name: "Type: Bug",
            color: "b60205",
            default: false,
            description: null,
          },
          {
            id: 155984160,
            node_id: "MDU6TGFiZWwxNTU5ODQxNjA=",
            url: "https://api.github.com/repos/facebook/react/labels/Status:%20Unconfirmed",
            name: "Status: Unconfirmed",
            color: "d4c5f9",
            default: false,
            description:
              "A potential issue that we haven't yet confirmed as a bug",
          },
          {
            id: 710573595,
            node_id: "MDU6TGFiZWw3MTA1NzM1OTU=",
            url: "https://api.github.com/repos/facebook/react/labels/Component:%20Developer%20Tools",
            name: "Component: Developer Tools",
            color: "fbca04",
            default: false,
            description: null,
          },
        ],
        state: "open",
        locked: false,
        assignee: {
          login: "hoxyq",
          id: 28902667,
          node_id: "MDQ6VXNlcjI4OTAyNjY3",
          avatar_url: "https://avatars.githubusercontent.com/u/28902667?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/hoxyq",
          html_url: "https://github.com/hoxyq",
          followers_url: "https://api.github.com/users/hoxyq/followers",
          following_url:
            "https://api.github.com/users/hoxyq/following{/other_user}",
          gists_url: "https://api.github.com/users/hoxyq/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/hoxyq/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/hoxyq/subscriptions",
          organizations_url: "https://api.github.com/users/hoxyq/orgs",
          repos_url: "https://api.github.com/users/hoxyq/repos",
          events_url: "https://api.github.com/users/hoxyq/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/hoxyq/received_events",
          type: "User",
          site_admin: false,
        },
        assignees: [
          {
            login: "hoxyq",
            id: 28902667,
            node_id: "MDQ6VXNlcjI4OTAyNjY3",
            avatar_url: "https://avatars.githubusercontent.com/u/28902667?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/hoxyq",
            html_url: "https://github.com/hoxyq",
            followers_url: "https://api.github.com/users/hoxyq/followers",
            following_url:
              "https://api.github.com/users/hoxyq/following{/other_user}",
            gists_url: "https://api.github.com/users/hoxyq/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/hoxyq/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/hoxyq/subscriptions",
            organizations_url: "https://api.github.com/users/hoxyq/orgs",
            repos_url: "https://api.github.com/users/hoxyq/repos",
            events_url: "https://api.github.com/users/hoxyq/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/hoxyq/received_events",
            type: "User",
            site_admin: false,
          },
        ],
        milestone: null,
        comments: 0,
        created_at: "2023-06-05T15:18:44Z",
        updated_at: "2023-06-05T15:32:08Z",
        closed_at: null,
        author_association: "NONE",
        active_lock_reason: null,
        body: '### Website or app\r\n\r\nhttps://web-enable-react-profil-1na9tm.herokuapp.com/\r\n\r\n### Repro steps\r\n\r\n1. Go to https://web-enable-react-profil-1na9tm.herokuapp.com/\r\n2. Open profiler\r\n3. Click "reload and start profiling"\r\n4. After the reload completes, stop profiling\r\n5. Step through the commits until you see this:\r\n   <img width="1840" alt="image" src="https://github.com/facebook/react/assets/921609/7162b403-d940-4028-a20f-27d73d48e55c">\r\n\r\nThe flame graph entries are overlapping other entries.\r\n\r\n### How often does this bug happen?\r\n\r\nEvery time\r\n\r\n### DevTools package (automated)\r\n\r\n_No response_\r\n\r\n### DevTools version (automated)\r\n\r\n4.27.8 (5/19/2023)\r\n\r\n### Error message (automated)\r\n\r\n_No response_\r\n\r\n### Error call stack (automated)\r\n\r\n_No response_\r\n\r\n### Error component stack (automated)\r\n\r\n_No response_\r\n\r\n### GitHub query string (automated)\r\n\r\n_No response_',
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26903/reactions",
          total_count: 0,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26903/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26902",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26902/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26902/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26902/events",
        html_url: "https://github.com/facebook/react/issues/26902",
        id: 1741961362,
        node_id: "I_kwDOAJy2Ks5n1DiS",
        number: 26902,
        title:
          "Bug: hydration is blocking for components inside Suspense boundary",
        user: {
          login: "OliverJAsh",
          id: 921609,
          node_id: "MDQ6VXNlcjkyMTYwOQ==",
          avatar_url: "https://avatars.githubusercontent.com/u/921609?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/OliverJAsh",
          html_url: "https://github.com/OliverJAsh",
          followers_url: "https://api.github.com/users/OliverJAsh/followers",
          following_url:
            "https://api.github.com/users/OliverJAsh/following{/other_user}",
          gists_url: "https://api.github.com/users/OliverJAsh/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/OliverJAsh/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/OliverJAsh/subscriptions",
          organizations_url: "https://api.github.com/users/OliverJAsh/orgs",
          repos_url: "https://api.github.com/users/OliverJAsh/repos",
          events_url:
            "https://api.github.com/users/OliverJAsh/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/OliverJAsh/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 155984160,
            node_id: "MDU6TGFiZWwxNTU5ODQxNjA=",
            url: "https://api.github.com/repos/facebook/react/labels/Status:%20Unconfirmed",
            name: "Status: Unconfirmed",
            color: "d4c5f9",
            default: false,
            description:
              "A potential issue that we haven't yet confirmed as a bug",
          },
        ],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: "2023-06-05T14:57:18Z",
        updated_at: "2023-06-05T14:57:18Z",
        closed_at: null,
        author_association: "NONE",
        active_lock_reason: null,
        body: "<!--\r\n  Please provide a clear and concise description of what the bug is. Include\r\n  screenshots if needed. Please test using the latest version of the relevant\r\n  React packages to make sure your issue has not already been fixed.\r\n-->\r\n\r\nReact version: 18.2.0\r\n\r\n## Steps To Reproduce\r\n\r\nLink to code example: https://github.com/OliverJAsh/react-suspense-non-blocking-hydration\r\n\r\nThe app renders two `Expensive` components outside of `Suspense` and another two inside of `Suspense`.\r\n\r\nEach `Expensive` component takes 500ms to render.\r\n\r\n`shared/Expensive.tsx`:\r\n```tsx\r\nimport * as React from 'react';\r\n\r\nexport const Expensive = () => {\r\n  const end = Date.now() + 500;\r\n  while (Date.now() < end) {\r\n    // do nothing\r\n  }\r\n\r\n  return <div>Expensive</div>;\r\n};\r\n\r\n```\r\n\r\n`shared/Nested.tsx`:\r\n```tsx\r\nimport * as React from 'react';\r\nimport { Expensive } from './Expensive';\r\n\r\nconst Nested: React.FC = () => (\r\n  <>\r\n    <div>Suspense</div>\r\n    <Expensive />\r\n    <Expensive />\r\n  </>\r\n);\r\n\r\nexport default Nested;\r\n\r\n```\r\n`shared/App.tsx`:\r\n```tsx\r\nimport * as React from 'react';\r\n\r\nimport { Expensive } from './Expensive';\r\n\r\nconst Nested = React.lazy(() => import('./Nested'));\r\n\r\nconst NestedWithSuspenseAndMemo = React.memo(() => (\r\n  <React.Suspense>\r\n    <Nested />\r\n  </React.Suspense>\r\n));\r\n\r\nexport const App = ({ history }: any) => {\r\n  React.useEffect(() => {\r\n    history.replace({});\r\n  }, []);\r\n\r\n  return (\r\n    <div>\r\n      <div>App</div>\r\n      <Expensive />\r\n      <Expensive />\r\n\r\n      <NestedWithSuspenseAndMemo />\r\n    </div>\r\n  );\r\n};\r\n\r\n```\r\n`client/index.tsx`:\r\n```tsx\r\nimport { hydrateRoot } from 'react-dom/client';\r\n\r\nimport * as React from 'react';\r\nimport { App } from '../shared/App';\r\n\r\nconst container = document.getElementById('root')!;\r\n\r\nclass History {\r\n  callback?: (location: {}) => void;\r\n\r\n  listen(callback: (location: {}) => void) {\r\n    this.callback = callback;\r\n  }\r\n\r\n  replace(location: {}) {\r\n    this.callback!(location);\r\n  }\r\n}\r\nconst history = new History();\r\n\r\nconst Context = React.createContext<{} | null>(null);\r\n\r\nconst Router = ({ children }: { children: React.ReactNode }) => {\r\n  const [location, setLocation] = React.useState({});\r\n\r\n  React.useLayoutEffect(() => {\r\n    history.listen(setLocation);\r\n  }, []);\r\n\r\n  return <Context.Provider value={location}>{children}</Context.Provider>;\r\n};\r\n\r\nhydrateRoot(\r\n  container,\r\n  <Router>\r\n    <App history={history} />\r\n  </Router>,\r\n);\r\n\r\n```\r\n\r\n\r\n## The current behavior\r\n\r\nThe hydration for the two `Expensive` components inside the `Suspense` boundary is in the form of a single task lasting 1 second:\r\n\r\n![blocking](https://github.com/facebook/react/assets/921609/7990267c-f9b0-47d8-a726-f40dd3e446fd)\r\n\r\n## The expected behavior\r\n\r\nThe hydration for the two `Expensive` components inside the `Suspense` boundary should be in the form of two tasks lasting 500ms each:\r\n\r\n![non-blocking](https://github.com/facebook/react/assets/921609/caba2c70-235f-44cc-945e-0990fe643980)\r\n\r\n## Notes\r\n\r\nI can fix this issue by wrapping the state update in `startTransition`, but I don't understand why this is necessary, given that the `Suspense` boundary will not be receiving this update because it is memoized and has no props.\r\n\r\n```diff\r\ndiff --git a/shared/App.tsx b/shared/App.tsx\r\nindex 2ff5b5e..9323df2 100644\r\n--- a/shared/App.tsx\r\n+++ b/shared/App.tsx\r\n@@ -12,7 +12,9 @@ const NestedWithSuspenseAndMemo = React.memo(() => (\r\n \r\n export const App = ({ history }: any) => {\r\n   React.useEffect(() => {\r\n-    history.replace({});\r\n+    React.startTransition(() => {\r\n+      history.replace({});\r\n+    });\r\n   }, []);\r\n \r\n   return (\r\n\r\n```",
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26902/reactions",
          total_count: 0,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26902/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26901",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26901/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26901/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26901/events",
        html_url: "https://github.com/facebook/react/issues/26901",
        id: 1741417821,
        node_id: "I_kwDOAJy2Ks5ny-1d",
        number: 26901,
        title:
          "Bug: react-hooks/rules-of-hooks rule is not applied inside of anonymous/arrow functions passed as an argument",
        user: {
          login: "alina-zaieva",
          id: 70098623,
          node_id: "MDQ6VXNlcjcwMDk4NjIz",
          avatar_url: "https://avatars.githubusercontent.com/u/70098623?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/alina-zaieva",
          html_url: "https://github.com/alina-zaieva",
          followers_url: "https://api.github.com/users/alina-zaieva/followers",
          following_url:
            "https://api.github.com/users/alina-zaieva/following{/other_user}",
          gists_url:
            "https://api.github.com/users/alina-zaieva/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/alina-zaieva/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/alina-zaieva/subscriptions",
          organizations_url: "https://api.github.com/users/alina-zaieva/orgs",
          repos_url: "https://api.github.com/users/alina-zaieva/repos",
          events_url:
            "https://api.github.com/users/alina-zaieva/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/alina-zaieva/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 155984160,
            node_id: "MDU6TGFiZWwxNTU5ODQxNjA=",
            url: "https://api.github.com/repos/facebook/react/labels/Status:%20Unconfirmed",
            name: "Status: Unconfirmed",
            color: "d4c5f9",
            default: false,
            description:
              "A potential issue that we haven't yet confirmed as a bug",
          },
        ],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 4,
        created_at: "2023-06-05T09:57:17Z",
        updated_at: "2023-06-05T21:01:38Z",
        closed_at: null,
        author_association: "NONE",
        active_lock_reason: null,
        body: "<!--\r\n  Please provide a clear and concise description of what the bug is. Include\r\n  screenshots if needed. Please test using the latest version of the relevant\r\n  React packages to make sure your issue has not already been fixed.\r\n-->\r\n\r\nReact version: 17, 18\r\n\r\n## Steps To Reproduce\r\n\r\nLink to code example: <https://codesandbox.io/s/gallant-minsky-6cmgol?file=/src/App.js>\r\n\r\n## The current behavior\r\nWhen hooks are erroneously used in an anonymous or arrow function that is immediately passed as an argument to another function, these usages are not being detected as errors by `react-hooks/rules-of-hooks`.\r\n\r\n## The expected behavior\r\nThe rule behavior is the same as for ordinary functions and arrow functions assigned to a variable, where an error is shown.",
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26901/reactions",
          total_count: 0,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26901/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26900",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26900/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26900/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26900/events",
        html_url: "https://github.com/facebook/react/pull/26900",
        id: 1740758433,
        node_id: "PR_kwDOAJy2Ks5SI9OW",
        number: 26900,
        title: "Concurrent fixed",
        user: {
          login: "koyuncuoglum95",
          id: 77508734,
          node_id: "MDQ6VXNlcjc3NTA4NzM0",
          avatar_url: "https://avatars.githubusercontent.com/u/77508734?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/koyuncuoglum95",
          html_url: "https://github.com/koyuncuoglum95",
          followers_url:
            "https://api.github.com/users/koyuncuoglum95/followers",
          following_url:
            "https://api.github.com/users/koyuncuoglum95/following{/other_user}",
          gists_url:
            "https://api.github.com/users/koyuncuoglum95/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/koyuncuoglum95/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/koyuncuoglum95/subscriptions",
          organizations_url: "https://api.github.com/users/koyuncuoglum95/orgs",
          repos_url: "https://api.github.com/users/koyuncuoglum95/repos",
          events_url:
            "https://api.github.com/users/koyuncuoglum95/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/koyuncuoglum95/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 196858374,
            node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
            url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
            name: "CLA Signed",
            color: "e7e7e7",
            default: false,
            description: null,
          },
        ],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 1,
        created_at: "2023-06-05T02:04:57Z",
        updated_at: "2023-06-05T10:06:25Z",
        closed_at: null,
        author_association: "NONE",
        active_lock_reason: null,
        draft: false,
        pull_request: {
          url: "https://api.github.com/repos/facebook/react/pulls/26900",
          html_url: "https://github.com/facebook/react/pull/26900",
          diff_url: "https://github.com/facebook/react/pull/26900.diff",
          patch_url: "https://github.com/facebook/react/pull/26900.patch",
          merged_at: null,
        },
        body: "## Summary\r\n\r\n<!--\r\n Explain the **motivation** for making this change. What existing problem does the pull request solve?\r\n-->\r\n\r\n## How did you test this change?\r\nI run the app, and everything is working fine. \r\n\r\n How exactly did you verify that your PR solves the issue you wanted to solve?\r\nI entered input and the chart keep playing in synchronous and concurrent. When I click index.js, // TODO says useTransition hook for async. I put startTransition({}) and it worked. \r\n\r\n![sync](https://github.com/facebook/react/assets/77508734/1658f9f0-0fae-4dc7-a010-3f1acdc7ccab)\r\n![async](https://github.com/facebook/react/assets/77508734/d420e7c0-5f29-450c-a1b6-cabf48b6ec84)\r\n\r\n",
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26900/reactions",
          total_count: 0,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26900/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26899",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26899/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26899/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26899/events",
        html_url: "https://github.com/facebook/react/issues/26899",
        id: 1740652190,
        node_id: "I_kwDOAJy2Ks5nwD6e",
        number: 26899,
        title: "Bug: SyntaxError Unexpected token '<' ",
        user: {
          login: "koyuncuoglum95",
          id: 77508734,
          node_id: "MDQ6VXNlcjc3NTA4NzM0",
          avatar_url: "https://avatars.githubusercontent.com/u/77508734?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/koyuncuoglum95",
          html_url: "https://github.com/koyuncuoglum95",
          followers_url:
            "https://api.github.com/users/koyuncuoglum95/followers",
          following_url:
            "https://api.github.com/users/koyuncuoglum95/following{/other_user}",
          gists_url:
            "https://api.github.com/users/koyuncuoglum95/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/koyuncuoglum95/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/koyuncuoglum95/subscriptions",
          organizations_url: "https://api.github.com/users/koyuncuoglum95/orgs",
          repos_url: "https://api.github.com/users/koyuncuoglum95/repos",
          events_url:
            "https://api.github.com/users/koyuncuoglum95/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/koyuncuoglum95/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 155984160,
            node_id: "MDU6TGFiZWwxNTU5ODQxNjA=",
            url: "https://api.github.com/repos/facebook/react/labels/Status:%20Unconfirmed",
            name: "Status: Unconfirmed",
            color: "d4c5f9",
            default: false,
            description:
              "A potential issue that we haven't yet confirmed as a bug",
          },
        ],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 2,
        created_at: "2023-06-04T23:10:02Z",
        updated_at: "2023-06-06T07:02:29Z",
        closed_at: null,
        author_association: "NONE",
        active_lock_reason: null,
        body: "<!--\r\n\r\n-->\r\n\r\nI'm trying to running fixtures/attribute-behavior folder, but I'm taking this error. So, How can I fix this issue ? \r\n\r\nReact version:  15.6.1\r\n\r\n## Steps To Reproduce\r\n1.  \r\n2. \r\n\r\n<!--\r\n  Your bug will get fixed much faster if we can run your code and it doesn't\r\n  have dependencies other than React. Issues without reproduction steps or\r\n  code examples may be immediately closed as not actionable.\r\n-->\r\n\r\nLink to code example:\r\n\r\n<!--\r\n  Please provide a CodeSandbox (https://codesandbox.io/s/new), a link to a\r\n  repository on GitHub, or provide a minimal code example that reproduces the\r\n  problem. You may provide a screenshot of the application if you think it is\r\n  relevant to your bug report. Here are some tips for providing a minimal\r\n  example: https://stackoverflow.com/help/mcve.\r\n-->\r\n\r\n## The current behavior\r\n![Screenshot 2023-06-04 160803](https://github.com/facebook/react/assets/77508734/58b6b15f-334d-465e-b2fb-5e798922e051)\r\n\r\n\r\n\r\n## The expected behavior\r\n",
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26899/reactions",
          total_count: 0,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26899/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26898",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26898/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26898/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26898/events",
        html_url: "https://github.com/facebook/react/pull/26898",
        id: 1740487217,
        node_id: "PR_kwDOAJy2Ks5SIE3j",
        number: 26898,
        title: "Funix/my branch",
        user: {
          login: "trunglc378",
          id: 51718108,
          node_id: "MDQ6VXNlcjUxNzE4MTA4",
          avatar_url: "https://avatars.githubusercontent.com/u/51718108?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/trunglc378",
          html_url: "https://github.com/trunglc378",
          followers_url: "https://api.github.com/users/trunglc378/followers",
          following_url:
            "https://api.github.com/users/trunglc378/following{/other_user}",
          gists_url: "https://api.github.com/users/trunglc378/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/trunglc378/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/trunglc378/subscriptions",
          organizations_url: "https://api.github.com/users/trunglc378/orgs",
          repos_url: "https://api.github.com/users/trunglc378/repos",
          events_url:
            "https://api.github.com/users/trunglc378/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/trunglc378/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 1,
        created_at: "2023-06-04T17:20:17Z",
        updated_at: "2023-06-04T17:20:23Z",
        closed_at: null,
        author_association: "NONE",
        active_lock_reason: null,
        draft: false,
        pull_request: {
          url: "https://api.github.com/repos/facebook/react/pulls/26898",
          html_url: "https://github.com/facebook/react/pull/26898",
          diff_url: "https://github.com/facebook/react/pull/26898.diff",
          patch_url: "https://github.com/facebook/react/pull/26898.patch",
          merged_at: null,
        },
        body: "<!--\r\n  Thanks for submitting a pull request!\r\n  We appreciate you spending the time to work on these changes. Please provide enough information so that others can review your pull request. The three fields below are mandatory.\r\n\r\n  Before submitting a pull request, please make sure the following is done:\r\n\r\n  1. Fork [the repository](https://github.com/facebook/react) and create your branch from `main`.\r\n  2. Run `yarn` in the repository root.\r\n  3. If you've fixed a bug or added code that should be tested, add tests!\r\n  4. Ensure the test suite passes (`yarn test`). Tip: `yarn test --watch TestName` is helpful in development.\r\n  5. Run `yarn test --prod` to test in the production environment. It supports the same options as `yarn test`.\r\n  6. If you need a debugger, run `yarn test --debug --watch TestName`, open `chrome://inspect`, and press \"Inspect\".\r\n  7. Format your code with [prettier](https://github.com/prettier/prettier) (`yarn prettier`).\r\n  8. Make sure your code lints (`yarn lint`). Tip: `yarn linc` to only check changed files.\r\n  9. Run the [Flow](https://flowtype.org/) type checks (`yarn flow`).\r\n  10. If you haven't already, complete the CLA.\r\n\r\n  Learn more about contributing: https://reactjs.org/docs/how-to-contribute.html\r\n-->\r\n\r\n## Summary\r\n\r\n<!--\r\n Explain the **motivation** for making this change. What existing problem does the pull request solve?\r\n-->\r\n\r\n## How did you test this change?\r\n\r\n<!--\r\n  Demonstrate the code is solid. Example: The exact commands you ran and their output, screenshots / videos if the pull request changes the user interface.\r\n  How exactly did you verify that your PR solves the issue you wanted to solve?\r\n  If you leave this empty, your PR will very likely be closed.\r\n-->\r\n",
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26898/reactions",
          total_count: 0,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26898/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26896",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26896/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26896/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26896/events",
        html_url: "https://github.com/facebook/react/pull/26896",
        id: 1739996259,
        node_id: "PR_kwDOAJy2Ks5SGbEz",
        number: 26896,
        title: "Delete processStringChunk",
        user: {
          login: "sebmarkbage",
          id: 63648,
          node_id: "MDQ6VXNlcjYzNjQ4",
          avatar_url: "https://avatars.githubusercontent.com/u/63648?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/sebmarkbage",
          html_url: "https://github.com/sebmarkbage",
          followers_url: "https://api.github.com/users/sebmarkbage/followers",
          following_url:
            "https://api.github.com/users/sebmarkbage/following{/other_user}",
          gists_url: "https://api.github.com/users/sebmarkbage/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/sebmarkbage/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/sebmarkbage/subscriptions",
          organizations_url: "https://api.github.com/users/sebmarkbage/orgs",
          repos_url: "https://api.github.com/users/sebmarkbage/repos",
          events_url:
            "https://api.github.com/users/sebmarkbage/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/sebmarkbage/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 196858374,
            node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
            url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
            name: "CLA Signed",
            color: "e7e7e7",
            default: false,
            description: null,
          },
          {
            id: 1775958285,
            node_id: "MDU6TGFiZWwxNzc1OTU4Mjg1",
            url: "https://api.github.com/repos/facebook/react/labels/React%20Core%20Team",
            name: "React Core Team",
            color: "9149d1",
            default: false,
            description: "Opened by a member of the React Core Team",
          },
        ],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 1,
        created_at: "2023-06-03T23:46:15Z",
        updated_at: "2023-06-06T17:49:24Z",
        closed_at: null,
        author_association: "COLLABORATOR",
        active_lock_reason: null,
        draft: false,
        pull_request: {
          url: "https://api.github.com/repos/facebook/react/pulls/26896",
          html_url: "https://github.com/facebook/react/pull/26896",
          diff_url: "https://github.com/facebook/react/pull/26896.diff",
          patch_url: "https://github.com/facebook/react/pull/26896.patch",
          merged_at: null,
        },
        body: "Follow up to #26827.\r\n\r\nThese can't include binary data and we don't really have any use cases that really require these to already be strings.\r\n\r\nWhen the stream is encoded inside another protocol - such as HTML we need a different format that encode binary offsets and binary data.\r\n",
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26896/reactions",
          total_count: 0,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26896/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26894",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26894/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26894/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26894/events",
        html_url: "https://github.com/facebook/react/pull/26894",
        id: 1739178244,
        node_id: "PR_kwDOAJy2Ks5SDiN1",
        number: 26894,
        title: "I run bundle.js successfully",
        user: {
          login: "koyuncuoglum95",
          id: 77508734,
          node_id: "MDQ6VXNlcjc3NTA4NzM0",
          avatar_url: "https://avatars.githubusercontent.com/u/77508734?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/koyuncuoglum95",
          html_url: "https://github.com/koyuncuoglum95",
          followers_url:
            "https://api.github.com/users/koyuncuoglum95/followers",
          following_url:
            "https://api.github.com/users/koyuncuoglum95/following{/other_user}",
          gists_url:
            "https://api.github.com/users/koyuncuoglum95/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/koyuncuoglum95/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/koyuncuoglum95/subscriptions",
          organizations_url: "https://api.github.com/users/koyuncuoglum95/orgs",
          repos_url: "https://api.github.com/users/koyuncuoglum95/repos",
          events_url:
            "https://api.github.com/users/koyuncuoglum95/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/koyuncuoglum95/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 196858374,
            node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
            url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
            name: "CLA Signed",
            color: "e7e7e7",
            default: false,
            description: null,
          },
        ],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 3,
        created_at: "2023-06-03T05:22:56Z",
        updated_at: "2023-06-05T19:23:38Z",
        closed_at: null,
        author_association: "NONE",
        active_lock_reason: null,
        draft: false,
        pull_request: {
          url: "https://api.github.com/repos/facebook/react/pulls/26894",
          html_url: "https://github.com/facebook/react/pull/26894",
          diff_url: "https://github.com/facebook/react/pull/26894.diff",
          patch_url: "https://github.com/facebook/react/pull/26894.patch",
          merged_at: null,
        },
        body: '<!--\r\n  Thanks for submitting a pull request!\r\n  We appreciate you spending the time to work on these changes. Please provide enough information so that others can review your pull request. The three fields below are mandatory.\r\n\r\n  Before submitting a pull request, please make sure the following is done:\r\n\r\n  1. Fork [the repository](https://github.com/facebook/react) and create your branch from `main`.\r\n  2. Run `yarn` in the repository root.\r\n  3. If you\'ve fixed a bug or added code that should be tested, add tests!\r\n  4. Ensure the test suite passes (`yarn test`). Tip: `yarn test --watch TestName` is helpful in development.\r\n  5. Run `yarn test --prod` to test in the production environment. It supports the same options as `yarn test`.\r\n  6. If you need a debugger, run `yarn test --debug --watch TestName`, open `chrome://inspect`, and press "Inspect".\r\n  7. Format your code with [prettier](https://github.com/prettier/prettier) (`yarn prettier`).\r\n  8. Make sure your code lints (`yarn lint`). Tip: `yarn linc` to only check changed files.\r\n  9. Run the [Flow](https://flowtype.org/) type checks (`yarn flow`).\r\n  10. If you haven\'t already, complete the CLA.\r\n\r\n  Learn more about contributing: https://reactjs.org/docs/how-to-contribute.html\r\n-->\r\n\r\n## Summary\r\n\r\n<!--\r\n Explain the **motivation** for making this change. What existing problem does the pull request solve?\r\n-->\r\n\r\nI solved scripts build problem by adding this line \r\n\r\n```\r\n "scripts": {\r\n    "prebuild": "npm run copy-files",\r\n    "copy-files": "npx copyfiles ../../build/oss-experimental/* ./node_modules/",\r\n    "build": "webpack app.js bundle.js"\r\n  }, \r\n\r\n```\r\nin package.json file and changed bundle.js. \r\n\r\n\r\n## How did you test this change?\r\nWhen I reload index.html page, I saw react-logo that is animated. \r\n\r\n<!--\r\n  Demonstrate the code is solid. Example: The exact commands you ran and their output, screenshots / videos if the pull request changes the user interface.\r\n  How exactly did you verify that your PR solves the issue you wanted to solve?\r\n  If you leave this empty, your PR will very likely be closed.\r\n-->\r\n<img width="959" alt="Screenshot 2023-06-02 221712" src="https://github.com/facebook/react/assets/77508734/178d7011-2326-4666-a8e0-0529f5a85552">\r\n<img width="1280" alt="Screenshot 2023-06-02 221652" src="https://github.com/facebook/react/assets/77508734/b4325e28-3d96-4930-97db-8d8dfb6745ec">\r\n',
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26894/reactions",
          total_count: 0,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26894/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26893",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26893/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26893/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26893/events",
        html_url: "https://github.com/facebook/react/pull/26893",
        id: 1738134003,
        node_id: "PR_kwDOAJy2Ks5R_83O",
        number: 26893,
        title: "Add test for re-mounting layout effects when re-suspending",
        user: {
          login: "rickhanlonii",
          id: 2440089,
          node_id: "MDQ6VXNlcjI0NDAwODk=",
          avatar_url: "https://avatars.githubusercontent.com/u/2440089?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/rickhanlonii",
          html_url: "https://github.com/rickhanlonii",
          followers_url: "https://api.github.com/users/rickhanlonii/followers",
          following_url:
            "https://api.github.com/users/rickhanlonii/following{/other_user}",
          gists_url:
            "https://api.github.com/users/rickhanlonii/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/rickhanlonii/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/rickhanlonii/subscriptions",
          organizations_url: "https://api.github.com/users/rickhanlonii/orgs",
          repos_url: "https://api.github.com/users/rickhanlonii/repos",
          events_url:
            "https://api.github.com/users/rickhanlonii/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/rickhanlonii/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 196858374,
            node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
            url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
            name: "CLA Signed",
            color: "e7e7e7",
            default: false,
            description: null,
          },
          {
            id: 1775958285,
            node_id: "MDU6TGFiZWwxNzc1OTU4Mjg1",
            url: "https://api.github.com/repos/facebook/react/labels/React%20Core%20Team",
            name: "React Core Team",
            color: "9149d1",
            default: false,
            description: "Opened by a member of the React Core Team",
          },
        ],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 2,
        created_at: "2023-06-02T12:41:36Z",
        updated_at: "2023-06-02T12:44:19Z",
        closed_at: null,
        author_association: "MEMBER",
        active_lock_reason: null,
        draft: false,
        pull_request: {
          url: "https://api.github.com/repos/facebook/react/pulls/26893",
          html_url: "https://github.com/facebook/react/pull/26893",
          diff_url: "https://github.com/facebook/react/pull/26893.diff",
          patch_url: "https://github.com/facebook/react/pull/26893.patch",
          merged_at: null,
        },
        body: "I couldn't find a test for this anywhere, feel free to close if we do have one that covers this.",
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26893/reactions",
          total_count: 0,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26893/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26892",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26892/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26892/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26892/events",
        html_url: "https://github.com/facebook/react/pull/26892",
        id: 1738026661,
        node_id: "PR_kwDOAJy2Ks5R_lMu",
        number: 26892,
        title: "Added Filter to allow skip re-render in context consumers",
        user: {
          login: "eduardocque",
          id: 35545218,
          node_id: "MDQ6VXNlcjM1NTQ1MjE4",
          avatar_url: "https://avatars.githubusercontent.com/u/35545218?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/eduardocque",
          html_url: "https://github.com/eduardocque",
          followers_url: "https://api.github.com/users/eduardocque/followers",
          following_url:
            "https://api.github.com/users/eduardocque/following{/other_user}",
          gists_url: "https://api.github.com/users/eduardocque/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/eduardocque/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/eduardocque/subscriptions",
          organizations_url: "https://api.github.com/users/eduardocque/orgs",
          repos_url: "https://api.github.com/users/eduardocque/repos",
          events_url:
            "https://api.github.com/users/eduardocque/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/eduardocque/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 196858374,
            node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
            url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
            name: "CLA Signed",
            color: "e7e7e7",
            default: false,
            description: null,
          },
        ],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 3,
        created_at: "2023-06-02T11:31:51Z",
        updated_at: "2023-06-03T13:58:32Z",
        closed_at: null,
        author_association: "NONE",
        active_lock_reason: null,
        draft: false,
        pull_request: {
          url: "https://api.github.com/repos/facebook/react/pulls/26892",
          html_url: "https://github.com/facebook/react/pull/26892",
          diff_url: "https://github.com/facebook/react/pull/26892.diff",
          patch_url: "https://github.com/facebook/react/pull/26892.patch",
          merged_at: null,
        },
        body: "## Summary\r\n\r\nThe reason of this change is to have a way to skip re-renders in some consumers based on the previous state and new state or in case that i just want to re-render if a specific sub value inside the context changes\r\n\r\nThis allow to improve the performance in large applications without be making many context just to parse the value trying to avoid re-renders\r\n\r\n![image](https://github.com/facebook/react/assets/35545218/6c8406f9-3999-4d09-9a62-b0b33159ebde)\r\n\r\ni tested the implementation with an existing react application (small) where using devTools i was able to confirm that the elements that i was specting to be skipped were skipped\r\n\r\n## How did you test this change?\r\n\r\nhttps://github.com/facebook/react/issues/26890 in this ticket i left a codesandbox example about the proposal implementation\r\n\r\njust will require to run it locally and replace `react` and `react-dom` to be able to test the changes and verified using devTools\r\n\r\nin my case i was using this command `yarn build react/index,react-dom/index,react/jsx-runtime,react-dom/src/server --type=NODE_DEV`\r\n\r\n![image](https://github.com/facebook/react/assets/35545218/2b1d64dc-f8dd-4115-8d64-054e67b645d8)\r\n",
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26892/reactions",
          total_count: 0,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26892/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26891",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26891/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26891/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26891/events",
        html_url: "https://github.com/facebook/react/pull/26891",
        id: 1737652146,
        node_id: "PR_kwDOAJy2Ks5R-R-P",
        number: 26891,
        title: "Update ReactHooks.js",
        user: {
          login: "Anupreet1213",
          id: 93524594,
          node_id: "U_kgDOBZMScg",
          avatar_url: "https://avatars.githubusercontent.com/u/93524594?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Anupreet1213",
          html_url: "https://github.com/Anupreet1213",
          followers_url: "https://api.github.com/users/Anupreet1213/followers",
          following_url:
            "https://api.github.com/users/Anupreet1213/following{/other_user}",
          gists_url:
            "https://api.github.com/users/Anupreet1213/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Anupreet1213/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Anupreet1213/subscriptions",
          organizations_url: "https://api.github.com/users/Anupreet1213/orgs",
          repos_url: "https://api.github.com/users/Anupreet1213/repos",
          events_url:
            "https://api.github.com/users/Anupreet1213/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Anupreet1213/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 196858374,
            node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
            url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
            name: "CLA Signed",
            color: "e7e7e7",
            default: false,
            description: null,
          },
        ],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 3,
        created_at: "2023-06-02T07:57:46Z",
        updated_at: "2023-06-02T09:05:00Z",
        closed_at: null,
        author_association: "NONE",
        active_lock_reason: null,
        draft: false,
        pull_request: {
          url: "https://api.github.com/repos/facebook/react/pulls/26891",
          html_url: "https://github.com/facebook/react/pull/26891",
          diff_url: "https://github.com/facebook/react/pull/26891.diff",
          patch_url: "https://github.com/facebook/react/pull/26891.patch",
          merged_at: null,
        },
        body: "Hey, I have noticed that ReactHooks.js file has a link of older website(reactjs.org) so I have updated it with newer one.\r\n\r\nHowever even that older link redirects to the newer website(react.dev) but it should be changed.\r\n\r\n<!--\r\n  Thanks for submitting a pull request!\r\n  We appreciate you spending the time to work on these changes. Please provide enough information so that others can review your pull request. The three fields below are mandatory.\r\n\r\n  Before submitting a pull request, please make sure the following is done:\r\n\r\n  1. Fork [the repository](https://github.com/facebook/react) and create your branch from `main`.\r\n  2. Run `yarn` in the repository root.\r\n  3. If you've fixed a bug or added code that should be tested, add tests!\r\n  4. Ensure the test suite passes (`yarn test`). Tip: `yarn test --watch TestName` is helpful in development.\r\n  5. Run `yarn test --prod` to test in the production environment. It supports the same options as `yarn test`.\r\n  6. If you need a debugger, run `yarn test --debug --watch TestName`, open `chrome://inspect`, and press \"Inspect\".\r\n  7. Format your code with [prettier](https://github.com/prettier/prettier) (`yarn prettier`).\r\n  8. Make sure your code lints (`yarn lint`). Tip: `yarn linc` to only check changed files.\r\n  9. Run the [Flow](https://flowtype.org/) type checks (`yarn flow`).\r\n  10. If you haven't already, complete the CLA.\r\n\r\n  Learn more about contributing: https://reactjs.org/docs/how-to-contribute.html\r\n-->\r\n\r\n## Summary\r\n\r\n<!--\r\n Explain the **motivation** for making this change. What existing problem does the pull request solve?\r\n-->\r\n\r\n## How did you test this change?\r\n\r\n<!--\r\n  Demonstrate the code is solid. Example: The exact commands you ran and their output, screenshots / videos if the pull request changes the user interface.\r\n  How exactly did you verify that your PR solves the issue you wanted to solve?\r\n  If you leave this empty, your PR will very likely be closed.\r\n-->\r\n",
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26891/reactions",
          total_count: 0,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26891/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26890",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26890/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26890/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26890/events",
        html_url: "https://github.com/facebook/react/issues/26890",
        id: 1737440328,
        node_id: "I_kwDOAJy2Ks5njzxI",
        number: 26890,
        title: "[Proposal] Selective Render with useContext",
        user: {
          login: "eduardocque",
          id: 35545218,
          node_id: "MDQ6VXNlcjM1NTQ1MjE4",
          avatar_url: "https://avatars.githubusercontent.com/u/35545218?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/eduardocque",
          html_url: "https://github.com/eduardocque",
          followers_url: "https://api.github.com/users/eduardocque/followers",
          following_url:
            "https://api.github.com/users/eduardocque/following{/other_user}",
          gists_url: "https://api.github.com/users/eduardocque/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/eduardocque/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/eduardocque/subscriptions",
          organizations_url: "https://api.github.com/users/eduardocque/orgs",
          repos_url: "https://api.github.com/users/eduardocque/repos",
          events_url:
            "https://api.github.com/users/eduardocque/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/eduardocque/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 155984160,
            node_id: "MDU6TGFiZWwxNTU5ODQxNjA=",
            url: "https://api.github.com/repos/facebook/react/labels/Status:%20Unconfirmed",
            name: "Status: Unconfirmed",
            color: "d4c5f9",
            default: false,
            description:
              "A potential issue that we haven't yet confirmed as a bug",
          },
        ],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: "2023-06-02T04:23:28Z",
        updated_at: "2023-06-03T06:12:37Z",
        closed_at: null,
        author_association: "NONE",
        active_lock_reason: null,
        body: 'Ability to do selective renders with useContext to improve the performance for large applications\r\n\r\nfollowing the next pattern\r\n```js\r\nconst TestContext = createContext();\r\n...\r\nconst proposalCallback = useCallback(\r\n    (prevState, nextState) => {\r\n      // If the value is different, then re-render\r\n      // if this method is defined will return true/false\r\n      // if this method doesn\'t exist, will keeps working in the current way re-rendering everytime so this one is optional\r\n\r\n\r\n      return "evaluate prev and next state and based on your logic return true or false";\r\n    },\r\n    []\r\n  );\r\n\r\n  // Proposal callback applied here\r\n  const dataContext = useContext(TestContext, proposalCallback);\r\n```\r\n\r\nReact version: **18.2.0**\r\n\r\n## Steps To Reproduce\r\n\r\n- open console log\r\n- write in the first field and u will notice that field 2 is re-rendering, we should skip it\r\n\r\nhttps://codesandbox.io/s/friendly-bas-5vnrvs\r\n\r\n\r\n## The current behavior\r\n\r\nall context consumers are re-rendering\r\n![image](https://github.com/facebook/react/assets/35545218/63d5d195-54de-4b77-8946-6a05a154d5f0)\r\n\r\n\r\n## The expected behavior\r\n\r\nshould only re-render those that were affected using the proposal that is in codesandbox\r\n\r\n## Note\r\nthis proposal is to give a big improvement in performance for large application that works based on contexts, so instead be making granual contexts, why not give the ability to check if the value that is expecting the consumer change or not\r\n\r\nthis can be implemented in the logic that process the nodes and takes the decision to re-render or not internally in react, but im not familiar to try to make a PR for this proposal\r\n\r\nUpdated:\r\n\r\nafter some research the files that needs to be updated are\r\n* packages/react-reconciler/src/ReactFiberNewContext.js -> propagateContextChange\r\n\r\nis this correct ?\r\n\r\nnoticed that when the provider Fiber gets updated this sends the signal to invalidate all consumers located in the child tree inside the provider',
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26890/reactions",
          total_count: 0,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26890/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26888",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26888/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26888/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26888/events",
        html_url: "https://github.com/facebook/react/pull/26888",
        id: 1736856514,
        node_id: "PR_kwDOAJy2Ks5R7k45",
        number: 26888,
        title: "Fix:- Fixed dev tools inspect mode on Shadow dom",
        user: {
          login: "Biki-das",
          id: 72331432,
          node_id: "MDQ6VXNlcjcyMzMxNDMy",
          avatar_url: "https://avatars.githubusercontent.com/u/72331432?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Biki-das",
          html_url: "https://github.com/Biki-das",
          followers_url: "https://api.github.com/users/Biki-das/followers",
          following_url:
            "https://api.github.com/users/Biki-das/following{/other_user}",
          gists_url: "https://api.github.com/users/Biki-das/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Biki-das/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Biki-das/subscriptions",
          organizations_url: "https://api.github.com/users/Biki-das/orgs",
          repos_url: "https://api.github.com/users/Biki-das/repos",
          events_url: "https://api.github.com/users/Biki-das/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Biki-das/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 196858374,
            node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
            url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
            name: "CLA Signed",
            color: "e7e7e7",
            default: false,
            description: null,
          },
        ],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 2,
        created_at: "2023-06-01T18:23:59Z",
        updated_at: "2023-06-06T17:11:21Z",
        closed_at: null,
        author_association: "CONTRIBUTOR",
        active_lock_reason: null,
        draft: false,
        pull_request: {
          url: "https://api.github.com/repos/facebook/react/pulls/26888",
          html_url: "https://github.com/facebook/react/pull/26888",
          diff_url: "https://github.com/facebook/react/pull/26888.diff",
          patch_url: "https://github.com/facebook/react/pull/26888.patch",
          merged_at: null,
        },
        body: "Fixes #26200 \r\n\r\n### PR explanation\r\n\r\nI tried to induce the change by the `event.composed` to check whether the event was created in a  ShadowRoot, And replaced `pointerOver` with `pointerMove`,  pointerOver event did not fired correctly\r\n\r\nBefore PR:-\r\n\r\nhttps://github.com/facebook/react/assets/72331432/67a33dcd-447f-4c68-9c3c-ad954baddeb8\r\n\r\nAfter PR:-\r\n\r\nhttps://github.com/facebook/react/assets/72331432/9f986ff2-785f-4cba-a504-44f82ea9fc5a\r\n\r\n\r\n\r\n",
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26888/reactions",
          total_count: 1,
          "+1": 1,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26888/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26887",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26887/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26887/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26887/events",
        html_url: "https://github.com/facebook/react/pull/26887",
        id: 1736622554,
        node_id: "PR_kwDOAJy2Ks5R6xAF",
        number: 26887,
        title: "chore[devtools]: upgrade to webpack v5",
        user: {
          login: "hoxyq",
          id: 28902667,
          node_id: "MDQ6VXNlcjI4OTAyNjY3",
          avatar_url: "https://avatars.githubusercontent.com/u/28902667?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/hoxyq",
          html_url: "https://github.com/hoxyq",
          followers_url: "https://api.github.com/users/hoxyq/followers",
          following_url:
            "https://api.github.com/users/hoxyq/following{/other_user}",
          gists_url: "https://api.github.com/users/hoxyq/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/hoxyq/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/hoxyq/subscriptions",
          organizations_url: "https://api.github.com/users/hoxyq/orgs",
          repos_url: "https://api.github.com/users/hoxyq/repos",
          events_url: "https://api.github.com/users/hoxyq/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/hoxyq/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 196858374,
            node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
            url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
            name: "CLA Signed",
            color: "e7e7e7",
            default: false,
            description: null,
          },
          {
            id: 1775958285,
            node_id: "MDU6TGFiZWwxNzc1OTU4Mjg1",
            url: "https://api.github.com/repos/facebook/react/labels/React%20Core%20Team",
            name: "React Core Team",
            color: "9149d1",
            default: false,
            description: "Opened by a member of the React Core Team",
          },
        ],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 1,
        created_at: "2023-06-01T15:57:13Z",
        updated_at: "2023-06-05T11:33:37Z",
        closed_at: null,
        author_association: "CONTRIBUTOR",
        active_lock_reason: null,
        draft: false,
        pull_request: {
          url: "https://api.github.com/repos/facebook/react/pulls/26887",
          html_url: "https://github.com/facebook/react/pull/26887",
          diff_url: "https://github.com/facebook/react/pull/26887.diff",
          patch_url: "https://github.com/facebook/react/pull/26887.patch",
          merged_at: null,
        },
        body: "## Summary\r\n- Updated `webpack` (and all related packages) to v5 in `react-devtools-*` packages.\r\n- I haven't touched any `TODO (Webpack 5)`. Tried to poke it, but each my attempt failed and parsing hook names feature stopped working. I will work on this in a separate PR.\r\n- This work is one of prerequisites for updating Firefox extension to manifests v3\r\n\r\nrelated PRs:\r\nhttps://github.com/facebook/react/pull/22267\r\nhttps://github.com/facebook/react/pull/26506\r\n\r\n## How did you test this change?\r\nTested on all surfaces, explicitly checked that parsing hook names feature still works. \r\n",
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26887/reactions",
          total_count: 0,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26887/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26886",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26886/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26886/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26886/events",
        html_url: "https://github.com/facebook/react/issues/26886",
        id: 1736566206,
        node_id: "I_kwDOAJy2Ks5ngeW-",
        number: 26886,
        title: "Bug: Inconsistent behavior with Promises near the root",
        user: {
          login: "gaearon",
          id: 810438,
          node_id: "MDQ6VXNlcjgxMDQzOA==",
          avatar_url: "https://avatars.githubusercontent.com/u/810438?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/gaearon",
          html_url: "https://github.com/gaearon",
          followers_url: "https://api.github.com/users/gaearon/followers",
          following_url:
            "https://api.github.com/users/gaearon/following{/other_user}",
          gists_url: "https://api.github.com/users/gaearon/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/gaearon/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/gaearon/subscriptions",
          organizations_url: "https://api.github.com/users/gaearon/orgs",
          repos_url: "https://api.github.com/users/gaearon/repos",
          events_url: "https://api.github.com/users/gaearon/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/gaearon/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 40929151,
            node_id: "MDU6TGFiZWw0MDkyOTE1MQ==",
            url: "https://api.github.com/repos/facebook/react/labels/Type:%20Bug",
            name: "Type: Bug",
            color: "b60205",
            default: false,
            description: null,
          },
        ],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: "2023-06-01T15:25:07Z",
        updated_at: "2023-06-01T15:28:10Z",
        closed_at: null,
        author_association: "MEMBER",
        active_lock_reason: null,
        body: 'Just jotting down some cases I found confusing.\r\nIdeally for each case, it should either work, or should fail in some obvious way.\r\n\r\n## Working: startTransition + 1000ms Promise root\r\n\r\n```js\r\nimport { startTransition } from "react";\r\nimport { createRoot } from "react-dom/client";\r\n\r\nconst rootElement = document.getElementById("root");\r\nconst root = createRoot(rootElement);\r\n\r\nlet promise = new Promise((resolve) => {\r\n  setTimeout(() => {\r\n    resolve(<h1>hi</h1>);\r\n  }, 1000);\r\n});\r\n\r\nstartTransition(() => {\r\n  root.render(promise);\r\n});\r\n```\r\n\r\nhttps://codesandbox.io/s/goofy-rui-8g6sxh?file=/src/index.js\r\n\r\n## Working: startTransition + root component + 5000ms Promise child\r\n\r\n```js\r\nimport { startTransition } from "react";\r\nimport { createRoot } from "react-dom/client";\r\n\r\nconst rootElement = document.getElementById("root");\r\nconst root = createRoot(rootElement);\r\n\r\nlet promise = new Promise((resolve) => {\r\n  setTimeout(() => {\r\n    resolve(<h1>hi</h1>);\r\n  }, 5000);\r\n});\r\n\r\nfunction Foo() {\r\n  return promise;\r\n}\r\n\r\nstartTransition(() => {\r\n  root.render(<Foo />);\r\n});\r\n```\r\n\r\nhttps://codesandbox.io/s/epic-cookies-v94rk2?file=/src/index.js\r\n\r\n## Working: No startTransition + root component + 5000ms Promise child\r\n\r\n```js\r\nimport { createRoot } from "react-dom/client";\r\n\r\nconst rootElement = document.getElementById("root");\r\nconst root = createRoot(rootElement);\r\n\r\nlet promise = new Promise((resolve) => {\r\n  setTimeout(() => {\r\n    resolve(<h1>hi</h1>);\r\n  }, 5000);\r\n});\r\n\r\nfunction Foo() {\r\n  return promise;\r\n}\r\n\r\nroot.render(<Foo />);\r\n```\r\n\r\nhttps://codesandbox.io/s/zen-allen-2u1nr7?file=/src/index.js\r\n\r\n## Working: startTransition + root component + 1000ms Promise in state\r\n\r\n```js\r\nimport { useState, startTransition } from "react";\r\nimport { createRoot } from "react-dom/client";\r\n\r\nconst rootElement = document.getElementById("root");\r\nconst root = createRoot(rootElement);\r\n\r\nfunction Foo() {\r\n  const [promise, setPromise] = useState(\r\n    new Promise((resolve) => {\r\n      setTimeout(() => {\r\n        resolve(<h1>hi</h1>);\r\n      }, 1000);\r\n    })\r\n  );\r\n  return promise;\r\n}\r\n\r\nstartTransition(() => {\r\n  root.render(<Foo />);\r\n});\r\n```\r\n\r\nhttps://codesandbox.io/s/immutable-moon-2h3dqz?file=/src/index.js\r\n\r\n## Working: startTransition + root component + 1000ms Promise in state + use\r\n\r\n```js\r\nimport { use, useState, startTransition } from "react";\r\nimport { createRoot } from "react-dom/client";\r\n\r\nconst rootElement = document.getElementById("root");\r\nconst root = createRoot(rootElement);\r\n\r\nfunction Foo() {\r\n  const [promise, setPromise] = useState(\r\n    new Promise((resolve) => {\r\n      setTimeout(() => {\r\n        resolve(<h1>hi</h1>);\r\n      }, 1000);\r\n    })\r\n  );\r\n  return use(promise);\r\n}\r\n\r\nstartTransition(() => {\r\n  root.render(<Foo />);\r\n});\r\n```\r\n\r\nhttps://codesandbox.io/s/hungry-carlos-1n8hqu?file=/src/index.js\r\n\r\n## Crashes: startTransition + 5000ms Promise root\r\n\r\nThis doesn\'t work (with a confusing crash):\r\n\r\n```js\r\nimport { startTransition } from "react";\r\nimport { createRoot } from "react-dom/client";\r\n\r\nconst rootElement = document.getElementById("root");\r\nconst root = createRoot(rootElement);\r\n\r\nlet promise = new Promise((resolve) => {\r\n  setTimeout(() => {\r\n    resolve(<h1>hi</h1>);\r\n  }, 5000); // <--- I increased the delay\r\n});\r\n\r\nstartTransition(() => {\r\n  root.render(promise);\r\n});\r\n\r\n```\r\n\r\nhttps://codesandbox.io/s/busy-torvalds-xgbcgh?file=/src/index.js\r\n\r\n## Crashes: No startTransition + 1000ms Promise root\r\n\r\nThis doesn\'t work (with a confusing crash):\r\n\r\n```js\r\nimport { createRoot } from "react-dom/client";\r\n\r\nconst rootElement = document.getElementById("root");\r\nconst root = createRoot(rootElement);\r\n\r\nlet promise = new Promise((resolve) => {\r\n  setTimeout(() => {\r\n    resolve(<h1>hi</h1>);\r\n  }, 1000);\r\n});\r\n\r\nroot.render(promise); // No startTransition\r\n```\r\n\r\nhttps://codesandbox.io/s/serene-payne-677ghp?file=/src/index.js\r\n\r\n## Never resolves: No startTransition + root component + 1000ms Promise in state\r\n\r\n```js\r\nimport { useState } from "react";\r\nimport { createRoot } from "react-dom/client";\r\n\r\nconst rootElement = document.getElementById("root");\r\nconst root = createRoot(rootElement);\r\n\r\nfunction Foo() {\r\n  const [promise, setPromise] = useState(\r\n    new Promise((resolve) => {\r\n      setTimeout(() => {\r\n        resolve(<h1>hi</h1>);\r\n      }, 1000);\r\n    })\r\n  );\r\n  return promise;\r\n}\r\n\r\nroot.render(<Foo />);\r\n```\r\n\r\nhttps://codesandbox.io/s/musing-chaplygin-2udvbx?file=/src/index.js\r\n\r\n## Never resolves: No startTransition + root component + 1000ms Promise in state + use\r\n\r\n```js\r\nimport { use, useState } from "react";\r\nimport { createRoot } from "react-dom/client";\r\n\r\nconst rootElement = document.getElementById("root");\r\nconst root = createRoot(rootElement);\r\n\r\nfunction Foo() {\r\n  const [promise, setPromise] = useState(\r\n    new Promise((resolve) => {\r\n      setTimeout(() => {\r\n        resolve(<h1>hi</h1>);\r\n      }, 1000);\r\n    })\r\n  );\r\n  return use(promise);\r\n}\r\n\r\nroot.render(<Foo />);\r\n```\r\n\r\nhttps://codesandbox.io/s/blue-butterfly-3xywp2?file=/src/index.js:0-400',
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26886/reactions",
          total_count: 0,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26886/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26885",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26885/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26885/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26885/events",
        html_url: "https://github.com/facebook/react/issues/26885",
        id: 1736359732,
        node_id: "I_kwDOAJy2Ks5nfr80",
        number: 26885,
        title: "error to display the names of the hooks.",
        user: {
          login: "edinsondevs",
          id: 94578362,
          node_id: "U_kgDOBaMmug",
          avatar_url: "https://avatars.githubusercontent.com/u/94578362?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/edinsondevs",
          html_url: "https://github.com/edinsondevs",
          followers_url: "https://api.github.com/users/edinsondevs/followers",
          following_url:
            "https://api.github.com/users/edinsondevs/following{/other_user}",
          gists_url: "https://api.github.com/users/edinsondevs/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/edinsondevs/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/edinsondevs/subscriptions",
          organizations_url: "https://api.github.com/users/edinsondevs/orgs",
          repos_url: "https://api.github.com/users/edinsondevs/repos",
          events_url:
            "https://api.github.com/users/edinsondevs/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/edinsondevs/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 1,
        created_at: "2023-06-01T13:42:13Z",
        updated_at: "2023-06-02T13:44:10Z",
        closed_at: null,
        author_association: "NONE",
        active_lock_reason: null,
        body: "It shows a parse error and does not allow me to visualize the names of the states that I have in my project, as you can see in the image below.\r\n\r\n**please help me**\r\n\r\n![image](https://github.com/facebook/react/assets/94578362/7177faec-2d3b-4970-80ff-9c08f6dfd0e7)\r\n",
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26885/reactions",
          total_count: 1,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 1,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26885/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26884",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26884/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26884/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26884/events",
        html_url: "https://github.com/facebook/react/issues/26884",
        id: 1735588033,
        node_id: "I_kwDOAJy2Ks5ncvjB",
        number: 26884,
        title: 'Bug: Form with name="location" crushes chrome',
        user: {
          login: "aletor123",
          id: 75448378,
          node_id: "MDQ6VXNlcjc1NDQ4Mzc4",
          avatar_url: "https://avatars.githubusercontent.com/u/75448378?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/aletor123",
          html_url: "https://github.com/aletor123",
          followers_url: "https://api.github.com/users/aletor123/followers",
          following_url:
            "https://api.github.com/users/aletor123/following{/other_user}",
          gists_url: "https://api.github.com/users/aletor123/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/aletor123/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/aletor123/subscriptions",
          organizations_url: "https://api.github.com/users/aletor123/orgs",
          repos_url: "https://api.github.com/users/aletor123/repos",
          events_url: "https://api.github.com/users/aletor123/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/aletor123/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 155984160,
            node_id: "MDU6TGFiZWwxNTU5ODQxNjA=",
            url: "https://api.github.com/repos/facebook/react/labels/Status:%20Unconfirmed",
            name: "Status: Unconfirmed",
            color: "d4c5f9",
            default: false,
            description:
              "A potential issue that we haven't yet confirmed as a bug",
          },
        ],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 6,
        created_at: "2023-06-01T06:36:34Z",
        updated_at: "2023-06-01T07:16:43Z",
        closed_at: null,
        author_association: "NONE",
        active_lock_reason: null,
        body: 'React version: 16.*, 18.*\r\n\r\n## Steps To Reproduce\r\n\r\n1.Use chrome 114 version\r\n2.Add form with name="location" to jsx\r\n3.Open page\r\n\r\n## The current behavior\r\nYou will get Oh snap error\r\n![image](https://github.com/facebook/react/assets/75448378/39e86459-8cd7-4ab3-8ed8-8ab96a95229e)\r\n\r\nCode example: https://stackblitz.com/edit/react-ts-egwgqn?file=App.tsx\r\n\r\n## The expected behavior\r\nNo error',
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26884/reactions",
          total_count: 0,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26884/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26883",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26883/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26883/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26883/events",
        html_url: "https://github.com/facebook/react/pull/26883",
        id: 1735337548,
        node_id: "PR_kwDOAJy2Ks5R2XVG",
        number: 26883,
        title: "Add a warning to useEffect if no deps",
        user: {
          login: "TejasQ",
          id: 9947422,
          node_id: "MDQ6VXNlcjk5NDc0MjI=",
          avatar_url: "https://avatars.githubusercontent.com/u/9947422?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/TejasQ",
          html_url: "https://github.com/TejasQ",
          followers_url: "https://api.github.com/users/TejasQ/followers",
          following_url:
            "https://api.github.com/users/TejasQ/following{/other_user}",
          gists_url: "https://api.github.com/users/TejasQ/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/TejasQ/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/TejasQ/subscriptions",
          organizations_url: "https://api.github.com/users/TejasQ/orgs",
          repos_url: "https://api.github.com/users/TejasQ/repos",
          events_url: "https://api.github.com/users/TejasQ/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/TejasQ/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 196858374,
            node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
            url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
            name: "CLA Signed",
            color: "e7e7e7",
            default: false,
            description: null,
          },
        ],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 1,
        created_at: "2023-06-01T02:50:56Z",
        updated_at: "2023-06-02T08:27:37Z",
        closed_at: null,
        author_association: "NONE",
        active_lock_reason: null,
        draft: false,
        pull_request: {
          url: "https://api.github.com/repos/facebook/react/pulls/26883",
          html_url: "https://github.com/facebook/react/pull/26883",
          diff_url: "https://github.com/facebook/react/pull/26883.diff",
          patch_url: "https://github.com/facebook/react/pull/26883.patch",
          merged_at: null,
        },
        body: "\r\n\r\n<!--\r\n  Thanks for submitting a pull request!\r\n  We appreciate you spending the time to work on these changes. Please provide enough information so that others can review your pull request. The three fields below are mandatory.\r\n\r\n  Before submitting a pull request, please make sure the following is done:\r\n\r\n  1. Fork [the repository](https://github.com/facebook/react) and create your branch from `main`.\r\n  2. Run `yarn` in the repository root.\r\n  3. If you've fixed a bug or added code that should be tested, add tests!\r\n  4. Ensure the test suite passes (`yarn test`). Tip: `yarn test --watch TestName` is helpful in development.\r\n  5. Run `yarn test --prod` to test in the production environment. It supports the same options as `yarn test`.\r\n  6. If you need a debugger, run `yarn test --debug --watch TestName`, open `chrome://inspect`, and press \"Inspect\".\r\n  7. Format your code with [prettier](https://github.com/prettier/prettier) (`yarn prettier`).\r\n  8. Make sure your code lints (`yarn lint`). Tip: `yarn linc` to only check changed files.\r\n  9. Run the [Flow](https://flowtype.org/) type checks (`yarn flow`).\r\n  10. If you haven't already, complete the CLA.\r\n\r\n  Learn more about contributing: https://reactjs.org/docs/how-to-contribute.html\r\n-->\r\n\r\n## Summary\r\nI've heard a lot of the community complain about `useEffect` causing an infinite loop if the second argument is omitted, so I am trying to help by proposing something in this direction.\r\n\r\nInspired by https://twitter.com/tlakomy/status/1501574622839463936 and others.\r\n<!--\r\n Explain the **motivation** for making this change. What existing problem does the pull request solve?\r\n-->\r\n\r\n## How did you test this change?\r\nThis is a fairly minimal change (or at least appears to be), so I didn't test it outside of \"brain compilation\". The pull request is more intended to spark a discussion instead of be merged immediately, so I hope this is enough to meet that end.\r\n<!--\r\n  Demonstrate the code is solid. Example: The exact commands you ran and their output, screenshots / videos if the pull request changes the user interface.\r\n  How exactly did you verify that your PR solves the issue you wanted to solve?\r\n  If you leave this empty, your PR will very likely be closed.\r\n-->\r\n",
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26883/reactions",
          total_count: 0,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26883/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26876",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26876/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26876/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26876/events",
        html_url: "https://github.com/facebook/react/issues/26876",
        id: 1734469359,
        node_id: "I_kwDOAJy2Ks5nYebv",
        number: 26876,
        title: "Bug: Radio button onChange not called in current React Canary",
        user: {
          login: "robrichard",
          id: 3814096,
          node_id: "MDQ6VXNlcjM4MTQwOTY=",
          avatar_url: "https://avatars.githubusercontent.com/u/3814096?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/robrichard",
          html_url: "https://github.com/robrichard",
          followers_url: "https://api.github.com/users/robrichard/followers",
          following_url:
            "https://api.github.com/users/robrichard/following{/other_user}",
          gists_url: "https://api.github.com/users/robrichard/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/robrichard/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/robrichard/subscriptions",
          organizations_url: "https://api.github.com/users/robrichard/orgs",
          repos_url: "https://api.github.com/users/robrichard/repos",
          events_url:
            "https://api.github.com/users/robrichard/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/robrichard/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 40929151,
            node_id: "MDU6TGFiZWw0MDkyOTE1MQ==",
            url: "https://api.github.com/repos/facebook/react/labels/Type:%20Bug",
            name: "Type: Bug",
            color: "b60205",
            default: false,
            description: null,
          },
          {
            id: 127893911,
            node_id: "MDU6TGFiZWwxMjc4OTM5MTE=",
            url: "https://api.github.com/repos/facebook/react/labels/Component:%20DOM",
            name: "Component: DOM",
            color: "fef2c0",
            default: false,
            description: null,
          },
        ],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 1,
        created_at: "2023-05-31T15:17:41Z",
        updated_at: "2023-06-01T00:10:28Z",
        closed_at: null,
        author_association: "NONE",
        active_lock_reason: null,
        body: '<!--\r\n  Please provide a clear and concise description of what the bug is. Include\r\n  screenshots if needed. Please test using the latest version of the relevant\r\n  React packages to make sure your issue has not already been fixed.\r\n-->\r\n\r\nReact version: 18.3.0-canary-a1f97589f-20230526\r\n\r\n\r\n## Steps To Reproduce\r\n\r\n1. Create radio buttons that toggle `disabled` in `onChange`\r\n2. After selecting each radio button, `onChange` is no longer called\r\n\r\n<!--\r\n  Your bug will get fixed much faster if we can run your code and it doesn\'t\r\n  have dependencies other than React. Issues without reproduction steps or\r\n  code examples may be immediately closed as not actionable.\r\n-->\r\n\r\nLink to code example:\r\n\r\nThe following CodeSandbox demonstrates the issue with the current react canary version. The issue is not present when react & react-dom versions are changed to stable 18.2.0\r\n\r\nhttps://codesandbox.io/s/react-canary-radio-buttons-deiqb3?file=/src/App.js\r\n\r\n<!--\r\n  Please provide a CodeSandbox (https://codesandbox.io/s/new), a link to a\r\n  repository on GitHub, or provide a minimal code example that reproduces the\r\n  problem. You may provide a screenshot of the application if you think it is\r\n  relevant to your bug report. Here are some tips for providing a minimal\r\n  example: https://stackoverflow.com/help/mcve.\r\n-->\r\n\r\n## The current behavior\r\n`<input type="radio" />`\'s `onChange` prop is not called on subsequent clicks of the input\r\n\r\n## The expected behavior\r\n`<input type="radio" />`\'s `onChange` prop should be called on subsequent clicks of the input\r\n',
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26876/reactions",
          total_count: 0,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26876/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26875",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26875/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26875/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26875/events",
        html_url: "https://github.com/facebook/react/issues/26875",
        id: 1733799540,
        node_id: "I_kwDOAJy2Ks5nV650",
        number: 26875,
        title: "Bug: React Native Web blocking request",
        user: {
          login: "PracticasSlope9",
          id: 101170626,
          node_id: "U_kgDOBge9wg",
          avatar_url: "https://avatars.githubusercontent.com/u/101170626?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/PracticasSlope9",
          html_url: "https://github.com/PracticasSlope9",
          followers_url:
            "https://api.github.com/users/PracticasSlope9/followers",
          following_url:
            "https://api.github.com/users/PracticasSlope9/following{/other_user}",
          gists_url:
            "https://api.github.com/users/PracticasSlope9/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/PracticasSlope9/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/PracticasSlope9/subscriptions",
          organizations_url:
            "https://api.github.com/users/PracticasSlope9/orgs",
          repos_url: "https://api.github.com/users/PracticasSlope9/repos",
          events_url:
            "https://api.github.com/users/PracticasSlope9/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/PracticasSlope9/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 155984160,
            node_id: "MDU6TGFiZWwxNTU5ODQxNjA=",
            url: "https://api.github.com/repos/facebook/react/labels/Status:%20Unconfirmed",
            name: "Status: Unconfirmed",
            color: "d4c5f9",
            default: false,
            description:
              "A potential issue that we haven't yet confirmed as a bug",
          },
        ],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 1,
        created_at: "2023-05-31T09:49:24Z",
        updated_at: "2023-05-31T13:37:37Z",
        closed_at: null,
        author_association: "NONE",
        active_lock_reason: null,
        body: "I have an app working without problems with react-native but the same app when I use it with react-native-web the request gives me this problem:\r\n\r\nAccess to XMLHttpRequest at '...' from origin 'http://localhost:19006' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.\r\nre\r\n\r\nThe server I make the requests to is configured correctly, the calls work in react native but not in react native web",
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26875/reactions",
          total_count: 0,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26875/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26874",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26874/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26874/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26874/events",
        html_url: "https://github.com/facebook/react/pull/26874",
        id: 1733336224,
        node_id: "PR_kwDOAJy2Ks5RviZ9",
        number: 26874,
        title: "refactor: replace magic string with forEach",
        user: {
          login: "li-jia-nan",
          id: 49217418,
          node_id: "MDQ6VXNlcjQ5MjE3NDE4",
          avatar_url: "https://avatars.githubusercontent.com/u/49217418?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/li-jia-nan",
          html_url: "https://github.com/li-jia-nan",
          followers_url: "https://api.github.com/users/li-jia-nan/followers",
          following_url:
            "https://api.github.com/users/li-jia-nan/following{/other_user}",
          gists_url: "https://api.github.com/users/li-jia-nan/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/li-jia-nan/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/li-jia-nan/subscriptions",
          organizations_url: "https://api.github.com/users/li-jia-nan/orgs",
          repos_url: "https://api.github.com/users/li-jia-nan/repos",
          events_url:
            "https://api.github.com/users/li-jia-nan/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/li-jia-nan/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 196858374,
            node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
            url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
            name: "CLA Signed",
            color: "e7e7e7",
            default: false,
            description: null,
          },
        ],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: "2023-05-31T03:46:40Z",
        updated_at: "2023-05-31T03:49:38Z",
        closed_at: null,
        author_association: "NONE",
        active_lock_reason: null,
        draft: false,
        pull_request: {
          url: "https://api.github.com/repos/facebook/react/pulls/26874",
          html_url: "https://github.com/facebook/react/pull/26874",
          diff_url: "https://github.com/facebook/react/pull/26874.diff",
          patch_url: "https://github.com/facebook/react/pull/26874.patch",
          merged_at: null,
        },
        body: "<!--\r\n  Thanks for submitting a pull request!\r\n  We appreciate you spending the time to work on these changes. Please provide enough information so that others can review your pull request. The three fields below are mandatory.\r\n\r\n  Before submitting a pull request, please make sure the following is done:\r\n\r\n  1. Fork [the repository](https://github.com/facebook/react) and create your branch from `main`.\r\n  2. Run `yarn` in the repository root.\r\n  3. If you've fixed a bug or added code that should be tested, add tests!\r\n  4. Ensure the test suite passes (`yarn test`). Tip: `yarn test --watch TestName` is helpful in development.\r\n  5. Run `yarn test --prod` to test in the production environment. It supports the same options as `yarn test`.\r\n  6. If you need a debugger, run `yarn test --debug --watch TestName`, open `chrome://inspect`, and press \"Inspect\".\r\n  7. Format your code with [prettier](https://github.com/prettier/prettier) (`yarn prettier`).\r\n  8. Make sure your code lints (`yarn lint`). Tip: `yarn linc` to only check changed files.\r\n  9. Run the [Flow](https://flowtype.org/) type checks (`yarn flow`).\r\n  10. If you haven't already, complete the CLA.\r\n\r\n  Learn more about contributing: https://reactjs.org/docs/how-to-contribute.html\r\n-->\r\n\r\n## Summary\r\n\r\nreplace magic string with forEach\r\n\r\n<!--\r\n Explain the **motivation** for making this change. What existing problem does the pull request solve?\r\n-->\r\n\r\n## How did you test this change?\r\n\r\njust code optimization\r\n\r\n<!--\r\n  Demonstrate the code is solid. Example: The exact commands you ran and their output, screenshots / videos if the pull request changes the user interface.\r\n  How exactly did you verify that your PR solves the issue you wanted to solve?\r\n  If you leave this empty, your PR will very likely be closed.\r\n-->\r\n",
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26874/reactions",
          total_count: 0,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26874/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26869",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26869/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26869/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26869/events",
        html_url: "https://github.com/facebook/react/issues/26869",
        id: 1730255266,
        node_id: "I_kwDOAJy2Ks5nIZmi",
        number: 26869,
        title: "Bug: ",
        user: {
          login: "Betterhear",
          id: 134916517,
          node_id: "U_kgDOCAqppQ",
          avatar_url: "https://avatars.githubusercontent.com/u/134916517?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Betterhear",
          html_url: "https://github.com/Betterhear",
          followers_url: "https://api.github.com/users/Betterhear/followers",
          following_url:
            "https://api.github.com/users/Betterhear/following{/other_user}",
          gists_url: "https://api.github.com/users/Betterhear/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Betterhear/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Betterhear/subscriptions",
          organizations_url: "https://api.github.com/users/Betterhear/orgs",
          repos_url: "https://api.github.com/users/Betterhear/repos",
          events_url:
            "https://api.github.com/users/Betterhear/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Betterhear/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 155984160,
            node_id: "MDU6TGFiZWwxNTU5ODQxNjA=",
            url: "https://api.github.com/repos/facebook/react/labels/Status:%20Unconfirmed",
            name: "Status: Unconfirmed",
            color: "d4c5f9",
            default: false,
            description:
              "A potential issue that we haven't yet confirmed as a bug",
          },
        ],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: "2023-05-29T07:41:30Z",
        updated_at: "2023-05-29T07:41:30Z",
        closed_at: null,
        author_association: "NONE",
        active_lock_reason: null,
        body: "<!--\r\n  Please provide a clear and concise description of what the bug is. Include\r\n  screenshots if needed. Please test using the latest version of the relevant\r\n  React packages to make sure your issue has not already been fixed.\r\n-->\r\n\r\nReact version:\r\n\r\n## Steps To Reproduce\r\n\r\n1.\r\n2.\r\n\r\n<!--\r\n  Your bug will get fixed much faster if we can run your code and it doesn't\r\n  have dependencies other than React. Issues without reproduction steps or\r\n  code examples may be immediately closed as not actionable.\r\n-->\r\n\r\nLink to code example:\r\n\r\n<!--\r\n  Please provide a CodeSandbox (https://codesandbox.io/s/new), a link to a\r\n  repository on GitHub, or provide a minimal code example that reproduces the\r\n  problem. You may provide a screenshot of the application if you think it is\r\n  relevant to your bug report. Here are some tips for providing a minimal\r\n  example: https://stackoverflow.com/help/mcve.\r\n-->\r\n\r\n## The current behavior\r\n#10389 \r\n\r\n## The expected behavior\r\n#26865 ",
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26869/reactions",
          total_count: 0,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26869/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26868",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26868/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26868/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26868/events",
        html_url: "https://github.com/facebook/react/pull/26868",
        id: 1730208054,
        node_id: "PR_kwDOAJy2Ks5Rk7zL",
        number: 26868,
        title: "upgrade rimraf to version 5.0.1",
        user: {
          login: "mtorp",
          id: 5579277,
          node_id: "MDQ6VXNlcjU1NzkyNzc=",
          avatar_url: "https://avatars.githubusercontent.com/u/5579277?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/mtorp",
          html_url: "https://github.com/mtorp",
          followers_url: "https://api.github.com/users/mtorp/followers",
          following_url:
            "https://api.github.com/users/mtorp/following{/other_user}",
          gists_url: "https://api.github.com/users/mtorp/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/mtorp/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/mtorp/subscriptions",
          organizations_url: "https://api.github.com/users/mtorp/orgs",
          repos_url: "https://api.github.com/users/mtorp/repos",
          events_url: "https://api.github.com/users/mtorp/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/mtorp/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 196858374,
            node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
            url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
            name: "CLA Signed",
            color: "e7e7e7",
            default: false,
            description: null,
          },
        ],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: "2023-05-29T07:08:08Z",
        updated_at: "2023-05-29T07:08:13Z",
        closed_at: null,
        author_association: "NONE",
        active_lock_reason: null,
        draft: false,
        pull_request: {
          url: "https://api.github.com/repos/facebook/react/pulls/26868",
          html_url: "https://github.com/facebook/react/pull/26868",
          diff_url: "https://github.com/facebook/react/pull/26868.diff",
          patch_url: "https://github.com/facebook/react/pull/26868.patch",
          merged_at: null,
        },
        body: "<!--\r\n  Thanks for submitting a pull request!\r\n  We appreciate you spending the time to work on these changes. Please provide enough information so that others can review your pull request. The three fields below are mandatory.\r\n\r\n  Before submitting a pull request, please make sure the following is done:\r\n\r\n  1. Fork [the repository](https://github.com/facebook/react) and create your branch from `main`.\r\n  2. Run `yarn` in the repository root.\r\n  3. If you've fixed a bug or added code that should be tested, add tests!\r\n  4. Ensure the test suite passes (`yarn test`). Tip: `yarn test --watch TestName` is helpful in development.\r\n  5. Run `yarn test --prod` to test in the production environment. It supports the same options as `yarn test`.\r\n  6. If you need a debugger, run `yarn test --debug --watch TestName`, open `chrome://inspect`, and press \"Inspect\".\r\n  7. Format your code with [prettier](https://github.com/prettier/prettier) (`yarn prettier`).\r\n  8. Make sure your code lints (`yarn lint`). Tip: `yarn linc` to only check changed files.\r\n  9. Run the [Flow](https://flowtype.org/) type checks (`yarn flow`).\r\n  10. If you haven't already, complete the CLA.\r\n\r\n  Learn more about contributing: https://reactjs.org/docs/how-to-contribute.html\r\n-->\r\n\r\n## Summary\r\n\r\nIt simplifies some of the rimraf usages since the library is now async.\r\n\r\n<!--\r\n Explain the **motivation** for making this change. What existing problem does the pull request solve?\r\n-->\r\n\r\n## How did you test this change?\r\n\r\n- Ran `yarn build`, which utilizes rimraf in scripts/rollup/utils.js\r\n- Ran `yarn start` in fixtures/fizz, which utilizes rimraf in fixtures/fizz/scripts/build.js\r\n- Ran `yarn start` in fixtures/ssr2, which utilizes rimraf in fixtures/ssr2/scripts/build.js\r\n- I couldn't get the benchmarks in scripts/bench to work, but I tested the `cleanDir` function in scripts/bench/build.js by creating a small script that utilizes it separately.\r\n\r\n<!--\r\n  Demonstrate the code is solid. Example: The exact commands you ran and their output, screenshots / videos if the pull request changes the user interface.\r\n  How exactly did you verify that your PR solves the issue you wanted to solve?\r\n  If you leave this empty, your PR will very likely be closed.\r\n-->\r\n",
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26868/reactions",
          total_count: 0,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26868/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26867",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26867/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26867/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26867/events",
        html_url: "https://github.com/facebook/react/issues/26867",
        id: 1730187832,
        node_id: "I_kwDOAJy2Ks5nIJI4",
        number: 26867,
        title: "Bug: Typescript + React",
        user: {
          login: "Erfan2001",
          id: 69463039,
          node_id: "MDQ6VXNlcjY5NDYzMDM5",
          avatar_url: "https://avatars.githubusercontent.com/u/69463039?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Erfan2001",
          html_url: "https://github.com/Erfan2001",
          followers_url: "https://api.github.com/users/Erfan2001/followers",
          following_url:
            "https://api.github.com/users/Erfan2001/following{/other_user}",
          gists_url: "https://api.github.com/users/Erfan2001/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Erfan2001/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Erfan2001/subscriptions",
          organizations_url: "https://api.github.com/users/Erfan2001/orgs",
          repos_url: "https://api.github.com/users/Erfan2001/repos",
          events_url: "https://api.github.com/users/Erfan2001/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Erfan2001/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 155984160,
            node_id: "MDU6TGFiZWwxNTU5ODQxNjA=",
            url: "https://api.github.com/repos/facebook/react/labels/Status:%20Unconfirmed",
            name: "Status: Unconfirmed",
            color: "d4c5f9",
            default: false,
            description:
              "A potential issue that we haven't yet confirmed as a bug",
          },
        ],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 3,
        created_at: "2023-05-29T06:55:15Z",
        updated_at: "2023-05-31T14:19:36Z",
        closed_at: null,
        author_association: "NONE",
        active_lock_reason: null,
        body: "Hi guys, I suddenly get some errors these days when I run my code which they have not been before.\r\n\r\n`  Its element type 'ReactElement<any, any> | Component<AppPropsType<NextRouter, {}>, any, any> | null' is not a valid JSX element.\r\n    Type 'Component<AppPropsType<NextRouter, {}>, any, any>' is not assignable to type 'Element | ElementClass | null'.\r\n      Type 'Component<AppPropsType<NextRouter, {}>, any, any>' is not assignable to type 'ElementClass'.\r\n        The types returned by 'render()' are incompatible between these types.`\r\n\r\nReact version:\r\n\"@types/react\": \"17.0.2\",\r\n\"react\": \"^17.0.1\",\r\n\"typescript\": \"^4.1.5\",\r\n\"next\": \"^10.0.7\",\r\n\r\n## The current behavior\r\nLots of errors:\r\n1)\r\n`ERROR in pages/_document.tsx:48:55\r\nTS2786: 'App' cannot be used as a JSX component.\r\n  Its element type 'ReactElement<any, any> | Component<AppPropsType<NextRouter, {}>, any, any> | null' is not a valid JSX element.\r\n    Type 'Component<AppPropsType<NextRouter, {}>, any, any>' is not assignable to type 'Element | ElementClass | null'.\r\n      Type 'Component<AppPropsType<NextRouter, {}>, any, any>' is not assignable to type 'ElementClass'.`\r\n2)\r\n`TS2769: No overload matches this call.\r\n  Overload 1 of 2, '(o: { [s: string]: unknown; } | ArrayLike<unknown>): unknown[]', gave the following error.\r\n    Argument of type 'T' is not assignable to parameter of type '{ [s: string]: unknown; } | ArrayLike<unknown>'.\r\n      Type 'T' is not assignable to type 'ArrayLike<unknown>'.\r\n  Overload 2 of 2, '(o: {}): any[]', gave the following error.\r\n    Argument of type 'T' is not assignable to parameter of type '{}'.\r\n     8 |\r\n     9 |   static values<T>(t: T) {\r\n  > 10 |     return Object.values(t);`\r\n.....\r\n\r\n## The expected behavior\r\nevent - compiled successfully",
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26867/reactions",
          total_count: 0,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26867/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26866",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26866/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26866/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26866/events",
        html_url: "https://github.com/facebook/react/issues/26866",
        id: 1730145490,
        node_id: "I_kwDOAJy2Ks5nH-zS",
        number: 26866,
        title: "react新的中文文档",
        user: {
          login: "xiaqingping",
          id: 49116631,
          node_id: "MDQ6VXNlcjQ5MTE2NjMx",
          avatar_url: "https://avatars.githubusercontent.com/u/49116631?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/xiaqingping",
          html_url: "https://github.com/xiaqingping",
          followers_url: "https://api.github.com/users/xiaqingping/followers",
          following_url:
            "https://api.github.com/users/xiaqingping/following{/other_user}",
          gists_url: "https://api.github.com/users/xiaqingping/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/xiaqingping/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/xiaqingping/subscriptions",
          organizations_url: "https://api.github.com/users/xiaqingping/orgs",
          repos_url: "https://api.github.com/users/xiaqingping/repos",
          events_url:
            "https://api.github.com/users/xiaqingping/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/xiaqingping/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 155984160,
            node_id: "MDU6TGFiZWwxNTU5ODQxNjA=",
            url: "https://api.github.com/repos/facebook/react/labels/Status:%20Unconfirmed",
            name: "Status: Unconfirmed",
            color: "d4c5f9",
            default: false,
            description:
              "A potential issue that we haven't yet confirmed as a bug",
          },
        ],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 3,
        created_at: "2023-05-29T06:15:06Z",
        updated_at: "2023-05-30T01:36:30Z",
        closed_at: null,
        author_association: "NONE",
        active_lock_reason: null,
        body: "react新的中文文档，使用上来看只能说很糟糕，基本上没有什么翻译，前面还是中文的，后面一节突然就变成英文的了，还不如以前的文档，另外UI也没有以前好看，体验感好差，叹气！",
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26866/reactions",
          total_count: 0,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26866/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
      {
        url: "https://api.github.com/repos/facebook/react/issues/26865",
        repository_url: "https://api.github.com/repos/facebook/react",
        labels_url:
          "https://api.github.com/repos/facebook/react/issues/26865/labels{/name}",
        comments_url:
          "https://api.github.com/repos/facebook/react/issues/26865/comments",
        events_url:
          "https://api.github.com/repos/facebook/react/issues/26865/events",
        html_url: "https://github.com/facebook/react/issues/26865",
        id: 1728860095,
        node_id: "I_kwDOAJy2Ks5nDE-_",
        number: 26865,
        title:
          "Bug: React.Children.only expected to receive a single React element child",
        user: {
          login: "shokhDeveloper",
          id: 110657735,
          node_id: "U_kgDOBpiAxw",
          avatar_url: "https://avatars.githubusercontent.com/u/110657735?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/shokhDeveloper",
          html_url: "https://github.com/shokhDeveloper",
          followers_url:
            "https://api.github.com/users/shokhDeveloper/followers",
          following_url:
            "https://api.github.com/users/shokhDeveloper/following{/other_user}",
          gists_url:
            "https://api.github.com/users/shokhDeveloper/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/shokhDeveloper/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/shokhDeveloper/subscriptions",
          organizations_url: "https://api.github.com/users/shokhDeveloper/orgs",
          repos_url: "https://api.github.com/users/shokhDeveloper/repos",
          events_url:
            "https://api.github.com/users/shokhDeveloper/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/shokhDeveloper/received_events",
          type: "User",
          site_admin: false,
        },
        labels: [
          {
            id: 155984160,
            node_id: "MDU6TGFiZWwxNTU5ODQxNjA=",
            url: "https://api.github.com/repos/facebook/react/labels/Status:%20Unconfirmed",
            name: "Status: Unconfirmed",
            color: "d4c5f9",
            default: false,
            description:
              "A potential issue that we haven't yet confirmed as a bug",
          },
        ],
        state: "open",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 2,
        created_at: "2023-05-27T17:46:09Z",
        updated_at: "2023-06-02T13:40:51Z",
        closed_at: null,
        author_association: "NONE",
        active_lock_reason: null,
        body: "То есть при использовании кутубонуса react-reveal при сопоставлении нового элемента с этим эффектом появляется вот эта ошибка, и я думаю, что эту ошибку надо решать, и она доставляет массу проблем пользователю.",
        reactions: {
          url: "https://api.github.com/repos/facebook/react/issues/26865/reactions",
          total_count: 0,
          "+1": 0,
          "-1": 0,
          laugh: 0,
          hooray: 0,
          confused: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
        timeline_url:
          "https://api.github.com/repos/facebook/react/issues/26865/timeline",
        performed_via_github_app: null,
        state_reason: null,
      },
    ],
    []
  );

  const { data: issuesData = fallback, isLoading: isIssuesLoading } = useQuery({
    queryKey: "issues",
    queryFn: async () => {
      const { data } = await axiosInstance.get("/repos/facebook/react/issues");
      return data;
    },
    enabled: true,
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
    }
  );

  return { data, fetchNextPage, hasNextPage, isLoading };
};
