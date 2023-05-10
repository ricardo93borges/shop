import Cart from "./cart";

export default function Header() {
  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io"></a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item is-size-4">SHOP</a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <Cart />
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </header>
  );
}
