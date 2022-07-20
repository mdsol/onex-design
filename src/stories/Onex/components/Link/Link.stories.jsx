import { Link, Icon } from '../../../../components';

export default {
  title: 'Onex/Components/Link',
  component: Link,
};

const Template = (props) => <Link {...props} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  children: 'Link',
  dataTestId: 'link-primary',
  href: '#',
};

export const PrimaryWithLeadingIcon = Template.bind({});
PrimaryWithLeadingIcon.args = {
  variant: 'primary',
  leadingIcon: <Icon>star</Icon>,
  children: 'Link',
  dataTestId: 'link-primary',
  href: '#',
};

export const PrimaryWithTrailingIcon = Template.bind({});
PrimaryWithTrailingIcon.args = {
  variant: 'primary',
  trailingIcon: <Icon>star</Icon>,
  children: 'Link',
  dataTestId: 'link-primary',
  href: '#',
};

export const PrimaryWithTwoIcons = Template.bind({});
PrimaryWithTwoIcons.args = {
  variant: 'primary',
  leadingIcon: <Icon>star</Icon>,
  trailingIcon: <Icon>star</Icon>,
  children: 'Link',
  dataTestId: 'link-primary',
  href: '#',
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  variant: 'primary',
  disabled: true,
  children: 'Link',
  dataTestId: 'link-primary',
  href: '#',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Link',
  dataTestId: 'link-secondary',
  href: '#',
};

export const SecondaryWithLeadingIcon = Template.bind({});
SecondaryWithLeadingIcon.args = {
  variant: 'secondary',
  leadingIcon: <Icon>star</Icon>,
  children: 'Link',
  dataTestId: 'link-secondary',
  href: '#',
};

export const SecondaryWithTrailingIcon = Template.bind({});
SecondaryWithTrailingIcon.args = {
  variant: 'secondary',
  trailingIcon: <Icon>star</Icon>,
  children: 'Link',
  dataTestId: 'link-secondary',
  href: '#',
};

export const SecondaryWithTwoIcons = Template.bind({});
SecondaryWithTwoIcons.args = {
  variant: 'secondary',
  leadingIcon: <Icon>star</Icon>,
  trailingIcon: <Icon>star</Icon>,
  children: 'Link',
  dataTestId: 'link-secondary',
  href: '#',
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  variant: 'secondary',
  disabled: true,
  children: 'Link',
  dataTestId: 'link-secondary',
  href: '#',
};
