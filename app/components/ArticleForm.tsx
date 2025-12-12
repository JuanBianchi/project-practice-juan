"use client";

import { useActionState, useEffect } from "react";
import { createArticleAction } from "../action/postArticlesAction";
import type { JSX } from "react";
import { useRouter } from "next/navigation";
import Form from 'next/form'

const ArticleForm = (): JSX.Element => {
    const router = useRouter();

    const [state, action, isPending] = useActionState(createArticleAction, { success: false, article: null, error: "" });

    useEffect(() => {
        if (state.success) {
            router.push("/");
        }
    }, [state.success, router]);

    return (
        <Form
            action={action}
            className="flex flex-col gap-6 w-full max-w-2xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800"
        >
            {state?.error && (
                <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200 text-sm font-medium">
                    {state.error}
                </div>
            )}

            <div className="flex flex-col gap-2">
                <label htmlFor="title" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    Título
                </label>
                <input
                    name="title"
                    type="text"
                    required
                    placeholder="Escribe un título llamativo"
                    className="w-full px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:ring-indigo-400 transition-all duration-200 ease-in-out"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="summary" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    Resumen
                </label>
                <textarea
                    name="summary"
                    rows={3}
                    required
                    placeholder="Breve descripción del artículo..."
                    className="w-full px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:ring-indigo-400 transition-all duration-200 ease-in-out resize-none"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="content" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    Contenido
                </label>
                <textarea
                    name="content"
                    rows={10}
                    required
                    placeholder="Escribe el contenido completo..."
                    className="w-full px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:ring-indigo-400 transition-all duration-200 ease-in-out font-mono text-sm"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="author" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    Autor
                </label>
                <input
                    name="author"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    className="w-full px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:ring-indigo-400 transition-all duration-200 ease-in-out"
                />
            </div>

            <div className="flex gap-4 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                <button
                    type="submit"
                    disabled={isPending}
                    className="px-6 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm hover:shadow-md active:scale-95 duration-200"
                >
                    {isPending ? "Creando..." : "Crear Artículo"}
                </button>
                <button
                    type="button"
                    className="px-6 py-2.5 rounded-lg border border-zinc-300 text-zinc-700 font-medium hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors active:scale-95 duration-200"
                >
                    Cancelar
                </button>
            </div>
        </Form>
    );
};

export default ArticleForm;