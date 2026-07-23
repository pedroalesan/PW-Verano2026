const express = require("express");
const app = express();
const PORT = 3000;

const morgan = require("morgan");
const cors = require("cors");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

let peliculas = [
    {
        id: 1,
        titulo: "Interstelar",
        director: "Christopher Nolan",
        año: 2014
    },
    {
        id: 2,
        titulo: "Spider-Man",
        director: "Sam Raimi",
        año: 2002
    }
]

let idActual = peliculas.length + 1;

// Obtener todas las películas
app.get("/peliculas", (req, res) => {
    res.json(peliculas);
});

// Obtener una película por ID
app.get("/peliculas/:id", (req, res) => {
    const id = Number(req.params.id);
    const pelicula = peliculas.find(
        pelicula => pelicula.id === id
    );
    if (!pelicula) {
        return res.status(404).json({
            mensaje: "Película no encontrada"
        })
    }
    res.json(pelicula);
});

app.post("/peliculas", (req, res) => {
    const { titulo, director, año } = req.body;
    if (!titulo || !director || !año) {
        return res.status(400).json({
            mensaje: "Faltan datos de la película"
        })
    }
    const nuevaPelicula = {
        id: idActual++,
        titulo: titulo,
        director: director,
        año: Number(año),
    };
    peliculas.push(nuevaPelicula);
    res.status(201).json({
        mensaje: "Película registrada correctamente",
        pelicula: nuevaPelicula
    });
});

//Actualizar una película
app.put("/peliculas/:id", (req, res) => {
    const id = Number(req.params.id)
    const { titulo, director, año } = req.body;
    if (!titulo || !director || !año) {
        return res.status(400).json({
            mensaje: "Faltan datos de la película"
        });
    }
    const indice = peliculas.findIndex(
        pelicula => pelicula.id === id
    );

    if (indice === -1) {
        return res.status(404).json({
            mensaje: "Película no encontrada"
        })
    }

    peliculas[indice] = {
        id: id,
        titulo: titulo,
        director: director,
        año: Number(año)
    };

    res.json({
        mensaje: "Película actualizada correctamente",
        pelicula: peliculas[indice]
    });
})

app.delete("/peliculas/:id", (req, res) => {
    const id = Number(req.params.id);
    const indice = peliculas.findIndex(
        pelicula => pelicula.id === id
    );

    if (indice === -1) {
        return res.status(404).json({
            mensaje: "Película no encontrada"
        })
    }

    const peliculaEliminada = peliculas[indice];

    peliculas.splice(indice, 1);

    res.json({
        mensaje: "Película eliminada correctamente",
        pelicula: peliculaEliminada
    });
});

app.get("/", (req, res) => {
    res.send("Bienvenido a mi primer servidor con express")
})

app.get("/pagina", (req, res) => {
    res.send(`
        <style>
            h1{color: red}
        </style>
            <h1> Mi página</h1>
            <p>creada con express</p>
        `
    );
});

app.get("/saludo/:nombre", (req, res) => {
    const nombre = req.params.nombre;
    res.send("Hola " + nombre);
});

app.listen(PORT, () => {
    console.log("Servidor iniciado en http://localhost:" + PORT);
})

//Ejercicio 1
app.get("/par/:numero", (req, res) => {
    const numero = Number(req.params.numero);

    if (numero % 2 === 0) {
        res.send(numero + " es un número par");
    } else {
        res.send(numero + " es un número impar");
    }
});

//Ejercicio 2

