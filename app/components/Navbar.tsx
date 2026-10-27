"use client";
import Link from "next/link";
import CartIcon from "./CartIcon";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <nav className="flex gap-4">
        <Link href="/" className="font-bold font-serif">
          CheapDotCom
        </Link>
        <Link href="/">Home</Link>
        <Link href="/products">Productos</Link>
        <Link href="/cart">Carrito</Link>
      </nav>
      <CartIcon />
    </header>
  );
};

export default Navbar;
