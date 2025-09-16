-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: proyect
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu` (
  `idvista` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `idrol` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_menu_rol` (`idrol`),
  KEY `fk_menu_vista` (`idvista`),
  CONSTRAINT `fk_menu_rol` FOREIGN KEY (`idrol`) REFERENCES `rol` (`id`),
  CONSTRAINT `fk_menu_vista` FOREIGN KEY (`idvista`) REFERENCES `vistas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (2,6,1),(3,7,1),(1,8,1),(2,9,NULL),(4,10,1);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_rol` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'ADMIN'),(2,'defecto');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fecha_creacion` datetime DEFAULT CURRENT_TIMESTAMP,
  `usuario` varchar(100) NOT NULL,
  `contrasena` varchar(50) NOT NULL,
  `idrol` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ID_ROL` (`idrol`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'2025-07-15 15:27:59','test','2',1),(2,'2025-07-15 15:28:26','demo','1234',1),(3,'2025-07-15 16:22:25','lenny','jajasalu2',1),(4,'2025-07-15 16:45:27','ariel','kotlin',1),(5,'2025-07-17 15:33:44','test','1234',2),(13,'2025-07-17 22:17:50','jean','1234',2),(14,'2025-07-18 10:37:54','jean','1234',NULL),(15,'2025-07-18 11:03:52','demo','1234',1),(16,'2025-07-18 11:04:08','demo','1234',2),(17,'2025-07-18 11:37:33','12321','1234',2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vistaactual`
--

DROP TABLE IF EXISTS `vistaactual`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vistaactual` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idusuario` int NOT NULL,
  `idvista` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idusuario` (`idusuario`),
  KEY `idvista` (`idvista`),
  CONSTRAINT `vistaactual_ibfk_1` FOREIGN KEY (`idusuario`) REFERENCES `users` (`id`),
  CONSTRAINT `vistaactual_ibfk_2` FOREIGN KEY (`idvista`) REFERENCES `vistas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vistaactual`
--

LOCK TABLES `vistaactual` WRITE;
/*!40000 ALTER TABLE `vistaactual` DISABLE KEYS */;
/*!40000 ALTER TABLE `vistaactual` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vistas`
--

DROP TABLE IF EXISTS `vistas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vistas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url` varchar(100) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `icono` varchar(100) DEFAULT NULL,
  `idpadre` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_padre_id` (`idpadre`),
  CONSTRAINT `fk_padre_id` FOREIGN KEY (`idpadre`) REFERENCES `vistas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vistas`
--

LOCK TABLES `vistas` WRITE;
/*!40000 ALTER TABLE `vistas` DISABLE KEYS */;
INSERT INTO `vistas` VALUES (1,'/home','Dashboard','',NULL),(2,'/registro','Registros','',NULL),(3,'/contenido','Contenido','',NULL),(4,'/sexo','otros','x',3),(5,'/roles','Roles','x',3);
/*!40000 ALTER TABLE `vistas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-18 11:38:21
