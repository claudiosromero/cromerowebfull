-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 22-02-2022 a las 02:43:16
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `usuariosfullweb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(15, 'Esta película le está ganando a Spider-Man: No Way Home el Óscar a lo más popular', 'Parece que las esperanzas de que la última película del MCU gane una estatuilla están cada vez más lejos', 'Hace algunas semanas se hicieron oficiales las nominaciones a los Premios Óscar, donde la producción más exitosa de los últimos años, Spider-Man: No Way Home, no consiguió un lugar en los nominados a Mejor Película. Sin embargo, la Academia abrió una nueva categoría para lo más popular y las esperanzas de los fans volvieron. La mala', 'hfbi3ebjdopxavl3ugsn'),
(13, 'Dragon Ball Super', 'El nuevo largometraje de la franquicia nos permitirá ver a Goten y Trunks adolescentes', 'Pese a la creencia de muchas personas, Dragon Ball permanece como una de las propiedades intelectuales más populares de la actualidad. Como prueba de esto tenemos el caso de Dragon Ball Super: Super Hero, el más reciente largometraje de la franquicia que llegará a las salas de cine este año. Si bien su fecha de estreno internacional permanece como un misterio, recientemente se acaba de dar a conocer que podría estar cerca.\r\n\r\nHace unos meses, Toei Animation confirmó que esta nueva película, la cual nos presentará la batalla más importante de Gohan hasta el momento, estará disponible en Japón a partir del próximo 22 de abril. Naturalmente, los fans de todo el mundo se preguntan cuándo llegará a las salas de cine de sus respectivos países.\r\n\r\nPor si te lo perdiste: ¿Luis Manuel Ávila interpretará a Gohan en Dragon Ball Super? Esto dijo Eduardo Garza\r\n\r\nFue durante el evento Dragon Ball Games Battle Hour de este fin de semana donde finalmente se confirmó que la más reciente película de la franquicia llegará a Norteamérica durante el verano, es decir, unas semanas después de su estreno en territorio nipón.\r\n\r\nAhora bien, es posible que el término “Norteamérica” sólo haga reverencia a Estados Unidos y Canadá. Por ello, desconocemos cuál será la ventana de lanzamiento de Dragon Ball Super: Super Hero para México y Latinoamérica. Sin embargo, y si consideramos lo que sucedió con la cinta de Broly, es de esperar que el estreno en nuestra región esté cerca del de Estados Unidos u otros países.', 'dz5vvetyg2mzr8k4wzl9'),
(14, 'Henry Cavill visitó sede de Games Workshop y causó furor en la comunidad Warhammer', 'El actor se dio una vuelta a la meca de Warhammer y fans aprovecharon para tomarse fotos con él', 'En varias ocasiones te hemos hablado de los pasatiempos de Henry Cavill, que comparte con muchos gamers y geeks. Una de las grandes pasiones del actor inglés es Warhammer y nunca lo oculta; de hecho, es feliz hablando de ello íntima y públicamente. Pues bien, el actor ha dejado claro una vez más que es un enorme fan de Warhammer luego de visitar el lugar más importante que existe para los fans de la serie.\r\n\r\nHenry Cavill sin duda ha estado muy ocupado en los últimos meses; de hecho, la Temporada 2 de la serie de The Witcher debutó en diciembre pasado y ya hay planes para una tercera. Sin embargo, el actor abrió un espacio en su apretada agenda para hacer una visita a la oficina central de los creadores de Warhammer.\r\n\r\nEntérate: ya está disponible una nueva camiseta de LEVEL UP, corre por la tuya.\r\n\r\nHENRY CAVILL DISFRUTÓ VISITAR EL WARHAMMER WORLD\r\nEl fin de semana, Cavill visitó el Warhammer World, sede de la franquicia ubicada en Nottinghan, Inglaterra. En este lugar, no sólo se venden figuras y más productos de la serie, sino también cuenta con una exhibición, un espacio para organizar partidas de Warhammer entre la comunidad y hasta un bar. Así pues, Cavill visitó la meca de la franquicia.\r\n\r\nHenry Cavill no tiene cuenta de Twitter y en su cuenta de Instagram no compartió fotografías del acontecimiento; de hecho, el actor no suele compartir fotografías durante eventos especiales, sino que prefiere disfrutar el momento. Las escasas imágenes que tiene son de tiempos libres o cuando se ejercita.\r\n\r\nPor si te lo perdiste: Henry Cavill quiere participar en una adaptación de Warhammer.\r\n\r\nCREATIVOS, EMPLEADOS Y FANS DE GAMES WORKSHOP AMARON LA VISITA DE HENRY CAVILL\r\nSin embargo, hubo un montón de fans y miembros de la comunidad que coincidieron con el actor en su visita a Warhammer World y aprovecharon para pedirle al actor tomarse fotografías con ellos, algo que obviamente aceptó alegremente.\r\n\r\nEs importante decir que el Warhammer World está instalado en las oficina central de Games Workshop, por lo que tuvo la oportunidad de saludar y conocer a encargados de la franquicia, como el diseñador de figuras Darren Latham, que no ocultó su grana alegría de conocer a Cavill. Asimismo, se puede ver a otros miembros y empleados de Games Workshop felices de conocer a Cavill.\r\n\r\nSi bien es posible que Henry Cavill haya visitado este lugar por pura pasión, es muy posible que Games Workshop haya aprovechado para hacer algún contenido temático y no se descarta que el actor aparezca en la serie de videos de la compañía o que incluso la reunión hubiera servido para acordar una colaboración oficial. Te mantendremos informado.', 'vb532cxpndjtuejbu4pm');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'claudio', '81dc9bdb52d04dc20036dbd8313ed055'),
(3, 'Sol', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
