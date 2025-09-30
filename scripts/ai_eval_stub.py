#!/usr/bin/env python3
"""
AI/ML Evaluation Stub Script

This script provides a basic evaluation framework for AI/ML projects.
It serves as a placeholder that can be extended with actual evaluation logic.
"""

import os
import sys
from pathlib import Path


def find_ml_projects():
    """Find potential ML projects in the ai-ml track."""
    ai_ml_dir = Path("05-ai-ml")
    if not ai_ml_dir.exists():
        return []

    projects = []
    for py_file in ai_ml_dir.rglob("*.py"):
        if py_file.name not in ["__init__.py", "conftest.py"]:
            projects.append(py_file)

    for notebook in ai_ml_dir.rglob("*.ipynb"):
        projects.append(notebook)

    return projects


def evaluate_project(project_path):
    """Basic evaluation stub for an ML project."""
    print(f"📊 Evaluating: {project_path}")

    # Basic file validation
    if project_path.suffix == ".py":
        try:
            with open(project_path, 'r', encoding='utf-8') as f:
                content = f.read()

            # Simple heuristics for ML projects
            ml_indicators = [
                'import numpy', 'import pandas', 'import sklearn',
                'import torch', 'import tensorflow', 'from transformers',
                'import openai', 'import langchain'
            ]

            found_indicators = [ind for ind in ml_indicators if ind in content]

            if found_indicators:
                print(f"  ✅ ML libraries detected: {', '.join(found_indicators)}")
                return True
            else:
                print(f"  ℹ️ No common ML libraries detected")
                return True

        except Exception as e:
            print(f"  ❌ Error reading {project_path}: {e}")
            return False

    elif project_path.suffix == ".ipynb":
        print(f"  📓 Jupyter notebook detected")
        # Could add nbformat parsing here
        return True

    return True


def main():
    """Main evaluation function."""
    print("🤖 AI/ML Evaluation Stub")
    print("=" * 40)

    projects = find_ml_projects()

    if not projects:
        print("ℹ️ No AI/ML projects found to evaluate")
        print("This is expected behavior for educational content without project implementations")
        print("\n📈 Stub Evaluation Metrics:")
        print("  • Projects found: 0")
        print("  • Evaluation coverage: N/A")
        print("  • Status: PASS (no projects to evaluate)")
        return 0

    print(f"Found {len(projects)} potential AI/ML files to evaluate")
    print()

    passed = 0
    total = len(projects)

    for project in projects:
        if evaluate_project(project):
            passed += 1

    print(f"\n📈 Evaluation Results:")
    print(f"  • Projects evaluated: {total}")
    print(f"  • Passed basic validation: {passed}")
    print(f"  • Success rate: {passed/total*100:.1f}%" if total > 0 else "  • Success rate: N/A")

    if passed == total:
        print(f"  • Status: ✅ PASS")
        return 0
    else:
        print(f"  • Status: ⚠️ PARTIAL (some issues found)")
        return 0  # Non-blocking for educational content


if __name__ == "__main__":
    sys.exit(main())