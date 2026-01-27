export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {/* HEADER */}
        <header style={{ padding: "16px", borderBottom: "1px solid #ddd" }}>
          <h1>Ecommerce</h1>

          <nav style={{ display: "flex", gap: "16px" }}>
            <a href="/">Home</a>
            <a href="/products">Productos</a>
          </nav>
        </header>

        {/* CONTENIDO DINÁMICO */}
        <main style={{ padding: "24px" }}>
          {children}
        </main>

        {/* FOOTER */}
        <footer style={{ padding: "16px", borderTop: "1px solid #ddd" }}>
          <p>© 2026 Ecommerce</p>
        </footer>
      </body>
    </html>
  );
}