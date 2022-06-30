const Config = {
   //pra teste no lugar do localhost voce coloca seu ip local
   API_URL: 'http://:4000/',
   TIMEOUT_REQUEST: 5000,
   HEADER_REQUEST: {
      post: {
         'Acess-Control-Allow-Origin': true,
      },
      Accept: 'application/json',
   },
};
export default Config;
