import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import Head from 'next/head';
import ArticleStructure from '../imports/ui/components/common/ArticleStructure';

const Results = ({ searchTerm }) => (
  <>
    <Head>
      <title>Search results for {searchTerm} | Eagle Nest</title>
    </Head>
    <ArticleStructure>
      <Typography variant="h2" gutterBottom>
        Search results for:
      </Typography>
      <Typography variant="h3" component="p">
        {searchTerm}
      </Typography>
    </ArticleStructure>
  </>
);

Results.getInitialProps = ({ query }) => {
  const searchTerm = decodeURIComponent(query.q);

  return { searchTerm };
};

Results.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

export default Results;
