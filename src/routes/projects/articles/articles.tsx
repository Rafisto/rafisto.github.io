import React from 'react'
import { useParams } from 'react-router-dom';
import Article from './article';
import ArticleList from './articleList';

const Articles = () => {
  const { url } = useParams();
  return (
    ((url)
      ?
      <Article url={url} />
      :
      <ArticleList />
    )
  )
}

export default Articles