# Deployment Guide

This guide explains how to deploy the AlgeLab frontend application using Docker, with specific instructions for Azure deployment and general guidance for other platforms.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Docker Configuration](#docker-configuration)
- [Azure Deployment](#azure-deployment)
- [Alternative Deployment Options](#alternative-deployment-options)
- [Environment Configuration](#environment-configuration)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before deploying, ensure you have:
- Docker installed
- Azure CLI (for Azure deployment)
- Node.js 20.x
- Required environment variables (see `env_vars.md`)
- Access to a container registry

## Docker Configuration

### Dockerfile Overview

```dockerfile
FROM --platform=linux/amd64 node:20.9.0-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

RUN npm run build

RUN npm install -g serve

EXPOSE 5173

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:5173 || exit 1

CMD ["sh", "-c", "serve -s dist -l 5173"]
```

### Building the Docker Image

```bash
# Build the image
docker build \
  --build-arg VITE_API_URL=https://your-api-url.com \
  -t algelab-frontend .

# Test locally
docker run -p 5173:5173 algelab-frontend
```

## Azure Deployment

### 1. Azure Container Registry (ACR) Setup

```bash
# Login to Azure
az login

# Create a resource group (if not exists)
az group create --name algelab-rg --location eastus

# Create container registry
az acr create --name algealabregistry --resource-group algelab-rg --sku Standard --admin-enabled true

# Get registry credentials
az acr credential show --name algealabregistry
```

### 2. Push Image to ACR

```bash
# Login to ACR
az acr login --name algealabregistry

# Tag the image
docker tag algelab-frontend algealabregistry.azurecr.io/algelab-frontend:latest

# Push to ACR
docker push algealabregistry.azurecr.io/algelab-frontend:latest
```

### 3. Deploy to Azure Web App

```bash
# Create App Service plan
az appservice plan create \
    --name algelab-frontend-plan \
    --resource-group algelab-rg \
    --sku B1 \
    --is-linux

# Create Web App
az webapp create \
    --resource-group algelab-rg \
    --plan algelab-frontend-plan \
    --name algelab-frontend \
    --deployment-container-image-name algealabregistry.azurecr.io/algelab-frontend:latest
```

### 4. Configure Environment Variables

```bash
# Set the environment variables
az webapp config appsettings set \
    --resource-group algelab-rg \
    --name algelab-frontend \
    --settings VITE_API_URL=https://your-api-url.com
```

## Alternative Deployment Options

### Self-Hosted / On-Premise Server

1. Install Docker on your server
2. Build and run the container:
```bash
docker build -t algelab-frontend .
docker run -d -p 5173:5173 \
  -e VITE_API_URL=https://your-api-url.com \
  algelab-frontend
```

### Other Cloud Providers

The Docker configuration works with any cloud provider supporting container deployment:
- Google Cloud Run
- AWS Elastic Container Service (ECS)
- DigitalOcean App Platform
- Heroku Container Registry

## Environment Configuration

### Production Settings

1. Create `.env.production`:
```env
VITE_API_URL=https://your-api-url.com
```

2. Build with production settings:
```bash
npm run build
```

### SSL/TLS Configuration

When deploying to production:
1. Enable HTTPS
2. Configure SSL certificates
3. Update API URL to use HTTPS
4. Set up any required CORS headers

## Troubleshooting

Common issues and solutions:

1. **Build Failures**
   - Verify Node.js version
   - Check npm dependencies
   - Validate environment variables

2. **Runtime Errors**
   - Check API URL configuration
   - Verify network connectivity
   - Check container logs

3. **Performance Issues**
   - Enable build optimization
   - Configure caching headers
   - Optimize static assets

## Health Monitoring

The container includes a health check:
```dockerfile
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:5173 || exit 1
```

This helps container orchestrators monitor the application's health.

## Need Help?

For deployment assistance:
1. Check the documentation
2. Join our [Discord server](https://discord.gg/4SRmKVZb8V)
3. Contact the development team at mauro.bonillaol@anahuac.mx

Remember to never commit sensitive information or credentials to version control.