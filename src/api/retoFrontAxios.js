// Fichero con la configuración básica del url.

import axios from 'axios';

const baseURL = 'https://itx-frontend-test.onrender.com/api/';

const retoFrontAxios = axios.create({ baseURL });

export default retoFrontAxios;
