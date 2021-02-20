DROP DATABASE IF EXISTS adoption_db;
CREATE database adoption_db;

USE adoption_db;

CREATE TABLE adoptable (
    id INT AUTO_INCREMENT NOT NULL,
    dog_name VARCHAR(255),
    age INT NOT NULL,
    breed VARCHAR(255) NOT NULL,
    temper VARCHAR(255) NOT NULL,
    spayed BOOLEAN DEFAULT false,
    adopted BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

CREATE TABLE pending (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(255),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

CREATE TABLE success (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(255),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
