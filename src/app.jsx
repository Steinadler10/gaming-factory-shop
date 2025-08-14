import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Monitor, Mouse, Keyboard, Cpu, Search, Filter, Trash2, Minus, Plus, X, CreditCard, Truck, ChevronDown, Laptop, Gamepad2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import logo from "./assets/logo.png";

// ----- Utilities -----
const currency = new Intl.NumberFormat("es-PE", { style: "currency", currency: "PEN", maximumFractionDigits: 0 });

const categories = [
  { id: "pc", name: "PCs Armadas", icon: <Laptop className="w-4 h-4" /> },
  { id: "gpu", name: "Tarjetas de Video", icon: <Cpu className="w-4 h-4" /> },
  { id: "mouse", name: "Mouse", icon: <Mouse className="w-4 h-4" /> },
  { id: "keyboard", name: "Teclados", icon: <Keyboard className="w-4 h-4" /> },
  { id: "otros", name: "Accesorios", icon: <Gamepad2 className="w-4 h-4" /> },
];
const slides = [
  {
    src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop",
    title: "Arma tu setup gamer",
    subtitle: "PCs armadas con garantía local y envío rápido",
  },
  {
    src: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
    title: "GPUs al mejor precio",
    subtitle: "RTX 40 Series • Stock limitado",
  },
  {
    src: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=1600&auto=format&fit=crop",
    title: "Periféricos pro",
    subtitle: "Teclados y mouse con precisión milimétrica",
  },
];
const demoProducts = [
  {
    id: "pc-elite-01",
    name: "PC Elite i7 + RTX 4070 Super",
    price: 5799,
    category: "pc",
    stock: 6,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop",
    specs: ["Intel Core i7-12700F", "32GB RAM", "1TB NVMe", "RTX 4070 Super 12GB"],
    tags: ["Mejor opción", "1080p/1440p"],
  },
  {
    id: "gpu-rtx-4060",
    name: "GeForce RTX 4060 8GB (Partner)",
    price: 1299,
    category: "gpu",
    stock: 15,
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop",
    specs: ["DLSS 3", "8GB GDDR6", "Perfecta para 1080p"],
    tags: ["Top ventas"],
  },
  {
    id: "gpu-rtx-4080",
    name: "GeForce RTX 4080 Super 16GB",
    price: 4499,
    category: "gpu",
    stock: 4,
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
    specs: ["4K Ultra", "16GB GDDR6X", "Frame Gen"],
    tags: ["Alto rendimiento"],
  },
  {
    id: "mouse-viper",
    name: "Mouse Gamer 26K DPI Ultraligero",
    price: 189,
    category: "mouse",
    stock: 30,
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1200&auto=format&fit=crop",
    specs: ["Sensor 26K DPI", "58g", "Switches ópticos"],
    tags: ["Liviano"],
  },
  {
    id: "kb-mech-01",
    name: "Teclado Mecánico 75% RGB Hot-Swap",
    price: 289,
    category: "keyboard",
    stock: 22,
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=1200&auto=format&fit=crop",
    specs: ["Gateron G Pro", "Keycaps PBT", "Bluetooth/USB-C"],
    tags: ["Silencioso"],
  },
  {
    id: "headset-7.1",
    name: "Headset 7.1 con Micrófono",
    price: 229,
    category: "otros",
    stock: 18,
    rating: 4.4,
    img: "https://images.unsplash.com/photo-1599669454699-248893623440?q=80&w=1200&auto=format&fit=crop",
    specs: ["Sonido 7.1", "Almohadillas memory foam", "Micrófono removible"],
    tags: ["Confort"],
  },
];
function HeroSlider() {
  const [idx, setIdx] = useState(0);
  const go = (n) => setIdx((p) => (p + n + slides.length) % slides.length);

  // autoplay cada 4s, pausa al pasar el mouse
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 4000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
        <div className="relative rounded-3xl border border-neutral-800 overflow-hidden bg-neutral-900">
          {/* Imagen deslizante */}
          <div className="relative aspect-[16/8] md:aspect-[16/6]">
            <motion.img
              key={slides[idx].src}
              src={slides[idx].src}
              alt={slides[idx].title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
            {/* Degradado para leer el texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            {/* Texto */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
              <h2 className="text-2xl md:text-4xl font-bold">{slides[idx].title}</h2>
              <p className="text-neutral-300 mt-2">{slides[idx].subtitle}</p>
              <div className="mt-4 flex gap-3">
                <Button className="bg-red-600 hover:bg-red-500" onClick={() => document.getElementById("catalogo")?.scrollIntoView({behavior:"smooth"})}>
                  Ver catálogo
                </Button>
                <Button variant="secondary" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  Ofertas
                </Button>
              </div>
            </div>

            {/* Flechas */}
            <button
              aria-label="Anterior"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur px-3 py-2 text-white"
            >
              ‹
            </button>
            <button
              aria-label="Siguiente"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur px-3 py-2 text-white"
            >
              ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Ir al slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-white" : "w-2 bg-white/50"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function useLocalStorage(key, initial) {
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initial;
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(state)); } catch {}
  }, [key, state]);
  return [state, setState];
}

export default function GamerShopApp() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("all");
  const [sort, setSort] = useState("pop");
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useLocalStorage("gamer_cart_v1", []);
  const [coupon, setCoupon] = useState("");

  const products = demoProducts;

  const filtered = useMemo(() => {
    let list = products.filter(p => (cat === "all" || p.category === cat) && p.name.toLowerCase().includes(query.toLowerCase()));
    if (sort === "price_asc") list.sort((a,b)=>a.price-b.price);
    if (sort === "price_desc") list.sort((a,b)=>b.price-a.price);
    if (sort === "pop") list.sort((a,b)=>b.rating-a.rating);
    return list;
  }, [products, query, cat, sort]);

  const addToCart = (item) => {
    setCart((prev) => {
      const found = prev.find((x) => x.id === item.id);
      if (found) return prev.map(x => x.id===item.id ? { ...x, qty: Math.min(x.qty+1, 10) } : x);
      return [...prev, { id: item.id, name: item.name, price: item.price, img: item.img, qty: 1 }];
    });
    setCartOpen(true);
  };

  const cartSubtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const discount = coupon.trim().toUpperCase() === "GG10" ? cartSubtotal * 0.10 : 0;
  const shipping = cartSubtotal > 2500 ? 0 : (cartSubtotal === 0 ? 0 : 25);
  const total = Math.max(0, cartSubtotal - discount) + shipping;

  const removeItem = (id) => setCart((prev) => prev.filter((x) => x.id !== id));
  const changeQty = (id, delta) => setCart((prev)=> prev.map(x => x.id===id ? { ...x, qty: Math.min(10, Math.max(1, x.qty+delta)) } : x));
  const clearCart = () => setCart([]);

  const handleCheckout = () => {
  // Armamos el mensaje de WhatsApp como un array de líneas para mayor legibilidad
  const lines = [
    "Hola, quiero comprar:\n",
    ...cart.map((i) => `• ${i.qty}x ${i.name} — ${currency.format(i.price)}`),
    `\nSubtotal: ${currency.format(cartSubtotal)}\n`,
    discount ? `Descuento: -${currency.format(discount)}\n` : "",
    `Envío: ${shipping === 0 ? "GRATIS" : currency.format(shipping)}\n`,
    `Total: ${currency.format(total)}`
  ];

  // Unimos el array en un solo string y codificamos para URL
  const text = encodeURIComponent(lines.join(""));

  // Número de WhatsApp de destino (incluye código de país sin el "+")
  const phone = "956470074"; 

  // Abrimos el enlace en una nueva pestaña solo en entorno navegador
  if (typeof window !== "undefined") {
    window.open(`https://wa.me/51${phone}?text=${text}`, "_blank");
  }

};

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* Topbar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-3">
          <motion.div initial={{opacity:0,y:-6}} animate={{opacity:1,y:0}} className="flex items-center gap-2">
            <img src={logo} alt="Gaming Factory Shop" className="h-auto w-60 rounded-xl object-contain" />
          
          </motion.div>
          <div className="ml-auto flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2">
              <Input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Buscar producto..." className="w-[260px] bg-neutral-900 border-neutral-800" />
              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="w-[180px] bg-neutral-900 border-neutral-800">
                  <SelectValue placeholder="Ordenar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pop">Más populares</SelectItem>
                  <SelectItem value="price_asc">Precio: menor a mayor</SelectItem>
                  <SelectItem value="price_desc">Precio: mayor a menor</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Sheet open={cartOpen} onOpenChange={setCartOpen}>
              <SheetTrigger asChild>
                <Button variant="secondary" className="gap-2">
                  <ShoppingCart className="w-4 h-4"/>
                  <span className="hidden sm:inline">Carrito</span>
                  {cart.length>0 && (<Badge variant="secondary" className="ml-1">{cart.reduce((s,i)=>s+i.qty,0)}</Badge>)}
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-neutral-950 border-neutral-800 text-neutral-50 w-full sm:max-w-md">
                <SheetHeader>
                  <SheetTitle>Tu Carrito</SheetTitle>
                </SheetHeader>
                <div className="mt-4 space-y-4">
                  {cart.length===0 && (
                    <p className="text-neutral-400">Aún no has agregado productos.</p>
                  )}
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center gap-3 border border-neutral-800 rounded-xl p-3">
                      <img src={item.img} alt={item.name} className="w-16 h-16 rounded-lg object-cover"/>
                      <div className="flex-1 min-w-0">
                        <p className="truncate font-medium">{item.name}</p>
                        <p className="text-sm text-neutral-400">{currency.format(item.price)}</p>
                        <div className="mt-2 inline-flex items-center gap-2">
                          <Button size="icon" variant="secondary" onClick={()=>changeQty(item.id,-1)}><Minus className="w-4 h-4"/></Button>
                          <span className="w-6 text-center">{item.qty}</span>
                          <Button size="icon" variant="secondary" onClick={()=>changeQty(item.id,1)}><Plus className="w-4 h-4"/></Button>
                        </div>
                      </div>
                      <Button size="icon" variant="ghost" onClick={()=>removeItem(item.id)}>
                        <Trash2 className="w-4 h-4"/>
                      </Button>
                    </div>
                  ))}

                  {cart.length>0 && (
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <Input placeholder="Cupón (GG10)" value={coupon} onChange={(e)=>setCoupon(e.target.value)} className="bg-neutral-900 border-neutral-800"/>
                        <Button variant="outline" className="border-neutral-700">Aplicar</Button>
                      </div>
                      <div className="border-t border-neutral-800 pt-3 space-y-2 text-sm">
                        <div className="flex justify-between"><span>Subtotal</span><span>{currency.format(cartSubtotal)}</span></div>
                        {discount>0 && <div className="flex justify-between text-emerald-400"><span>Descuento</span><span>-{currency.format(discount)}</span></div>}
                        <div className="flex justify-between"><span>Envío</span><span>{shipping===0?"GRATIS":currency.format(shipping)}</span></div>
                        <div className="flex justify-between font-semibold text-base pt-2"><span>Total</span><span>{currency.format(total)}</span></div>
                      </div>
                      <div className="grid gap-2">
                        <Button className="w-full bg-red-600 hover:bg-red-500" onClick={handleCheckout}>
                          <CreditCard className="w-4 h-4 mr-2"/> Finalizar compra
                        </Button>
                        <Button variant="ghost" className="w-full" onClick={clearCart}>
                          <X className="w-4 h-4 mr-2"/> Vaciar carrito
                        </Button>
                        <p className="text-xs text-neutral-400 flex items-center gap-1"><Truck className="w-3 h-3"/> Envíos gratis desde S/ 2,500 en Lima Metropolitana</p>
                      </div>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

    <HeroSlider />

      {/* Controls (mobile) */}
      <div className="md:hidden sticky top-[57px] z-30 bg-neutral-950 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2">
          <div className="flex items-center gap-2 flex-1">
            <Search className="w-4 h-4 text-neutral-400"/>
            <Input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Buscar producto..." className="bg-neutral-900 border-neutral-800"/>
          </div>
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-[160px] bg-neutral-900 border-neutral-800">
              <SelectValue placeholder="Ordenar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pop">Más populares</SelectItem>
              <SelectItem value="price_asc">Precio: menor a mayor</SelectItem>
              <SelectItem value="price_desc">Precio: mayor a menor</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Catalog */}
      <section id="catalogo" className="max-w-7xl mx-auto px-4 py-10">
        <Tabs defaultValue="all" value={cat} onValueChange={setCat}>
          <div className="flex items-center justify-between gap-2 mb-4">
            <TabsList className="flex-wrap">
              <TabsTrigger value="all">Todos</TabsTrigger>
              {categories.map(c => (
                <TabsTrigger key={c.id} value={c.id} className="flex items-center gap-2">{c.icon}{c.name}</TabsTrigger>
              ))}
            </TabsList>
            <div className="hidden md:flex items-center gap-2 text-neutral-400 text-sm">
              <Filter className="w-4 h-4"/> {filtered.length} resultados
            </div>
          </div>

          <TabsContent value={cat} className="mt-0">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map(p => (
                <Card key={p.id} className="bg-neutral-950/60 border-neutral-800 hover:border-neutral-700 transition-colors">
                  <CardHeader>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-neutral-800">
                      <img src={p.img} alt={p.name} className="w-full h-full object-cover"/>
                      <div className="absolute top-2 left-2 flex flex-wrap gap-2">
                        {p.tags?.map(t => <Badge key={t} variant="secondary" className="bg-neutral-100/10 text-neutral-100 border-neutral-700">{t}</Badge>)}
                      </div>
                    </div>
                    <CardTitle className="text-lg mt-2 leading-tight">{p.name}</CardTitle>
                    <CardDescription className="mt-1">{p.specs?.slice(0,3).join(" • ")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xl font-semibold">{currency.format(p.price)}</div>
                        <div className="text-xs text-neutral-400">Stock: {p.stock} • ⭐ {p.rating}</div>
                      </div>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="secondary" onClick={()=>addToCart(p)} className="">
                              <ShoppingCart className="w-4 h-4 mr-2"/> Agregar
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Añadir al carrito</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </CardContent>
                  <CardFooter className="text-xs text-neutral-400">
                    {p.specs?.map(s=> <span key={s} className="mr-2">• {s}</span>)}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-sm text-neutral-300">
          <div>
            <div className="flex items-center gap-2 font-semibold text-neutral-100">
              <Shield className="w-4 h-4"/> Gaming Factory
            </div>
            <p className="mt-2 text-neutral-400">Hardware gamer con garantía local y facturación. Lima, Perú.</p>
          </div>
          <div>
            <p className="font-semibold mb-2 text-neutral-100">Atención</p>
            <ul className="space-y-1 text-neutral-400">
              <li>Lun–Vie 8:30–22:00</li>
              <li>WhatsApp: 956 470 074</li>
              <li>Email: ventas@gamerfactory.pe</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2 text-neutral-100">Compra segura</p>
            <ul className="space-y-1 text-neutral-400">
              <li>Pagos con tarjeta, Yape/Plin y transferencia</li>
              <li>Política de devoluciones 7 días</li>
              <li>RUC y boleta/factura electrónica</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-neutral-500 pb-8">© {new Date().getFullYear()} Gaming Factory. Todos los derechos reservados.</div>
      </footer>
    </div>
  );
}
