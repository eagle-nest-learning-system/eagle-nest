import React from 'react';
import { Typography } from '@material-ui/core';
import Head from 'next/head';
import ArticleStructure from '../imports/ui/components/common/ArticleStructure';
import SelectSchoolsForm from '../imports/ui/components/SelectSchoolsForm';

const SelectSchools = () => (
  <>
    <Head>
      <title>Select Schools | Eagle Nest</title>
    </Head>
    <ArticleStructure>
      <Typography variant="h2" gutterBottom>
        What&apos;s your school&apos;s name?
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
        suscipit.
      </Typography>
      <SelectSchoolsForm />
    </ArticleStructure>
  </>
);
export default SelectSchools;
