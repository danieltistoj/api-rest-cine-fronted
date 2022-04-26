import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { formatearFecha } from "../helpers/formatearFecha";
const PreviewProyecto = ({ proyecto }) => {
  const { auth } = useAuth();

  const { nombre, _id, cliente, creador, descripcion, fechaEntrega, imagen } = proyecto;

  return (
        
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
        image= {imagen}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {descripcion}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Director:  {cliente}
            </Typography>

            <Typography variant="h5" color="text.secondary">
              Fecha de Estreno:  {formatearFecha(fechaEntrega)}
            </Typography>

          </CardContent>
          <CardActions>
            <Button size="small">Editar</Button>
            <Button size="small">Eliminar Pelicula</Button>
          </CardActions>

        </Card>

    
     
  );
};

export default PreviewProyecto;
