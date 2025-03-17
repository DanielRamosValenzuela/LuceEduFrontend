import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card';

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-50">
      <div className="bg-gradient-to-b from-primary-100 to-primary-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-primary-800 mb-4">Bienvenidos a LuceEdu</h1>
            <p className="text-xl text-primary-700 mb-8">Transformando la educación infantil</p>
            <Button variant="creative" size="lg">
              Comenzar Ahora
            </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            variant="growth"
            title="Aprendizaje Natural"
            description="Desarrollo integral adaptado al ritmo de cada niño"
          >
            <div className="text-growth-600 text-2xl mb-4">🌱</div>
          </Card>
          <Card
            variant="creative"
            title="Creatividad Sin Límites"
            description="Espacios que inspiran la imaginación"
          >
            <div className="text-creative-600 text-2xl mb-4">✨</div>
          </Card>
          <Card
            variant="wisdom"
            title="Educación de Calidad"
            description="Profesores expertos y dedicados"
          >
            <div className="text-wisdom-600 text-2xl mb-4">📚</div>
          </Card>
        </div>
      </div>
      <div className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para ser parte de nuestra comunidad?</h2>
          <p className="mb-8 text-primary-100">
            Únete a nosotros y sé parte del futuro de la educación
          </p>
          <Button variant="creative" size="lg">
            Conocer Más
          </Button>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestra Paleta de Colores</h2>

        <div className="mb-8">
          <Card variant="default" title="Primary Colors">
            <div className="grid grid-cols-10 gap-2">
              <div className="h-20 bg-primary-50 rounded flex items-end justify-center p-2">50</div>
              <div className="h-20 bg-primary-100 rounded flex items-end justify-center p-2">
                100
              </div>
              <div className="h-20 bg-primary-200 rounded flex items-end justify-center p-2">
                200
              </div>
              <div className="h-20 bg-primary-300 rounded flex items-end justify-center p-2">
                300
              </div>
              <div className="h-20 bg-primary-400 rounded flex items-end justify-center p-2">
                400
              </div>
              <div className="h-20 bg-primary-500 rounded flex items-end justify-center p-2 text-white">
                500
              </div>
              <div className="h-20 bg-primary-600 rounded flex items-end justify-center p-2 text-white">
                600
              </div>
              <div className="h-20 bg-primary-700 rounded flex items-end justify-center p-2 text-white">
                700
              </div>
              <div className="h-20 bg-primary-800 rounded flex items-end justify-center p-2 text-white">
                800
              </div>
              <div className="h-20 bg-primary-900 rounded flex items-end justify-center p-2 text-white">
                900
              </div>
            </div>
          </Card>
        </div>

        <div className="mb-8">
          <Card variant="default" title="Growth Colors">
            <div className="grid grid-cols-10 gap-2">
              <div className="h-20 bg-growth-50 rounded flex items-end justify-center p-2">50</div>
              <div className="h-20 bg-growth-100 rounded flex items-end justify-center p-2">
                100
              </div>
              <div className="h-20 bg-growth-200 rounded flex items-end justify-center p-2">
                200
              </div>
              <div className="h-20 bg-growth-300 rounded flex items-end justify-center p-2">
                300
              </div>
              <div className="h-20 bg-growth-400 rounded flex items-end justify-center p-2">
                400
              </div>
              <div className="h-20 bg-growth-500 rounded flex items-end justify-center p-2 text-white">
                500
              </div>
              <div className="h-20 bg-growth-600 rounded flex items-end justify-center p-2 text-white">
                600
              </div>
              <div className="h-20 bg-growth-700 rounded flex items-end justify-center p-2 text-white">
                700
              </div>
              <div className="h-20 bg-growth-800 rounded flex items-end justify-center p-2 text-white">
                800
              </div>
              <div className="h-20 bg-growth-900 rounded flex items-end justify-center p-2 text-white">
                900
              </div>
            </div>
          </Card>
        </div>

        <div className="mb-8">
          <Card variant="default" title="Creative Colors">
            <div className="grid grid-cols-10 gap-2">
              <div className="h-20 bg-creative-50 rounded flex items-end justify-center p-2">
                50
              </div>
              <div className="h-20 bg-creative-100 rounded flex items-end justify-center p-2">
                100
              </div>
              <div className="h-20 bg-creative-200 rounded flex items-end justify-center p-2">
                200
              </div>
              <div className="h-20 bg-creative-300 rounded flex items-end justify-center p-2">
                300
              </div>
              <div className="h-20 bg-creative-400 rounded flex items-end justify-center p-2">
                400
              </div>
              <div className="h-20 bg-creative-500 rounded flex items-end justify-center p-2">
                500
              </div>
              <div className="h-20 bg-creative-600 rounded flex items-end justify-center p-2 text-white">
                600
              </div>
              <div className="h-20 bg-creative-700 rounded flex items-end justify-center p-2 text-white">
                700
              </div>
              <div className="h-20 bg-creative-800 rounded flex items-end justify-center p-2 text-white">
                800
              </div>
              <div className="h-20 bg-creative-900 rounded flex items-end justify-center p-2 text-white">
                900
              </div>
            </div>
          </Card>
        </div>

        <div className="mb-8">
          <Card variant="default" title="Wisdom Colors">
            <div className="grid grid-cols-10 gap-2">
              <div className="h-20 bg-wisdom-50 rounded flex items-end justify-center p-2">50</div>
              <div className="h-20 bg-wisdom-100 rounded flex items-end justify-center p-2">
                100
              </div>
              <div className="h-20 bg-wisdom-200 rounded flex items-end justify-center p-2">
                200
              </div>
              <div className="h-20 bg-wisdom-300 rounded flex items-end justify-center p-2">
                300
              </div>
              <div className="h-20 bg-wisdom-400 rounded flex items-end justify-center p-2 text-white">
                400
              </div>
              <div className="h-20 bg-wisdom-500 rounded flex items-end justify-center p-2 text-white">
                500
              </div>
              <div className="h-20 bg-wisdom-600 rounded flex items-end justify-center p-2 text-white">
                600
              </div>
              <div className="h-20 bg-wisdom-700 rounded flex items-end justify-center p-2 text-white">
                700
              </div>
              <div className="h-20 bg-wisdom-800 rounded flex items-end justify-center p-2 text-white">
                800
              </div>
              <div className="h-20 bg-wisdom-900 rounded flex items-end justify-center p-2 text-white">
                900
              </div>
            </div>
          </Card>
        </div>

        <div className="mb-8">
          <Card variant="default" title="Neutral Colors">
            <div className="grid grid-cols-10 gap-2">
              <div className="h-20 bg-neutral-50 rounded flex items-end justify-center p-2">50</div>
              <div className="h-20 bg-neutral-100 rounded flex items-end justify-center p-2">
                100
              </div>
              <div className="h-20 bg-neutral-200 rounded flex items-end justify-center p-2">
                200
              </div>
              <div className="h-20 bg-neutral-300 rounded flex items-end justify-center p-2">
                300
              </div>
              <div className="h-20 bg-neutral-400 rounded flex items-end justify-center p-2">
                400
              </div>
              <div className="h-20 bg-neutral-500 rounded flex items-end justify-center p-2 text-white">
                500
              </div>
              <div className="h-20 bg-neutral-600 rounded flex items-end justify-center p-2 text-white">
                600
              </div>
              <div className="h-20 bg-neutral-700 rounded flex items-end justify-center p-2 text-white">
                700
              </div>
              <div className="h-20 bg-neutral-800 rounded flex items-end justify-center p-2 text-white">
                800
              </div>
              <div className="h-20 bg-neutral-900 rounded flex items-end justify-center p-2 text-white">
                900
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
