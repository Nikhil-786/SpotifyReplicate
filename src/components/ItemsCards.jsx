import React from "react";

const ItemsCards = ({ itemsCards }) => {
  const items = itemsCards?.data?.albums?.items;

  return (
    <div className="ItemCard">
      {items?.map((data) => {
        return (
          <ul className="ItemsCards" key={data?.id}>
            <li htmlFor="AlbumType">Albumtype-{data?.album_type}</li>
            <li>
              <img src={data?.images[1]?.url} alt="albumImg" style={{width:200, height:200}} />
            </li>
            <li htmlFor="name">AlbumName:{data?.name}</li>
            <li htmlFor="releaseDate">Album-ReleaseDate{data?.release_date}</li>
            <li htmlFor="total_tracks">Total-Tracks{data?.total_tracks}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default ItemsCards;
