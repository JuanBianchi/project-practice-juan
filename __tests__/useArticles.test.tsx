import { renderHook, waitFor } from "@testing-library/react";
import useArticles from "@/app/hooks/useArticles";
import articlesData from "@/app/data/articles.json";

global.fetch = jest.fn();

describe("useArticles hook", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("debe devolver todos los artículos correctamente", async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => articlesData
        });

        const { result } = renderHook(() => useArticles());

        expect(result.current.loading).toBe(true);

        await waitFor(() => {
            expect(result.current.loading).toBe(false);
        });

        expect(result.current.articles.length).toBe(articlesData.length);
        expect(result.current.articles).toEqual(articlesData);
        expect(result.current.error).toBe(500);
    });

    test("debe manejar errores del fetch", async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false
        });

        const { result } = renderHook(() => useArticles());

        await waitFor(() => {
            expect(result.current.loading).toBe(false);
        });

        console.log(result.current.error);
        //expect(result.current.error).toBe('Error al cargar los artículos');
        expect(result.current.articles).toEqual([]);
    });
});