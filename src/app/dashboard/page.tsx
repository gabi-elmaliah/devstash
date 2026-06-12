import { FolderPlus, Layers3, Plus, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grid min-h-screen grid-rows-[64px_1fr] lg:grid-cols-[280px_1fr]">
        <header className="col-span-full flex items-center gap-4 border-b border-border px-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3 lg:w-[256px]">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Layers3 className="size-5" />
            </div>
            <span className="truncate text-xl font-semibold tracking-tight">
              DevStash
            </span>
          </div>

          <div className="relative hidden w-full max-w-md md:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              aria-label="Search items"
              className="h-10 rounded-md bg-muted/40 pl-9"
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

        <aside className="hidden border-r border-border bg-sidebar p-6 text-sidebar-foreground lg:block">
          <h2 className="text-lg font-semibold">Sidebar</h2>
        </aside>

        <main className="p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Main</h2>
        </main>
      </div>
    </div>
  );
}
