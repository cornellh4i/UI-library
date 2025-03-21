export interface ExampleProps {
    testIdPrefix: string;
    title?: string;
    theme: "primary" | "secondary";
    disabled?: boolean;
    size?: "small" | "medium" | "large";
}