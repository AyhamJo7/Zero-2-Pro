# Python CLI Starter

A minimal Python CLI project template with pytest and basic structure.

## Structure

```text
templates/python-cli/
├── src/
│   └── app/
│       ├── __init__.py
│       └── main.py
├── tests/
│   └── test_app.py
├── pyproject.toml
└── README.md
```

## Run

```bash
python -m src.app.main 2 3
```

Expected output: `5`

## Test

```bash
pytest -q
```

## Done When

- Tests pass in CI
- A CLI subcommand is added with argument validation (stretch goal)
- At least one more function/module added beyond the starter `add()` function

## Next Steps

1. Add argument parsing (e.g., `argparse` or `click`)
2. Add input validation and error handling
3. Expand test coverage (edge cases, error paths)
4. Add type hints and consider mypy or ruff for linting