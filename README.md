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

## Contributing Content

### Adding New Lectures

1. Create lecture files in the correct directory:
```
public/docs/lecture-N/           # N = module number
├── lectureN.1.md               # First lecture
├── lectureN.2.md               # Second lecture
└── lectureN.3.md               # Third lecture
```

2. Add media assets:
```
public/lectures-media/
├── lectureN.1.gif              # Animations
├── lectureN.2.png              # Images
└── diagram.svg                 # Diagrams
```

3. Update module structure in `src/context/LessonsContext/LessonsContext.js`:
```javascript
{
  id: 'N',
  no: 'N',
  tema: 'Your Module Title',
  estado: 'No iniciado',
  puntos: 0,
  subtemas: [
    {
      id: 'N.1',
      no: 'N.1',
      subtema: 'First Lecture Title',
      estado: 'No iniciado',
      puntos: 0,
      lessonId: 'N'
    }
    // Add more lectures...
  ]
}
```

For detailed guidelines on:
- Lecture format and components
- Quiz configuration
- Lab integration
- Media guidelines
Please refer to [`lectures.md`](./docs/lectures.md)

For module structure and organization, see [`lessons_chart.md`](./docs/lessons_chart.md)

## Related Repositories

- [Backend (Django)](https://github.com/Mauro-Bonilla/practicum-II-backend)
- [Animations](https://github.com/Mauro-Bonilla/practicum-II-animations)

## Development

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