
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { toast } from "sonner";
import { useLocation } from 'react-router-dom';
import {Article, Category, Contact, ContactFormInput, Image, User, Video} from "@/types";
import { getArticles } from "@/apis/articlesApi.ts";
import {getContacts, sendContactMessage} from "@/apis/contactsApi.ts";
import {getCategories} from "@/apis/categoriesApi.ts";
import {getImages} from "@/apis/imagesApi.ts";
import {getVideos} from "@/apis/videosApi.ts";

interface DataContextType {
    users: User[];
    articles: Article[];
    categories: Category[];
    images: Image[];
    videos: Video[];
    contacts: Contact[];
    loading: boolean;
    
    getArticles: () => Article[];
    getCategories: () => Category[];
    getImages: () => Image[];
    setImages: React.Dispatch<React.SetStateAction<Image[]>>;
    setVideos: React.Dispatch<React.SetStateAction<Video[]>>;
    getVideos: () => Video[];
    getContacts: () => Contact[];
    sendMessage: (input: ContactFormInput) => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
    const [articles, setArticles] = useState<Article[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [images, setImages] = useState<Image[]>([]);
    const [videos, setVideos] = useState<Video[]>([]);
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState<User[]>([]);
    const { user } = useAuth();
    
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            loadArticles();
            loadVideos();
            loadImages();
        } else if (location.pathname.startsWith("/articles")) {
            loadArticles();
        } else if (location.pathname.startsWith("/admin/articles")) {
            loadCategories();
        } else if (location.pathname.startsWith("/admin/images")) {
            loadImages();
        } else if (location.pathname.startsWith("/admin/videos")) {
            loadVideos();
        } else if (location.pathname.startsWith("/admin/contacts")) {
            loadContacts();
        }
    }, [location.pathname, user, location]);

    const sendMessage = async (input: ContactFormInput) => {
        try {
            await sendContactMessage(input);
            toast.success("The message was sent successfully.");
        } catch (error) {
            console.error("Error sending message:", error);
            toast.error("Failed to send message");
        }
    };

    const loadArticles = async () => {
        try {
            const data = await getArticles();
            setArticles(data);
        } catch (error) {
            console.error('Error loading articles:', error);
            toast.error('Failed to load articles');
        } finally {
            setLoading(false);
        }
    };

    const loadCategories = async () => {
        try {
            const data = await getCategories();
            setCategories(data);
        } catch (error) {
            console.error('Error loading categories:', error);
            toast.error('Failed to load categories');
        } finally {
            setLoading(false);
        }
    };

    const loadImages = async () => {
        try {
            const data = await getImages();
            setImages(data);
        } catch (error) {
            console.error('Error while uploading photos:', error);
            toast.error('Could not load photos.');
        } finally {
            setLoading(false);
        }
    };

    const loadVideos = async () => {
        try {
            const data = await getVideos();
            setVideos(data);
        } catch (error) {
            console.error('Error loading video:', error);
            toast.error('Failed to load video');
        } finally {
            setLoading(false);
        }
    };

    const loadContacts = async () => {
        try {
            const data = await getContacts();
            setContacts(data);
        } catch (error) {
            console.error('Error loading queries:', error);
            toast.error('Failed to load queries');
        } finally {
            setLoading(false);
        }
    };

    return (
        <DataContext.Provider value={{
            users,
            articles,
            categories,
            images, 
            videos,
            contacts, 
            loading,
            getArticles: () => articles,
            getCategories: () => categories,
            getImages: () => images,
            setImages,
            getVideos: () => videos,
            setVideos,
            getContacts: () => contacts,
            sendMessage,
        }}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    const context = useContext(DataContext);

    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }

    return context;
}
