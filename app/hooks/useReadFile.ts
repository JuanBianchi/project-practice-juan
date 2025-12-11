import { useState, useEffect } from 'react';

const useReadFile = (filePath: string) => {
    const [statusCode, setStatusCode] = useState(200);
    const [useMessage, setUseMessage] = useState('');
    const [data, setData] = useState<any | [] | string>('');

    const readArticles = async () => {
        try {
            const res = await fetch('/api/articles');
            if (!res.ok) {
                throw new Error('Error al leer el archivo');
            }
            const data = await res.json();
            setData(data);
        } catch (error) {
            console.error('Error al leer el archivo:', error);
            setStatusCode(500);
            setUseMessage('Error al leer el archivo' + { setStatusCode });
        }
    }

    useEffect(() => {
        readArticles();
    }, []);

    return { statusCode, useMessage, data };
}

