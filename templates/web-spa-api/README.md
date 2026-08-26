# Web SPA+API Starter

A minimal Node.js API starter with Express and basic smoke tests.

## Structure

```text
templates/web-spa-api/
├── api/
│   ├── index.js       # Express app
│   └── test.api.js    # Smoke tests
├── package.json
└── README.md
```

## Run

```bash
npm install
npm start
```

Server listens on `http://localhost:3000` (or `PORT` env var).

## Test

```bash
npm test
```

## Done When

- API exposes `/health` and at least one additional endpoint you add
- Tests cover 2xx and at least one failure path
- CI passes

## Next Steps

1. Add CORS middleware if needed
2. Add request validation (e.g., express-validator)
3. Add more endpoints (CRUD resource)
4. Add integration tests with a test DB