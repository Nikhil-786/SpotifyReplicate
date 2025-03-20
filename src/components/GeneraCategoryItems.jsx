import React from "react";

const GeneraCategoryItems = ({ newRelease }) => {
  let Items = newRelease.data.categories.items;
  return (
    <div className="GeItemCard">
      {Items?.map((data) => {
        return (
          <ul className="ItemsCards" key={data?.id}>
            <li>
              <img
                src={data?.icons[0].url}
                alt="albumImg"
                style={{ width: 200, height: 200 }}
              />
            </li>
            <li htmlFor="name">AlbumName:{data?.name}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default GeneraCategoryItems;
