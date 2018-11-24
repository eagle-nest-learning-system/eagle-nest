# Eagle Nest - A Next.js application for school management

## Project structure explained
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