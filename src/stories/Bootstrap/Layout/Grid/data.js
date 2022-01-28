// eslint-disable-next-line import/prefer-default-export
export const containerArgTypes = {
  as: {
    description: 'You can use a custom element for this component',
    table: {
      type: {
        summary: 'element',
      },
    },
  },
  fluid: {
    description: 'Allow the Container to fill all of its available horizontal space.',
    options: [true, 'sm', 'md', 'lg', 'xl', 'xxl'],
    control: { type: 'select' },
    table: {
      defaultValue: {
        summary: false,
      },
      type: {
        summary: "true | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",
      },
    },
  },
  bsPrefix: {
    description: `Change the underlying component CSS base class name and modifier class names prefix.
        This is an escape hatch for working with heavily customized bootstrap css.`,
    control: 'text',
    table: {
      defaultValue: {
        summary: 'container',
      },
      type: {
        summary: 'string',
      },
    },
  },
};

export const rowArgTypes = {
  as: {
    description: 'You can use a custom element for this component',
    table: {
      type: {
        summary: 'element',
      },
    },
  },
  lg: {
    description: `The number of columns that will fit next to each other on large devices (≥992px).
        Use auto to give columns their natural widths.`,
    control: 'text',
    table: {
      type: {
        summary: "number | 'auto' | { cols: number | 'auto' ",
      },
    },
  },
  md: {
    description: `The number of columns that will fit next to each other on medium devices (≥768px).
        Use auto to give columns their natural widths.`,
    control: 'text',
    table: {
      type: {
        summary: "number | 'auto' | { cols: number | 'auto' ",
      },
    },
  },
  sm: {
    description: `The number of columns that will fit next to each other on small devices (≥576px).
        Use auto to give columns their natural widths.`,
    control: 'text',
    table: {
      type: {
        summary: "number | 'auto' | { cols: number | 'auto' ",
      },
    },
  },
  xl: {
    description: `The number of columns that will fit next to each other on extra large devices (≥1200px).
        Use auto to give columns their natural widths.`,
    control: 'text',
    table: {
      type: {
        summary: "number | 'auto' | { cols: number | 'auto' ",
      },
    },
  },
  xs: {
    description: `The number of columns that will fit next to each other on extra small devices (<576px).
        Use auto to give columns their natural widths.`,
    control: 'text',
    table: {
      type: {
        summary: "number | 'auto' | { cols: number | 'auto' ",
      },
    },
  },
  xxl: {
    description: `The number of columns that will fit next to each other on extra extra large devices (≥1400px).
        Use auto to give columns their natural widths.`,
    control: 'text',
    table: {
      type: {
        summary: "number | 'auto' | { cols: number | 'auto' ",
      },
    },
  },
  bsPrefix: {
    description: `Change the underlying component CSS base class name and modifier class names prefix.
        This is an escape hatch for working with heavily customized bootstrap css.`,
    control: 'text',
    table: {
      defaultValue: {
        summary: 'row',
      },
      type: {
        summary: 'string',
      },
    },
  },
};

export const columnArgTypes = {
  as: {
    description: 'You can use a custom element for this component',
    table: {
      type: {
        summary: 'element',
      },
    },
  },
  lg: {
    description: 'The number of columns to span on large devices (≥992px)',
    control: 'text',
    table: {
      type: {
        summary: "number | 'auto' | { cols: number | 'auto' ",
      },
    },
  },
  md: {
    description: 'The number of columns to span on medium devices (≥768px)',
    control: 'text',
    table: {
      type: {
        summary: "number | 'auto' | { cols: number | 'auto' ",
      },
    },
  },
  sm: {
    description: 'The number of columns to span on small devices (≥576px)',
    control: 'text',
    table: {
      type: {
        summary: "number | 'auto' | { cols: number | 'auto' ",
      },
    },
  },
  xl: {
    description: 'The number of columns to span on extra large devices (≥1200px)',
    control: 'text',
    table: {
      type: {
        summary: "number | 'auto' | { cols: number | 'auto' ",
      },
    },
  },
  xs: {
    description: 'The number of columns to span on extra small devices (<576px)',
    control: 'text',
    table: {
      type: {
        summary: "number | 'auto' | { cols: number | 'auto' ",
      },
    },
  },
  xxl: {
    description: 'The number of columns to span on extra extra large devices (≥1400px)',
    control: 'text',
    table: {
      type: {
        summary: "number | 'auto' | { cols: number | 'auto' ",
      },
    },
  },
  bsPrefix: {
    description: `Change the underlying component CSS base class name and modifier class names prefix.
        This is an escape hatch for working with heavily customized bootstrap css.`,
    control: 'text',
    table: {
      defaultValue: {
        summary: 'col',
      },
      type: {
        summary: 'string',
      },
    },
  },
};
