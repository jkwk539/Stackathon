import React, { useEffect, useState } from "react";
import './style.css';
import { AnimeList } from "./list";
import { AnimeInfo } from "./info";
import { AddToList } from "./addtolist";
import { RemoveFromList } from "./removefromlist";
const Content = () => {

  const [search,setSearch]=useState('Naruto')
  const [animeData,setAnimeData]=useState();
  const [animeInfo,setAnimeInfo]=useState()
  const [myAnimeList,setMyAnimeList]=useState([])

  const addTo=(anime)=>{
    const index=myAnimeList.findIndex((myanime)=>{
        return myanime.mal_id === anime.mal_id
    })
    if(index < 0){
      const newArray=[...myAnimeList,anime]
      setMyAnimeList(newArray);
    }
    
  }
  const removeFrom=(anime)=>{
    const newArray=myAnimeList.filter((myanime)=>{
      return myanime.mal_id !== anime.mal_id
    })
    setMyAnimeList(newArray)
  }
  const getData=async()=>{
      const res=await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
      const resData= await res.json();
      setAnimeData(resData.data)
  }
  useEffect(()=>{
    getData()
  },[search])

  return (
    <>
        <div className='flex justify-between bg-gray-700 w-full p-4'>
          <div className="search-box">
              <input type="search" placeholder="Search your anime" 
              onChange={(e)=>setSearch(e.target.value)}/>
          </div>
        </div>

        <div className="container">
          <div >
           {animeInfo && <AnimeInfo animeInfo={animeInfo}/>}
          </div>
          <div className="p-2 justify-around ml-32 h-26 w-2/3 flex
                          items-start">
            <h2 className="text-heading">Anime</h2>
            <div className="row">
                <AnimeList 
                animelist={animeData}
                setAnimeInfo={setAnimeInfo}
                animeComponent={AddToList}
                handleList={(anime)=>addTo(anime)}
                />
            </div>
            <h2 className="text-heading">My List</h2>
            <div className="row">
                <AnimeList 
                animelist={myAnimeList}
                setAnimeInfo={setAnimeInfo}
                animeComponent={RemoveFromList}
                handleList={(anime)=>removeFrom(anime)}
                />
            </div>
          </div>
        </div>
    </>
  );
}

export default Content;