'use client';
import { useEffect, useState } from 'react';
import getArticles from '../services/articleService';

const useArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(500);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const data = await getArticles();
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