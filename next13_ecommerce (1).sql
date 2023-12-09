-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 05-12-2023 a las 12:11:06
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `next13_ecommerce`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_adjuntos`
--

CREATE TABLE `tbl_adjuntos` (
  `id_adjunto` int(11) NOT NULL,
  `uuid` varchar(191) NOT NULL,
  `nombre` varchar(191) NOT NULL,
  `url` text NOT NULL,
  `id_camiseta` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_adjuntos`
--

INSERT INTO `tbl_adjuntos` (`id_adjunto`, `uuid`, `nombre`, `url`, `id_camiseta`, `createdAt`, `updatedAt`) VALUES
(1, 'f39468b3-25af-4720-b59f-dc10341e8ddc', 'Catalogo premiun.pdf', 'https://utfs.io/f/12c10ebd-3f95-44c4-9156-3d6dc8de6775-6n8o9a.pdf', 16, '2023-12-04 01:51:25.605', '2023-12-04 01:51:25.605'),
(2, '4c1ed3b9-6b3e-4d57-b489-e1da6961a7ce', 'Catalogo premiun.pdf', 'https://utfs.io/f/7e8e669e-02a6-438b-b50d-48849b4ef89e-6n8o9a.pdf', 15, '2023-12-04 02:18:02.547', '2023-12-04 02:18:02.547'),
(3, '4f1bd6c6-c6e5-4e6b-8e50-e9a0185e1aa6', 'Catalogo premiun.pdf', 'https://utfs.io/f/0db67471-e90f-4960-97b3-98d80c6eaf8a-6n8o9a.pdf', 14, '2023-12-04 02:24:08.783', '2023-12-04 02:24:08.783'),
(4, '1ae0e5c9-9fdd-4997-a3c4-3415cf5e1f82', 'Catalogo premiun.pdf', 'https://utfs.io/f/05582619-c4f2-4327-9215-1af7776a6a03-6n8o9a.pdf', 4, '2023-12-04 02:25:28.826', '2023-12-04 02:25:28.826');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_camiseta`
--

CREATE TABLE `tbl_camiseta` (
  `id_camiseta` int(11) NOT NULL,
  `uuid` varchar(191) NOT NULL,
  `id_usuario` varchar(191) NOT NULL,
  `titulo` text NOT NULL,
  `descripcion` text DEFAULT NULL,
  `imagen_url` text DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `publicado` tinyint(1) NOT NULL DEFAULT 0,
  `id_categoria` int(11) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_camiseta`
--

INSERT INTO `tbl_camiseta` (`id_camiseta`, `uuid`, `id_usuario`, `titulo`, `descripcion`, `imagen_url`, `precio`, `publicado`, `id_categoria`, `createdAt`, `updatedAt`) VALUES
(1, '64137d67-a2fe-4ba3-a364-4e959e71d407', 'user_2X3FCD0e8cLSJamTa0OshCuR9F6', 'Camiseta jack and jones', 'Camiseta color morada con tipografia de montañas', 'https://utfs.io/f/0cdb1cda-ce17-4595-9e17-21ef62dd69f1-ho388i.jpg', NULL, 0, NULL, '2023-10-23 15:08:39.569', '2023-10-23 16:06:29.933'),
(2, '4df2ea28-9f42-4a40-b9d6-53f192f9fb5d', 'user_2X3FCD0e8cLSJamTa0OshCuR9F6', 'Marca Levis', 'Camiseta color blanca marca levis talla M', 'https://utfs.io/f/c97fb1aa-25a1-4824-b41b-830919256aab-mxj1ij.jpg', NULL, 0, NULL, '2023-10-23 16:08:27.260', '2023-10-23 16:09:58.074'),
(3, '4c48291f-6311-4f15-bc74-ffc40384bb56', 'user_2X3FCD0e8cLSJamTa0OshCuR9F6', 'Camiseta jack 2', NULL, NULL, NULL, 0, NULL, '2023-10-25 03:44:24.977', '2023-10-25 03:44:24.977'),
(4, '58d680b3-4366-4a3f-8b13-e559d7e74229', 'user_2X3FCD0e8cLSJamTa0OshCuR9F6', 'Camiseta jack and jones variada', 'Camiseta color blanca 1', 'https://utfs.io/f/4cce7939-d518-4869-8b0d-b6833b5e279f-pb354d.jpg', 15, 1, 1, '2023-10-25 03:44:37.055', '2023-12-04 02:25:32.576'),
(5, '6d282c48-244e-4c09-8283-bbd12d001796', 'user_2X3FCD0e8cLSJamTa0OshCuR9F6', 'camiseta levis 2', NULL, NULL, NULL, 0, NULL, '2023-10-25 03:46:07.453', '2023-10-25 03:46:07.453'),
(6, 'a2007238-c010-4cb5-a535-25f70bd6b216', 'user_2X3FCD0e8cLSJamTa0OshCuR9F6', 'Camiseta lacoste', 'Camiseta color azul y tipografia color blanco', 'https://utfs.io/f/6d037200-833c-4ae9-a228-d65bcecc0e37-10waot.jpg', NULL, 0, NULL, '2023-10-25 04:06:31.460', '2023-10-25 04:07:41.830'),
(7, '0806aaa4-30fb-42eb-9012-7c284f8e2a35', 'user_2X3FCD0e8cLSJamTa0OshCuR9F6', 'Nautica', 'Camisa blanca', 'https://utfs.io/f/0144182d-429c-4dc9-938d-a3ee55e2127f-slvjjp.jpg', 35, 1, 3, '2023-11-26 02:12:06.874', '2023-12-02 00:44:14.920'),
(8, '083d2238-0933-4468-9503-eb1028a7efd6', 'user_2X3FCD0e8cLSJamTa0OshCuR9F6', 'Camiseta Roja', NULL, NULL, NULL, 0, NULL, '2023-11-27 20:28:05.418', '2023-11-27 20:28:05.418'),
(9, 'bc616222-698f-4349-ad50-ae023cfde174', 'user_2X3FCD0e8cLSJamTa0OshCuR9F6', 'Negra', NULL, NULL, NULL, 0, NULL, '2023-11-27 20:31:08.575', '2023-11-27 20:31:08.575'),
(10, 'b2280585-5d58-4166-a7ef-7a0a62f072d6', 'user_2X3FCD0e8cLSJamTa0OshCuR9F6', 'Camiseta escolar ', NULL, NULL, NULL, 0, NULL, '2023-11-28 01:27:27.726', '2023-11-28 01:27:27.726'),
(11, '996353df-113e-45eb-97ca-366ead303b38', 'user_2X3FCD0e8cLSJamTa0OshCuR9F6', 'Camisa roja', 'Camiseta roja de algodon', NULL, NULL, 0, NULL, '2023-11-28 20:16:00.658', '2023-11-28 20:36:19.597'),
(12, 'a82ee76d-111a-4a52-a21c-dbb8894fcd5e', 'user_2X3FCD0e8cLSJamTa0OshCuR9F6', 'Camisa negra', 'Camisa negra de algodon ', NULL, NULL, 0, NULL, '2023-11-29 01:34:45.958', '2023-11-29 01:34:45.958'),
(13, '1d15ad26-60fc-49f4-8ec2-653be75e5458', 'user_2X3FCD0e8cLSJamTa0OshCuR9F6', 'Camisa escolar 2', 'Camisa de algodon ', NULL, 25, 0, NULL, '2023-11-29 01:37:23.152', '2023-11-29 01:56:59.709'),
(14, 'c886ad1d-1927-4a49-9ffb-1a219298c281', 'user_2X3FCD0e8cLSJamTa0OshCuR9F6', 'Camiseta jack and jones', 'Color verde menta', 'https://utfs.io/f/f70c088e-b620-498d-b3c8-3366f2b466ec-ak7nrx.jpg', 45, 1, 1, '2023-11-29 02:22:10.281', '2023-12-04 02:24:40.576'),
(15, 'c31e156d-327c-42e3-ae5c-cd069ddf6b1a', 'user_2X3FCD0e8cLSJamTa0OshCuR9F6', 'Camisa 4', 'Camiseta color blanca', 'https://utfs.io/f/a50d8051-c66e-4034-b6cd-f84c2887228c-mxj1ij.jpg', 35, 1, 1, '2023-11-30 01:16:25.990', '2023-12-02 00:58:57.108'),
(16, 'cbdecdf0-1463-4d62-8888-173f683b3b10', 'user_2X3FCD0e8cLSJamTa0OshCuR9F6', 'Camiseta oxfort', 'Camiseta color azul de seda ', 'https://utfs.io/f/1f4d8f70-3b98-4cc7-afde-4c7c3b47db2f-gl977w.png', 35, 1, 3, '2023-11-30 01:35:57.961', '2023-12-04 01:19:19.496');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_categorias`
--

CREATE TABLE `tbl_categorias` (
  `id_categoria` int(11) NOT NULL,
  `uuid` varchar(191) NOT NULL,
  `nombre` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_categorias`
--

INSERT INTO `tbl_categorias` (`id_categoria`, `uuid`, `nombre`) VALUES
(1, '996353df-113e-45eb-97ca-366ead303b38', 'Estampada'),
(2, '4df2ea28-9f42-4a40-b9d6-53f192f9fb5d', 'Vaquero'),
(3, '0806aaa4-30fb-42eb-9012-7c284f8e2a35', 'Formal');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_compras`
--

CREATE TABLE `tbl_compras` (
  `id_compra` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `id_camiseta` int(11) NOT NULL,
  `camiseta_uuid` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_stripe_clientes`
--

CREATE TABLE `tbl_stripe_clientes` (
  `id` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `stripeCustomerId` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_stripe_clientes`
--

INSERT INTO `tbl_stripe_clientes` (`id`, `userId`, `stripeCustomerId`, `createdAt`, `updatedAt`) VALUES
('a72b46fe-41f5-43aa-a84a-a6a55778f6de', 'user_2X3FCD0e8cLSJamTa0OshCuR9F6', 'cus_P7fk5sk6th20Ef', '2023-12-04 00:53:09.563', '2023-12-04 00:53:09.563');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_adjuntos`
--
ALTER TABLE `tbl_adjuntos`
  ADD PRIMARY KEY (`id_adjunto`),
  ADD KEY `tbl_adjuntos_id_camiseta_idx` (`id_camiseta`);

--
-- Indices de la tabla `tbl_camiseta`
--
ALTER TABLE `tbl_camiseta`
  ADD PRIMARY KEY (`id_camiseta`),
  ADD KEY `tbl_camiseta_id_categoria_idx` (`id_categoria`);
ALTER TABLE `tbl_camiseta` ADD FULLTEXT KEY `tbl_camiseta_titulo_idx` (`titulo`);

--
-- Indices de la tabla `tbl_categorias`
--
ALTER TABLE `tbl_categorias`
  ADD PRIMARY KEY (`id_categoria`),
  ADD UNIQUE KEY `tbl_categorias_nombre_key` (`nombre`);

--
-- Indices de la tabla `tbl_compras`
--
ALTER TABLE `tbl_compras`
  ADD PRIMARY KEY (`id_compra`),
  ADD UNIQUE KEY `tbl_compras_userId_camiseta_uuid_key` (`userId`,`camiseta_uuid`),
  ADD KEY `tbl_compras_id_camiseta_idx` (`id_camiseta`);

--
-- Indices de la tabla `tbl_stripe_clientes`
--
ALTER TABLE `tbl_stripe_clientes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tbl_stripe_clientes_userId_key` (`userId`),
  ADD UNIQUE KEY `tbl_stripe_clientes_stripeCustomerId_key` (`stripeCustomerId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_adjuntos`
--
ALTER TABLE `tbl_adjuntos`
  MODIFY `id_adjunto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tbl_camiseta`
--
ALTER TABLE `tbl_camiseta`
  MODIFY `id_camiseta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `tbl_categorias`
--
ALTER TABLE `tbl_categorias`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tbl_adjuntos`
--
ALTER TABLE `tbl_adjuntos`
  ADD CONSTRAINT `tbl_adjuntos_id_camiseta_fkey` FOREIGN KEY (`id_camiseta`) REFERENCES `tbl_camiseta` (`id_camiseta`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `tbl_camiseta`
--
ALTER TABLE `tbl_camiseta`
  ADD CONSTRAINT `tbl_camiseta_id_categoria_fkey` FOREIGN KEY (`id_categoria`) REFERENCES `tbl_categorias` (`id_categoria`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `tbl_compras`
--
ALTER TABLE `tbl_compras`
  ADD CONSTRAINT `tbl_compras_id_camiseta_fkey` FOREIGN KEY (`id_camiseta`) REFERENCES `tbl_camiseta` (`id_camiseta`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
