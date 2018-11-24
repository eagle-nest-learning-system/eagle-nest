# Eagle Nest - A Next.js application for school management

##Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [For developers](#for-developers)
  - [Run project locally](#run-project-locally)
  - [Core technologies/dependencies](#core-technologiesdependencies)


##Introduction
Eagle Nest is a web-based application for school management. It involves student registration, documents sharing, parents engagement, group discussions etc. all in one platform and gives students and teachers the ability to accomplish more.

For more features please see [Features](#features)

This project is open-source.

##Features

##For developers

###Run project locally

To run the project locally, clone it with the following command:

```
  git clone https://github.com/WebDeg-Brian/static-eagle-nest
```

Then install the dependencies:

```
  npm install
```

###Core technologies/dependencies
- [Next.js](https://github.com/zeit/next.js)
- [React](https://github.com/facebook/react)
- [Material-UI](https://github.com/mui-org/material-ui)
- [styled-components](https://github.com/styled-components/styled-components)
- [React-motion](https://github.com/chenglou/react-motion)
- [Redux](https://github.com/reduxjs/redux)
- [axios](https://github.com/axios/axios)
- [validator](https://github.com/chriso/validator)

##Project structure

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