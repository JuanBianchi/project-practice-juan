import { promises as fs } from 'fs';
import path from 'path';

export interface ArticleData {
    id: number;
    title: string;
    summary: string;
    content: string;
    date: string;
    author: string;
}

const articlesFilePath = path.join(process.cwd(), 'app', 'data', 'articles.json');

export async function getArticles(): Promise<ArticleData[]> {
    try {
        const fileContents = await fs.readFile(articlesFilePath, 'utf8');
        return JSON.parse(fileContents);
    } catch (error) {
        console.error('Error al leer los artículos:', error);
        return [];
    }
}

export async function getArticleById(id: number): Promise<ArticleData | undefined> {
    const articles = await getArticles();
    return articles.find((article) => article.id === id);
}
