import { useState, useEffect } from 'react';
import { fetchPhotos } from '../utils';
import { svg_grid, svg_gradient } from '../constants';
import { Concurrent as ProblemStatement } from '../components/Problems';
import EmptyList from '../components/EmptyList';

const PhotoItem = ({ id, title, url, thumbnailUrl }) => {
  const [src, setSrc] = useState(thumbnailUrl);
  return (
    <li className="photo-item flow" title={title}>
      <h4 className="text-capitalize text-ellipsis">{`(${id}) ${title}`}</h4>
      <img alt={title} src={src} onError={() => setSrc(svg_grid)} />
    </li>
  );
};

const Concurrent = () => {
  const [allPhotos, setAllPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    if (!allPhotos.length) return;
    if (!filterText) return setFilteredPhotos(allPhotos);

    const result = allPhotos.filter((photo) => {
      const textMatch =
        !filterText ||
        photo.title.toLowerCase().includes(filterText.toLowerCase());

      return textMatch;
    });

    setFilteredPhotos(result);
  }, [filterText, allPhotos]);

  return (
    <section className="content-section">
      <ProblemStatement />

      <div className="button-group">
        <button
          className={`btn btn--primary`}
          onClick={() => fetchPhotos((data) => setAllPhotos(data))}
        >
          Fetch Photos
        </button>
      </div>

      <div className="filter-controls">
        <div className="filter-group">
          <label htmlFor="filter-text">Filter by title:</label>
          <input
            id="filter-text"
            type="text"
            placeholder="Filter..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value || '')}
            className="filter-input"
          />
        </div>
      </div>

      {allPhotos.length < 1 && <EmptyList />}

      {filteredPhotos.length > 0 && (
        <div>
          <div className="filter-summary">
            Showing {filteredPhotos.length} / {allPhotos.length}
          </div>

          <ul className="photo-grid">
            {filteredPhotos.map((photo) => (
              <PhotoItem key={photo.id} {...photo} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Concurrent;
