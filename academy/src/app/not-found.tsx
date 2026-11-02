import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-6xl font-extrabold text-primary">404</p>
      <h1 className="mt-3 text-2xl font-bold">Không tìm thấy trang</h1>
      <p className="mt-2 text-muted-foreground">Bài học này có thể chưa được phát hành hoặc đường dẫn đã thay đổi.</p>
      <Link href="/hoc/" className="mt-6 inline-block rounded-xl bg-primary px-5 py-2.5 font-semibold text-primary-foreground">
        Về lộ trình học
      </Link>
    </div>
  );
}
