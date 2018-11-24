import React from 'react';

import styled from 'styled-components';

import ArticleStructure from '../imports/ui/components/common/ArticleStructure';
import ExpansionTypography from '../imports/ui/components/common/ExpansionTypography';

import { 
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import theme from '../imports/ui/theme';

import Head from 'next/head';

const StyledExpansionWrapper = styled.div`
  margin: ${theme.spacing.unit * 4}px 0;
`;

const QAndA = () => 
  <>
    <Head>
      <title>Q&A | Eagle Nest</title>
    </Head>
    <ArticleStructure>
      <Typography 
        variant="h2" 
        gutterBottom
      >
        Q&A
      </Typography>
      <Typography 
        variant="h4" 
        component="h3"
        gutterBottom
      >
        Frequently Asked Questions
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit.
      </Typography>
      <StyledExpansionWrapper>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <ExpansionTypography text="What is Eagle Nest?" />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <ExpansionTypography text="What is Eagle Nest?" />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <ExpansionTypography text="What is Eagle Nest?" />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <ExpansionTypography text="What is Eagle Nest?" />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </StyledExpansionWrapper>
      <Typography 
        variant="h4" 
        gutterBottom
      >
        Still have questions? Ask us!
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit.
      </Typography>
    </ArticleStructure>
  </>
;

export default QAndA