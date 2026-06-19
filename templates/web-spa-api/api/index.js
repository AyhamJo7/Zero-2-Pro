import express from 'express';

const app = express();

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

export default app;

// Start server if run directly (not imported for tests)
if (import.meta.url === `file://${process.argv[1]}`) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`API listening on http://localhost:${port}`);
  });
}