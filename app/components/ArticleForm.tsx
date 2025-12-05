'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const ArticleForm: React.FC = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: '',
        summary: '',
        content: '',
        author: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('/api/articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to create article');
            }

            router.push('/');
            router.refresh();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            {error && (
                <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200">
                    {error}
                </div>
            )}

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="title"
                    className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
                >
                    Título
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="summary"
                    className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
                >
                    Resumen
                </label>
                <textarea
                    id="summary"
                    name="summary"
                    value={formData.summary}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="content"
                    className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
                >
                    Contenido (HTML)
                </label>
                <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                    rows={10}
                    className="px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-900 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="author"
                    className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
                >
                    Autor
                </label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                />
            </div>

            <div className="flex gap-4 pt-4">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    {isSubmitting ? 'Creando...' : 'Crear Artículo'}
                </button>
                <button
                    type="button"
                    onClick={() => router.push('/')}
                    className="px-6 py-2 rounded-lg border border-zinc-300 text-zinc-900 font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                    Cancelar
                </button>
            </div>
        </form>
    );
};

export default ArticleForm;
