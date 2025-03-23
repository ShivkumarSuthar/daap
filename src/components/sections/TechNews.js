import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const API_KEY = '9a5395883a2142e4aaf2cf5efe10003f';
const API_URL = `https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${API_KEY}`;

const TechNews = () => {
  const [articles, setArticles] = useState([]);

  // Function to Fetch News
  const fetchNews = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      if (data.articles) {
        setArticles(data.articles.slice(0, 4)); // Always show only 4 latest articles
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews(); // Fetch news on mount

    // Auto-update news every 30 seconds
    const interval = setInterval(() => {
      fetchNews();
    }, 30000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Function to Format Date (Example: "7 March")
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  return (
    <section className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Latest Insights</h2>
        <Link href="/blog" className="btn btn-primary d-flex align-items-center shadow-sm">
          View all Insights <FaArrowRight className="ms-2" />
        </Link>
      </div>

      {/* News Cards Grid */}
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {articles.map((article, index) => (
          <div key={index} className="col">
            <div className="news-card">
              {/* Image + Overlay */}
              <div className="news-image">
                <Image
                  src={article.urlToImage || '/placeholder.jpg'}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  className="image"
                />
                <div className="news-overlay">
                  <span className="news-date">{formatDate(article.publishedAt)}</span>
                  <h5 className="news-title">{article.title}</h5>
                </div>
                <div className="news-hover-overlay">
                  <Link href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-light">
                    Read More <FaArrowRight className="ms-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default TechNews;
