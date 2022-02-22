import { PlusCircleFill } from 'react-bootstrap-icons';
// eslint-disable-next-line import/prefer-default-export
export const config = {
  data: {
    components: [
      {
        name: 'Avatar',
        componentName: 'Avatar',
        variants: [
          {
            name: 'Test User',
          },
          {
            children: 'KK',
          },
          {
            src: 'https://robohash.org/my-own-slug.png?size=300x300&set=set1',
            size: 'xs',
          },
          {
            src: 'https://robohash.org/my-own-slug.png?size=300x300&set=set1',
            size: 'sm',
          },
          {
            src: 'https://robohash.org/my-own-slug.png?size=300x300&set=set1',
            size: 'md',
          },
          {
            src: 'https://robohash.org/my-own-slug.png?size=300x300&set=set1',
            size: 'lg',
          },
          {
            src: 'https://robohash.org/my-own-slug.png?size=300x300&set=set1',
            size: 'xl',
          },
          {
            src: 'https://robohash.org/my-own-slug.png?size=300x300&set=set1',
            size: 'xxl',
          },
        ],
      },
      {
        name: 'Button',
        componentName: 'Buttons',
        variants: [
          {
            variant: 'primary',
            size: 'sm',
            children: 'Small button',
          },
          {
            variant: 'primary',
            size: 'lg',
            children: 'Large button',
          },
          {
            variant: 'primary',
            children: 'Primary button',
          },
          {
            variant: 'secondary',
            children: 'Secondary button',
          },
          {
            variant: 'link',
            children: 'Link button',
          },
          {
            variant: 'primary',
            children: (
              <>
                <PlusCircleFill />
                <span> Primary button with icon </span>
              </>
            ),
          },
          {
            variant: 'secondary',
            children: (
              <>
                <PlusCircleFill />
                <span> Secondary button with icon </span>
              </>
            ),
          },
          {
            variant: 'link',
            children: (
              <>
                <PlusCircleFill />
                <span> Link button with icon </span>
              </>
            ),
          },
          {
            variant: 'primary',
            disabled: true,
            children: 'Disabled button',
          },
          {
            variant: 'primary',
            children: <PlusCircleFill />,
          },
          {
            variant: 'secondary',
            children: <PlusCircleFill />,
          },
          {
            variant: 'link',
            children: <PlusCircleFill />,
          },
        ],
      },
    ],
  },
};
