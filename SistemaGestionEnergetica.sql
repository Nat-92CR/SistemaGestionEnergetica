--Base de datos Sistema de Gestion Energetica
--Datos para almacenar:

	--1. Usuarios: Almacena la información de los usuarios que pueden iniciar sesión en el sistema. 

	--2. Edificios: Almacena los edificios que se gestionarán en el sistema. 

	--3. Zonas: Almacena las diferentes zonas dentro de cada edificio. 

	--4. Dispositivos: Almacena los dispositivos en cada zona del edificio. 

	--5. Configuraciones: Almacena las configuraciones de horario y modo de ahorro para cada dispositivo. 

	--6. Consumos Energéticos: Almacena el consumo energético de los dispositivos en diferentes fechas.




CREATE DATABASE GestionEnergetica;
GO

-- Usar la base de datos creada
USE GestionEnergetica;
GO

-- Tabla de Usuarios
CREATE TABLE Usuarios (
    UsuarioID INT PRIMARY KEY IDENTITY(1,1),
    NombreUsuario NVARCHAR(50) NOT NULL UNIQUE,
    Contraseña NVARCHAR(255) NOT NULL
);
GO

-- Tabla de Edificios
CREATE TABLE Edificios (
    EdificioID INT PRIMARY KEY IDENTITY(1,1),
    NombreEdificio NVARCHAR(100) NOT NULL
);
GO

-- Tabla de Zonas
CREATE TABLE Zonas (
    ZonaID INT PRIMARY KEY IDENTITY(1,1),
    EdificioID INT NOT NULL,
    NombreZona NVARCHAR(100) NOT NULL,
    FOREIGN KEY (EdificioID) REFERENCES Edificios(EdificioID) ON DELETE CASCADE
);
GO

-- Tabla de Dispositivos
CREATE TABLE Dispositivos (
    DispositivoID INT PRIMARY KEY IDENTITY(1,1),
    ZonaID INT NOT NULL,
    NombreDispositivo NVARCHAR(100) NOT NULL,
    FOREIGN KEY (ZonaID) REFERENCES Zonas(ZonaID) ON DELETE CASCADE
);
GO

-- Tabla de Configuraciones
CREATE TABLE Configuraciones (
    ConfiguracionID INT PRIMARY KEY IDENTITY(1,1),
    DispositivoID INT NOT NULL,
    HorarioInicio TIME NOT NULL,
    HorarioFin TIME NOT NULL,
    ModoAhorro NVARCHAR(50) NOT NULL,
    FOREIGN KEY (DispositivoID) REFERENCES Dispositivos(DispositivoID) ON DELETE CASCADE
);
GO

-- Tabla de Consumos Energéticos
CREATE TABLE ConsumosEnergeticos (
    ConsumoID INT PRIMARY KEY IDENTITY(1,1),
    DispositivoID INT NOT NULL,
    Fecha DATE NOT NULL,
    Consumo DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (DispositivoID) REFERENCES Dispositivos(DispositivoID) ON DELETE CASCADE
);
GO
