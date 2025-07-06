import { useEffect, useState } from "react";
import { Image } from "@/types";
import { getImages, deleteImage } from "@/apis/imagesApi";
import ImageDialog from "@/components/Dialogs/ImageDialog";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
    Card, CardContent, CardHeader, CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const ImagesPanel = () => {
    const [images, setImages] = useState<Image[]>([]);
    const [loading, setLoading] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editImage, setEditImage] = useState<Image | null>(null);

    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);
            try {
                const data = await getImages();
                setImages(data);
            } catch (error) {
                toast.error("Failed to load images");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, []);

    const handleImageSaved = (image: Image) => {
        setImages(prev => {
            const exists = prev.find(i => i.id === image.id);
            if (exists) {
                return prev.map(i => (i.id === image.id ? image : i));
            }
            return [image, ...prev];
        });
        setIsDialogOpen(false);
        setEditImage(null);
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteImage(id);
            setImages(prev => prev.filter(i => i.id !== id));
            toast.success("Image deleted");
        } catch (error) {
            toast.error("Error deleting image");
            console.error(error);
        }
    };

    return (
        <div className="container py-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Images</h1>
                <Button onClick={() => { setEditImage(null); setIsDialogOpen(true); }}>Add Image</Button>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>List of photos</CardTitle>
                </CardHeader>
                <CardContent>
                    {loading ? (
                        <div className="text-center py-8 text-gray-500">Loading...</div>
                    ) : images.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">No images found</div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Preview</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Location</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {images.map(image => (
                                    <TableRow key={image.id}>
                                        <TableCell>
                                            <img src={image.link} alt={image.title} className="w-16 h-16 object-cover rounded" />
                                        </TableCell>
                                        <TableCell>{image.title}</TableCell>
                                        <TableCell>{image.location}</TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="outline" size="sm">Actions</Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuItem onClick={() => { setEditImage(image); setIsDialogOpen(true); }}>Edit</DropdownMenuItem>
                                                    <DropdownMenuItem onClick={() => handleDelete(image.id)}>Delete</DropdownMenuItem>
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

            <ImageDialog
                isOpen={isDialogOpen}
                onOpenChange={(open) => {
                    setIsDialogOpen(open);
                    if (!open) setEditImage(null);
                }}
                onImageSaved={handleImageSaved}
                mode={editImage ? "edit" : "create"}
                existingImage={editImage ?? undefined}
            />
        </div>
    );
};

export default ImagesPanel;
