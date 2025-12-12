import { useState, useEffect } from 'react';
import getFile from '../services/fileService';
import { get } from 'http';

const useReadFile = (filePath: string) => {
    const [statusCode, setStatusCode] = useState(500);
    const [useMessage, setUseMessage] = useState('');
    const [data, setData] = useState<any | [] | string>('');

    const readArticles = async () => {
        const fetchArticles = async () => {
            try {
                const data = await getFile();
                setData(data);
            } catch (e: any) {
                setUseMessage(e.message);
            } finally {
                setStatusCode(200);
            }
        };

        fetchArticles();
    }

    useEffect(() => {
        readArticles();
    }, []);

    return { statusCode, useMessage, data };
}

