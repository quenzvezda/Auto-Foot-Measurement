module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => h.file('public/views/home.html'),
  },
];
