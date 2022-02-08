DROP DATABASE logs;
CREATE DATABASE logs;

USE logs;

CREATE TABLE users(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user VARCHAR (50),
    nombre VARCHAR (100),
    rol ENUM('ADMIN', 'USUARIO'),
    pass VARCHAR (255)
);

DESCRIBE users;
INSERT INTO users(user, pass, rol, nombre) VALUES ("admin", "$2a$08$NeCzuzEdxPvDC0u2RGhn.uR.KYU4VtMsqhpXyINkSP7h9ta.iMLPy", "ADMIN", "Luis"); 

CREATE TABLE eventos(
    id_eventos INT (250),
    evidencias longblob,
    id_administrador INT (250),
    id_recursos_fisicos INT (250),
    id_listado_assistencia INT(250),
    espacio VARCHAR (250),
    escuela VARCHAR (250),
    fecha  DATETIME,
    link_incripcion VARCHAR (250),
    ultima_modificacion TIMESTAMP
);

DESCRIBE eventos ;

CREATE TABLE administrador(
    id_administrador INT (250),
    nomnbre_completo VARCHAR (250),
    correo VARCHAR (250),
    celular INT (250),
    contraseña VARCHAR (250)
);

DESCRIBE administrador ;

CREATE TABLE asistencia (
    id_invitado INT (250),
    nomnbre_completo INT (250),
    correo INT (250),
    celular INT (250),
    carrera INT (250)
);

DESCRIBE asistencia;

CREATE TABLE recursos_fisicos(
    id_recursos INT (250),
    nomnbre VARCHAR (250),
    correo VARCHAR (250),
    dependencia  VARCHAR (250),
    tipo_recursos VARCHAR (250)
);

DESCRIBE recursos_fisicos;