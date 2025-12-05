import React from 'react';
import Article from './Article';
import { getArticles } from '../data/articles';

const ArticleList = async () => {
    const articles = await getArticles();

    return (
        <section className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                    Artículos recientes
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                    Desarrollo de software, diseño y más.
                </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-1">
                {articles.map((article) => (
                    <Article
                        key={article.id}
                        id={article.id}
                        title={article.title}
                        summary={article.summary}
                        date={article.date}
                        author={article.author}
                    />
                ))}
            </div>
        </section>
    );
};

export default ArticleList;
