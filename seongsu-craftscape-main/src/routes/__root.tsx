import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav, SiteFooter } from "../components/site/Shell";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow mb-4">404 · Not Found</div>
        <h1 className="font-display text-5xl text-ink">길을 잃었습니다</h1>
        <p className="mt-3 text-sm text-ink-soft">
          요청하신 페이지는 아카이브에 존재하지 않습니다.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-indigo px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          처음으로
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error); fs.appendFileSync('error.log', error.toString() + '\n');
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow mb-4">Error</div>
        <h1 className="font-display text-3xl text-ink">페이지를 불러오지 못했습니다</h1>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-indigo px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            다시 시도
          </button>
          <a href="/" className="rounded-md border border-rule px-4 py-2 text-sm">
            처음으로
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "성수동 도시제조업 디지털 아카이브" },
      { name: "description", content: "성수동 제조업의 분포, 공간구조, 그리고 도시 변화의 의미를 탐색하는 인터랙티브 연구 아카이브." },
      { property: "og:title", content: "성수동 도시제조업 디지털 아카이브" },
      { property: "og:description", content: "성수동 제조업의 분포, 공간구조, 그리고 도시 변화의 의미를 탐색하는 인터랙티브 연구 아카이브." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "성수동 도시제조업 디지털 아카이브" },
      { name: "twitter:description", content: "성수동 제조업의 분포, 공간구조, 그리고 도시 변화의 의미를 탐색하는 인터랙티브 연구 아카이브." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/59e32165-b2f4-4e96-ada4-f6393257d20c/id-preview-2e5b4483--34ff59ac-5554-4fa7-970d-bbdb8278fbf2.lovable.app-1781100850371.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/59e32165-b2f4-4e96-ada4-f6393257d20c/id-preview-2e5b4483--34ff59ac-5554-4fa7-970d-bbdb8278fbf2.lovable.app-1781100850371.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Noto+Serif+KR:wght@200..900&family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteNav />
      <main><Outlet /></main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
