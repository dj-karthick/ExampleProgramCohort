import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title: "How to coding in 30 days | 30 day plan | Code with Me",
    image: "deedi.jpg",
    thumImage: "Tseries.jpg",
    author:  "Karthick",
    views: "3B",
    timestamp:"1 Week ago"
},{
    title: "How to coding in 30 days | 30 day plan | Code with Me",
    image: "deedi.jpg",
    thumImage: "Tseries.jpg",
    author:  "Karthick",
    views: "3B",
    timestamp:"1 Week ago"
},{
    title: "How to coding in 30 days | 30 day plan | Code with Me",
    image: "deedi.jpg",
    thumImage: "Tseries.jpg",
    author:  "Karthick",
    views: "3B",
    timestamp:"1 Week ago"
},{
    title: "How to coding in 30 days | 30 day plan | Code with Me",
    image: "deedi.jpg",
    thumImage: "Tseries.jpg",
    author:  "Karthick",
    views: "3B",
    timestamp:"1 Week ago"
},{
    title: "How to coding in 30 days | 30 day plan | Code with Me",
    image: "deedi.jpg",
    thumImage: "Tseries.jpg",
    author:  "Karthick",
    views: "3B",
    timestamp:"1 Week ago"
},{
    image: "deedi.jpg",
    thumImage: "Tseries.jpg",
    author:  "Karthick",
    views: "3B",
    timestamp:"1 Week ago"
},{
    image: "deedi.jpg",
    thumImage: "Tseries.jpg",
    author:  "Karthick",
    views: "3B",
    timestamp:"1 Week ago"
},{
    image: "deedi.jpg",
    thumImage: "Tseries.jpg",
    author:  "Karthick",
    views: "3B",
    timestamp:"1 Week ago"
}]

export function VideoGrid(){
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map( video => <div>
            <VideoCard
            title = {video.title}
            image= {video.image}
            thumImage= {video.thumImage}
            author= {video.author}
            views= {video.views}
            timestamp={video.timestamp}>
            </VideoCard>
        </div> )}
    </div>
}