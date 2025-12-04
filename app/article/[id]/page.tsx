import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleById } from '../../data/articles';

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ArticlePage({ params }: PageProps) {
    const { id } = await params;
    const articleId = parseInt(id, 10);
    const article = getArticleById(articleId);

    if (!article) {
        notFound();
    }

    return (
        <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-start justify-start py-12 px-6 bg-white dark:bg-black mx-auto sm:px-12">
                <Link
                    href="/"
                    className="mb-8 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                    ← Volver
                </Link>
                <article className="flex flex-col gap-6">
                    <header className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                            <time dateTime={article.date}>{article.date}</time>
                            <span> |</span>
                            <span>{article.author}</span>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
                            {article.title}
                        </h1>
                    </header>
                    <div
                        className="prose prose-zinc dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                </article>
            </main>
        </div>
    );
}
