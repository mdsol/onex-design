const fs = require('fs');
const componentsInfo = require('./components');

const getFileBody = (componentName, replaceClasses) => {
  const cssString = replaceClasses.reduce((acc, { className, classRegex }) => {
    const regex = new RegExp(`${className}${classRegex}`, 'g');

    if (replaceClasses.length < 2) {
      return `${acc === 'cssString' ? ' ' : ''}${acc}.replaceAll(${regex}, handleCssString)`;
    }
    return `${
      acc === 'cssString' ? '\n    ' : ''
    }${acc}\n      .replaceAll(${regex}, handleCssString)`;
  }, 'cssString');

  return `import styled from 'styled-components';
import ${componentName} from '../scss';
// eslint-disable-next-line import/no-unresolved
import cssString from './platform.css?raw';

// eslint-disable-next-line react/prop-types
export default ({ children, ...props }) => <StyledComponent {...props}>{children}</StyledComponent>;

// eslint-disable-next-line prefer-template
const handleCssString = (str) => '&' + str;

const StyledComponent = styled(${componentName})\`
  \${() =>${cssString}}
\`;
`;
};

componentsInfo.map(({ name, importName, replaceUrl }) => {
  try {
    const folderName = `src/components/${name}/styled`;

    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }

    fs.writeFile(`${folderName}/index.jsx`, getFileBody(importName, replaceUrl), (err) => {
      if (err) {
        console.error(err);
      }
      // file written successfully
    });
    console.info(`JSX generated for ${name}`);
  } catch (err) {
    console.error(`Something broke for ${name}`, err);
  }

  return null;
});

// eslint-disable-next-line no-unused-vars
const writeImportComponents = () => {
  const { importBody, exportBody } = componentsInfo.reduce(
    (acc, curr) => {
      const nameComponent = `Styled${curr.name}`;
      const importPart = acc.importBody
        ? `${acc.importBody}
import ${nameComponent} from './${curr.name}/styled';`
        : `import ${nameComponent} from './${curr.name}/styled';`;

      const exportPart = acc.exportBody
        ? `${acc.exportBody},
  ${nameComponent}`
        : `${nameComponent}`;

      return { importBody: importPart, exportBody: exportPart };
    },
    {
      importBody: '',
      exportBody: '',
    },
  );

  const fileBody = `${importBody}

export {
${exportBody},
};
`;

  fs.writeFile(`src/components/styledComponents.js`, fileBody, (err) => {
    console.info(`-------------------------`);
    console.info(`Export file was generated`);

    if (err) {
      console.error(err);
    }
  });
};

// writeImportComponents();
