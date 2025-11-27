import { NavLink, Outlet } from "react-router-dom";
import { Button } from "../components";
import { useTheme } from "../contexts";

const navLinks = [{ to: "/", label: "Home" }];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `nav-link${isActive ? " nav-link--active" : ""}`;

function MainLayout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app-shell theme-${theme}`}>
      <header className="app-shell__header">
        <div className="app-shell__brand">React Live Coding Starter</div>
        <nav className="app-shell__nav" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Button variant="secondary" onClick={toggleTheme}>
          Toggle {theme === "light" ? "Dark" : "Light"}
        </Button>
      </header>
      <main className="app-shell__main">
        <Outlet />
      </main>
      <footer className="app-shell__footer">Footer</footer>
    </div>
  );
}

export default MainLayout;
