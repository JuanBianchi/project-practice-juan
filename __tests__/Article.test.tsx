import React from 'react';
import { render, screen } from '@testing-library/react';
import Article, { ArticleProps } from '../app/components/Article';
import '@testing-library/jest-dom';

describe('Article Component', () => {
    const mockProps: ArticleProps = {
        id: 1,
        title: 'Test Title',
        summary: 'Test Summary',
        date: '2023-01-01',
        author: 'Test Author',
    };

    it('renders article information correctly', () => {
        render(<Article {...mockProps} />);

        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByText('Test Summary')).toBeInTheDocument();
        expect(screen.getByText('2023-01-01')).toBeInTheDocument();
        expect(screen.getByText('Test Author')).toBeInTheDocument();

        const link = screen.getByRole('link', { name: /Leer más/i });
        expect(link).toHaveAttribute('href', '/article/1');
    });
});
