import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";

// import {Posts} from '../../dummyData'

function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const res = username
      ? await axios.get(`/posts/profile/${username}`)
      : await axios.get("posts/timeline/62c0363cd084792b5b1574d2");
    setPosts(res.data)
  };

  useEffect(() => {
    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => {
          return <Post key={p._id} post={p} />;
        })}
      </div>
    </div>
  );
}

export default Feed;
