# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється:

## SQL-скрипт для створення та початкового наповнення бази даних

```sql
	-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`User` ;

CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(45) NOT NULL,
  `login` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE INDEX `login_UNIQUE` (`login` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`idUser` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Permission`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Permission` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Permission` (
  `idPermission` INT NOT NULL,
  `Post` TINYINT NULL,
  `Comment` TINYINT NULL,
  `Edit` TINYINT NULL,
  `Delete` TINYINT NULL,
  PRIMARY KEY (`idPermission`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Role` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Role` (
  `idRole` INT NOT NULL AUTO_INCREMENT,
  `RoleName` VARCHAR(45) NULL,
  `Permission_idPermission` INT NOT NULL,
  `User_idUser` INT NOT NULL,
  PRIMARY KEY (`idRole`, `Permission_idPermission`),
  UNIQUE INDEX `idRole_UNIQUE` (`idRole` ASC) VISIBLE,
  INDEX `fk_Role_Permission_idx` (`Permission_idPermission` ASC) VISIBLE,
  INDEX `fk_Role_User1_idx` (`User_idUser` ASC) VISIBLE,
  CONSTRAINT `fk_Role_Permission`
    FOREIGN KEY (`Permission_idPermission`)
    REFERENCES `mydb`.`Permission` (`idPermission`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Role_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `mydb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Tag`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Tag` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Tag` (
  `idTag` INT NOT NULL,
  `TagName` VARCHAR(45) NULL,
  PRIMARY KEY (`idTag`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Data`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Data` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Data` (
  `idData` INT NOT NULL,
  `Date` DATETIME NULL,
  `DataName` VARCHAR(45) NULL,
  `DataFormat` VARCHAR(45) NULL,
  `Tag_idTag` INT NOT NULL,
  PRIMARY KEY (`idData`),
  INDEX `fk_Data_Tag1_idx` (`Tag_idTag` ASC) VISIBLE,
  CONSTRAINT `fk_Data_Tag1`
    FOREIGN KEY (`Tag_idTag`)
    REFERENCES `mydb`.`Tag` (`idTag`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Comment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Comment` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Comment` (
  `CommentText` TEXT NOT NULL,
  `User_idUser` INT NOT NULL,
  `Data_idData` INT NOT NULL,
  PRIMARY KEY (`User_idUser`, `Data_idData`),
  INDEX `fk_Comment_User1_idx` (`User_idUser` ASC) VISIBLE,
  INDEX `fk_Comment_Data1_idx` (`Data_idData` ASC) VISIBLE,
  CONSTRAINT `fk_Comment_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `mydb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Comment_Data1`
    FOREIGN KEY (`Data_idData`)
    REFERENCES `mydb`.`Data` (`idData`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Request`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Request` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Request` (
  `idRequest` INT NOT NULL,
  `Type` VARCHAR(45) NULL,
  `User_idUser` INT NOT NULL,
  `Data_idData` INT NOT NULL,
  PRIMARY KEY (`idRequest`, `User_idUser`, `Data_idData`),
  INDEX `fk_Request_User1_idx` (`User_idUser` ASC) VISIBLE,
  INDEX `fk_Request_Data1_idx` (`Data_idData` ASC) VISIBLE,
  CONSTRAINT `fk_Request_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `mydb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Request_Data1`
    FOREIGN KEY (`Data_idData`)
    REFERENCES `mydb`.`Data` (`idData`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `mydb`.`User` (`password`, `login`, `username`, `email`)
VALUES
('password123', 'login1', 'user1', 'user1@example.com'),
('password456', 'login2', 'user2', 'user2@example.com'),
('password789', 'login3', 'user3', 'user3@example.com');

INSERT INTO `mydb`.`Permission` (`idPermission`, `Post`, `Comment`, `Edit`, `Delete`)
VALUES
(1, 1, 1, 1, 1),
(2, 1, 1, 0, 0),
(3, 0, 0, 0, 0);

INSERT INTO `mydb`.`Role` (`RoleName`, `Permission_idPermission`, `User_idUser`)
VALUES
('Admin', 1, 1),
('User', 2, 2),
('Guest', 3, 3);

INSERT INTO `mydb`.`Tag` (`idTag`, `TagName`)
VALUES
(1, 'Technology'),
(2, 'Science'),
(3, 'Art');

INSERT INTO `mydb`.`Data` (`idData`, `Date`, `DataName`, `DataFormat`, `Tag_idTag`)
VALUES
(1, '2023-01-01 12:00:00', 'Data1', 'PDF', 1),
(2, '2023-01-02 12:00:00', 'Data2', 'DOC', 2),
(3, '2023-01-03 12:00:00', 'Data3', 'TXT', 3);

INSERT INTO `mydb`.`Comment` (`CommentText`, `User_idUser`, `Data_idData`)
VALUES
('This is a comment from user1 on data1', 1, 1),
('This is a comment from user2 on data2', 2, 2),
('This is a comment from user3 on data3', 3, 3);

INSERT INTO `mydb`.`Request` (`idRequest`, `Type`, `User_idUser`, `Data_idData`)
VALUES
(1, 'Access', 1, 1),
(2, 'Edit', 2, 2),
(3, 'Delete', 3, 3);

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

```


## RESTfull сервіс для управління даними

_index.js_

```js
"use strict";

const express = require("express");
const pg = require("pg");
const PORT = 3000;

const app = express();
app.use(express.json());

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "IO23Theme2DB",
  password: "123qbd",
  port: 6099,
});
db.connect();

app.get("/", (req, res) => {
  res.json("Connected to server...");
});

app.post("/user", async (req, res) => {
  const { email, isBanned, password, name, login } = req.body;
  try {
    const user = await db.query(
      "INSERT INTO IO23Theme2DB.user (email, isBanned, password, name, login) values ($1, $2, $3, $4, $5) RETURNING *",
      [email, isBanned, password, name, login]
    );
    res.json(user.rows[0]);
  } catch (err) {
    res.status(404).json(err.message);
  }
});

app.get("/user", async (req, res) => {
  try {
    const users = await db.query("SELECT * FROM IO23Theme2DB.user");
    res.json(users.rows);
  } catch (err) {
    res.status(404).json(err.message);
  }
});

app.get("/user/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await db.query("SELECT * FROM IO23Theme2DB.user WHERE id = $1", [id]);

    if (!user.rows.length) throw new Error("Record is not found");

    res.json(user.rows[0]);
  } catch (err) {
    res.status(404).json(err.message);
  }
});

app.patch("/user/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  if (data.id) delete data.id;

  try {
    for (const [key, value] of Object.entries(data)) {
      await db.query(`UPDATE IO23Theme2DB.user SET ${key} = $1 WHERE id = $2`, [
        value,
        id,
      ]);
    }

    const user = await db.query("SELECT * FROM IO23Theme2DB.user WHERE id = $1", [id]);

    res.json(user.rows[0]);
  } catch (err) {
    res.status(404).json(err.message);
  }
});

app.delete("/user/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await db.query("SELECT * FROM IO23Theme2DB.user WHERE id = $1", [id]);

    if (!user.rows.length) throw new Error("Record is not found");

    await db.query("DELETE FROM IO23Theme2DB.user WHERE id = $1", [id]);
    res.json(user.rows[0]);
  } catch (err) {
    res.status(404).json(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

