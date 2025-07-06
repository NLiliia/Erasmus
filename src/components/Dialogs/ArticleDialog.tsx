import {useState, SetStateAction, Dispatch, useEffect} from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import { useData } from "@/contexts/DataContext";
import {Article, Category} from "@/types";
import {addArticle, updateArticle} from "@/apis/articlesApi.ts";
import {api} from "@/apis/api.ts";

interface ArticleDialogProps {
    isOpen: boolean;
    onOpenChange: Dispatch<SetStateAction<boolean>>;
    onArticleCreated: (article: Article) => void;
    mode?: "create" | "edit";
    existingArticle?: Article;
}

const ArticleDialog: React.FC<ArticleDialogProps> = ({
                                                         isOpen,
                                                         onOpenChange,
                                                         onArticleCreated,
                                                         mode,
                                                         existingArticle,
                                                     }) => {
    const { user } = useAuth();
    const { categories } = useData();

    const [title, setTitle] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [author, setAuthor] = useState(user?.name || "");
    const [readTimeInMin, setReadTimeInMin] = useState<number>(5);
    const [image, setImage] = useState("");
    const [categoryId, setCategoryId] = useState<string>("");
    const [featured, setFeatured] = useState(false);

    useEffect(() => {
        if (mode === "edit" && existingArticle) {
            setTitle(existingArticle.title);
            setExcerpt(existingArticle.excerpt);
            setAuthor(existingArticle.author);
            setImage(existingArticle.image);
            setReadTimeInMin(existingArticle.readTimeInMin);
            setCategoryId(existingArticle.category.id);
            setFeatured(existingArticle.featured);
        } else {
            setTitle("");
            setExcerpt("");
            setAuthor(user?.name || "");
            setImage("");
            setReadTimeInMin(5);
            setCategoryId("");
            setFeatured(false);
        }
    }, [mode, existingArticle, isOpen]);

    const handleSave = async () => {
        if (!title || !excerpt || !author || !image || !categoryId) {
            toast.error("Please fill in all required fields");
            return;
        }

        try {
            if (mode === "edit" && existingArticle) {
                const updated = await updateArticle(existingArticle.id, {
                    title,
                    excerpt,
                    image,
                    author,
                    readTimeInMin,
                    categoryId,
                    featured,
                });
                toast.success("Article updated");
                onArticleCreated(updated);
            } else {
                const created = await addArticle({
                    title,
                    excerpt,
                    image,
                    author,
                    readTimeInMin,
                    userId: user.id,
                    categoryId,
                    featured,
                });
                toast.success("Article created");
                onArticleCreated(created);
            }

            onOpenChange(false);
        } catch (err) {
            console.error(err);
            toast.error("Error saving article");
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>{mode === "edit" ? "Edit Article" : "New Article"}</DialogTitle>
                </DialogHeader>

                <div className="space-y-4 py-2">
                    <div className="flex flex-col gap-2">
                        <Label>Title</Label>
                        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>Description</Label>
                        <Input value={excerpt} onChange={(e) => setExcerpt(e.target.value)} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>Author</Label>
                        <Input value={author} onChange={(e) => setAuthor(e.target.value)} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>Read Time (minutes)</Label>
                        <Input
                            type="number"
                            value={readTimeInMin}
                            onChange={(e) => setReadTimeInMin(parseInt(e.target.value))}
                            min={1}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>Image URL</Label>
                        <Input value={image} onChange={(e) => setImage(e.target.value)} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>Category</Label>
                        <Select value={categoryId} onValueChange={setCategoryId}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((cat: Category) => (
                                    <SelectItem key={cat.id} value={cat.id}>
                                        {cat.title}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex items-center space-x-2">
                        <input
                            id="featured"
                            type="checkbox"
                            checked={featured}
                            onChange={(e) => setFeatured(e.target.checked)}
                        />
                        <Label htmlFor="featured">Mark as featured</Label>
                    </div>
                </div>

                <div className="flex justify-end">
                    <Button onClick={handleSave}>{mode === "edit" ? "Save" : "Create"}</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ArticleDialog;