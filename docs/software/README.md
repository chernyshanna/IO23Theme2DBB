# Реалізація інформаційного та програмного забезпечення

- SQL-скрипт для створення на початкового наповнення бази даних

```sql
	-- MySQL Workbench Forward Engineering

	SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
	SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
	SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

	-- -----------------------------------------------------
	-- Schema IO23Theme2DB
	-- -----------------------------------------------------
	DROP SCHEMA IF EXISTS `IO23Theme2DB` ;

	-- -----------------------------------------------------
	-- Schema IO23Theme2DB
	-- -----------------------------------------------------
	CREATE SCHEMA IF NOT EXISTS `IO23Theme2DB` DEFAULT CHARACTER SET utf8 ;
	-- -----------------------------------------------------
	USE `IO23Theme2DB` ;

	-- -----------------------------------------------------
	-- Table `IO23Theme2DB`.`USER`
	-- -----------------------------------------------------
	DROP TABLE IF EXISTS `IO23Theme2DB`.`USER` ;

	CREATE TABLE IF NOT EXISTS `IO23Theme2DB`.`USER` (
	  `idUSER` INT NOT NULL AUTO_INCREMENT,
	  `USER_email` VARCHAR(45) NOT NULL,
	  `USER_name` VARCHAR(45) NOT NULL,
	  `USER_login` VARCHAR(45) NOT NULL,
	  `USER_password` VARCHAR(45) NOT NULL,
	  PRIMARY KEY (`idUSER`))
	ENGINE = InnoDB;


	-- -----------------------------------------------------
	-- Table `IO23Theme2DB`.`COMENT`
	-- -----------------------------------------------------
	DROP TABLE IF EXISTS `IO23Theme2DB`.`COMENT` ;

	CREATE TABLE IF NOT EXISTS `IO23Theme2DB`.`COMENT` (
	  `idCOMENT` INT NOT NULL AUTO_INCREMENT,
	  `COMENT_text` VARCHAR(1000) NOT NULL,
	  `USER_idUSER` INT NOT NULL,
	  `DATA_idDATA` INT NOT NULL,
	  INDEX `fk_COMENT_USER1_idx` (`USER_idUSER` ASC) VISIBLE,
	  PRIMARY KEY (`idCOMENT`, `DATA_idDATA`),
	  INDEX `fk_COMENT_DATA1_idx` (`DATA_idDATA` ASC) VISIBLE,
	  CONSTRAINT `fk_COMENT_USER1`
		FOREIGN KEY (`USER_idUSER`)
		REFERENCES `IO23Theme2DB`.`USER` (`idUSER`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION,
	  CONSTRAINT `fk_COMENT_DATA1`
		FOREIGN KEY (`DATA_idDATA`)
		REFERENCES `IO23Theme2DB`.`DATA` (`idDATA`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION)
	ENGINE = InnoDB;


	-- -----------------------------------------------------
	-- Table `IO23Theme2DB`.`ADMIN`
	-- -----------------------------------------------------
	DROP TABLE IF EXISTS `IO23Theme2DB`.`ADMIN` ;

	CREATE TABLE IF NOT EXISTS `IO23Theme2DB`.`ADMIN` (
	  `idADMIN` INT NOT NULL,
	  `USER_idUSER` INT NOT NULL,
	  `COMENT_idCOMENT` INT NOT NULL,
	  `COMENT_DATA_idDATA` INT NOT NULL,
	  PRIMARY KEY (`idADMIN`, `USER_idUSER`),
	  INDEX `fk_ADMIN_USER1_idx` (`USER_idUSER` ASC) VISIBLE,
	  INDEX `fk_ADMIN_COMENT1_idx` (`COMENT_idCOMENT` ASC, `COMENT_DATA_idDATA` ASC) VISIBLE,
	  CONSTRAINT `fk_ADMIN_USER1`
		FOREIGN KEY (`USER_idUSER`)
		REFERENCES `IO23Theme2DB`.`USER` (`idUSER`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION,
	  CONSTRAINT `fk_ADMIN_COMENT1`
		FOREIGN KEY (`COMENT_idCOMENT` , `COMENT_DATA_idDATA`)
		REFERENCES `IO23Theme2DB`.`COMENT` (`idCOMENT` , `DATA_idDATA`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION)
	ENGINE = InnoDB;


	-- -----------------------------------------------------
	-- Table `IO23Theme2DB`.`REQUEST`
	-- -----------------------------------------------------
	DROP TABLE IF EXISTS `IO23Theme2DB`.`REQUEST` ;

	CREATE TABLE IF NOT EXISTS `IO23Theme2DB`.`REQUEST` (
	  `idREQUEST` INT NOT NULL,
	  `REQUEST_type` INT NOT NULL,
	  `REQUEST_message` VARCHAR(1000) NOT NULL,
	  `USER_idUSER` INT NOT NULL,
	  `ADMIN_idADMIN` INT NOT NULL,
	  PRIMARY KEY (`idREQUEST`),
	  INDEX `fk_REQUEST_USER1_idx` (`USER_idUSER` ASC) VISIBLE,
	  INDEX `fk_REQUEST_ADMIN1_idx` (`ADMIN_idADMIN` ASC) VISIBLE,
	  CONSTRAINT `fk_REQUEST_USER1`
		FOREIGN KEY (`USER_idUSER`)
		REFERENCES `IO23Theme2DB`.`USER` (`idUSER`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION,
	  CONSTRAINT `fk_REQUEST_ADMIN1`
		FOREIGN KEY (`ADMIN_idADMIN`)
		REFERENCES `IO23Theme2DB`.`ADMIN` (`idADMIN`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION)
	ENGINE = InnoDB;


	-- -----------------------------------------------------
	-- Table `IO23Theme2DB`.`DATA`
	-- -----------------------------------------------------
	DROP TABLE IF EXISTS `IO23Theme2DB`.`DATA` ;

	CREATE TABLE IF NOT EXISTS `IO23Theme2DB`.`DATA` (
	  `idDATA` INT NOT NULL AUTO_INCREMENT,
	  `DATA_name` VARCHAR(45) NOT NULL,
	  `DATA_format` VARCHAR(45) NOT NULL,
	  `DATA_date` DATETIME NOT NULL,
	  `REQUEST_idREQUEST` INT NOT NULL,
	  PRIMARY KEY (`idDATA`),
	  INDEX `fk_DATA_REQUEST1_idx` (`REQUEST_idREQUEST` ASC) VISIBLE,
	  CONSTRAINT `fk_DATA_REQUEST1`
		FOREIGN KEY (`REQUEST_idREQUEST`)
		REFERENCES `IO23Theme2DB`.`REQUEST` (`idREQUEST`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION)
	ENGINE = InnoDB;


	-- -----------------------------------------------------
	-- Table `IO23Theme2DB`.`PERMISSION`
	-- -----------------------------------------------------
	DROP TABLE IF EXISTS `IO23Theme2DB`.`PERMISSION` ;

	CREATE TABLE IF NOT EXISTS `IO23Theme2DB`.`PERMISSION` (
	  `PERMISSION_comment` INT NOT NULL DEFAULT 1,
	  `PERMISSION_post` INT NOT NULL DEFAULT 1,
	  `USER_idUSER` INT NOT NULL,
	  `ADMIN_idADMIN` INT NOT NULL,
	  INDEX `fk_PERMISSION_USER1_idx` (`USER_idUSER` ASC) VISIBLE,
	  INDEX `fk_PERMISSION_ADMIN1_idx` (`ADMIN_idADMIN` ASC) VISIBLE,
	  CONSTRAINT `fk_PERMISSION_USER1`
		FOREIGN KEY (`USER_idUSER`)
		REFERENCES `IO23Theme2DB`.`USER` (`idUSER`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION,
	  CONSTRAINT `fk_PERMISSION_ADMIN1`
		FOREIGN KEY (`ADMIN_idADMIN`)
		REFERENCES `IO23Theme2DB`.`ADMIN` (`idADMIN`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION)
	ENGINE = InnoDB;


	-- -----------------------------------------------------
	-- Table `IO23Theme2DB`.`TAG`
	-- -----------------------------------------------------
	DROP TABLE IF EXISTS `IO23Theme2DB`.`TAG` ;

	CREATE TABLE IF NOT EXISTS `IO23Theme2DB`.`TAG` (
	  `idTAG` INT NOT NULL,
	  `TAG_name` VARCHAR(1000) NOT NULL,
	  PRIMARY KEY (`idTAG`))
	ENGINE = InnoDB;


	-- -----------------------------------------------------
	-- Table `IO23Theme2DB`.`DATA_has_ADMIN`
	-- -----------------------------------------------------
	DROP TABLE IF EXISTS `IO23Theme2DB`.`DATA_has_ADMIN` ;

	CREATE TABLE IF NOT EXISTS `IO23Theme2DB`.`DATA_has_ADMIN` (
	  `DATA_idDATA` INT NOT NULL,
	  `ADMIN_idADMIN` INT NOT NULL,
	  PRIMARY KEY (`DATA_idDATA`, `ADMIN_idADMIN`),
	  INDEX `fk_DATA_has_ADMIN_ADMIN1_idx` (`ADMIN_idADMIN` ASC) VISIBLE,
	  INDEX `fk_DATA_has_ADMIN_DATA1_idx` (`DATA_idDATA` ASC) VISIBLE,
	  CONSTRAINT `fk_DATA_has_ADMIN_DATA1`
		FOREIGN KEY (`DATA_idDATA`)
		REFERENCES `IO23Theme2DB`.`DATA` (`idDATA`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION,
	  CONSTRAINT `fk_DATA_has_ADMIN_ADMIN1`
		FOREIGN KEY (`ADMIN_idADMIN`)
		REFERENCES `IO23Theme2DB`.`ADMIN` (`idADMIN`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION)
	ENGINE = InnoDB;


	-- -----------------------------------------------------
	-- Table `IO23Theme2DB`.`DATA_has_TAG`
	-- -----------------------------------------------------
	DROP TABLE IF EXISTS `IO23Theme2DB`.`DATA_has_TAG` ;

	CREATE TABLE IF NOT EXISTS `IO23Theme2DB`.`DATA_has_TAG` (
	  `DATA_idDATA` INT NOT NULL,
	  `TAG_idTAG` INT NOT NULL,
	  PRIMARY KEY (`DATA_idDATA`, `TAG_idTAG`),
	  INDEX `fk_DATA_has_TAG_TAG1_idx` (`TAG_idTAG` ASC) VISIBLE,
	  INDEX `fk_DATA_has_TAG_DATA1_idx` (`DATA_idDATA` ASC) VISIBLE,
	  CONSTRAINT `fk_DATA_has_TAG_DATA1`
		FOREIGN KEY (`DATA_idDATA`)
		REFERENCES `IO23Theme2DB`.`DATA` (`idDATA`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION,
	  CONSTRAINT `fk_DATA_has_TAG_TAG1`
		FOREIGN KEY (`TAG_idTAG`)
		REFERENCES `IO23Theme2DB`.`TAG` (`idTAG`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION)
	ENGINE = InnoDB;

	USE `io23theme2db` ;

	-- -----------------------------------------------------
	-- Table `io23theme2db`.`user`
	-- -----------------------------------------------------
	DROP TABLE IF EXISTS `io23theme2db`.`user` ;

	CREATE TABLE IF NOT EXISTS `io23theme2db`.`user` (
	  `idUSER` INT NOT NULL AUTO_INCREMENT,
	  `USER_email` VARCHAR(45) NOT NULL,
	  `USER_name` VARCHAR(45) NOT NULL,
	  `USER_login` VARCHAR(45) NOT NULL,
	  `USER_password` VARCHAR(45) NOT NULL,
	  PRIMARY KEY (`idUSER`))
	ENGINE = InnoDB
	AUTO_INCREMENT = 3
	DEFAULT CHARACTER SET = utf8mb3;


	-- -----------------------------------------------------
	-- Table `io23theme2db`.`admin`
	-- -----------------------------------------------------
	DROP TABLE IF EXISTS `io23theme2db`.`admin` ;

	CREATE TABLE IF NOT EXISTS `io23theme2db`.`admin` (
	  `idADMIN` INT NOT NULL AUTO_INCREMENT,
	  `USER_idUSER` INT NULL DEFAULT NULL,
	  PRIMARY KEY (`idADMIN`),
	  INDEX `USER_idUSER` (`USER_idUSER` ASC) VISIBLE,
	  CONSTRAINT `admin_ibfk_1`
		FOREIGN KEY (`USER_idUSER`)
		REFERENCES `io23theme2db`.`user` (`idUSER`))
	ENGINE = InnoDB
	AUTO_INCREMENT = 3
	DEFAULT CHARACTER SET = utf8mb3;


	-- -----------------------------------------------------
	-- Table `io23theme2db`.`request`
	-- -----------------------------------------------------
	DROP TABLE IF EXISTS `io23theme2db`.`request` ;

	CREATE TABLE IF NOT EXISTS `io23theme2db`.`request` (
	  `idREQUEST` INT NOT NULL AUTO_INCREMENT,
	  `REQUEST_type` INT NOT NULL,
	  `REQUEST_message` VARCHAR(1000) NOT NULL,
	  `USER_idUSER` INT NULL DEFAULT NULL,
	  `ADMIN_idADMIN` INT NULL DEFAULT NULL,
	  PRIMARY KEY (`idREQUEST`),
	  INDEX `USER_idUSER` (`USER_idUSER` ASC) VISIBLE,
	  INDEX `ADMIN_idADMIN` (`ADMIN_idADMIN` ASC) VISIBLE,
	  CONSTRAINT `request_ibfk_1`
		FOREIGN KEY (`USER_idUSER`)
		REFERENCES `io23theme2db`.`user` (`idUSER`),
	  CONSTRAINT `request_ibfk_2`
		FOREIGN KEY (`ADMIN_idADMIN`)
		REFERENCES `io23theme2db`.`admin` (`idADMIN`))
	ENGINE = InnoDB
	AUTO_INCREMENT = 3
	DEFAULT CHARACTER SET = utf8mb3;


	-- -----------------------------------------------------
	-- Table `io23theme2db`.`data`
	-- -----------------------------------------------------
	DROP TABLE IF EXISTS `io23theme2db`.`data` ;

	CREATE TABLE IF NOT EXISTS `io23theme2db`.`data` (
	  `idDATA` INT NOT NULL AUTO_INCREMENT,
	  `DATA_name` VARCHAR(45) NOT NULL,
	  `DATA_format` VARCHAR(45) NOT NULL,
	  `DATA_date` DATETIME NOT NULL,
	  `REQUEST_idREQUEST` INT NULL DEFAULT NULL,
	  PRIMARY KEY (`idDATA`),
	  INDEX `REQUEST_idREQUEST` (`REQUEST_idREQUEST` ASC) VISIBLE,
	  CONSTRAINT `data_ibfk_1`
		FOREIGN KEY (`REQUEST_idREQUEST`)
		REFERENCES `io23theme2db`.`request` (`idREQUEST`))
	ENGINE = InnoDB
	AUTO_INCREMENT = 3
	DEFAULT CHARACTER SET = utf8mb3;


	-- -----------------------------------------------------
	-- Table `io23theme2db`.`coment`
	-- -----------------------------------------------------
	DROP TABLE IF EXISTS `io23theme2db`.`coment` ;

	CREATE TABLE IF NOT EXISTS `io23theme2db`.`coment` (
	  `idCOMENT` INT NOT NULL AUTO_INCREMENT,
	  `COMENT_text` VARCHAR(1000) NOT NULL,
	  `USER_idUSER` INT NULL DEFAULT NULL,
	  `DATA_idDATA` INT NULL DEFAULT NULL,
	  PRIMARY KEY (`idCOMENT`),
	  INDEX `USER_idUSER` (`USER_idUSER` ASC) VISIBLE,
	  INDEX `DATA_idDATA` (`DATA_idDATA` ASC) VISIBLE,
	  CONSTRAINT `coment_ibfk_1`
		FOREIGN KEY (`USER_idUSER`)
		REFERENCES `io23theme2db`.`user` (`idUSER`),
	  CONSTRAINT `coment_ibfk_2`
		FOREIGN KEY (`DATA_idDATA`)
		REFERENCES `io23theme2db`.`data` (`idDATA`))
	ENGINE = InnoDB
	AUTO_INCREMENT = 3
	DEFAULT CHARACTER SET = utf8mb3;


	-- -----------------------------------------------------
	-- Table `io23theme2db`.`data_has_admin`
	-- -----------------------------------------------------
	DROP TABLE IF EXISTS `io23theme2db`.`data_has_admin` ;

	CREATE TABLE IF NOT EXISTS `io23theme2db`.`data_has_admin` (
	  `DATA_idDATA` INT NOT NULL,
	  `ADMIN_idADMIN` INT NOT NULL,
	  PRIMARY KEY (`DATA_idDATA`, `ADMIN_idADMIN`),
	  INDEX `ADMIN_idADMIN` (`ADMIN_idADMIN` ASC) VISIBLE,
	  CONSTRAINT `data_has_admin_ibfk_1`
		FOREIGN KEY (`DATA_idDATA`)
		REFERENCES `io23theme2db`.`data` (`idDATA`),
	  CONSTRAINT `data_has_admin_ibfk_2`
		FOREIGN KEY (`ADMIN_idADMIN`)
		REFERENCES `io23theme2db`.`admin` (`idADMIN`))
	ENGINE = InnoDB
	DEFAULT CHARACTER SET = utf8mb3;


	-- -----------------------------------------------------
	-- Table `io23theme2db`.`tag`
	-- -----------------------------------------------------
	DROP TABLE IF EXISTS `io23theme2db`.`tag` ;

	CREATE TABLE IF NOT EXISTS `io23theme2db`.`tag` (
	  `idTAG` INT NOT NULL AUTO_INCREMENT,
	  `TAG_name` VARCHAR(1000) NOT NULL,
	  PRIMARY KEY (`idTAG`))
	ENGINE = InnoDB
	AUTO_INCREMENT = 3
	DEFAULT CHARACTER SET = utf8mb3;


	-- -----------------------------------------------------
	-- Table `io23theme2db`.`data_has_tag`
	-- -----------------------------------------------------
	DROP TABLE IF EXISTS `io23theme2db`.`data_has_tag` ;

	CREATE TABLE IF NOT EXISTS `io23theme2db`.`data_has_tag` (
	  `DATA_idDATA` INT NOT NULL,
	  `TAG_idTAG` INT NOT NULL,
	  PRIMARY KEY (`DATA_idDATA`, `TAG_idTAG`),
	  INDEX `TAG_idTAG` (`TAG_idTAG` ASC) VISIBLE,
	  CONSTRAINT `data_has_tag_ibfk_1`
		FOREIGN KEY (`DATA_idDATA`)
		REFERENCES `io23theme2db`.`data` (`idDATA`),
	  CONSTRAINT `data_has_tag_ibfk_2`
		FOREIGN KEY (`TAG_idTAG`)
		REFERENCES `io23theme2db`.`tag` (`idTAG`))
	ENGINE = InnoDB
	DEFAULT CHARACTER SET = utf8mb3;


	-- -----------------------------------------------------
	-- Table `io23theme2db`.`permission`
	-- -----------------------------------------------------
	DROP TABLE IF EXISTS `io23theme2db`.`permission` ;

	CREATE TABLE IF NOT EXISTS `io23theme2db`.`permission` (
	  `PERMISSION_comm` VARCHAR(100) NULL DEFAULT NULL,
	  `PERMISSION_post` VARCHAR(100) NULL DEFAULT NULL,
	  `USER_idUSER` INT NOT NULL,
	  `ADMIN_idADMIN` INT NOT NULL,
	  PRIMARY KEY (`USER_idUSER`, `ADMIN_idADMIN`),
	  INDEX `ADMIN_idADMIN` (`ADMIN_idADMIN` ASC) VISIBLE,
	  CONSTRAINT `permission_ibfk_1`
		FOREIGN KEY (`USER_idUSER`)
		REFERENCES `io23theme2db`.`user` (`idUSER`),
	  CONSTRAINT `permission_ibfk_2`
		FOREIGN KEY (`ADMIN_idADMIN`)
		REFERENCES `io23theme2db`.`admin` (`idADMIN`))
	ENGINE = InnoDB
	DEFAULT CHARACTER SET = utf8mb3;

	INSERT INTO USER (USER_email, USER_name, USER_login, USER_password) 
	VALUES ('user1@example.com', 'User 1', 'user1', 'password123'),
		   ('user2@example.com', 'User 2', 'user2', 'password456');

	INSERT INTO ADMIN (USER_idUSER) VALUES (1), (2);

	INSERT INTO REQUEST (REQUEST_type, REQUEST_message, USER_idUSER, ADMIN_idADMIN) 
	VALUES (1, 'Request 1', 1, 1),
		   (2, 'Request 2', 2, 1);

	INSERT INTO DATA (DATA_name, DATA_format, DATA_date, REQUEST_idREQUEST) 
	VALUES ('Data 1', 'PDF', '2024-05-24 12:00:00', 1),
		   ('Data 2', 'JPEG', '2024-05-25 10:30:00', 2);

	INSERT INTO COMENT (COMENT_text, USER_idUSER, DATA_idDATA) 
	VALUES ('Comment 1', 1, 1),
		   ('Comment 2', 2, 2);

	INSERT INTO TAG (TAG_name) VALUES ('Tag 1'), ('Tag 2');

	INSERT INTO DATA_has_TAG (DATA_idDATA, TAG_idTAG) VALUES (1, 1), (2, 2);

	INSERT INTO DATA_has_ADMIN (DATA_idDATA, ADMIN_idADMIN) VALUES (1, 1), (2, 1);

	INSERT INTO PERMISSION (PERMISSION_comm, PERMISSION_post, USER_idUSER, ADMIN_idADMIN) 
	VALUES ('comment', 'post', 1, 1),
		   ('comment', 'post', 2, 1);

	SET SQL_MODE=@OLD_SQL_MODE;
	SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
	SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
```

- RESTfull сервіс для управління даними

