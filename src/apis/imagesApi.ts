import {api} from "@/apis/api.ts";
import {Image, ImageFormInput} from "@/types";

export const getImages = async (): Promise<Image[]> => {
    const res = await api.get("/images");
    return res.data.images;
};

export const addImage = async (data: Omit<ImageFormInput, "id">): Promise<Image> => {
    const res = await api.post("/images", data);
    return res.data;
};

export const updateImage = async (id: string, data: ImageFormInput): Promise<Image> => {
    const res = await api.put(`/images/${id}`, data);
    return res.data;
};

export const deleteImage = async (id: string): Promise<void> => {
    await api.delete(`/images/${id}`);
};