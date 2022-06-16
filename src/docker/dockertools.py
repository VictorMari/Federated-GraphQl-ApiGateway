from importlib.abc import Loader
from pathlib import Path
import yaml

COMPOSE = {
    "version": "3.9",
    "services": {}
}

def load_api(docker_path):
    api_number = docker_path.parent.name
    return {
        "tmf"+api_number: {
            "build": str(docker_path.parent),
            "image": "localhost:5000/tmf"+api_number+ ":4.0.0",
        }
    }

def main():
    services = [load_api(dockerfile) for dockerfile in Path("apis").glob("*/Dockerfile")]
    for service in services:
        COMPOSE["services"].update(**service)
    with open("docker-compose.yml", "w") as f:
        yaml.dump(COMPOSE, f, default_flow_style=False)
        

if __name__ == '__main__':
    import sys 
    sys.exit(main())