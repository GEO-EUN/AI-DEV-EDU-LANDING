"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  { href: "/", label: "홈" },
  { href: "/programming", label: "문제해결과 프로그래밍" },
  { href: "/practice", label: "프로그래밍 실습하기" },
  { href: "/qa", label: "Q&A" },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="w-full flex justify-center gap-10 py-4 border-b border-violet-200 bg-white/80 z-50">
      {menus.map((menu) => (
        <Link
          key={menu.href}
          href={menu.href}
          className={`px-4 py-2 rounded-lg font-semibold ${
            pathname === menu.href
              ? "bg-blue-100 text-blue-700 font-bold"
              : "text-black hover:bg-blue-50 hover:font-bold"
          }`}
        >
          {menu.label}
        </Link>
      ))}
    </nav>
  );
} 