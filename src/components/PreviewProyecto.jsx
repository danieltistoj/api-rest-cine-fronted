import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useParams } from 'react-router-dom'
import useProyectos from "../hooks/useProyectos"


import { formatearFecha } from "../helpers/formatearFecha";
const PreviewProyecto = ({ proyecto }) => {
  const { auth } = useAuth();
  const params = useParams();

  const { eliminarProyecto } = useProyectos()

  const { nombre, _id, cliente, creador, descripcion, fechaEntrega, imagen } = proyecto;


  const handleClick = () => {
    Swal.fire({
      title: 'Estas seguro en Eliminar la Pelicula?',
      text: `${nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar esta pelicula!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'Se ha eliminado correctamente.',
          'success'
        )
        eliminarProyecto(_id)
      }
    })
}

  return (
        
        <Card sx={{ maxWidth: 300 }}>
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
            
            <Link 
                  to={`/peliculas/editar/${_id}`}
                  className='uppercase font-bold'
                >Editar</Link>
            <Button size="small" onClick={handleClick} >Eliminar Pelicula</Button>
          </CardActions>

        </Card>

    
     
  );
};

export default PreviewProyecto;
