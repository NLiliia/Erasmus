import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Category } from "@/types";
import { getCategories, deleteCategory } from "@/apis/categoriesApi.ts";
import CategoryDialog from "@/components/Dialogs/CategoryDialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const CategoriesPanel = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await getCategories();
                setCategories(data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        fetch();
    }, []);

    const handleCategoryCreated = (newCategory: Category) => {
        setCategories(prev => [newCategory, ...prev]);
    };

    const handleDeleteCategory = async (id: string) => {
        try {
            await deleteCategory(id);
            setCategories(prev => prev.filter(cat => cat.id !== id));
            toast.success("The category has been deleted!");
        } catch (e) {
            console.error(e);
            toast.error("Error deleting category");
        }
    };

    return (
        <div className="container py-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Categories</h1>
                <Button onClick={() => setIsDialogOpen(true)}>New category</Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>List of the categories</CardTitle>
                </CardHeader>
                <CardContent>
                    {loading ? (
                        <div className="text-center py-8 text-gray-500">Loading...</div>
                    ) : categories.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">Categories is empty!</div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Id</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {categories.map(cat => (
                                    <TableRow key={cat.id}>
                                        <TableCell>{cat.id}</TableCell>
                                        <TableCell>{cat.title}</TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button size="sm" variant="outline">Actions</Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuItem onClick={() => handleDeleteCategory(cat.id)}>
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

            <CategoryDialog
                isOpen={isDialogOpen}
                onOpenChange={setIsDialogOpen}
                onCategoryCreated={handleCategoryCreated}
            />
        </div>
    );
};

export default CategoriesPanel;
