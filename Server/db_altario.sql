-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2022 at 03:19 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_altario`
--

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `amount` int(11) NOT NULL,
  `code` int(11) NOT NULL,
  `grid` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`id`, `name`, `amount`, `code`, `grid`) VALUES
(1, 'payment 1', 10, 46, '[[\'q\', \'m\', \'l\', \'j\', \'i\', \'k\', \'h\', \'l\', \'u\', \'q\'],[\'q\', \'x\', \'r\', \'b\', \'s\', \'s\', \'q\', \'w\', \'u\', \'d\'],[\'z\', \'t\', \'s\', \'q\', \'u\', \'h\', \'p\', \'c\', \'q\', \'r\'],[\'d\', \'j\', \'e\', \'l\', \'q\', \'o\', \'l\', \'k\', \'m\', \'e\'],\r\n[\'e\', \'d\', \'t\', \'b\', \'z\', \'z\', \'f\', \'s\', \'c\', \'n\'],[\'p\', \'l\', \'m\', \'n\', \'d\', \'m\', \'j\', \'x\', \'w\', \'a\'],[\'y\', \'g\', \'z\', \'t\', \'b\', \'z\', \'d\', \'h\', \'p\', \'g\'],[\'n\', \'f\', \'v\', \'q\', \'w\', \'b\', \'h\', \'g\', \'l\', \'x\'],[\'c\', \'u\', \'c\', \'d\', \'j\', \'v\', \'o\', \'v\', \'p\', \'y\'],[\'b\', \'k\', \'z\', \'h\', \'f\', \'b\', \'j\', \'l\', \'y\', \'q\']'),
(2, 'asd', 0, 0, 'undefined'),
(3, 'undefined', 0, 0, 'undefined'),
(4, 'undefined', 0, 0, 'undefined'),
(5, 'undefined', 0, 0, 'undefined'),
(6, 'undefined', 0, 0, 'undefined'),
(7, 'undefined', 0, 0, 'undefined'),
(8, 'undefined', 0, 0, 'undefined'),
(9, 'undefined', 0, 0, 'undefined'),
(10, 'undefined', 0, 0, 'undefined'),
(11, 'undefined', 0, 0, 'undefined'),
(12, 'undefined', 0, 0, 'undefined'),
(13, 'undefined', 0, 0, 'undefined'),
(14, 'undefined', 0, 0, 'undefined'),
(15, 'undefined', 0, 0, 'undefined'),
(16, 'undefined', 0, 0, 'undefined'),
(17, 'undefined', 0, 0, 'undefined'),
(18, 'undefined', 0, 0, 'undefined'),
(19, 'undefined', 0, 0, 'undefined'),
(20, 'undefined', 0, 0, 'undefined'),
(21, 'undefined', 0, 0, 'undefined'),
(22, 'undefined', 0, 0, 'undefined');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
