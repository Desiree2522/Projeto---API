import express from 'express'; 
import {musicasRouter} from './router/musica.routes.js';
const app = express(); 
const PORT = 3000; 

app. use(express.json()); 
app.use('/', musicasRouter );

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); 
});

