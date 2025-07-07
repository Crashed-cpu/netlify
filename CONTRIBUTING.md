# Contributing to Modern Portfolio

Thank you for your interest in contributing to this project! We welcome contributions from everyone, regardless of experience level. This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before making any contributions.

## Getting Started

1. **Fork the repository** on GitHub.
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```
3. **Set up the development environment** (see [README.md](README.md) for detailed instructions).
4. **Create a new branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```
   or
   ```bash
   git checkout -b bugfix/description-of-fix
   ```

## Development Workflow

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Make your changes** following the project's coding standards.

4. **Run tests** to ensure nothing is broken:
   ```bash
   npm test
   ```

5. **Lint your code**:
   ```bash
   npm run lint
   ```

6. **Format your code**:
   ```bash
   npm run format
   ```

7. **Commit your changes** with a descriptive commit message:
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```
   
   We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. Please format your commit messages accordingly:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation changes
   - `style:` for formatting changes
   - `refactor:` for code changes that neither fix bugs nor add features
   - `perf:` for performance improvements
   - `test:` for adding or modifying tests
   - `chore:` for maintenance tasks

8. **Push your changes** to your fork:
   ```bash
   git push origin your-branch-name
   ```

9. **Open a Pull Request** from your fork to the main repository.

## Pull Request Guidelines

- Ensure your PR description clearly describes the problem and solution.
- Include relevant issue numbers if applicable.
- Make sure all tests pass and there are no linting errors.
- Update the documentation if necessary.
- Keep your PR focused on a single feature or bug fix.
- Follow the project's coding style and conventions.

## Code Style

- Use 2 spaces for indentation.
- Use single quotes for strings.
- Use semicolons at the end of statements.
- Follow the Airbnb JavaScript/TypeScript Style Guide.
- Keep lines under 100 characters.
- Write meaningful variable and function names.
- Add comments to explain complex logic.

## Testing

- Write unit tests for new features and bug fixes.
- Run all tests before submitting a PR.
- Ensure test coverage doesn't decrease.

## Documentation

- Update the README.md with any changes to the setup or usage instructions.
- Add comments to complex code sections.
- Document any new environment variables in .env.example.

## Reporting Issues

When reporting issues, please include:
- A clear and descriptive title.
- Steps to reproduce the issue.
- Expected behavior.
- Actual behavior.
- Screenshots if applicable.
- Browser/OS version if relevant.

## Code Review Process

1. A maintainer will review your PR as soon as possible.
2. You may be asked to make changes or provide additional information.
3. Once approved, a maintainer will merge your PR.

## License

By contributing to this project, you agree that your contributions will be licensed under the project's [LICENSE](LICENSE) file.

## Thank You!

Your contributions make open source an amazing place to learn, inspire, and create. Thank you for being part of our community!
