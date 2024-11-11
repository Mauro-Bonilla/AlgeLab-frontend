# AlgeLab Frontend

![Node.js Version](https://img.shields.io/badge/node-v20.9.0-brightgreen)
[![Discord](https://img.shields.io/discord/1194047837823561728?color=7289da&label=Discord&logo=discord&logoColor=white)](https://discord.gg/4SRmKVZb8V)
![Vite](https://img.shields.io/badge/vite-latest-blue)
![React](https://img.shields.io/badge/react-latest-blue)

AlgeLab Frontend is part of an open-source web platform designed to enhance linear algebra learning through virtual laboratories, multimedia learning principles, and gamification strategies.

## Overview

The frontend application provides an interactive user interface for AlgeLab, implementing Richard Mayer's multimedia learning theory through React components and interactive visualizations.

### Key Features

- Interactive learning modules
- Real-time visualization components
- GitHub authentication integration
- Progress tracking interface
- Responsive design
- Module-based learning structure

## Tech Stack

- **Framework**: React.js with Vite
- **State Management**: React Context
- **Styling**: CSS Modules
- **HTTP Client**: Axios
- **Container**: Docker
- **Node Version**: 20.9.0

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/your-username/algelab-frontend.git
cd algelab-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.development
```

4. Start development server:
```bash
npm run dev
```

Access the application at `http://localhost:5173`

## Documentation

Detailed documentation is available in the `docs` directory:

- `deployment.md` - Deployment instructions
- `env_vars.md` - Environment variables setup
- [`lectures.md`](./docs/lectures.md) - Guide for adding new lectures and content structure
- [`lessons_chart.md`](./docs/lessons_chart.md) - Learning path documentation and module organization

## Adding New Lectures

To add new lectures to AlgeLab:

1. Review the lecture structure documentation in [`lectures.md`](./docs/lectures.md)
2. Follow the learning path guidelines in [`lessons_chart.md`](./docs/lessons_chart.md)
3. Contact project maintainers through Discord for content review
4. Submit your additions through a pull request

For detailed information about creating and adding new lectures, please consult the documentation linked above or contact the development team.

## Related Repositories

- [Backend (Django)](https://github.com/Mauro-Bonilla/practicum-II-backend)
- [Animations](https://github.com/Mauro-Bonilla/practicum-II-animations)


### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run linter
npm run preview  # Preview production build
```

### Docker Support

Build and run with Docker:
```bash
docker build -t algelab-frontend .
docker run -p 5173:5173 algelab-frontend
```

## Community

Join our Discord server for discussions, support, and contributions:
[AlgeLab Discord](https://discord.gg/4SRmKVZb8V)

## Contributing

We welcome contributions! Please read our documentation for contribution guidelines and setup instructions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Research Paper

This project is based on research conducted at Universidad Anáhuac México. For detailed information about the theoretical framework and educational principles, please refer to the original paper.

## Contact

For project inquiries:
- Email: mauro.bonillaol@anahuac.mx
- Discord: [AlgeLab Server](https://discord.gg/4SRmKVZb8V)
