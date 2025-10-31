import Link from "next/link"

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-11 p-6">
      <div className="flex justify-between items-center">
        <div className="text-white text-4xl font-extrabold uppercase tracking-wide">Casa<br />Produções</div>
        <nav className="flex gap-8">
          <Link
            href="/contato"
            className="text-white hover:text-neutral-400 hover:bg-white transition-colors duration-300 uppercase text-sm p-6"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}
