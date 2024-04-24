import "./Header.css";
export const Header = () => {
  return (
    <>
      <div className="root">
        <div>
          <h3>Welcome!</h3>
        </div>
        <nav>
          <a href="mygithubprofile" target="_blank">
            GITHUB
          </a>
          <a href="mytelegram" target="_blank">
            TELEGRAM
          </a>
          <a href="linkedin" target="_blank">
            LINKEDIN
          </a>
        </nav>
      </div>
    </>
  );
};
