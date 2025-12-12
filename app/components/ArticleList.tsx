"use client";

import React from "react";
import Article, { ArticleProps } from "./Article";
import useArticles from "../hooks/useArticles";

const ArticleList = () => {
    const { articles, loading } = useArticles();

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
            {loading && <p className="text-zinc-500">Cargando artículos...</p>}
            <div className="grid gap-6 sm:grid-cols-1">
                {!loading && articles.map((article: ArticleProps) => (
                    <Article key={article.id} {...article} />
                ))}
            </div>
        </section>
    );
};

export default ArticleList;
