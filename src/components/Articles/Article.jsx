import React from "react";
import { Link } from "wouter";
import "./Article.css";

// assets


// things to do
// dynamic article img and link

const Article = () => {
  return (
    <section id="article">
      <h1>Recent News</h1>
      <div className="article__container">
      <Link href="/press">
          <div className="article__card">
            <div className="article__card__img">
              <img src="https://i.postimg.cc/hj5M6d46/article-press.png" />
            </div>
            <div className="article__card__body">
              <h1>ASCS Press Release</h1>
              <p>Toronto, ON – June 5th, 2023 - The stage is set for an epic clash as Canada's basketball elite gear up for the All-Star Charity Shootout: Clash of the Charities, a thrilling exhibition game.</p>
              <p className="article_date">June 5, 2023</p>
            </div>
          </div>
        </Link>

        <a href="https://www.youtube.com/watch?v=rgwrU_IEjA8">
          <div className="article__card">
            <div className="article__card__img">
              <img src="https://i.postimg.cc/5jcgNWCm/shakur-daniel.jpg" />
            </div>
            <div className="article__card__body">
              <h1>Shakur Daniel to participate in the All-Star Charity Shootout 2023</h1>
              <p className="article_date">June 15, 2023</p>
            </div>
          </div>
        </a>
        
        <a href="https://varsityblues.ca/news/2010/5/20/MBB_0520105147.aspx">
          <div className="article__card">
            <div className="article__card__img">
              <img src="https://images.sidearmdev.com/resize?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fvarsityblues.ca%2fimages%2f2010%2f5%2f20%2fNick_Magalas%2c_Mike_Katz.JPG&width=942&type=jpeg" />
            </div>
            <div className="article__card__body">
              <h1>Magalas, Katz Set For 5TH Annual ALL-STAR CHARITY SHOOTOUT</h1>
              <p className="article_date">May 20, 2010</p>
            </div>
          </div>
        </a>

        
      </div>
    </section>
  );
};

export default Article;
