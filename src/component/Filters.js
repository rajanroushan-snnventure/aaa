import React from 'react';

// HOC to filter out articles with null author
const withAuthorFilter = (WrappedComponent) => {
  return (props) => {
    const filteredListData = props.listData.filter(article => article.author != null);
    return <WrappedComponent {...props} listData={filteredListData} />;
  };
};

// HOC to filter out articles without an image
const withImageFilter = (WrappedComponent) => {
  return (props) => {
    const filteredListData = props.listData.filter(article => article.urlToImage != null);
    return <WrappedComponent {...props} listData={filteredListData} />;
  };
};

export { withAuthorFilter, withImageFilter };
