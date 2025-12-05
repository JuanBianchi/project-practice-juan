import ArticleList from "./components/ArticleList";
import Footer from "./components/Footer";
import Aside from "./components/Aside";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
        <Aside />
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-start justify-start py-12 px-6 bg-white dark:bg-black mx-auto sm:px-12">
          <div className="flex justify-end w-full mb-6">
            <Link
              href="/create"
              className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
            >
              + Crear Artículo
            </Link>
          </div>
          <ArticleList />
        </main>
      </div>
      <Footer />
    </>
  );
}
