import React from 'react';

import { Button } from '@material-ui/core';

import ToolbarComponent from '../common/ToolbarComponent';

import Link from 'next/link';

const ButtonGroup = () => 
  <ToolbarComponent flex>
    <ToolbarComponent>
      <Link href="/register">
        <Button 
          color="secondary" 
          variant="contained" 
        >
          Register
        </Button>
      </Link>
    </ToolbarComponent>
    <ToolbarComponent>
      <Link href="/select-schools">
        <Button color="inherit">
          Login
        </Button>
      </Link>
    </ToolbarComponent>
  </ToolbarComponent>
;

export default ButtonGroup