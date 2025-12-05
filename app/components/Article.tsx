import React from 'react';
import Link from 'next/link';

interface ArticleProps {
    id: number;
    title: string;
    summary: string;
    date: string;
    author: string;
}

const Article: React.FC<ArticleProps> = ({ id, title, summary, date, author }) => {
    return (
        <article className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
            <header className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                    <time dateTime={date}>{date}</time>
                    <span> | </span>
                    <span>{author}</span>
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {title}
                </h2>
            </header>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                {summary}
            </p>
            <footer className="mt-2">
                <Link
                    href={`/article/${id}`}
                    className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                >
                    Leer más →
                </Link>
            </footer>
        </article>
    );
};

export default Article;
