import React, {useEffect, useState} from 'react';
import FilteredNewsItem from './FilteredNewsItem';
import {NEWS_API} from "./Constant";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const callApi = async () => {
      try {
        const apiData = await fetch(NEWS_API);
        console.log(apiData);
        if (!apiData.ok) {
          throw new Error('Network response was not ok');
        }
        const apiJsonData = await apiData.json();
        console.log(apiJsonData);
        setArticles(apiJsonData.articles)
        //console.log(articles);
    } catch (error) {
      setError('Error fetching news');
    } finally {
      setLoading(false);
    }
    }; 
    callApi();     
    return () => { 
      console.log("Component Unmount");
    }; 
  },[]);


  if(loading) {
    return (<div>Loading...</div>);
  }
  if(error) {
    return (<div>Error in API data</div>);
  }
  return (
    <div>
      <FilteredNewsItem listData={articles}/>
    </div>
  );
}

export default Home;
