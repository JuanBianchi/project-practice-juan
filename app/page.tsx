import ArticleList from "./components/ArticleList";
import Footer from "./components/Footer";
import Aside from "./components/Aside";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
        <Aside />
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-start justify-start py-12 px-6 bg-white dark:bg-black mx-auto sm:px-12">
          <ArticleList />
        </main>
      </div>
      <Footer />
    </>
  );
}
