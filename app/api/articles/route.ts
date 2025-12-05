import { NextRequest, NextResponse } from 'next/server';
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

async function readArticles(): Promise<ArticleData[]> {
    try {
        const fileContents = await fs.readFile(articlesFilePath, 'utf8');
        return JSON.parse(fileContents);
    } catch (error) {
        console.error('Error al leer los artículos:', error);
        return [];
    }
}

async function writeArticles(articles: ArticleData[]): Promise<void> {
    await fs.writeFile(articlesFilePath, JSON.stringify(articles, null, 2), 'utf8');
}

export async function GET() {
    const articles = await readArticles();
    return NextResponse.json(articles);
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { title, summary, content, author } = body;

        if (!title || !summary || !content || !author) {
            return NextResponse.json(
                { error: 'Todos los campos son requeridos' },
                { status: 400 }
            );
        }

        const articles = await readArticles();

        const newId = articles.length > 0 ? Math.max(...articles.map(a => a.id)) + 1 : 1;

        const newArticle: ArticleData = {
            id: newId,
            title,
            summary,
            content,
            date: new Date().toISOString().split('T')[0],
            author,
        };

        articles.push(newArticle);
        await writeArticles(articles);

        return NextResponse.json(newArticle, { status: 201 });
    } catch (error) {
        console.error('Error al crear el artículo:', error);
        return NextResponse.json(
            { error: 'No se pudo crear el artículo' },
            { status: 500 }
        );
    }
}
