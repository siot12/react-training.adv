import { useEffect, useState } from 'react';
import { fetchPhotos } from '../utils';

const EmptyList = () => {
  return <p>Nothing to show here..</p>;
};

const ProblemStatement = () => (
  <div className="flow">
    <h2 className="section-title">Concurrent Features</h2>
    <p className="section-text">
      The following problems are some issues that can be experienced on this
      page.
    </p>
    <ul>
      <li>
        During load time, the UI freezez and gives us no indication of what's
        happening
      </li>
      <li>
        If something happens in the UI during load, other parts of the app
        freezez/blocks
      </li>
      <li>
        All images are fetched (5000) at once, making this call heavy and the UI
        to render slowly
      </li>
    </ul>
  </div>
);

const PhotoItem = ({ id, title, url }) => {
  const [src, setSrc] = useState(url);
  return (
    <li className="photo-item flow" title={title}>
      <h4 className="text-capitalize text-ellipsis">{`(${id}) ${title}`}</h4>
      <img
        alt={title}
        src={src}
        onError={() =>
          setSrc('https://avatars.githubusercontent.com/u/76650494?s=48&v=4')
        }
      />
    </li>
  );
};

const Concurrent = () => {
  const [photos, setPhotos] = useState([]);

  return (
    <section className="content-section">
      <ProblemStatement />

      <div className="button-group">
        <button
          className={`btn btn--primary`}
          onClick={() => fetchPhotos(setPhotos)}
        >
          Fetch Photos
        </button>

        {photos.length > 0 && (
          <button className="btn btn--secondary" onClick={() => setPhotos([])}>
            Clear Photos
          </button>
        )}
      </div>

      {photos.length < 1 && <EmptyList />}
      {photos.length > 0 && (
        <ul className="photo-grid">
          {photos.map((photo) => (
            <PhotoItem key={photo.id} {...photo} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Concurrent;
