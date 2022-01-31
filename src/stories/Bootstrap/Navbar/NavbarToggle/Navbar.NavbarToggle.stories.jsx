/* eslint-disable storybook/story-exports */
import { Navbar } from '../../../../components';
import NavbarToggleMDX from './Navbar.NavbarToggle.stories.mdx';

export default {
  title: 'Bootstrap/Components/Navbar/NavbarToggle',
  component: Navbar.Toggle,
  argTypes: {
    as: {
      control: 'object',
      description: 'You can use a custom element type for this component.',
      table: {
        defaultValue: {
          summary: '<button>',
        },
        type: {
          summary: 'elementType',
        },
      },
    },
    label: {
      control: 'text',
      description:
        'An href, when provided the Brand will render as an `<a>` element (unless as is provided).',
      table: {
        defaultValue: {
          summary: 'Toggle navigation',
        },
        type: {
          summary: 'string',
        },
      },
    },
    onClick: {
      action: 'clicked',
      table: {
        defaultValue: {
          summary: undefined,
        },
        type: {
          summary: 'func',
        },
      },
    },
    children: {
      control: 'object',
      description: 'The toggle content. When empty, the default toggle will be rendered.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'node',
        },
      },
    },
  },
  parameters: {
    docs: {
      page: NavbarToggleMDX,
    },
  },
};
