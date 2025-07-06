import { api } from "@/apis/api";
import { Video, VideoFormInput } from "@/types";

export const getVideos = async (): Promise<Video[]> => {
    const response = await api.get("/videos");
    return response.data.videos;
};

export const addVideo = async (video: Omit<VideoFormInput, "id">): Promise<Video> => {
    const response = await api.post("/videos", video);
    return response.data;
};

export const updateVideo = async (id: string, data: VideoFormInput): Promise<Video> => {
    const response = await api.put(`/videos/${id}`, data);
    return response.data;
};

export const deleteVideo = async (id: string): Promise<void> => {
    await api.delete(`/videos/${id}`);
};