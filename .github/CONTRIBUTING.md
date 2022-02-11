# Contributing

First off, thanks for taking the time to contribute. :+1:

This guide uses [`Docusaurus 2`](https://docusaurus.io/) for building the guide itself, and [`pre-commit`](https://pre-commit.com/) for various formatting/cleanup tasks - running content through prettier, formatting Python codeblocks and samples, etc.

To get started with contributing to this guide, follow these steps:

1. Install dependencies: `npm install`.
2. Build using `Docusaurus`.
    - To build the documentation once, use `npm run build` and open `build/index.html` in your browser
    - Alternatively, if you want to see your changes to the content in real-time, use `npm run start` to start an autoreloading server on localhost.
3. Run `pre-commit`.
    - If you want to install the pre-commit hooks to automatically run before every commit, use `pre-commit install`
    - Otherwise, use `pre-commit run --all-files` to run all checks once.
