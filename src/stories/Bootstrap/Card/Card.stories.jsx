import { Card } from '../../../components';

const bgVariants = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  info: 'info',
  dark: 'dark',
  light: 'light',
};

const textVariants = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  info: 'info',
  dark: 'dark',
  light: 'light',
  white: 'white',
  muted: 'muted',
};

export default {
  title: 'Bootstrap/Components/Card',
  component: Card,
  argTypes: {
    as: {},
    bg: {
      options: Object.values(bgVariants),
      control: {
        type: 'select',
        label: bgVariants,
      },
    },
    children: { control: 'object' },
    border: {
      options: Object.keys(bgVariants),
      control: {
        type: 'select',
        label: bgVariants,
      },
    },
    text: {
      options: Object.keys(textVariants),
      control: {
        type: 'select',
        label: textVariants,
      },
    },
  },
};

const Template = (props) => <Card {...props} />;

export const Primary = Template.bind({});

Primary.args = {
  bg: bgVariants.primary,
  text: textVariants.white,
  border: bgVariants.primary,
  children: (
    <>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card`s
          content.
        </Card.Text>
      </Card.Body>
    </>
  ),
  style: { width: '18rem' },
};

export const Secondary = Template.bind({});

Secondary.args = {
  bg: bgVariants.secondary,
  text: textVariants.white,
  border: bgVariants.secondary,
  children: (
    <>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card`s
          content.
        </Card.Text>
      </Card.Body>
    </>
  ),
  style: { width: '18rem' },
};

export const Success = Template.bind({});

Success.args = {
  bg: bgVariants.success,
  text: textVariants.white,
  border: bgVariants.success,
  children: (
    <>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card`s
          content.
        </Card.Text>
      </Card.Body>
    </>
  ),
  style: { width: '18rem' },
};

export const Danger = Template.bind({});

Danger.args = {
  bg: bgVariants.danger,
  text: textVariants.white,
  border: bgVariants.danger,
  children: (
    <>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card`s
          content.
        </Card.Text>
      </Card.Body>
    </>
  ),
  style: { width: '18rem' },
};

export const Warning = Template.bind({});

Warning.args = {
  bg: bgVariants.warning,
  text: textVariants.dark,
  border: bgVariants.warning,
  children: (
    <>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card`s
          content.
        </Card.Text>
      </Card.Body>
    </>
  ),
  style: { width: '18rem' },
};

export const Info = Template.bind({});

Info.args = {
  bg: bgVariants.info,
  text: textVariants.white,
  border: bgVariants.info,
  children: (
    <>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card`s
          content.
        </Card.Text>
      </Card.Body>
    </>
  ),
  style: { width: '18rem' },
};

export const Dark = Template.bind({});

Dark.args = {
  bg: bgVariants.dark,
  text: textVariants.white,
  border: bgVariants.dark,
  children: (
    <>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card`s
          content.
        </Card.Text>
      </Card.Body>
    </>
  ),
  style: { width: '18rem' },
};

export const Light = Template.bind({});

Light.args = {
  bg: bgVariants.light,
  text: textVariants.dark,
  border: bgVariants.light,
  children: (
    <>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card`s
          content.
        </Card.Text>
      </Card.Body>
    </>
  ),
  style: { width: '18rem' },
};

export const PrimaryBorderAndText = Template.bind({});

PrimaryBorderAndText.args = {
  bg: bgVariants.light,
  text: textVariants.primary,
  border: bgVariants.primary,
  children: (
    <>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card`s
          content.
        </Card.Text>
      </Card.Body>
    </>
  ),
  style: { width: '18rem' },
};

export const SecondaryBorderAndText = Template.bind({});

SecondaryBorderAndText.args = {
  bg: bgVariants.light,
  text: textVariants.secondary,
  border: bgVariants.secondary,
  children: (
    <>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card`s
          content.
        </Card.Text>
      </Card.Body>
    </>
  ),
  style: { width: '18rem' },
};

export const SuccessBorderAndText = Template.bind({});

SuccessBorderAndText.args = {
  bg: bgVariants.light,
  text: textVariants.success,
  border: bgVariants.success,
  children: (
    <>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card`s
          content.
        </Card.Text>
      </Card.Body>
    </>
  ),
  style: { width: '18rem' },
};

export const DangerBorderAndText = Template.bind({});

DangerBorderAndText.args = {
  bg: bgVariants.light,
  text: textVariants.danger,
  border: bgVariants.danger,
  children: (
    <>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card`s
          content.
        </Card.Text>
      </Card.Body>
    </>
  ),
  style: { width: '18rem' },
};

export const WarningBorderAndText = Template.bind({});

WarningBorderAndText.args = {
  bg: bgVariants.light,
  text: textVariants.warning,
  border: bgVariants.warning,
  children: (
    <>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card`s
          content.
        </Card.Text>
      </Card.Body>
    </>
  ),
  style: { width: '18rem' },
};

export const InfoBorderAndText = Template.bind({});

InfoBorderAndText.args = {
  bg: bgVariants.light,
  text: textVariants.info,
  border: bgVariants.info,
  children: (
    <>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card`s
          content.
        </Card.Text>
      </Card.Body>
    </>
  ),
  style: { width: '18rem' },
};

export const DarkBorderAndText = Template.bind({});

DarkBorderAndText.args = {
  bg: bgVariants.light,
  text: textVariants.dark,
  border: bgVariants.dark,
  children: (
    <>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card`s
          content.
        </Card.Text>
      </Card.Body>
    </>
  ),
  style: { width: '18rem' },
};

export const LightBorderAndText = Template.bind({});

LightBorderAndText.args = {
  bg: bgVariants.primary,
  text: textVariants.light,
  border: bgVariants.light,
  children: (
    <>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card`s
          content.
        </Card.Text>
      </Card.Body>
    </>
  ),
  style: { width: '18rem' },
};

export const HasFooter = Template.bind({});

HasFooter.args = {
  bg: bgVariants.light,
  text: textVariants.dark,
  border: bgVariants.light,
  style: { width: '18rem' },
  children: (
    <>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Card Title </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card`s
          content.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </>
  ),
};

export const HasImage = Template.bind({});

HasImage.args = {
  bg: bgVariants.primary,
  text: textVariants.light,
  border: bgVariants.dark,
  style: { width: '18rem' },
  children: (
    <Card.Body>
      <Card.Img variant="top" src="https://robohash.org/58931323.png?set=set3" />
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of the card`s
        content.
      </Card.Text>
    </Card.Body>
  ),
};
