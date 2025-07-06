import {api} from "@/apis/api.ts";
import {Article, ArticleFormInput, UpdateArticleDto} from "@/types";

export const getArticles = async (): Promise<Article[]> => {
    try {
        const response = await api.get(`/articles`);
        
        return response.data.articles.map((article: Article) => ({
            id: article.id,
            title: article.title,
            excerpt: article.excerpt,
            image: article.image,
            author: article.author,
            readTimeInMin: article.readTimeInMin,
            featured: article.featured,
            category: article.category,
            user: article.user,
            createdAt: article.createdAt,
            updatedAt: article.updatedAt
        }));
    } catch (error) {
        console.error("Error fetching articles:", error);
        throw error;
    }
};

export const addArticle = async (article: Omit<ArticleFormInput, "id">): Promise<Article> => {
    try {
        const response = await api.post(`/articles`, article);
        
        return response.data;
    } catch (error) {
        console.error("Error creating article:", error);
        throw error;
    }
};

export const updateArticle = async (id: string, data: UpdateArticleDto): Promise<Article> => {
    const response = await api.put(`/articles/${id}`, data);
    return response.data;
};

export const deleteArticle = async (id: string): Promise<void> => {
    await api.delete(`/articles/${id}`);
};
