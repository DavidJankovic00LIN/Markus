import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Politika privatnosti
          </h1>
          <div className="w-24 h-1 bg-brand mx-auto mb-12"></div>
          
          {/* Empty content - to be filled later */}
          <div className="text-gray-600 text-center py-12">
            <p>Sadržaj će biti dodat uskoro.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
