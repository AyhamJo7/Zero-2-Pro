#!/bin/bash
# Run this script once to set up repository labels
# Usage: ./setup-labels.sh

gh label create "good first issue" -c "#7057ff" -d "Beginner-friendly task" || true
gh label create "module" -c "#0e8a16" -d "New learning module" || true
gh label create "enhancement" -c "#a2eeef" || true
gh label create "bug" -c "#d73a4a" || true
gh label create "docs" -c "#0075ca" || true

echo "✅ Repository labels created!"
echo "Don't forget to enable Discussions in repo settings and pin starter threads."