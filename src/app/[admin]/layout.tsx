export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-wisdom-800">Portal Administrativo</h1>
        <p className="text-neutral-600">Gestión y control del centro educativo</p>
      </div>
      {children}
    </div>
  );
}
