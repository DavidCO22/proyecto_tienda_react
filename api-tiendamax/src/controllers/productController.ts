import { Request, Response } from 'express';
import prisma from '../prisma/client';


export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.products.findMany({
      select:{
        id:true,
        name:true,
        categories:{
          select:{name:true} 
        },
        price:true

      } // Incluye la relación con categorías
    }); // Lee todos los productos
    res.json(products); // Los devuelve en formato JSON
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

export const getProductsFilter = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const skip = (page - 1) * limit;

  try {
    const total = await prisma.products.count();
    const {category} = req.query; // Obtiene la categoría del query string 
    const products = await prisma.products.findMany({
      skip,
      take: limit,
      where: category
        ? {
            categories: {
              name: {
                equals: String(category), 
                mode: "insensitive", // para no distinguir mayúsculas
              },
            },
          }
        : {},
      select:{
        id:true,
        name:true,
        /* categories:{
          select:{name:true} 
        }, */
        price:true,
        description:true,
        image_url:true,
        stock:true,

      } 
    }); 
    res.json({
      data:products,
      page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
    }); // Los devuelve en formato JSON
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};