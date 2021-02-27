DROP DATABASE IF EXISTS adoption_db;
CREATE database adoption_db;

USE adoption_db;

CREATE TABLE adoptable (
    id INT AUTO_INCREMENT NOT NULL,
    dogName VARCHAR(255),
    age INT NOT NULL,
    breed VARCHAR(255) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    temper VARCHAR(255) NOT NULL,
    spayed BOOLEAN DEFAULT false,
    pending BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

CREATE TABLE pending (
    id INT AUTO_INCREMENT NOT NULL,
    dogName VARCHAR(255),
    pending BOOLEAN DEFAULT true,
    adopted BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

CREATE TABLE success (
    id INT AUTO_INCREMENT NOT NULL,
    dogName VARCHAR(255),
    adopted BOOLEAN DEFAULT true,
    PRIMARY KEY (id)
);




-- -- Drops the blogger if it exists currently --
-- DROP DATABASE IF EXISTS blogger;
-- -- Creates the "blogger" database --
-- CREATE DATABASE blogger;
