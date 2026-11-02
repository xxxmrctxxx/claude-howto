import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { RewardToaster } from "@/components/layout/reward-toaster";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Claude HowTo Academy", template: "%s · Claude HowTo Academy" },
  description:
    "Học Claude AI và Claude Code bằng tiếng Việt: học bằng hình ảnh, hiểu bằng ví dụ, thực hành, kiểm tra và ứng dụng thực tế.",
  applicationName: "Claude HowTo Academy",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf7f1" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1a18" },
  ],
};

// Runs before first paint: applies the saved theme (or the OS preference)
// so there is no light/dark flash. See Next.js "preventing flash" guide.
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem("cha:theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" data-theme="light" suppressHydrationWarning className={`${beVietnam.variable} ${jetbrains.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#noi-dung"
          className="sr-only z-[60] rounded-lg bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Bỏ qua đến nội dung chính
        </a>
        <SiteHeader />
        <main id="noi-dung" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <RewardToaster />
      </body>
    </html>
  );
}
