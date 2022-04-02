import React, { useState, useEffect } from "react";
import Grafico from "./Grafico";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  
  texto: {
    marginLeft: 300
    },
  circulo:{
    width: 20,
     height: 20,
     mozBorderRadius: '50%',
     webkitBorderRadius: '50%',
     borderRadius: '50%',
     background: 'red',
     marginLeft: 100
  }
 
  
}));


let url = "http://127.0.0.1:5000/api/ventas";

function Layout(props) {
  const classes = useStyles();
  const [categorias, setCategorias] = useState([]);
  const [productos, setproductos] = useState([]);
  const [productosTotal, setproductosTotal] = useState([]);
  const [ventas, setventas] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      let categ = res.data.categorias;
      let produc = res.data.productos;
      let newProduc = [];
      

      produc.map((product) => {
        if (product.id_categoria === categ[0].id) {
          return newProduc.push(product);
        }
      });
      setventas(produc[0].ventas);
      setproductosTotal(res.data.productos);
      setCategorias(categ);
      setproductos(newProduc);
    });
  }, []);

  const handelOnchangeCategoria = (event) => {
    const id = event.target.value;
    let newProd = productosTotal.filter((item) => item.id_categoria == id);
    const venta = newProd[0].ventas;
    setproductos(newProd);
    setventas(venta);
  };

  const handelOnchangeProducto = (event) => {
    const id = event.target.value;
    const produ = productosTotal.filter((item) => item.id == id);
    const venta = produ[0].ventas;
    console.log(venta);
    setventas(venta);
  };

  const handelOnchangeMarca = (event) => {
    const id = event.target.value;
    const produ = productosTotal.filter((item) => item.id == id);
    const venta = produ[0].ventas;
    console.log(venta);
    setventas(venta);
  };

  const select1 = categorias.map((item) => (
    <option value={item.id} key={item.id}>
      {item.nombre}
    </option>
  ));
  const select2 = productos.map((item) => (
    <option value={item.id} key={item.id}>
      
      {item.nombre}
    </option>
  ));
  const select3 = productos.map((item) => (
    <option value={item.id} key={item.id}>
      {item.marca}
    </option>
  ));

  //  PROPIEDADES PARA LA GRAFICA
  const labels = ["January", "February", "March", "April"];
  const data = {
    labels,
    datasets: [
      {
        label: "Ventas",
        data: ventas,
        backgroundColor: "#3f51b5",
      },
    ],
  };
  //  END PROPIEDADES PARA LA GRAFICA

  const tab = '\u00A0';
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" color="inherit">
            Menu
          </Typography>
          <span className={classes.circulo}></span>
          <Typography variant="h6" >
            User Name
          </Typography>
          <Typography variant="h6" className={classes.texto}>
            Sales Report
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <br></br>

        <Grid container spacing={3}>
          <Grid item xs={4}>
            <label>
              Categorias:{tab}
              <select onChange={handelOnchangeCategoria}> {select1}</select>
            </label>
          </Grid>

          <Grid item xs={4}>
            <label>
              Producto:{tab}
              <select onChange={handelOnchangeProducto}>{select2}</select>
            </label>
          </Grid>

          <Grid item xs={4}>
            <label>
              Marca:{tab}
              <select onChange={handelOnchangeMarca}>{select3}</select>
            </label>
          </Grid>
        </Grid>

        <Grafico data={data} />
      </Container>
    </div>
  );
}

export default Layout;
