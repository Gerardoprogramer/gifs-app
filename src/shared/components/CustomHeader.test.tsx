import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { CustomHeader } from "./CustomHeader";


describe('CustomHeader', () => {

    const title = "Test Title";

    test('should render the title correctly', () => {
        render(<CustomHeader title={title} />);
        expect(screen.getByText(title)).toBeDefined();
    });

    test('should render the description when provided', () => {
        const description = "Test Description";
        render(<CustomHeader title={title} description={description} />);
        expect(screen.getByText(description)).toBeDefined();
    });

    test('should not render the description when not provided', () => {
        const { container } = render(<CustomHeader title={title} />);
        expect(container.querySelector('p')).toBeNull();
    });
});
