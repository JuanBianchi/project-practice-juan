import Link from "next/link";

const Aside = () => {
    return (
        <aside className="w-56 min-h-screen bg-black text-white justify-start">
            <h2 className="text-xl font-semibold tracking-tight">Menú</h2>
            <nav className="flex flex-col gap-3">
                <Link href="./page" className="hover:bg-zinc-800 px-3 py-2 rounded-lg transition">
                    Inicio
                </Link>

                <Link href="/login" className="hover:bg-zinc-800 px-3 py-2 rounded-lg transition">
                    Inicia sesión
                </Link>

                <Link href="/news" className="hover:bg-zinc-800 px-3 py-2 rounded-lg transition">
                    Últimas noticias
                </Link>
            </nav>
        </aside >
    );
}


export default Aside;