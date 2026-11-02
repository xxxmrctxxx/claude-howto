import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-card/50">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          <strong className="text-foreground">Claude HowTo Academy</strong> — nội dung tiếng Việt, đối chiếu với tài liệu chính
          thức của Anthropic.
        </p>
        <nav aria-label="Liên kết chân trang" className="flex flex-wrap gap-4">
          <Link className="hover:text-foreground" href="/hoc/">
            Lộ trình
          </Link>
          <Link className="hover:text-foreground" href="/thuc-hanh/">
            Phòng thực hành
          </Link>
          <Link className="hover:text-foreground" href="/tien-do/">
            Tiến độ
          </Link>
          <a className="hover:text-foreground" href="https://platform.claude.com/docs" target="_blank" rel="noreferrer">
            Tài liệu Anthropic
          </a>
        </nav>
      </div>
    </footer>
  );
}
