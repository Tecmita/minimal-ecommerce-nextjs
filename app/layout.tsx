import "./globals.css";
import { CartProvider } from "./features/cart/cart.context";
import CartIndicator from "./components/cartIndicator";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <CartProvider>
          <Navbar />
          {/* CONTENIDO DINÁMICO */}
          <main className="flex-1 space-y-12 pb-16">
            <div className="">{children}</div>
          </main>

          <footer style={{ padding: "16px", borderTop: "1px solid #ddd" }}>
            <p>© 2026 Ecommerce</p>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
