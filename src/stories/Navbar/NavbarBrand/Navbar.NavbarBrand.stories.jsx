import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarBrandMDX from './Navbar.NavbarBrand.stories.mdx';

export default {
    title: 'Components/Navbar/NavbarBrand',
    component: Navbar.Brand,
    argTypes: {
        as: {
            control: 'object',
            description: 'You can use a custom element type for this component.',
            table: {
                defaultValue: {
                    summary: undefined,
                },
                type: {
                    summary: 'elementType',
                },
            },
        },
        href: {
            control: 'text',
            description:
                'An href, when provided the Brand will render as an `<a>` element (unless as is provided).',
            table: {
                defaultValue: {
                    summary: undefined,
                },
                type: {
                    summary: 'string',
                },
            },
        },
        children: {
            control: 'object',
            description: 'The content of the component.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
    },
    parameters: {
        docs: {
            page: NavbarBrandMDX,
        },
    },
};
