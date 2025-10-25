import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { addFeed} from "../utils/feedSlice"
import UserCard from "./UserCard"

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  console.log(feed);
  const dispatch = useDispatch();

  const getFeed = async() => {
    if(feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {withCredentials: true});

      console.log(res);
      dispatch(addFeed(res.data?.data));
    } catch (err) {
      console.log(err.mesaage);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);
  return (
    feed && 
   ( <div className="flex justify-center mx-10  ">
      <UserCard user={feed[1]}/>
    </div>)
  )
}

export default Feed;