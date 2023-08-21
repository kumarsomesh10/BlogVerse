import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://i.imgur.com/P1Ns2Y9.png"
          alt=""
        />
        <p className="aboutText">
        I'm Somesh Kumar, currently pursuing B.Tech in Computer Science and Engineering from the Indian Institute of Information Technology, Kalyani. My CGPA of 8.69 reflects my commitment. Proficient in languages like C++, Python, and Java, coupled with Bootstrap and React, I'm keen on web development and machine learning. My projects exemplify this—designing a Java-based flight booking software that excels in filtering and user-centric features, crafting ConnectHub for real-time Chat using MongoDB and React, and developing the feature-rich BlogVerse. My achievement highlights include researching and building a 99.8% accurate Intrusion Detection System with PyTorch and Scikit-learn. I'm an adept problem-solver, active contest participant, showcasing academic and technical excellence.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
        <i class="sidebarIcon fab fa-brands fa-linkedin"></i>
        <i class="sidebarIcon fab fa-brands fa-github"></i>
        </div>
      </div>
    </div>
  );
}
