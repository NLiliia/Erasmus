import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Video } from "@/types";
import { addVideo, updateVideo } from "@/apis/videosApi";
import { Button } from "@/components/ui/button";
import {
    Dialog, DialogContent, DialogHeader, DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface VideoDialogProps {
    isOpen: boolean;
    onOpenChange: Dispatch<SetStateAction<boolean>>;
    onVideoSaved: (video: Video) => void;
    mode?: "create" | "edit";
    existingVideo?: Video;
}

const VideoDialog: React.FC<VideoDialogProps> = ({
                                                     isOpen,
                                                     onOpenChange,
                                                     onVideoSaved,
                                                     mode,
                                                     existingVideo
                                                 }) => {
    const { user } = useAuth();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [link, setLink] = useState("");

    useEffect(() => {
        if (mode === "edit" && existingVideo) {
            setTitle(existingVideo.title);
            setDescription(existingVideo.description);
            setThumbnail(existingVideo.thumbnail);
            setLink(existingVideo.link);
        } else {
            setTitle("");
            setDescription("");
            setThumbnail("");
            setLink("");
        }
    }, [mode, existingVideo, isOpen]);

    const handleSave = async () => {
        if (!title || !description || !thumbnail || !link) {
            toast.error("Please fill in all fields!");
            return;
        }

        try {
            if (mode === "edit" && existingVideo) {
                const updated = await updateVideo(existingVideo.id, {
                    title,
                    description,
                    thumbnail,
                    link,
                    userId: user.id
                });
                toast.success("The video has been updated");
                onVideoSaved(updated);
            } else {
                const created = await addVideo({
                    title,
                    description,
                    thumbnail,
                    link,
                    userId: user.id
                });
                toast.success("The video has been saved");
                onVideoSaved(created);
            }
            onOpenChange(false);
        } catch (err) {
            console.error(err);
            toast.error("Error saving video");
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>{mode === "edit" ? "Edit video" : "New video"}</DialogTitle>
                </DialogHeader>

                <div className="space-y-4 py-2">
                    <div className="flex flex-col gap-2">
                        <Label>Title</Label>
                        <Input value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>Description</Label>
                        <Input value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>URL (to preview image)</Label>
                        <Input value={thumbnail} onChange={(e) => setThumbnail(e.target.value)}/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>URL (to video)</Label>
                        <Input value={link} onChange={(e) => setLink(e.target.value)}/>
                    </div>
                </div>

                <div className="flex justify-end">
                    <Button onClick={handleSave}>Save</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default VideoDialog;
