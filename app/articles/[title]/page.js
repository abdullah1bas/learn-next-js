import React from 'react'
import { metadata } from '../layout';


export default function ShowArticlePage(props) {
    const {params} = props;
    metadata.title = params.title;
    // useEffect(() => {
    // }, )
    // console.log(params);
  return (
    <div>
        <h1>ShowArticle Page</h1>
        <h3>{params.title}</h3>
    </div>
  )
}
