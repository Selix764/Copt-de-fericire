import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-chalkboard">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-chalk-white mb-4">Pagina nu a fost găsită</h2>
        <p className="text-chalk-white/80 mb-8">Ne pare rău, nu am putut găsi pagina pe care o căutați.</p>
        <Link 
          href="/" 
          className="bg-brush-orange hover:bg-gold-accent text-chalkboard px-8 py-3 rounded-2xl font-poppins font-bold transition-all duration-300"
        >
          Înapoi acasă
        </Link>
      </div>
    </div>
  )
} 