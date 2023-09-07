import { Box } from "@mui/material";
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={4} sx={{ p: 2 }}>
      <Post
        title="Shrimp and Chorizo Paella"
        imageUrl="https://images.pexels.com/photos/2672979/pexels-photo-2672979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Post
        title="Shrimp and Chorizo Paella"
        imageUrl="https://images.pexels.com/photos/5731834/pexels-photo-5731834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Post
        title="Shrimp and Chorizo Paella"
        imageUrl="https://images.pexels.com/photos/7670022/pexels-photo-7670022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Post
        title="Shrimp and Chorizo Paella"
        imageUrl="https://images.pexels.com/photos/1250643/pexels-photo-1250643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Post
        title="Shrimp and Chorizo Paella"
        imageUrl="https://images.pexels.com/photos/4259140/pexels-photo-4259140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    </Box>
  );
};

export default Feed;
