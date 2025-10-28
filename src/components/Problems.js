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

export const PropDrilling = () => (
  <div className="flow">
    <h2>The problem with local React state:</h2>
    <ul>
      <li>
        The <code>user</code> state lives in <code>AccountDashboard</code>
      </li>
      <li>
        Only <code>EmailToggle</code> actually needs it
      </li>
      <li>
        But we have to pass it through <em>4 components</em> that don't use it
      </li>
      <li>Each component becomes a "prop relay station"</li>
      <li>Hard to maintain, error-prone, and annoying to write</li>
    </ul>
  </div>
);
