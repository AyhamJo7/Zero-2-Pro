import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import app from './index.js';

describe('API Smoke Tests', () => {
  it('GET /health returns ok', async () => {
    const res = await request(app).get('/health');
    assert.strictEqual(res.statusCode, 200);
    assert.deepStrictEqual(res.body, { ok: true });
  });

  it('GET /nonexistent returns 404', async () => {
    const res = await request(app).get('/nonexistent');
    assert.strictEqual(res.statusCode, 404);
  });
});