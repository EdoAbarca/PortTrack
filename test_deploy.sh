#!/bin/bash

set -e

DOCKER_USER="eddindocker"

echo "🐳 Construyendo imágenes en local y haciendo push a Docker Hub..."

docker build -t $DOCKER_USER/boat:latest ./boat
docker push $DOCKER_USER/boat:latest

docker build -t $DOCKER_USER/front:latest ./front
docker push $DOCKER_USER/front:latest

docker build -t $DOCKER_USER/load:latest ./load
docker push $DOCKER_USER/load:latest

docker build -t $DOCKER_USER/route:latest ./route
docker push $DOCKER_USER/route:latest

docker build -t $DOCKER_USER/staff:latest ./staff
docker push $DOCKER_USER/staff:latest

docker build -t $DOCKER_USER/tracking:latest ./tracking
docker push $DOCKER_USER/tracking:latest

echo "☸️  Aplicando manifiestos Kubernetes desde ./k8s..."
kubectl apply -f ./k8s

echo "✅ ¡Despliegue terminado! Verifica con: kubectl get pods"
kubectl get pods -w
