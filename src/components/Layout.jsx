import { Outlet, NavLink } from 'react-router';

const Layout = () => {
  const navigationLinks = [
    { id: 2, title: 'Concurrent Features', path: '/concurrent' },
    { id: 3, title: 'Reports', path: '/reports' },
  ];

  return (
    <div className="app">
      <header className="site-header">
        <h1 className="site-title">
          <NavLink to="/">React Advanced Training</NavLink>
        </h1>
      </header>

      <nav className="site-navigation">
        <ul className="nav-list">
          {navigationLinks.map((link) => (
            <li key={link.id} className="nav-item">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? 'nav-link nav-link-active' : 'nav-link'
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <main className="site-main">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
