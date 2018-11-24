import React from 'react';

import ArticleStructure from '../imports/ui/components/common/ArticleStructure';
import RegisterForm from '../imports/ui/components/RegisterForm';

import { Typography } from '@material-ui/core';

import Head from 'next/head';

const Register = () => 
  <>
    <Head>
      <title>Register | Eagle Nest</title>
    </Head>
    <ArticleStructure>
      <Typography 
        variant="h2" 
        gutterBottom
      >
        Register
      </Typography>
      <Typography 
        variant="h5" 
        component="p"
        gutterBottom
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit.
      </Typography>
      <RegisterForm />
    </ArticleStructure>
  </>
;

export default Register
