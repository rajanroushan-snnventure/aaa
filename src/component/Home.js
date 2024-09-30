import React, {useEffect, useState} from 'react';
import FilteredNewsItem from './FilteredNewsItem';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const callApi = async () => {
      try {
        const apiData = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=abff5356396f4915828c03e3725b5a3b");
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
