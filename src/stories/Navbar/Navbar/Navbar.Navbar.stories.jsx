import { Navbar, Container, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarMDX from './Navbar.Navbar.stories.mdx';

const expands = {
    false: false,
    true: true,
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    xxl: 'xxl',
};

const variantsBg = {
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    danger: 'danger',
    warning: 'warning',
    info: 'info',
    dark: 'dark',
    light: 'light',
};

export default {
    title: 'Components/Navbar/Navbar',
    component: Navbar,
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
        bg: {
            options: Object.keys(variantsBg),
            control: {
                type: 'select',
                label: variantsBg,
            },
            description:
                'A convenience prop for adding `bg-*` utility classes since they are so commonly used here. `light` and `dark` are common choices but any `bg-*` class is supported, including any custom ones you might define.\n' +
                'Pairs nicely with the `variant` prop.',
            table: {
                defaultValue: {
                    summary: undefined,
                },
                type: {
                    summary: 'string',
                },
            },
        },
        collapseOnSelect: {
            control: 'boolean',
            description:
                'Toggles expanded to false after the onSelect event of a descendant of a child `<Nav>` fires. Does nothing if no `<Nav>` or `<Nav>` descendants exist.',
            table: {
                defaultValue: {
                    summary: false,
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
        expand: {
            options: Object.keys(expands),
            control: { type: 'select', label: expands },
            description:
                'The breakpoint, below which, the Navbar will collapse. When `true` the Navbar will always be expanded regardless of screen size.',
            table: {
                defaultValue: {
                    summary: true,
                },
                type: {
                    summary: "false | true | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' ",
                },
            },
        },
        expanded: {
            control: 'boolean',
            description:
                'controlled by: onToggle, initial prop: defaultExpanded\n' +
                'Controls the visiblity of the navbar body',
            table: {
                defaultValue: {
                    summary: undefined,
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
        fixed: {
            control: 'radio',
            options: ['top', 'bottom'],
            description:
                'Create a fixed navbar along the top or bottom of the screen, that scrolls with the page. A convenience prop for the `fixed-*` positioning classes.',
            table: {
                defaultValue: {
                    summary: undefined,
                },
                type: {
                    summary: "'top' | 'bottom'",
                },
            },
        },
        role: {
            control: 'text',
            description:
                'The ARIA role for the navbar, will default to `navigation` for Navbars whose as is something other than `<nav>`.',
            table: {
                defaultValue: {
                    summary: 'navigation',
                },
                type: {
                    summary: 'string',
                },
            },
        },
        sticky: {
            options: ['top'],
            control: 'check',
            description:
                'Position the navbar at the top of the viewport, but only after scrolling past it. A convenience prop for the `sticky-top` positioning class.\n' +
                '\n' +
                'Not supported in <= IE11 and other older browsers without a polyfill',
            table: {
                defaultValue: {
                    summary: undefined,
                },
                type: {
                    summary: 'top | undefined',
                },
            },
        },
        variant: {
            control: 'radio',
            options: ['light', 'dark'],
            description:
                'The general visual variant a the Navbar. Use in combination with the `bg` prop, `background-color` utilities, or your own background styles.',
            table: {
                defaultValue: {
                    summary: 'light',
                },
                type: {
                    summary: "'light' | 'dark'",
                },
            },
        },
        onToggle: {
            description:
                'The general visual variant a the Navbar. Use in combination with the `bg` prop, `background-color` utilities, or your own background styles.',
            table: {
                defaultValue: {
                    summary: undefined,
                },
                type: {
                    summary: 'func',
                },
            },
        },
        onSelect: {
            description:
                'A callback fired when a descendant of a child `<Nav>` is selected. Should be used to execute complex closing or other miscellaneous actions desired after selecting a descendant of `<Nav>`. Does nothing if no `<Nav>` or `<Nav>` descendants exist. The callback is called with an eventKey, which is a prop from the selected `<Nav>` descendant, and an event.',
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
            page: NavbarMDX,
        },
    },
};

export const Brand = (props) => (
    <Navbar bg="dark" variant="dark" {...props}>
        <Container>
            <Navbar.Brand href="#home">
                <img
                    alt="logo"
                    src="https://robohash.org/342893?set=set1"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Some title
            </Navbar.Brand>
        </Container>
    </Navbar>
);

export const ResponsiveBehaviors = (props) => (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" {...props}>
        <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export const NavbarOffcanvas = (props) => (
    <Navbar bg="light" expand={false} {...props}>
        <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>
);
