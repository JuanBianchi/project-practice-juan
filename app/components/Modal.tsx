"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

interface ModalProps {
    children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const onDismiss = useCallback(() => {
        router.back();
    }, [router]);

    const onOverlayClick = useCallback((e: React.MouseEvent) => {
        if (e.target === overlayRef.current) {
            onDismiss();
        }
    }, [onDismiss]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onDismiss();
        };

        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [onDismiss]);

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={onOverlayClick}
        >
            <div
                ref={wrapperRef}
                className="w-full max-w-md overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 shadow-2xl ring-1 ring-zinc-900/5 dark:ring-white/10 animate-in zoom-in-95 duration-200"
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;