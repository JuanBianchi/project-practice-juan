'use client';
import { useEffect, useState } from 'react';

const useArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(500);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('/api/articles');
                console.log({ response });
                if (!response.ok) {

                    //throw new Error('Error al cargar los artículos');

                }
                const data = await response.json();
                setArticles(data);
            } catch (e: any) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };
        fetchArticles();
    }, []);

    return { articles, loading, error };
};

export default useArticles;