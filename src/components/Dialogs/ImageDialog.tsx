import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import { Image } from "@/types";
import { addImage, updateImage } from "@/apis/imagesApi";

interface ImageDialogProps {
    isOpen: boolean;
    onOpenChange: Dispatch<SetStateAction<boolean>>;
    onImageSaved: (image: Image) => void;
    mode?: "create" | "edit";
    existingImage?: Image;
}

const ImageDialog: React.FC<ImageDialogProps> = ({
                                                     isOpen,
                                                     onOpenChange,
                                                     onImageSaved,
                                                     mode = "create",
                                                     existingImage
                                                 }) => {
    const { user } = useAuth();
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [location, setLocation] = useState("");

    useEffect(() => {
        if (mode === "edit" && existingImage) {
            setTitle(existingImage.title);
            setLink(existingImage.link);
            setLocation(existingImage.location);
        } else {
            setTitle("");
            setLink("");
            setLocation("");
        }
    }, [mode, existingImage, isOpen]);

    const handleSave = async () => {
        if (!title || !link || !location) {
            toast.error("Please fill in all fields");
            return;
        }

        try {
            if (mode === "edit" && existingImage) {
                const updated = await updateImage(existingImage.id, {
                    title,
                    link,
                    location,
                    userId: user.id,
                });
                toast.success("Photo updated");
                onImageSaved(updated);
            } else {
                const created = await addImage({
                    title,
                    link,
                    location,
                    userId: user.id,
                });
                toast.success("Photo added");
                onImageSaved(created);
            }

            onOpenChange(false);
        } catch (err) {
            console.error(err);
            toast.error("Error saving photo");
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>{mode === "edit" ? "Edit Photo" : "New Photo"}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-2">
                    <div className="flex flex-col gap-2">
                        <Label>Title</Label>
                        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>Image URL</Label>
                        <Input value={link} onChange={(e) => setLink(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>Location</Label>
                        <Input value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button onClick={handleSave}>{mode === "edit" ? "Save" : "Create"}</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ImageDialog;
