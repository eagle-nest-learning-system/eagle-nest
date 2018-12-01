import React from 'react';
import { Typography } from '@material-ui/core';
import Head from 'next/head';
import ArticleStructure from '../imports/ui/components/common/ArticleStructure';
import BugReportForm from '../imports/ui/components/BugReportForm';

const BugReport = () => (
  <>
    <Head>
      <title>Bug Report | Eagle Nest</title>
    </Head>
    <ArticleStructure>
      <Typography variant="h2" gutterBottom>
        Bug report
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
        suscipit.
      </Typography>
      <BugReportForm />
    </ArticleStructure>
  </>
);
export default BugReport;
