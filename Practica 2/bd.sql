CREATE DATABASE practica2;
USE practica2;

CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255),
    createdAt DATETIME NOT NULL DEFAULT current_timestamp(),
    updatedAt DATETIME NOT NULL DEFAULT current_timestamp()
);

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    categoriaId INT,
    FOREIGN KEY (categoriaId) REFERENCES categorias(id)
);

INSERT INTO categorias (nombre, descripcion) VALUES
('Electrónica', 'Dispositivos electrónicos y gadgets'),
('Oficina', 'Material y accesorios de oficina'),
('Hogar', 'Productos para el hogar');

INSERT INTO productos (nombre, precio, categoriaId) VALUES
('Laptop', 5000, 1),
('Mouse Gamer', 200, 1),
('Teclado Mecánico', 350, 1),
('Impresora', 1200, 2),
('Cuaderno', 15, 2),
('Silla de Oficina', 700, 2),
('Mesa', 900, 3),
('Refrigerador', 4500, 3),
('Lampara', 120, 3);