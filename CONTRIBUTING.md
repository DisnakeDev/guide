## Contributing to disnake

First off, thanks for taking the time to contribute. :+1:

This guide uses `mkdocs` for building the guide itself, and `pre-commit` for various formatting/cleanup tasks, like
formatting python codeblocks.

### Steps

To get started with contributing to this guide, follow these steps:

1. Install dependencies: `pip install -r requirements.txt`
2. Build using `mkdocs`
    - To build the documentation once, use `mkdocs build` and open `site/index.html` in your browser
    - Alternatively, if you want to have the guide built continuously on every change you make, use `mkdocs serve` and
      open the URL shown in your terminal
3. Run `pre-commit`
    - If you want to install the pre-commit hooks to automatically run before every commit, use `pre-commit install`
    - Otherwise, use `pre-commit run --all-files` to run all checks once
