const Config = {
   //pra teste no lugar do localhost voce coloca seu ip local
   // API_URL: 'http://192.168.0.104:4000/',
   API_URL: 'http://192.168.137.119:4000/',
   // API_URL: '',
   TIMEOUT_REQUEST: 5000,
   HEADER_REQUEST: {
      post: {
         'Acess-Control-Allow-Origin': true,
      },
      Accept: 'application/json',
   },
};
export default Config;
