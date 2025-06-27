import { Router } from 'express';
import { getAllProducts, getProductsFilter} from '../controllers/productController';
import { getAllCategories } from '../controllers/categoriesController';

const router = Router();

router.get('/products', getAllProducts);   // GET /api/products
router.get('/productFilter', getProductsFilter); // GET /api/products
router.get('/categories', getAllCategories); // GET /api/categories
//router.post('/products', createProduct);     // POST /api/products

export default router;