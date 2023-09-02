export const youtubeVideoApi = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + process.env.REACT_APP_GOOGLE_API_KEY;

export const LIVE_CHAT_COUNT = 10;
export const YOUTUBE_SEARCH_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="