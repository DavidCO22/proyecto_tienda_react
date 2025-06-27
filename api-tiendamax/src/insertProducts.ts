import prisma from './prisma/client';

async function insertProducts() {

    try{
        await prisma.products.createMany({
            data:[
        {
          name: "Hisense 40\" FHD LED TV",
          description: "Televisor de 40 pulgadas Full HD con puertos HDMI y USB.",
          price: 999000,
          stock: 100,
          image_url: "/products/",
          category_id: 3,
          created_at: new Date(),
        },
        {
          name: "Philips Android TV 50\"",
          description: "Android TV con acceso a Google Play, Chromecast incorporado y control por voz.",
          price: 1749000,
          stock: 100,
          image_url: "/products/",
          category_id: 3,
          created_at: new Date(),
        },
        {
          name: "Samsung Neo QLED 75\"",
          description: "Tecnología Mini LED, resolución 4K y procesador Neo Quantum.",
          price: 8499000,
          stock: 100,
          image_url: "/products/",
          category_id: 3,
          created_at: new Date(),
        },
        {
          name: "LG NanoCell TV 55\"",
          description: "Colores puros con tecnología NanoCell, resolución 4K y webOS.",
          price: 2399000,
          stock: 100,
          image_url: "/products/",
          category_id: 3,
          created_at: new Date(),
        },
        {
          name: "Hyundai LED TV 32\"",
          description: "Televisor económico HD con buen rendimiento y conectividad básica.",
          price: 649000,
          stock: 100,
          image_url: "/products/",
          category_id: 3,
          created_at: new Date(),
        },
        {
          name: "Kalley Smart TV 50\" 4K",
          description: "Televisor colombiano con resolución 4K y funciones inteligentes.",
          price: 1099000,
          stock: 100,
          image_url: "/products/",
          category_id: 3,
          created_at: new Date(),
        },
        {
          name: "Samsung The Frame 55\"",
          description: "Diseño artístico, se convierte en cuadro decorativo cuando está apagado.",
          price: 3499000,
          stock: 100,
          image_url: "/products/",
          category_id: 3,
          created_at: new Date(),
        },
        {
          name: "Noblex 43\" Smart TV",
          description: "Pantalla LED, resolución Full HD y acceso a aplicaciones en línea.",
          price: 899000,
          stock: 100,
          image_url: "/products/",
          category_id: 3,
          created_at: new Date(),
        },
        {
          name: "Panasonic 40\" Android TV",
          description: "Sistema Android con control de voz, Google Assistant y Bluetooth.",
          price: 1199000,
          stock: 100,
          image_url: "/products/",
          category_id: 3,
          created_at: new Date(),
        },
        {
          name: "Sony XR OLED 77\" A80L",
          description: "Experiencia premium con panel OLED, sonido envolvente y HDR total.",
          price: 10999000,
          stock: 100,
          image_url: "/products/",
          category_id: 3,
          created_at: new Date(),
        },
        {
          name: "Sharp Aquos 42\" LED TV",
          description: "Modelo básico con buena calidad de imagen y bajo consumo energético.",
          price: 799000,
          stock: 100,
          image_url: "/products/",
          category_id: 3,
          created_at: new Date(),
        },
        {
          name: "Toshiba Smart TV 50\"",
          description: "Televisor inteligente con resolución 4K y acceso a apps de streaming.",
          price: 1349000,
          stock: 100,
          image_url: "/products/",
          category_id: 3,
          created_at: new Date(),
        },
        {
          name: "LG LED TV 32\" HD",
          description: "Buena opción económica con resolución HD y sonido virtual surround.",
          price: 739000,
          stock: 100,
          image_url: "/products/",
          category_id: 3,
          created_at: new Date(),
        },
        {
          name: "Samsung Crystal UHD 65\"",
          description: "Excelente calidad de imagen, sistema Tizen y múltiples conectividades.",
          price: 2699000,
          stock: 100,
          image_url: "/products/",
          category_id: 3,
          created_at: new Date(),
        },
        {
          name: "Hyundai Android TV 43\"",
          description: "TV económico con sistema Android y compatibilidad con Chromecast.",
          price: 999000,
          stock: 100,
          image_url: "/products/",
          category_id: 3,
          created_at: new Date(),
        },
        {
          name: "LG QNED MiniLED 65\"",
          description: "Tecnología avanzada con mejor brillo, contraste y escalamiento de imagen.",
          price: 3999000,
          stock: 100,
          image_url: "/products/",
          category_id: 3,
          created_at: new Date(),
        }
            ]
        })
        console.log("📦 Productos de televisores insertados correctamente");
    }
   
    catch (error) {
        console.error("❌ Error insertando productos:", error);
    }
    finally {
        await prisma.$disconnect();
    }
}

insertProducts();