import axios from "axios";

const KEY = "AIzaSyAoazPJWXfD50EzlH0Eoj64ekVRo1R71LU";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
});
