import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { addCategory, getCategoryById } from "@/apis/categoriesApi.ts";
import { Category } from "@/types";

interface CategoryDialogProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    onCategoryCreated: (category: Category) => void;
}

const CategoryDialog: React.FC<CategoryDialogProps> = ({
                                                           isOpen,
                                                           onOpenChange,
                                                           onCategoryCreated,
                                                       }) => {
    const [title, setTitle] = useState("");

    const handleCreate = async () => {
        if (!title.trim()) {
            toast.error("Please enter a category name");
            return;
        }

        try {
            const id = await addCategory({ title });
            const createdCategory = await getCategoryById(id);
            onCategoryCreated(createdCategory);

            toast.success("Category created");
            onOpenChange(false);
            setTitle("");
        } catch (error) {
            console.error(error);
            toast.error("Error creating category");
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>New Category</DialogTitle>
                </DialogHeader>

                <div className="space-y-4 py-2">
                    <div className="flex flex-col gap-2">
                        <Label>Category Name</Label>
                        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>

                    <div className="flex justify-end">
                        <Button onClick={handleCreate}>Create</Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CategoryDialog;