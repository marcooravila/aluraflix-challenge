import { Card, CardMedia } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../../Context";

const VideoCard = ({ videoUrl, category, name }) => {
  const data = useContext(DataContext);

  const getVideoId = (url) => {
    const match = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(videoUrl);

  if (!videoId) {
    return <div>No se pudo encontrar el video</div>;
  }

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  const color = () => {
    const foundCategory = data.categories.find((cat) => cat.name === category);
    return foundCategory ? foundCategory.color : "#191919";
  };

  return (
    <Card
      sx={{
        maxWidth: 320,
        transition: "box-shadow 0.3s ease",
        ":hover": {
          boxShadow: `0 0 10px ${color()}`,
        },
      }}
      onDoubleClick={() => window.open(videoUrl, "_blank")}
    >
      <CardMedia
        sx={{ height: 180, border: `4px solid ${color()}` }}
        image={thumbnailUrl}
        title={name}
      />
    </Card>
  );
};

export default VideoCard;
