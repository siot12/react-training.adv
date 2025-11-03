import { useEffect, useState, useTransition } from 'react';
import { fetchPhotos } from '../utils';
import { svg_grid } from '../constants';
import { Concurrent as ProblemStatement } from '../components/Problems';
import EmptyList from '../components/EmptyList';

const PhotoItem = ({ id, title, url, thumbnailUrl }) => {
  const [src, setSrc] = useState(thumbnailUrl);
  return (
    <li className="photo-item flow" title={title}>
      <h4 className="text-capitalize text-ellipsis">{`(${id}) ${title}`}</h4>
      <img alt={title} src={src} onError={() => setSrc(svg_grid)}  loading="lazy" />
    </li>
  );
};

const CHUNK_SIZE = 100;

const Concurrent = () => {
  const [allPhotos, setAllPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [filterText, setFilterText] = useState('');

  const [isPending, startTransition] = useTransition();
  const [filterInput, setFilterInput] = useState('');

  const [visibleCount, setVisibleCount] = useState(CHUNK_SIZE);


  useEffect(() => {
    if (!allPhotos.length) return;
    if (!filterText) {
      setFilteredPhotos(allPhotos);
      setVisibleCount(CHUNK_SIZE); // Reset visible count
      return;
    }

    const result = allPhotos.filter((photo) => {
      return (
        !filterText ||
        photo.title.toLowerCase().includes(filterText.toLowerCase())
      );
    });

    setFilteredPhotos(result);
    setVisibleCount(CHUNK_SIZE);
  }, [filterText, allPhotos]);

  const handleFilterChange = (e) => {
    const newText = e.target.value || '';

    setFilterInput(newText);
    startTransition(() => {
      setFilterText(newText);
    });
  };

  const loadMorePhotos = () => {
    setVisibleCount(prevCount => prevCount + CHUNK_SIZE);
  };

  const visiblePhotos = filteredPhotos.slice(0, visibleCount);

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
            value={filterInput}
            onChange={handleFilterChange}
            className="filter-input"
          />
        </div>
      </div>

      {allPhotos.length < 1 && <EmptyList />}

      {visiblePhotos.length > 0 && (
        <div>
          <div className="filter-summary">
            Showing {visiblePhotos.length} / {filteredPhotos.length} / {allPhotos.length}
          </div>

          <ul className="photo-grid">
            {visiblePhotos.map((photo) => (
              <PhotoItem key={photo.id} {...photo} />
            ))}
          </ul>
          {visibleCount < filteredPhotos.length && (
            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
              <button
                className="btn btn--primary"
                onClick={loadMorePhotos}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Concurrent;
