import React from 'react'

const FeaturedItemCard = ({newRelease}) => {
const Items =newRelease.data.items;
console.log(Items);
  return (
    <div className="FeItemCard">
    {Items?.map((data) => {
      return (
        <ul className="FeItemsCards" key={data?.id}>
          <li htmlFor="AlbumType">Albumtype-{data.track.album.album_type}</li>
          <li>
            <img src={data?.track.album.images[1].url} alt="albumImg" style={{width:200, height:200}} />
          </li>
          <li htmlFor="name">AlbumName:{data?.track.album.name}</li>
          <li htmlFor="releaseDate">Album-ReleaseDate{data?.track.album.release_date}</li>
          <li htmlFor="total_tracks">Total-Tracks{data?.track.album.total_tracks}</li>
        </ul>
      );
    })}
  </div>
  )
}

export default FeaturedItemCard
