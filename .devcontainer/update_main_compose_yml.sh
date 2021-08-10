#!/bin/bash

# Get the latest update of the main compose yaml
# that contains the configuration for all sandbox services
# from an external repo.

DIR_OF_THIS_SCRIPT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SOURCE_URL=https://raw.githubusercontent.com/ghga-de/sandbox-dev-service-compose/feature/draft-GDEV-146/docker-compose.yml
TARGET_PATH="${DIR_OF_THIS_SCRIPT}/docker-compose.yml"

wget \
    -O "${TARGET_PATH}" \
    "${SOURCE_URL}"
