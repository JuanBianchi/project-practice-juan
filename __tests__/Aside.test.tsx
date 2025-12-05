import { render, screen } from '@testing-library/react';
import Aside from '../app/components/Aside';

describe('Aside Component', () => {
    test('renders the menu title', () => {
        render(<Aside />);

        const menuTitle = screen.getByText('Menú');
        expect(menuTitle).toBeInTheDocument();
    });

    test('renders all navigation links', () => {
        render(<Aside />);

        const inicioLink = screen.getByText('Inicio');
        const loginLink = screen.getByText('Inicia sesión');
        const newsLink = screen.getByText('Últimas noticias');

        expect(inicioLink).toBeInTheDocument();
        expect(loginLink).toBeInTheDocument();
        expect(newsLink).toBeInTheDocument();
    });
});
