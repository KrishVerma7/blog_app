import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="logo">BlogIt By Krish</div>
      <nav>
        <Link href="/feedback">Feedback</Link>
      </nav>
    </header>
  );
}
