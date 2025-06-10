import React, { useCallback, useEffect, useState } from 'react';
import "./Feed.css";
import { Link } from 'react-router-dom';
import { Api_key } from '../data';
import { convert_value } from '../data';
import moment from 'moment';

export default function Feed({isSidebaropen,category}) {

    const [data,setData] = useState([]);

    const fetchData = useCallback( async ()=>{
        let videolist = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${Api_key}`;
        await fetch(videolist).then(response => response.json()).then(data => setData(data.items));
    },[category])

    useEffect(()=>{
        fetchData();

    },[category,fetchData])
 
  return (
    <div className={`feed ${isSidebaropen ? "large-content":""}`}>
        {
            data.map((item,index)=>{
                return(
               <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className='card'>
                    <img src={item.snippet.thumbnails.medium.url} alt='video-img'></img>
                    <h3>{item.snippet.title}</h3>
                    <h4>{item.snippet.channelTitle}</h4>
                    <p>{convert_value(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow() }</p>
                </Link>

                )
            })
        }
        
        
        
     
    </div>
  )
}
