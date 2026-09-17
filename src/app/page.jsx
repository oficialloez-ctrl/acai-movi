
export default function Home() {
  return (
    <main className="min-h-screen bg-purple-800 text-white p-8">
      <div className="max-w-5xl mx-auto text-center">
        <img src="/logo.png" className="w-48 mx-auto rounded-xl" />
        <h1 className="text-5xl font-bold mt-8 text-yellow-300">
          Açaí Moví
        </h1>
        <p className="mt-4 text-xl">
          Monte seu açaí do seu jeito em Francisco Beltrão.
        </p>

        <button className="mt-8 bg-yellow-400 text-purple-900 px-8 py-4 rounded-full font-bold">
          Fazer Pedido
        </button>

        <section className="mt-12 grid md:grid-cols-3 gap-5">
          <div className="bg-white text-purple-900 rounded-xl p-5">
            Açaí 300ml<br/>R$ 18,00
          </div>
          <div className="bg-white text-purple-900 rounded-xl p-5">
            Açaí 400ml<br/>R$ 20,00
          </div>
          <div className="bg-white text-purple-900 rounded-xl p-5">
            Açaí 500ml<br/>R$ 22,00
          </div>
        </section>
      </div>
    </main>
  )
}
