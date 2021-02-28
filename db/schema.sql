DROP DATABASE IF EXISTS adoption_db;
CREATE database adoption_db;

USE adoption_db;

CREATE TABLE Adoptables (
    id INT AUTO_INCREMENT NOT NULL,
    dogName VARCHAR(255),
    img VARCHAR(255),
    age INT NOT NULL,
    breed VARCHAR(255) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    temper VARCHAR(255) NOT NULL,
    spayed BOOLEAN,
    adopted BOOLEAN DEFAULT false,
    createdAt DATETIME,
    updatedAt DATETIME,
    PRIMARY KEY (id)
);

CREATE TABLE Stories (
    id INT AUTO_INCREMENT NOT NULL,
    dogName VARCHAR(255),
    body TEXT NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME,
    PRIMARY KEY (id)
);