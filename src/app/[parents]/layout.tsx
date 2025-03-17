export default function ParentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary-800">Portal de Padres</h1>
        <p className="text-neutral-600">Gestione la educación de sus hijos de manera eficiente</p>
      </div>
      {children}
    </div>
  );
}
