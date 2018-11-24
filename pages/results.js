import React from 'react';

import ArticleStructure from '../imports/ui/components/common/ArticleStructure';

import { Typography } from '@material-ui/core';

import Head from 'next/head';

const Results = ({ searchTerm }) => 

  <>
    <Head>
      <title>Results | Eagle Nest</title>
    </Head>
    <ArticleStructure>
      <Typography 
        variant="h2"
        gutterBottom
      >
        Search results for:
      </Typography>
      <Typography 
        variant="h3"
        component="p"
      >
        {searchTerm}
      </Typography>
    </ArticleStructure>
  </>
;

Results.getInitialProps = ({ query }) => {
  const searchTerm = query.query;
  
  return { searchTerm };
};

export default Results