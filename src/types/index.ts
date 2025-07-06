
export type Role = 'admin' | 'undefined';

export interface User {
    id: string;
    name: string;
    email: string;
    role: Role;
}

export interface Article {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    author: string;
    readTimeInMin: number;
    featured: boolean;
    category: Category;
    user: User;
    createdAt: Date;
    updatedAt: Date;
}

export interface Image {
    id: string;
    title: string;
    link: string;
    location: string;
    user: User;
    createdAt: Date;
    updatedAt: Date;
}

export interface Video {
    id: string;
    title: string;
    thumbnail: string;
    link: string;
    description: string;
    user: User;
    createdAt: Date;
    updatedAt: Date;
}

export interface Category {
    id: string;
    title: string;
}

export interface Contact {
    id: string;
    name: string;
    email: string;
    messageSubject: string;
    message: string;
}

export interface ContactFormInput {
    name: string;
    email: string;
    messageSubject: string;
    message: string;
}

export interface ArticleFormInput {
    title: string;
    excerpt: string;
    image: string;
    author: string;
    readTimeInMin: number;
    userId: string;
    categoryId: string;
    featured: boolean;
}

export interface ImageFormInput {
    title: string;
    link: string;
    location: string;
    userId: string;
}

export interface VideoFormInput {
    title: string;
    thumbnail: string;
    link: string;
    description: string;
    userId: string;
}

export interface UpdateArticleDto {
    title: string;
    excerpt: string;
    image: string;
    author: string;
    readTimeInMin: number;
    categoryId: string;
    featured: boolean;
}