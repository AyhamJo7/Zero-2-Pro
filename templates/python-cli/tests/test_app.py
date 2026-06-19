"""Tests for the CLI app."""
from src.app.main import add


def test_add():
    """Test basic addition."""
    assert add(2, 3) == 5


def test_add_negative():
    """Test addition with negative numbers."""
    assert add(-1, 1) == 0


def test_add_zero():
    """Test addition with zero."""
    assert add(0, 0) == 0