import {api} from "@/apis/api.ts";
import {Article, Category} from "@/types";

export const getCategories = async (): Promise<Category[]> => {
    try {
        const response = await api.get(`/categories`);

        return response.data.categories.map((category: Category) => ({
            id: category.id,
            title: category.title
        }));
    } catch (error) {
        console.error("Error fetching articles:", error);
        throw error;
    }
};

export const getCategoryById = async (id: string): Promise<Category> => {
    const res = await api.get(`/categories/${id}`);
    return res.data;
};

export const addCategory = async (category: { title: string }): Promise<string> => {
    const res = await api.post("/categories", category);
    return res.data;
};

export const deleteCategory = async (id: string): Promise<void> => {
    await api.delete(`/categories/${id}`);
};