# Eagle Nest - A Next.js application for school management

:warning: The application currently supports UK phone numbers only

![Eagle Nest Landing Page](https://user-images.githubusercontent.com/43169879/48971130-b8c59e00-f00d-11e8-959e-a55c3d4d9615.png)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Inspiration](#inspiration)
- [For developers](#for-developers)
  - [Run project locally](#run-project-locally)
  - [Core technologies/dependencies](#core-technologiesdependencies)
  - [Project structure](#project-structure)

## Introduction

Eagle Nest is a web-based application for school management. It involves student registration, documents sharing, parents engagement, group discussions etc. all in one platform and gives students and teachers the ability to accomplish more.

For more features please see [Features](#features)

This project is open-source.

## Features

- Students:
  - Ability to submit homework
  - Ability to review teachers' comments, grades, timetables and detentions/awards
  - Ability to view and share files
  - Ability to setup their own planners/to-do lists and get things done
  - Ability to study in groups
  - (For boarders only) Ability to sign in and out
- Teachers:
  - Ability to set and mark homework
  - Ability to create timetables
  - Ability to write comments and reports
  - Ability to reward/give detentions
  - Ability to upload and share files
  - Ability to register students
  - Ability to create lesson plans
- (For boarding schools only) House supervisors:
  - Ability to view boarders' activities
  - Ability to announce
  - Ability to reward/give detentions
  - Ability to track students outside of the boarding house using GPS Tracker
- Parents:
  - Ability to view their children's homework, reports, teachers' comments, grades, detentions/awards and timetables
  - Ability to contact teachers
  - Ability to view files

## Inspiration

I came up with this idea after noticing the lack of UI interactivity and performance on my school's management system. People may think it's not important, but improving the loading time and providing students with the best application do make a big difference.This project aims to fix these issues and provide more helpful features that you could ever think of.

## For developers

### Run project locally

To run the project locally, clone it with the following command:

```
  git clone https://github.com/WebDeg-Brian/static-eagle-nest
```

Then install the dependencies:

```
  npm install
```

### Core technologies/dependencies

- [Next.js](https://github.com/zeit/next.js)
- [React](https://github.com/facebook/react)
- [Material-UI](https://github.com/mui-org/material-ui)
- [styled-components](https://github.com/styled-components/styled-components)
- [React-motion](https://github.com/chenglou/react-motion)
- [Redux](https://github.com/reduxjs/redux)
- [axios](https://github.com/axios/axios)
- [validator](https://github.com/chriso/validator)

### Project structure

```
├───imports
│   ├───ui
│   │   ├───components
│   │   │   ├───BugReportForm
│   │   │   │   ├───index.js
│   │   │   │   ├───BugReportForm.js
│   │   │   │   └───validationRules.js
│   │   │   ├───common
│   │   │   │   ├───ArticleStructure
│   │   │   │   │   ├───index.js
│   │   │   │   │   ├───AritcleBackground.js
│   │   │   │   │   └───ArticleStructure.js
│   │   │   │   ├───Background
│   │   │   │   │   ├───index.js
│   │   │   │   │   └───Background.js
│   │   │   │   ├───ExpansionTypography
│   │   │   │   │   ├───index.js
│   │   │   │   │   └───ExpansionTypography.js
│   │   │   │   ├───FormValidator
│   │   │   │   │   ├───index.js
│   │   │   │   │   ├───FieldValidator.js
│   │   │   │   │   ├───FormValidator.js
│   │   │   │   │   └───initValidationState.js
│   │   │   │   ├───InputsWrapper
│   │   │   │   │   ├───index.js
│   │   │   │   │   └───InputsWrapper.js
│   │   │   │   ├───MainContentInner
│   │   │   │   │   ├───index.js
│   │   │   │   │   └───MainContentInner.js
│   │   │   │   ├───MainContentWrapper
│   │   │   │   │   ├───index.js
│   │   │   │   │   └───MainContentWrapper.js
│   │   │   │   └───ToolbarComponent
│   │   │   │   │   ├───index.js
│   │   │   │   │   └───ToolbarComponent.js
│   │   │   ├───HeroBanner
│   │   │   │   ├───index.js
│   │   │   │   ├───ActionButton.js
│   │   │   │   ├───AnimatedContent.js
│   │   │   │   ├───Content.js
│   │   │   │   ├───HeroBackground.js
│   │   │   │   └───HeroBanner.js
│   │   │   ├───Navigation
│   │   │   │   └───controllers
│   │   │   │   │   ├───index.js
│   │   │   │   │   ├───action.js
│   │   │   │   │   ├───reducer.js
│   │   │   │   │   └───types.js
│   │   │   │   ├───index.js
│   │   │   │   ├───AnimatedSearchInput.js
│   │   │   │   ├───AnimatedTitle.js
│   │   │   │   ├───ButtonGroup.js
│   │   │   │   ├───Drawer.js
│   │   │   │   ├───DrawerList.js
│   │   │   │   ├───Navigation.js
│   │   │   │   ├───SearchGroup.js
│   │   │   │   ├───Title.js
│   │   │   │   └───validationRules.js
│   │   │   ├───Preloader
│   │   │   │   ├───index.js
│   │   │   │   └───Preloader.js
│   │   │   ├───QAndAForm
│   │   │   │   ├───index.js
│   │   │   │   ├───QAndAForm.js
│   │   │   │   └───validationRules.js
│   │   │   ├───RegisterForm
│   │   │   │   ├───index.js
│   │   │   │   ├───RegisterForm.js
│   │   │   │   └───validationRules.js
│   │   │   └───SelectSchoolsForm
│   │   │   │   ├───index.js
│   │   │   │   ├───SelectSchoolsForm.js
│   │   │   │   └───validationRules.js
│   │   └───root-controllers
│   └───utils
│   │   ├───getPageContext.js
│   │   ├───validationMethods.js
│   │   └───withRedux.js
├───pages
│   ├───index.js
│   ├───_app.js
│   ├───_document.js
│   ├───bug-report.js
│   ├───how-tos.js
│   ├───index.js
│   ├───q-and-a.js
│   ├───register.js
│   ├───results.js
│   └───select-schools.js
├───server
│   └───index.js
└───static
    ├───css
    |   └───nprogress.css   
    └───images
        ├───article-background.css
        └───hero-banner.jpg
```