import Link from "next/link";

export function Navbar() {
    return (
    
      <nav>
        <Link href="/"  style={{ padding: "12px 16px", textDecoration: "none" }}>Home</Link>
        <Link href="/about"  style={{ padding: "12px 16px", textDecoration: "none" }}>About</Link>
        <Link href="/contact"  style={{ padding: "12px 16px", textDecoration: "none" }}>Contact</Link>
        <Link href="/member"  style={{ padding: "12px 16px", textDecoration: "none" }}>Member</Link>
      </nav>
    )
}