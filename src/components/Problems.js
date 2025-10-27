export const Concurrent = () => (
  <div className="flow">
    <h2 className="section-title">Concurrent Features</h2>
    <p className="section-text">
      The following problems are some issues that can be experienced on this
      page.
    </p>
    <ul>
      <li>
        All images from the API response are fetched at once, making this page
        slow.
      </li>
      <li>When filtering, the UI freezez and we can not interact with it.</li>
      <li>
        The API call is fast, but the rendering is slow. There is no indication
        of what is happening on the page during rendering time.
      </li>
    </ul>
  </div>
);
