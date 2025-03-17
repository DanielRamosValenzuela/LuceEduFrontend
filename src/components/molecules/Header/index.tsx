import { Button } from '@/components/atoms/Button';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white border-b border-neutral-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-600">LuceEdu</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/parents"
              className="text-neutral-600 hover:text-primary-600 transition-colors"
            >
              Padres
            </Link>
            <Link
              href="/teachers"
              className="text-neutral-600 hover:text-primary-600 transition-colors"
            >
              Profesores
            </Link>
            <Link
              href="/admin"
              className="text-neutral-600 hover:text-primary-600 transition-colors"
            >
              Administración
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="wisdom">Iniciar Sesión</Button>
            <Button variant="primary">Registrarse</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
