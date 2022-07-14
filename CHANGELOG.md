# Changelog

## 0.4.6

Themeprovider: removed css changes that were causing Selects to be extra tall - this may lead to other issues that will need to be handled individually as discovered. Modals will now look for the themeprovider container and attach to that if present AND if another container has not been passed in - this solves styling issues. Filter select story has been updated. Button small border radius has been fixed to match design. Segmented toggle has been updated to match the design file.
## 0.4.5

Fixes for: SegmentedToggle, DataGrid, DatePicker, Select, DropDowns. Style changes for themeprovider.css

## 0.4.3

DataGrid custom cells have been added. ThemeProvider css updated to try and fix sandman conflicts.

## 0.4.2

The Check component has been fixed, ThemeProvider also has an exported stylesheet to use in the case that webpack has not been setup correctly. Inline alert had padding updated. Dropzone was updated.

## 0.4.1

Change to how the common js package was being run through Babel in order to fix a potential prop spreading issue. DataGrid sorting is now live.

## 0.4.0

ThemeProvider component optimization, styled components removed from export, bundle size reduced and new Storybook page on how to use. Select has a new subLabel option that can be used.

## 0.3.8

New: ThemeProvider component will replace the need to use StyledComponents. Please wrap the area you will be using 1x components with <ThemeProvider /> and rename all of your styled components to their normal component names.
Fixed: All attributes passed to the component will be spread to their respective internal components now. Inline alerts have been updated, Data Grid has been updated, native close has been added to drodowns and offcanvas.

## 0.3.7

New: segmented Toggle, Datepicker. Fixes: Card, Alert, Tab, Banner, Modal.

## 0.3.6

Fix publishing to artifactory.

## 0.3.5

Move React from dependencies list to devDependency.

## 0.3.4

New Hint component added. Select component has been fixed so that setting values will not fire onSelect. Progressbar, Alert and Spinner have been updated. MultiSelect styles updated.

## 0.3.3

New format for exporting components in library. Icons, Select, Card, Checkboxes, ToggleButton all updated.

## 0.3.2

StyledArea (experimental) added - this is not final. Separated out devDependencies, updated package.json so that the dist folder is explicitly set.

## 0.3.1

DataGrid CSS variables fixed and updated, new Alert component, Button, Select and Toast styles updated/corrected.

## 0.3.0

SCSS variable typo fixed. Select Storybook demo fixed. Text, Select, Button and SearchField sizes fixed. MenuItem Styled component fixed.

## 0.2.9

Grid, progressbar, spinner, button updates.

## 0.2.8

Allow >= 17.0.2 React as a dependency. Pagination, TablePagination, ProgressBar, InlineEdit styled components fixed.

## 0.2.7

Modal header css updates

## 0.2.6

Switched to inline css instead of external typekit url. Navigation, Select, Tabs, TextArea, Toasts, ToggleButton, Typography StyledComponents updated.

## 0.2.4

Fixed that only styled modules were being exported.

## 0.2.3

Fixed styled components for toggle group, toggle button, text area, text field.

## 0.2.2

Modal added, refactor several StyledComponents.

## 0.2.1

Version dependencies updated. Fixes for search field, avatar, textfield, icons, buttons, toasts. Storybook reconfigured. Styled components added to export.

## 0.2.0

Datagrid, Avatar, Dropdown and Textfield designs updated to match Figma specs. VSCode settings cleanup and new spellings added/fixed. Remove enforcement of Yarn, instead provide minimum engine version.

Datagrid css updated, storybook page created for integration.

## 0.1.9

Datagrid css updated, storybook page created for integration.

## 0.1.8

Switched font url to use Typekit, Tooltip designs updated, data grid css and pagination added.

## 0.1.7

Swapped Robot font url to different location in order to troubleshoot Webpack 3 issue.

## 0.1.6

This is the same as 0.1.5, 0.1.5 is unable to be released for technical reasons.

## 0.1.5

Add a compatibility file with old webpack versions.

Access using "@mdsol/onex-design/dist/index-compat"

## 0.1.4

Fix package.json to point to correct file.

## 0.1.3

Initial release
