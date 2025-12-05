import React from 'react';
import ArticleForm from '../components/ArticleForm';
import Link from 'next/link';

export default function CreateArticlePage() {
    return (
        <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-start justify-start py-12 px-6 bg-white dark:bg-black mx-auto sm:px-12">
                <Link
                    href="/"
                    className="mb-8 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                    ← Volver
                </Link>
                <div className="flex flex-col gap-6 w-full">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                            Crear Nuevo Artículo
                        </h1>
                        <p className="text-zinc-600 dark:text-zinc-400">
                            Completa el formulario para crear un nuevo artículo.
                        </p>
                    </div>
                    <ArticleForm />
                </div>
            </main>
        </div>
    );
}
