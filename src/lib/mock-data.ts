export type ContentType = "text" | "file" | "url";

export type MockUser = {
  id: string;
  name: string;
  email: string;
  image: string | null;
  isPro: boolean;
};

export type MockItemType = {
  id: string;
  name: string;
  label: string;
  icon: string;
  color: string;
  contentType: ContentType;
  route: string;
  count: number;
  isSystem: boolean;
  isProOnly: boolean;
};

export type MockCollection = {
  id: string;
  name: string;
  description: string;
  itemCount: number;
  itemTypeIds: string[];
  defaultTypeId: string | null;
  isFavorite: boolean;
  createdAt: string;
  updatedAt: string;
};

export type MockItem = {
  id: string;
  title: string;
  description: string;
  contentType: ContentType;
  content: string | null;
  url: string | null;
  fileName: string | null;
  fileUrl: string | null;
  fileSize: number | null;
  language: string | null;
  tags: string[];
  itemTypeId: string;
  collectionIds: string[];
  isFavorite: boolean;
  isPinned: boolean;
  createdAt: string;
  updatedAt: string;
};

export const currentUser: MockUser = {
  id: "user-john-doe",
  name: "John Doe",
  email: "john@example.com",
  image: null,
  isPro: false,
};

export const itemTypes: MockItemType[] = [
  {
    id: "type-snippet",
    name: "snippet",
    label: "Snippets",
    icon: "Code",
    color: "#3b82f6",
    contentType: "text",
    route: "/items/snippets",
    count: 24,
    isSystem: true,
    isProOnly: false,
  },
  {
    id: "type-prompt",
    name: "prompt",
    label: "Prompts",
    icon: "Sparkles",
    color: "#8b5cf6",
    contentType: "text",
    route: "/items/prompts",
    count: 18,
    isSystem: true,
    isProOnly: false,
  },
  {
    id: "type-command",
    name: "command",
    label: "Commands",
    icon: "Terminal",
    color: "#f97316",
    contentType: "text",
    route: "/items/commands",
    count: 15,
    isSystem: true,
    isProOnly: false,
  },
  {
    id: "type-note",
    name: "note",
    label: "Notes",
    icon: "StickyNote",
    color: "#fde047",
    contentType: "text",
    route: "/items/notes",
    count: 12,
    isSystem: true,
    isProOnly: false,
  },
  {
    id: "type-file",
    name: "file",
    label: "Files",
    icon: "File",
    color: "#6b7280",
    contentType: "file",
    route: "/items/files",
    count: 5,
    isSystem: true,
    isProOnly: true,
  },
  {
    id: "type-image",
    name: "image",
    label: "Images",
    icon: "Image",
    color: "#ec4899",
    contentType: "file",
    route: "/items/images",
    count: 3,
    isSystem: true,
    isProOnly: true,
  },
  {
    id: "type-link",
    name: "link",
    label: "Links",
    icon: "Link",
    color: "#10b981",
    contentType: "url",
    route: "/items/links",
    count: 8,
    isSystem: true,
    isProOnly: false,
  },
];

export const collections: MockCollection[] = [
  {
    id: "collection-react-patterns",
    name: "React Patterns",
    description: "Common React patterns and hooks",
    itemCount: 12,
    itemTypeIds: ["type-snippet", "type-note", "type-link"],
    defaultTypeId: "type-snippet",
    isFavorite: true,
    createdAt: "2026-01-08T09:00:00.000Z",
    updatedAt: "2026-01-15T14:20:00.000Z",
  },
  {
    id: "collection-python-snippets",
    name: "Python Snippets",
    description: "Useful Python code snippets",
    itemCount: 8,
    itemTypeIds: ["type-snippet", "type-note"],
    defaultTypeId: "type-snippet",
    isFavorite: false,
    createdAt: "2026-01-06T11:30:00.000Z",
    updatedAt: "2026-01-14T10:15:00.000Z",
  },
  {
    id: "collection-context-files",
    name: "Context Files",
    description: "AI context files for projects",
    itemCount: 5,
    itemTypeIds: ["type-file", "type-note"],
    defaultTypeId: "type-file",
    isFavorite: true,
    createdAt: "2026-01-03T16:45:00.000Z",
    updatedAt: "2026-01-13T08:50:00.000Z",
  },
  {
    id: "collection-interview-prep",
    name: "Interview Prep",
    description: "Technical interview preparation",
    itemCount: 24,
    itemTypeIds: ["type-note", "type-snippet", "type-link", "type-prompt"],
    defaultTypeId: "type-note",
    isFavorite: false,
    createdAt: "2026-01-02T13:10:00.000Z",
    updatedAt: "2026-01-12T17:25:00.000Z",
  },
  {
    id: "collection-git-commands",
    name: "Git Commands",
    description: "Frequently used git commands",
    itemCount: 15,
    itemTypeIds: ["type-command", "type-note"],
    defaultTypeId: "type-command",
    isFavorite: true,
    createdAt: "2026-01-01T12:00:00.000Z",
    updatedAt: "2026-01-11T09:35:00.000Z",
  },
  {
    id: "collection-ai-prompts",
    name: "AI Prompts",
    description: "Curated AI prompts for coding",
    itemCount: 18,
    itemTypeIds: ["type-prompt", "type-snippet", "type-note"],
    defaultTypeId: "type-prompt",
    isFavorite: false,
    createdAt: "2026-01-04T15:05:00.000Z",
    updatedAt: "2026-01-10T19:10:00.000Z",
  },
];

export const items: MockItem[] = [
  {
    id: "item-use-auth-hook",
    title: "useAuth Hook",
    description: "Custom authentication hook for React applications",
    contentType: "text",
    content: "export function useAuth() {\n  // Mock auth hook snippet\n}",
    url: null,
    fileName: null,
    fileUrl: null,
    fileSize: null,
    language: "tsx",
    tags: ["react", "auth", "hooks"],
    itemTypeId: "type-snippet",
    collectionIds: ["collection-react-patterns"],
    isFavorite: true,
    isPinned: true,
    createdAt: "2026-01-09T10:00:00.000Z",
    updatedAt: "2026-01-15T11:40:00.000Z",
  },
  {
    id: "item-api-error-handling",
    title: "API Error Handling Pattern",
    description: "Fetch wrapper with exponential backoff retry logic",
    contentType: "text",
    content: "async function fetchWithRetry(url: string) {\n  // Retry logic goes here\n}",
    url: null,
    fileName: null,
    fileUrl: null,
    fileSize: null,
    language: "ts",
    tags: ["api", "fetch", "errors"],
    itemTypeId: "type-snippet",
    collectionIds: ["collection-react-patterns"],
    isFavorite: false,
    isPinned: true,
    createdAt: "2026-01-07T12:20:00.000Z",
    updatedAt: "2026-01-12T16:10:00.000Z",
  },
  {
    id: "item-git-undo-last-commit",
    title: "Undo Last Git Commit",
    description: "Reset the last commit while keeping local changes",
    contentType: "text",
    content: "git reset --soft HEAD~1",
    url: null,
    fileName: null,
    fileUrl: null,
    fileSize: null,
    language: "bash",
    tags: ["git", "undo", "commit"],
    itemTypeId: "type-command",
    collectionIds: ["collection-git-commands", "collection-interview-prep"],
    isFavorite: true,
    isPinned: false,
    createdAt: "2026-01-05T08:40:00.000Z",
    updatedAt: "2026-01-11T09:35:00.000Z",
  },
  {
    id: "item-code-review-prompt",
    title: "Senior Code Review Prompt",
    description: "Prompt for reviewing pull requests with a bug-first lens",
    contentType: "text",
    content: "Act as a senior engineer reviewing this pull request...",
    url: null,
    fileName: null,
    fileUrl: null,
    fileSize: null,
    language: null,
    tags: ["ai", "review", "pull-request"],
    itemTypeId: "type-prompt",
    collectionIds: ["collection-ai-prompts", "collection-interview-prep"],
    isFavorite: false,
    isPinned: false,
    createdAt: "2026-01-04T18:30:00.000Z",
    updatedAt: "2026-01-10T19:10:00.000Z",
  },
  {
    id: "item-project-context-template",
    title: "Project Context Template",
    description: "Reusable markdown context file for new AI-assisted projects",
    contentType: "file",
    content: null,
    url: null,
    fileName: "project-context-template.md",
    fileUrl: "/mock-files/project-context-template.md",
    fileSize: 18420,
    language: "markdown",
    tags: ["context", "template", "ai"],
    itemTypeId: "type-file",
    collectionIds: ["collection-context-files", "collection-ai-prompts"],
    isFavorite: true,
    isPinned: false,
    createdAt: "2026-01-03T16:45:00.000Z",
    updatedAt: "2026-01-13T08:50:00.000Z",
  },
  {
    id: "item-python-dataclass-example",
    title: "Python Dataclass Example",
    description: "Small typed dataclass pattern for structured records",
    contentType: "text",
    content: "from dataclasses import dataclass\n\n@dataclass\nclass Resource:\n    title: str",
    url: null,
    fileName: null,
    fileUrl: null,
    fileSize: null,
    language: "python",
    tags: ["python", "dataclass", "typing"],
    itemTypeId: "type-snippet",
    collectionIds: ["collection-python-snippets", "collection-interview-prep"],
    isFavorite: false,
    isPinned: false,
    createdAt: "2026-01-06T11:30:00.000Z",
    updatedAt: "2026-01-14T10:15:00.000Z",
  },
  {
    id: "item-nextjs-docs-link",
    title: "Next.js App Router Docs",
    description: "Official routing and layout documentation",
    contentType: "url",
    content: null,
    url: "https://nextjs.org/docs/app",
    fileName: null,
    fileUrl: null,
    fileSize: null,
    language: null,
    tags: ["nextjs", "docs", "routing"],
    itemTypeId: "type-link",
    collectionIds: ["collection-react-patterns"],
    isFavorite: false,
    isPinned: false,
    createdAt: "2026-01-08T09:25:00.000Z",
    updatedAt: "2026-01-08T09:25:00.000Z",
  },
  {
    id: "item-interview-system-design-notes",
    title: "System Design Notes",
    description: "High-level prompts for API, cache, and database tradeoffs",
    contentType: "text",
    content: "Start with requirements, constraints, data model, and bottlenecks.",
    url: null,
    fileName: null,
    fileUrl: null,
    fileSize: null,
    language: "markdown",
    tags: ["interview", "systems", "notes"],
    itemTypeId: "type-note",
    collectionIds: ["collection-interview-prep"],
    isFavorite: false,
    isPinned: false,
    createdAt: "2026-01-02T13:10:00.000Z",
    updatedAt: "2026-01-12T17:25:00.000Z",
  },
];
