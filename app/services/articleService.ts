const getArticles = async () => {
    try {
        const response = await fetch('/api/articles');
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

export default getArticles;
