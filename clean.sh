#!/bin/bash

# Obtener los IDs de las imágenes que NO contienen "k8s" en su nombre
image_ids_to_remove=$(docker images --format '{{.Repository}} {{.ID}}' | \
  grep -v 'k8s' | awk '{print $2}' | sort | uniq)

# Mostrar qué imágenes se eliminarán
echo "Las siguientes imágenes serán eliminadas:"
echo "$image_ids_to_remove"

# Confirmación opcional
read -p "¿Deseas continuar con la eliminación? (s/n): " confirm

if [[ "$confirm" == "s" || "$confirm" == "S" ]]; then
  for id in $image_ids_to_remove; do
    echo "Eliminando imagen con ID: $id"
    docker rmi -f "$id"
  done
  echo "Eliminación completada."
else
  echo "Operación cancelada."
fi
