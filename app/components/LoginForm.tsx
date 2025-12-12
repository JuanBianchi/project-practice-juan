"use client";

import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            console.log("Login submitted");
        }, 1000);
    }

    return (
        <div className="flex flex-col space-y-4 px-6 py-8 sm:px-10">
            <div className="flex flex-col space-y-1 text-center">
                <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                    Bienvenido
                </h1>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Ingrese su correo electrónico para iniciar sesión
                </p>
            </div>

            <div className="grid gap-6">
                <form onSubmit={onSubmit}>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-900 dark:text-zinc-100"
                                htmlFor="email"
                            >
                                Correo electrónico
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-50 dark:focus:ring-zinc-300 dark:focus:ring-offset-zinc-900"
                                id="email"
                                placeholder="name@example.com"
                                type="email"
                                autoCapitalize="none"
                                autoComplete="email"
                                autoCorrect="off"
                                disabled={isLoading}
                            />
                        </div>
                        <div className="grid gap-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-900 dark:text-zinc-100"
                                htmlFor="password"
                            >
                                Contraseña
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-50 dark:focus:ring-zinc-300 dark:focus:ring-offset-zinc-900"
                                id="password"
                                type="password"
                                disabled={isLoading}
                            />
                        </div>
                        <button
                            className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-900/90 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus:ring-zinc-50 dark:focus:ring-offset-zinc-900"
                            disabled={isLoading}
                        >
                            {isLoading && (
                                <svg
                                    className="mr-2 h-4 w-4 animate-spin"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    />
                                </svg>
                            )}
                            Iniciar sesión
                        </button>
                    </div>
                </form>
            </div>

            <p className="px-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
                <Link
                    href="/register"
                    className="hover:text-zinc-900 underline underline-offset-4 dark:hover:text-zinc-50"
                >
                    No tenés una cuenta? Registrate ahora
                </Link>
            </p>
        </div>
    );
}

export default LoginForm;
