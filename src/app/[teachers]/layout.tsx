export default function TeachersLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-growth-800">Portal de Profesores</h1>
        <p className="text-neutral-600">Gestione sus clases y estudiantes de manera efectiva</p>
      </div>
      {children}
    </div>
  );
}
