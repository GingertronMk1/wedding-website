# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="NodeJS"

# NodeJS app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV=production

# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install -y python-is-python3 pkg-config build-essential 

# Install node modules
COPY --link package.json package-lock.json ./
RUN npm install --production=false

# Copy application code
COPY --link . .

# Build application, then remove dependencies
RUN --mount=type=secret,id=GOOGLE_MAPS_API_KEY \
    GOOGLE_MAPS_API_KEY="$(cat /run/secrets/GOOGLE_MAPS_API_KEY)" \
    npm run build \
    && npm prune --production

# Final stage for app image
FROM base

# Copy built application
COPY --from=build /app /app

# Start the server by default, this can be overwritten at runtime
CMD [ "node", ".output/server/index.mjs"]
