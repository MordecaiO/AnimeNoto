import "../LandingPage/LandingPage.css";

export const LandingPage = () => {
  return (
    <div className="landing-page main">
      <header className="landing-page header">
        <nav className="navbar">
          <div className="navbar-left">
            <a className="logo-wrapper" href="/AnimeNoto">
              <img
                className="anime-noto"
                src="/AnimeNoto/animenoto_logo_main.jpeg"
                alt="AnimeNoto Logo"
              ></img>
              <b className="logo-text">AnimeNoto</b>
            </a>
          </div>
          <div className="navbar-middle"></div>
          <div className="navbar-right"></div>
        </nav>
      </header>
      <main className="landing-page-content">
        <div className="hero-img-wrapper">
          <img className="hero-img" />
        </div>
        <section className="auth-container">
          <div className="auth-content">
            <div className="text-wrapper">
              <h3>Login or Sign up to AnimeNoto</h3>
            </div>
            <div className="auth-btn-container">
              <button className="auth-login">Login</button>
              <button className="auth-signup">Sign up</button>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};
