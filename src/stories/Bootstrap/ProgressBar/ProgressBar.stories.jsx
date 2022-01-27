import { ProgressBar } from '../../../components';

import ProgressBarMDX from './ProgressBar.stories.mdx';

const variants = ['success', 'danger', 'warning', 'info'];
const defaultProps = {
    animated: false,
    isChild: false,
    max: 100,
    min: 0,
    striped: false,
    visuallyHidden: false,
};

export default {
    title: 'Bootstrap/Components/ProgressBar',
    component: ProgressBar,
    argTypes: {
        animated: {
            control: 'boolean',
            description: "Animate's the stripes from right to left",
            table: {
                defaultValue: {
                    summary: false,
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
        children: {
            description: 'Child elements (only allows elements of type)',
            table: {
                defaultValue: {
                    summary: undefined,
                },
                type: {
                    summary: 'onlyProgressBar',
                },
            },
        },
        isChild: {
            control: 'boolean',
            table: {
                defaultValue: {
                    summary: false,
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
        label: {
            control: 'text',
            description: 'Show label that represents visual percentage. EG. 60%',
            table: {
                defaultValue: {
                    summary: undefined,
                },
                type: {
                    summary: 'node',
                },
            },
        },
        max: {
            control: 'number',
            description: 'Maximum value progress can reach',
            table: {
                defaultValue: {
                    summary: 100,
                },
                type: {
                    summary: 'number',
                },
            },
        },
        min: {
            control: 'number',
            description: 'Minimum value progress can begin from',
            table: {
                defaultValue: {
                    summary: 0,
                },
                type: {
                    summary: 'number',
                },
            },
        },
        now: {
            control: 'number',
            description: 'Current value of progress',
            table: {
                defaultValue: {
                    summary: undefined,
                },
                type: {
                    summary: 'number',
                },
            },
        },
        striped: {
            control: 'boolean',
            description: 'Uses a gradient to create a striped effect.',
            table: {
                defaultValue: {
                    summary: false,
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
        variant: {
            options: variants,
            control: 'radio',
            description: 'Sets the background class of the progress bar.',
            table: {
                defaultValue: {
                    summary: undefined,
                },
                type: {
                    summary: variants.join(' | '),
                },
            },
        },
        visuallyHidden: {
            control: 'boolean',
            description: "Hide's the label visually.",
            table: {
                defaultValue: {
                    summary: false,
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
    },
    parameters: {
        docs: {
            page: ProgressBarMDX,
        },
    },
};

const Template = (props) => <ProgressBar {...props} />;

export const Label = Template.bind({});

Label.args = {
    ...defaultProps,
    now: 60,
    label: '60%',
};

const variantProgressBars = (args) => {
    const now = 10;
    const props = {
        ...defaultProps,
        ...args,
    };

    return variants.map((variant, i) => (
        <ProgressBar {...props} variant={variant} now={now * (i + 1)} />
    ));
};

export const ContextualAlternatives = (args) => variantProgressBars(args);

export const Striped = (args) => variantProgressBars({ ...args, striped: true });

export const Animated = (props) => <ProgressBar {...props} />;

Animated.args = {
    ...defaultProps,
    animated: true,
    now: 45,
};

export const Stacked = (props) => (
    <ProgressBar>
        <ProgressBar {...props} striped variant="success" now={35} key={1} max={100} />
        <ProgressBar {...props} variant="warning" now={20} key={2} max={100} />
        <ProgressBar {...props} striped variant="danger" now={10} key={3} max={100} />
    </ProgressBar>
);
