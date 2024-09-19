import React from 'react';
import './NewsItem.css'; // Assuming you'll add styles in this CSS file

const NewsItem = (props) => {
  const listData = props.listData;

  return (
    <div className="news-container">
      {listData.map((article, index) => (
        <div className="news-card" key={index}>
          {article.urlToImage && (
            <img src={article.urlToImage} alt={article.title} className="news-image" />
          )}
          <div className="news-content">
            <h2 className="news-title">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </h2>
            <p className="news-description">{article.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsItem;
