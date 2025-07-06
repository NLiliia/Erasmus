import { useEffect, useState } from "react";
import { Video } from "@/types";
import { getVideos, deleteVideo } from "@/apis/videosApi";
import VideoDialog from "@/components/Dialogs/VideoDialog";
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

const VideosPanel = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editVideo, setEditVideo] = useState<Video | null>(null);

    useEffect(() => {
        const fetchVideos = async () => {
            setLoading(true);
            try {
                const data = await getVideos();
                setVideos(data);
            } catch (error) {
                toast.error("Failed to load videos");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchVideos();
    }, []);

    const handleVideoSaved = (video: Video) => {
        setVideos(prev => {
            const exists = prev.find(v => v.id === video.id);
            if (exists) {
                return prev.map(v => (v.id === video.id ? video : v));
            }
            return [video, ...prev];
        });
        setIsDialogOpen(false);
        setEditVideo(null);
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteVideo(id);
            setVideos(prev => prev.filter(v => v.id !== id));
            toast.success("Video deleted");
        } catch (error) {
            toast.error("Error deleting video");
            console.error(error);
        }
    };

    return (
        <div className="container py-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Videos</h1>
                <Button onClick={() => { setEditVideo(null); setIsDialogOpen(true); }}>New video</Button>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>List of videos</CardTitle>
                </CardHeader>
                <CardContent>
                    {loading ? (
                        <div className="text-center py-8 text-gray-500">Loading...</div>
                    ) : videos.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">No videos found</div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Thumbnail</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Description</TableHead>
                                    <TableHead>Link</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {videos.map(video => (
                                    <TableRow key={video.id}>
                                        <TableCell>
                                            <img src={video.thumbnail} alt={video.title} className="w-16 h-16 object-cover rounded" />
                                        </TableCell>
                                        <TableCell>{video.title}</TableCell>
                                        <TableCell className="max-w-[200px] truncate">{video.description}</TableCell>
                                        <TableCell className="max-w-[200px] truncate">{video.link}</TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="outline" size="sm">Actions</Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuItem onClick={() => { setEditVideo(video); setIsDialogOpen(true); }}>Edit</DropdownMenuItem>
                                                    <DropdownMenuItem onClick={() => handleDelete(video.id)}>Delete</DropdownMenuItem>
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

            <VideoDialog
                isOpen={isDialogOpen}
                onOpenChange={(open) => {
                    setIsDialogOpen(open);
                    if (!open) setEditVideo(null);
                }}
                onVideoSaved={handleVideoSaved}
                mode={editVideo ? "edit" : "create"}
                existingVideo={editVideo ?? undefined}
            />
        </div>
    );
};

export default VideosPanel;
