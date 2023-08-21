import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">BlogVerse</span>
        {/* <span className="headerTitleSm">React & Node</span> */}
      </div>
      <img
        className="headerImg"
        src="https://i.imgur.com/kHhiJ3s.jpg"
        alt=""
      />
    </div>
  );
}
