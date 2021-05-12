# sandbox-ui
Service that delivers a simple web app for interacting with the sandbox system


## Development:
A development environment based on docker containers is configured in "/.devcontainers". The is primarily meant for use with vscode's "remote-container" feature (see https://code.visualstudio.com/docs/remote/containers), however, you may also use it without vscode by running:
```
git clone https://github.com/ghga-de/sandbox-ui.git
cd sandbox-ui
docker build -t sandbox-ui:dev -f .devcontainer/Dockerfile .
docker run --rm -it -u vscode -v "${PWD}:/workspace" sandbox-ui:dev bash
```

Once you are in the devcontainer (no matter if you are using vscode or not), run `dev_install` to install the service with all it's testing dependencies.