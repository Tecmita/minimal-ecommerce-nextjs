export default function HomePage() {
  return (
    <>
      {/* HERO */}

      <section className="text-zinc-900 bg-lime-400 text-center">
        <div className="max-w-4xl mx-auto">
          <h2>Bienvenido a nuestro Ecommerce</h2>
          <p>Las mejores ofertas en un solo lugar</p>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section style={{ marginTop: "32px" }}>
        <h3>Categorías destacadas</h3>
        <ul>
          <li>📱 Electrónica</li>
          <li>👕 Ropa</li>
          <li>🏠 Hogar</li>
        </ul>
      </section>

      {/* CTA */}
      <section style={{ marginTop: "32px" }}>
        <a href="/products">👉 Ver todos los productos</a>
      </section>
    </>
  );
}
