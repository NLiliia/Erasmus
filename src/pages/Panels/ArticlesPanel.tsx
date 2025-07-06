import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";
import { Article } from "@/types";
import ArticleDialog from "@/components/Dialogs/ArticleDialog";
import { getArticles, deleteArticle } from "@/apis/articlesApi.ts";
import { toast } from "sonner";

const ArticlesPanel = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editArticle, setEditArticle] = useState<Article | null>(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const data = await getArticles();
                setArticles(data);
            } catch (error) {
                console.error("Error fetching articles:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, [user]);

    const handleArticleCreated = (article: Article) => {
        setArticles((prev) => {
            const exists = prev.find((a) => a.id === article.id);
            if (exists) {
                return prev.map((a) => (a.id === article.id ? article : a));
            }
            return [article, ...prev];
        });
        setIsDialogOpen(false);
        setEditArticle(null);
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteArticle(id);
            setArticles((prev) => prev.filter((a) => a.id !== id));
            toast.success("The article has been deleted");
        } catch (err) {
            console.error(err);
            toast.error("Unable to delete article");
        }
    };

    return (
        <div className="container py-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Articles</h1>
                <Button onClick={() => {
                    setEditArticle(null);
                    setIsDialogOpen(true);
                }}>New article</Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>List of articles</CardTitle>
                </CardHeader>
                <CardContent>
                    {loading ? (
                        <div className="text-center py-8 text-gray-500">Loading...</div>
                    ) : articles.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">No articles found</div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Image</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Description</TableHead>
                                    <TableHead>Author</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead>Reading time</TableHead>
                                    <TableHead>Important</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {articles.map(article => (
                                    <TableRow key={article.id}>
                                        <TableCell>
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="w-16 h-16 object-cover rounded"
                                            />
                                        </TableCell>
                                        <TableCell>{article.title}</TableCell>
                                        <TableCell className="max-w-[200px] truncate">{article.excerpt}</TableCell>
                                        <TableCell>{article.author}</TableCell>
                                        <TableCell>{article.category?.title ?? "—"}</TableCell>
                                        <TableCell>{article.readTimeInMin} min</TableCell>
                                        <TableCell>{article.featured ? "Так" : "Ні"}</TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="outline" size="sm">Actions</Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuItem onClick={() => {
                                                        setEditArticle(article);
                                                        setIsDialogOpen(true);
                                                    }}>
                                                        Edit
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem onClick={() => handleDelete(article.id)}>
                                                        Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>

            <ArticleDialog
                isOpen={isDialogOpen}
                onOpenChange={(open) => {
                    setIsDialogOpen(open);
                    if (!open) setEditArticle(null);
                }}
                onArticleCreated={handleArticleCreated}
                mode={editArticle ? "edit" : "create"}
                existingArticle={editArticle ?? undefined}
            />
        </div>
    );
};

export default ArticlesPanel;
