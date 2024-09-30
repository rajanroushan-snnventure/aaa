import React, { createContext, useState } from 'react';

// Create a Context for bookmarks
export const BookmarkContext = createContext();

// Provide the Context to the application
export const BookmarkProvider = ({ children }) => {
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);

  const addBookmark = (article) => {
    // Add article to bookmarks only if it's not already there
    setBookmarkedArticles((prevBookmarks) => {
        // Check if the article is already bookmarked
        const isBookmarked = prevBookmarks.some(item => item.title === article.title);
        if (isBookmarked) {
          // If already bookmarked, remove it from the list
          return prevBookmarks.filter(item => item.title !== article.title);
        } else {
          // Otherwise, add the article to the list
          return [...prevBookmarks, article];
        }
      });
  };
  const deleteBookmark = (article) => {
    // Add article to bookmarks only if it's not already there
    setBookmarkedArticles((prevBookmarks) => {
        // Check if the article is already bookmarked
        //const isBookmarked = prevBookmarks.some(item => item.title === article.title);
        //if (isBookmarked) {
          // If already bookmarked, remove it from the list
          return prevBookmarks.filter(item => item.title !== article.title);
        //} else {
          // Otherwise, add the article to the list
         // return [...prevBookmarks, article];
        //}
      });
  };

  return (
    <BookmarkContext.Provider value={{ bookmarkedArticles, addBookmark, deleteBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};
