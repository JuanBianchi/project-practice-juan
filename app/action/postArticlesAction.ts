"use server";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";

export interface ArticleData {
    id: number;
    title: string;
    summary: string;
    content: string;
    date: string;
    author: string;
}

const articlesFilePath = path.join(process.cwd(), "app", "data", "articles.json");

export async function createArticleAction(previousState: any, formData: FormData) {
    const title = formData.get("title")?.toString() || "";
    const summary = formData.get("summary")?.toString() || "";
    const content = formData.get("content")?.toString() || "";
    const author = formData.get("author")?.toString() || "";

    if (!title || !summary || !content || !author) {
        return { success: false, error: "Todos los campos son requeridos", article: null };
    }

    const raw = await fs.readFile(articlesFilePath, "utf8");
    const articles: ArticleData[] = JSON.parse(raw);

    const newArticle: ArticleData = {
        id: articles.length > 0 ? Math.max(...articles.map(a => a.id)) + 1 : 1,
        title,
        summary,
        content,
        author,
        date: new Date().toISOString().split("T")[0],
    };

    articles.push(newArticle);
    await fs.writeFile(articlesFilePath, JSON.stringify(articles, null, 2));

    revalidatePath("/");

    return { success: true, article: newArticle, error: null };
}