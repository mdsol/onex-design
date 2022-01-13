import { Figure } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import FigureMDX from './Figure.stories.mdx';

export default {
    title: 'Components/Figure',
    component: Figure,
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
    },
    parameters: {
        docs: {
            page: FigureMDX,
        },
    },
};
