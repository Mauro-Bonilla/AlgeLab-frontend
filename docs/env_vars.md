# Environment Variables Configuration

This guide explains how to configure environment variables for development and production environments in the AlgeLab frontend application.

## Quick Setup

1. Create two environment files in the project root:
   - `.env.development` for development
   - `.env.production` for production

## Environment Files

### Development Environment
Create `.env.development`:
```env
VITE_API_URL=http://localhost:8000
```

### Production Environment
Create `.env.production`:
```env
VITE_API_URL=your_production_api_url
```

## Usage

### Development
```bash
npm run dev
```
The application will use `.env.development` variables.

### Production
```bash
npm run build
npm run preview
```
The application will use `.env.production` variables.

## VS Code Launch Configuration

For consistent debugging, add this to your `launch.json`:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Frontend: Development",
            "type": "node",
            "request": "launch",
            "runtimeExecutable": "npm",
            "runtimeArgs": [
                "run",
                "dev"
            ],
            "env": {
                "VITE_API_URL": "http://localhost:8000"
            }
        }
    ]
}
```

## Notes

- The `VITE_` prefix is required for Vite to expose variables to the client
- Never commit `.env` files to version control
- Make sure the backend URL matches your Django server configuration

## Backend Sync

Ensure your backend (Django) is running at the configured URL:
- Development: `http://localhost:8000`
- Production: Your deployed API URL

For complete backend setup, refer to the [backend documentation](../backend/docs/env_vars.md).