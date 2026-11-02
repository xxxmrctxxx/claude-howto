import type { TerminalCheck } from "@/lib/types/content";

export interface TerminalMission {
  id: string;
  title: string;
  goal: string;
  preset: string;
  steps: { instruction: string; hint: string; check: TerminalCheck }[];
}

/** Lab 2 missions. Steps are completed in order. */
export const TERMINAL_MISSIONS: TerminalMission[] = [
  {
    id: "dinh-huong",
    title: "1. Bạn đang ở đâu?",
    goal: "Biết vị trí hiện tại, xem nội dung thư mục và di chuyển giữa các thư mục.",
    preset: "home-basic",
    steps: [
      { instruction: "In ra thư mục hiện tại.", hint: "pwd", check: { kind: "lastCommand", command: "pwd", label: "pwd" } },
      { instruction: "Liệt kê nội dung thư mục.", hint: "ls", check: { kind: "lastCommand", command: "ls", label: "ls" } },
      { instruction: "Đi vào thư mục du-an-qa.", hint: "cd du-an-qa", check: { kind: "cwd", path: "~/du-an-qa", label: "Đang ở ~/du-an-qa" } },
      { instruction: "Xem nội dung file du-lieu.csv.", hint: "cat du-lieu.csv", check: { kind: "lastCommand", command: "cat", label: "cat file" } },
      { instruction: "Quay lại thư mục cha.", hint: "cd ..", check: { kind: "cwd", path: "~", label: "Về ~" } },
    ],
  },
  {
    id: "thu-muc",
    title: "2. Tạo cấu trúc thư mục báo cáo",
    goal: "Tạo thư mục lồng nhau và file ghi chú cho báo cáo tuần.",
    preset: "home-basic",
    steps: [
      { instruction: "Tạo thư mục bao-cao-2026.", hint: "mkdir bao-cao-2026", check: { kind: "dir", path: "~/bao-cao-2026", label: "Có ~/bao-cao-2026" } },
      { instruction: "Đi vào thư mục đó.", hint: "cd bao-cao-2026", check: { kind: "cwd", path: "~/bao-cao-2026", label: "Đang ở ~/bao-cao-2026" } },
      {
        instruction: "Tạo một lần cả hai cấp thang-11/tuan-44.",
        hint: "mkdir -p thang-11/tuan-44",
        check: { kind: "dir", path: "~/bao-cao-2026/thang-11/tuan-44", label: "Có thang-11/tuan-44" },
      },
      {
        instruction: "Tạo file ghi-chu.txt trong tuan-44 có nội dung bất kỳ.",
        hint: 'echo "Tong hop loi tuan 44" > thang-11/tuan-44/ghi-chu.txt',
        check: { kind: "file", path: "~/bao-cao-2026/thang-11/tuan-44/ghi-chu.txt", label: "Có ghi-chu.txt" },
      },
      { instruction: "Xem danh sách chi tiết (dạng dài) của thư mục thang-11/tuan-44.", hint: "ls -l thang-11/tuan-44", check: { kind: "lastCommand", command: "ls -l", label: "ls -l" } },
    ],
  },
  {
    id: "git-dau-tien",
    title: "3. Commit đầu tiên với Git",
    goal: "Biến thư mục web-qa thành kho Git và lưu phiên bản đầu tiên.",
    preset: "git-project",
    steps: [
      { instruction: "Khởi tạo kho Git trong thư mục hiện tại.", hint: "git init", check: { kind: "gitInitialized", path: "~/web-qa", label: "Đã git init" } },
      { instruction: "Xem trạng thái: file nào chưa được theo dõi?", hint: "git status", check: { kind: "lastCommand", command: "git status", label: "git status" } },
      { instruction: "Đưa tất cả file vào vùng chuẩn bị (staging).", hint: "git add .", check: { kind: "gitState", path: "~/web-qa", stagedMin: 3, label: "3 file đã staged" } },
      { instruction: "Tạo commit với lời nhắn mô tả.", hint: 'git commit -m "Khoi tao trang theo doi loi"', check: { kind: "commitCount", path: "~/web-qa", min: 1, label: "Có 1 commit" } },
      { instruction: "Xem lịch sử commit dạng gọn.", hint: "git log --oneline", check: { kind: "lastCommand", command: "git log", label: "git log" } },
    ],
  },
  {
    id: "nhanh-moi",
    title: "4. Làm việc trên nhánh mới",
    goal: "Thử tính năng trên một nhánh riêng mà không ảnh hưởng nhánh main.",
    preset: "git-committed",
    steps: [
      { instruction: "Tạo và chuyển sang nhánh them-bo-loc.", hint: "git switch -c them-bo-loc", check: { kind: "gitState", path: "~/web-qa", head: "them-bo-loc", label: "Đang ở nhánh them-bo-loc" } },
      {
        instruction: "Thêm một dòng vào cuối index.html.",
        hint: 'echo "<p>Bo loc theo cong doan</p>" >> index.html',
        check: { kind: "gitState", path: "~/web-qa", unstagedMin: 1, label: "index.html đã thay đổi" },
      },
      { instruction: "Stage file vừa sửa.", hint: "git add index.html", check: { kind: "gitState", path: "~/web-qa", stagedMin: 1, label: "Đã stage" } },
      { instruction: "Commit thay đổi.", hint: 'git commit -m "Them bo loc"', check: { kind: "commitCount", path: "~/web-qa", min: 2, label: "Nhánh có 2 commit" } },
      { instruction: "Quay về nhánh main.", hint: "git switch main", check: { kind: "gitState", path: "~/web-qa", head: "main", label: "Về main" } },
      { instruction: "Xem index.html trên main — dòng mới có còn không?", hint: "cat index.html", check: { kind: "lastCommand", command: "cat", label: "cat index.html" } },
    ],
  },
];
