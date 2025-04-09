export interface ExampleProps {
    /** IDK */
    testIdPrefix: string;
    /** Title of the rating */
    title?: string;
    /** Either "primary" or "secondary" */
    theme: "primary" | "secondary";
    /** Click functionality disabled if true */
    disabled?: boolean;
    /** Size of button either "small", "medium", or "large" */
    size?: "small" | "medium" | "large";
}