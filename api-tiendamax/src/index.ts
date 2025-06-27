import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productsRoutes';

const app = express();                     // Crea el servidor
const PORT = process.env.PORT || 4000;

app.use(cors());                           // Permite conexiones desde otros orígenes
app.use(express.json());                   // Permite recibir JSON en las peticiones
app.use('/api', productRoutes);            // Usa las rutas bajo /api

app.get('/', (req, res) => {
  res.send('API de TiendaMax funcionando 🚀');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
