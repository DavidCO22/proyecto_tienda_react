import { Request, Response } from 'express';
import prisma from '../prisma/client';

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await prisma.categories.findMany({
      select:{
        id:true,
        name:true,
        image:true,
      } 
    }); 
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener categorías' });
  }
};
