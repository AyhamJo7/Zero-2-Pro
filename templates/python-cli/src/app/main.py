"""Main CLI entry point."""


def add(a: int, b: int) -> int:
    """Add two integers."""
    return a + b


if __name__ == "__main__":
    import sys
    if len(sys.argv) < 3:
        print("Usage: python -m src.app.main <num1> <num2>")
        sys.exit(1)

    x, y = map(int, sys.argv[1:3])
    print(add(x, y))