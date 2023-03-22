module.exports = (req, res) => {
  if (req.method === 'GET') {
    res.status(200).send('jlkjel');
  } else {
    res.status(405).send('Method Not Allowed');
  }
};
