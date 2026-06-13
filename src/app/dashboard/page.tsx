"use client";

import NextLink from "next/link";
import type { ComponentType, ReactNode } from "react";
import { useState } from "react";
import {
  Clock3,
  Code,
  ChevronDown,
  File,
  Folder,
  FolderPlus,
  ImageIcon,
  Layers3,
  LinkIcon,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  Plus,
  Search,
  Sparkles,
  Star,
  StickyNote,
  Terminal,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { collections, currentUser, itemTypes } from "@/lib/mock-data";

const itemTypeIcons = {
  Code,
  Sparkles,
  Terminal,
  StickyNote,
  File,
  Image: ImageIcon,
  Link: LinkIcon,
};

const favoriteCollections = collections
  .filter((collection) => collection.isFavorite)
  .slice(0, 4);

const recentCollections = [...collections]
  .sort(
    (first, second) =>
      new Date(second.updatedAt).getTime() - new Date(first.updatedAt).getTime(),
  )
  .slice(0, 4);

export default function DashboardPage() {
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0f14] text-slate-100">
      <div
        className={cn(
          "grid min-h-screen grid-rows-[64px_1fr] transition-[grid-template-columns] duration-300 ease-out",
          isDesktopSidebarOpen
            ? "lg:grid-cols-[280px_1fr]"
            : "lg:grid-cols-[76px_1fr]",
        )}
      >
        <header className="col-span-full flex items-center gap-3 border-b border-slate-800 bg-[#0b0f14] px-4 sm:px-6">
          <Button
            aria-label="Open sidebar"
            className="lg:hidden"
            onClick={() => setIsMobileSidebarOpen(true)}
            size="icon"
            type="button"
            variant="ghost"
          >
            <Menu className="size-5" />
          </Button>

          <div
            className={cn(
              "flex min-w-0 items-center gap-3",
              isDesktopSidebarOpen ? "lg:w-[256px]" : "lg:w-[52px]",
            )}
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-slate-100 text-slate-950">
              <Layers3 className="size-5" />
            </div>
            <span
              className={cn(
                "truncate text-xl font-semibold tracking-tight",
                !isDesktopSidebarOpen && "lg:hidden",
              )}
            >
              DevStash
            </span>
          </div>

          <div className="relative hidden w-full max-w-md md:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              aria-label="Search items"
              className="h-10 rounded-md border-slate-800 bg-slate-900/70 pl-9 text-slate-100 placeholder:text-slate-500"
              placeholder="Search items..."
              type="search"
            />
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            <Button
              className="h-10 rounded-md px-3 sm:px-4"
              type="button"
              variant="outline"
            >
              <FolderPlus className="size-4" />
              <span className="hidden sm:inline">New Collection</span>
            </Button>

            <Button className="h-10 rounded-md px-3 sm:px-4" type="button">
              <Plus className="size-4" />
              <span className="hidden sm:inline">New Item</span>
            </Button>
          </div>
        </header>

        <DashboardSidebar
          isOpen={isDesktopSidebarOpen}
          onToggle={() => setIsDesktopSidebarOpen((isOpen) => !isOpen)}
        />

        {isMobileSidebarOpen ? (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button
              aria-label="Close sidebar"
              className="absolute inset-0 bg-slate-950/80"
              onClick={() => setIsMobileSidebarOpen(false)}
              type="button"
            />
            <div className="absolute inset-y-0 left-0 w-[min(320px,calc(100vw-32px))] animate-in slide-in-from-left duration-300 border-r border-slate-800 bg-[#111820] shadow-2xl">
              <DashboardSidebar
                isDrawer
                isOpen
                onClose={() => setIsMobileSidebarOpen(false)}
              />
            </div>
          </div>
        ) : null}

        <main className="bg-[#0b0f14] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Main</h2>
        </main>
      </div>
    </div>
  );
}

type DashboardSidebarProps = {
  isOpen: boolean;
  isDrawer?: boolean;
  onClose?: () => void;
  onToggle?: () => void;
};

function DashboardSidebar({
  isOpen,
  isDrawer = false,
  onClose,
  onToggle,
}: DashboardSidebarProps) {
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(true);

  return (
    <aside
      className={cn(
        "flex h-full min-h-0 flex-col border-slate-800 bg-[#111820] text-slate-100 transition-[width] duration-300 ease-out",
        isDrawer ? "w-full" : "hidden border-r lg:flex",
      )}
    >
      <div className="flex h-14 shrink-0 items-center justify-between border-b border-slate-800 px-3">
        {isOpen ? (
          <h2 className="truncate px-1 text-sm font-semibold text-slate-200">
            Navigation
          </h2>
        ) : null}

        {isDrawer ? (
          <Button
            aria-label="Close sidebar"
            onClick={onClose}
            size="icon"
            type="button"
            variant="ghost"
          >
            <X className="size-5" />
          </Button>
        ) : (
          <Button
            aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
            onClick={onToggle}
            size="icon"
            type="button"
            variant="ghost"
          >
            {isOpen ? (
              <PanelLeftClose className="size-5" />
            ) : (
              <PanelLeftOpen className="size-5" />
            )}
          </Button>
        )}
      </div>

      <div className="min-h-0 flex-1 space-y-7 overflow-y-auto px-3 py-5">
        <SidebarSection icon={Layers3} isOpen={isOpen} title="Items">
          <nav className="space-y-1">
            {itemTypes.map((itemType) => {
              const Icon =
                itemTypeIcons[itemType.icon as keyof typeof itemTypeIcons] ??
                Folder;

              return (
                <NextLink
                  className={cn(
                    "flex h-10 items-center gap-3 rounded-md px-3 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-slate-50",
                    !isOpen && "justify-center px-0",
                  )}
                  href={itemType.route}
                  key={itemType.id}
                  title={isOpen ? undefined : itemType.label}
                >
                  <Icon
                    className="size-4 shrink-0"
                    style={{ color: itemType.color }}
                  />
                  {isOpen ? (
                    <>
                      <span className="min-w-0 flex-1 truncate">
                        {itemType.label}
                      </span>
                      <span className="shrink-0 text-xs text-muted-foreground">
                        {itemType.count}
                      </span>
                    </>
                  ) : null}
                </NextLink>
              );
            })}
          </nav>
        </SidebarSection>

        <section>
          <button
            aria-expanded={isCollectionsOpen}
            className={cn(
              "mb-2 flex h-8 w-full items-center gap-2 rounded-md px-3 text-xs font-medium uppercase text-slate-500 transition hover:bg-slate-800 hover:text-slate-300",
              !isOpen && "justify-center px-0",
            )}
            onClick={() => setIsCollectionsOpen((open) => !open)}
            type="button"
          >
            <Folder className="size-3.5 shrink-0" />
            {isOpen ? (
              <>
                <span className="min-w-0 flex-1 truncate text-left">
                  Collections
                </span>
                <ChevronDown
                  className={cn(
                    "size-3.5 shrink-0 transition-transform",
                    !isCollectionsOpen && "-rotate-90",
                  )}
                />
              </>
            ) : null}
          </button>

          {isCollectionsOpen ? (
            <div className={cn("space-y-5", isOpen && "pl-2")}>
              <CollectionGroup
                collections={favoriteCollections}
                icon={Star}
                isOpen={isOpen}
                title="Favorites"
              />
              <CollectionGroup
                collections={recentCollections}
                icon={Clock3}
                isOpen={isOpen}
                title="Recent"
              />
            </div>
          ) : null}
        </section>
      </div>

      <div className="border-t border-slate-800 p-3">
        <div
          className={cn(
            "flex items-center gap-3 rounded-md px-3 py-2",
            !isOpen && "justify-center px-0",
          )}
        >
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-slate-800 text-sm font-semibold text-slate-100">
            {currentUser.name
              .split(" ")
              .map((name) => name[0])
              .join("")}
          </div>
          {isOpen ? (
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{currentUser.name}</p>
              <p className="truncate text-xs text-slate-400">
                {currentUser.email}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </aside>
  );
}

type SidebarSectionProps = {
  children: ReactNode;
  icon: ComponentType<{ className?: string }>;
  isOpen: boolean;
  title: string;
};

function SidebarSection({
  children,
  icon: Icon,
  isOpen,
  title,
}: SidebarSectionProps) {
  return (
    <section>
      <div
        className={cn(
          "mb-2 flex h-6 items-center gap-2 px-3 text-xs font-medium uppercase text-slate-500",
          !isOpen && "justify-center px-0",
        )}
      >
        <Icon className="size-3.5 shrink-0" />
        {isOpen ? <span className="truncate">{title}</span> : null}
      </div>
      {children}
    </section>
  );
}

type CollectionListProps = {
  collections: typeof favoriteCollections;
  isOpen: boolean;
};

type CollectionGroupProps = CollectionListProps & {
  icon: ComponentType<{ className?: string }>;
  title: string;
};

function CollectionGroup({
  collections,
  icon: Icon,
  isOpen,
  title,
}: CollectionGroupProps) {
  return (
    <div>
      <div
        className={cn(
          "mb-1 flex h-6 items-center gap-2 px-3 text-xs font-medium text-slate-500",
          !isOpen && "justify-center px-0",
        )}
      >
        <Icon className="size-3.5 shrink-0" />
        {isOpen ? <span className="truncate">{title}</span> : null}
      </div>
      <CollectionList collections={collections} isOpen={isOpen} />
    </div>
  );
}

function CollectionList({ collections, isOpen }: CollectionListProps) {
  return (
    <div className="space-y-1">
      {collections.map((collection) => (
        <NextLink
          className={cn(
            "flex h-10 items-center gap-3 rounded-md px-3 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-slate-50",
            !isOpen && "justify-center px-0",
          )}
          href={`/collections/${collection.id}`}
          key={collection.id}
          title={isOpen ? undefined : collection.name}
        >
          <Folder className="size-4 shrink-0" />
          {isOpen ? (
            <>
              <span className="min-w-0 flex-1 truncate">{collection.name}</span>
              <span className="shrink-0 text-xs text-muted-foreground">
                {collection.itemCount}
              </span>
            </>
          ) : null}
        </NextLink>
      ))}
    </div>
  );
}
