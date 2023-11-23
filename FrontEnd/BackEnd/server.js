import app from './app';

const port = 5001;
app.listen(port, () => {
  console.log();
  console.log(`App listening on port ${port}`);
  console.log(`CTRL + Click in http://localhost:${port}`);
  console.log('Press Ctrl+C to quit.');
});
