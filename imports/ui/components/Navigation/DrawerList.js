import React from 'react';
import styled from 'styled-components';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import {
  HomeOutlined as HomeIcon,
  BugReportOutlined as BugReportIcon,
  ContactSupportOutlined as HowTosIcon,
  QuestionAnswerOutlined as FeedbackIcon,
  AccountCircleOutlined as LoginIcon,
  AssignmentIndOutlined as RegisterIcon,
} from '@material-ui/icons';
import Link from 'next/link';

const StyledNavigationList = styled.div`
    width: 250px;
  `,
  DrawerList = () => (
    <StyledNavigationList>
      <List>
        <Link href="/">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link href="/how-tos">
          <ListItem button>
            <ListItemIcon>
              <HowTosIcon />
            </ListItemIcon>
            <ListItemText primary="How-tos" />
          </ListItem>
        </Link>
        <Link href="/q-and-a">
          <ListItem button>
            <ListItemIcon>
              <FeedbackIcon />
            </ListItemIcon>
            <ListItemText primary="Q&A" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link href="/select-schools">
          <ListItem button>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
        </Link>
        <Link href="/register">
          <ListItem button>
            <ListItemIcon>
              <RegisterIcon />
            </ListItemIcon>
            <ListItemText primary="Register" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link href="/bug-report">
          <ListItem button>
            <ListItemIcon>
              <BugReportIcon />
            </ListItemIcon>
            <ListItemText primary="Bug report" />
          </ListItem>
        </Link>
      </List>
    </StyledNavigationList>
  );
export default DrawerList;
