import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "./tabs";

const meta = {
    title: "Components/Tabs",
    component: Tabs,
    parameters: {
        layout: "padded",
        docs: {
            description: {
                component: `
                    ## Technical decisions

                    ### Accessibility
                    Tabs use native buttons and ARIA roles to provide keyboard accessibility.

                    ### Tab content
                    The component accepts ReactNode since the content is not specified in Figma.
                    This keeps the content flexible, although variants with predefined designs
                    could be added in the future.

                    ### Badge
                    Badge could be implemented as a separate component and included here.
                    For this exercise, I decided that adding it as a property is enough.
                `,
            },
        },
    },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Pill: Story = {
    args: {
        tabType: "pill",
        tabElements: [
            {
                label: "Tab 1",
                content: (
                    <div className="tabs__content-example1">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                ),
            },
            {
                label: "Tab 2",
                badge: {
                    text: "Badge",
                    variant: "negative",
                },
                content: (
                    <div className="tabs__content-example2">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                ),
            },
            {
                label: "Tab 3",
                badge: {
                    text: "Info",
                },
                content: (
                    <div className="tabs__content-example1">
                        <div></div>
                    </div>
                ),
            },
            {
                label: "Tab 4",
                badge: {
                    text: "Badge",
                    variant: "positive",
                },
                content: (
                    <div className="tabs__content-example2">
                        <div></div>
                        <div></div>
                    </div>
                ),
            },
        ],
    },
};

export const Underline: Story = {
    args: {
        tabType: "underline",
        tabElements: [
           {
                label: "Tab 1",
                content: (
                    <div className="tabs__content-example1">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                ),
            },
            {
                label: "Tab 2",
                badge: {
                    text: "Badge",
                    variant: "negative",
                },
                content: (
                    <div className="tabs__content-example2">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                ),
            },
            {
                label: "Tab 3",
                badge: {
                    text: "Info",
                },
                content: (
                    <div className="tabs__content-example1">
                        <div></div>
                    </div>
                ),
            },
            {
                label: "Tab 4",
                badge: {
                    text: "Badge",
                    variant: "positive",
                },
                content: (
                    <div className="tabs__content-example2">
                        <div></div>
                        <div></div>
                    </div>
                ),
            },
        ],
    },
};

export const WithBadges: Story = {
    args: {
        tabType: "pill",
        tabElements: [
            {
                label: "Tab 1",
                content: (
                    <div className="tabs__content-example1">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                ),
            },
            {
                label: "Tab 2",
                badge: {
                    text: "Badge",
                    variant: "negative",
                },
                content: (
                    <div className="tabs__content-example2">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                ),
            },
            {
                label: "Tab 3",
                badge: {
                    text: "Info",
                },
                content: (
                    <div className="tabs__content-example1">
                        <div></div>
                    </div>
                ),
            },
            {
                label: "Tab 4",
                badge: {
                    text: "Badge",
                    variant: "positive",
                },
                content: (
                    <div className="tabs__content-example2">
                        <div></div>
                        <div></div>
                    </div>
                ),
            },
        ],
    },
};


export const UnderlineWithBadges: Story = {
    args: {
        tabType: "underline",
        tabElements: [
            {
                label: "Tab 1",
                content: (
                    <div className="tabs__content-example1">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                ),
            },
            {
                label: "Tab 2",
                badge: {
                    text: "Badge",
                    variant: "negative",
                },
                content: (
                    <div className="tabs__content-example2">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                ),
            },
            {
                label: "Tab 3",
                badge: {
                    text: "Info",
                },
                content: (
                    <div className="tabs__content-example1">
                        <div></div>
                    </div>
                ),
            },
            {
                label: "Tab 4",
                badge: {
                    text: "Badge",
                    variant: "positive",
                },
                content: (
                    <div className="tabs__content-example2">
                        <div></div>
                        <div></div>
                    </div>
                ),
            },
        ],
    },
};
