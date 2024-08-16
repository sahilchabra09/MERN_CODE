import React from "react";
import useFetch from "./hooks/useFetch";
import './App.css'

function PhotoGallery() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/photos");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <h1>Photos</h1>
      <div className="photo-gallery">
        {data.map((photo) => (
          <div key={photo.id} className="photo-item">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default PhotoGallery;
