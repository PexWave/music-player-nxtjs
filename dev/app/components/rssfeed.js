'use client'
// components/RssFeed.js

import React, { useState, useEffect } from 'react';
import Parser from 'rss-parser';

const RssFeed = () => {
  const [feedItems, setFeedItems] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
      const feedUrl = 'https://iptorrents.com/t.rss?u=1582462;tp=4ec3bdaa7e4667356334322d145c9cad;80;3;93;download'; // Replace with your RSS feed URL
      const parser = new Parser();

      try {
        const feed = await parser.parseURL(CORS_PROXY + feedUrl);
        setFeedItems(feed.items);
        console.log(feedItems);
      } catch (error) {
        console.error('Error fetching RSS feed:', error);
      }
    };

    fetchFeed();
  }, []);

  return (
    <div>
      <h2>RSS Feed</h2>
      <ul>
        {feedItems.map((item) => (
          <li key={item.guid}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RssFeed;
