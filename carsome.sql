-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 06, 2020 at 08:57 AM
-- Server version: 5.7.29-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `carsome`
--

-- --------------------------------------------------------

--
-- Table structure for table `inspection`
--

CREATE TABLE `inspection` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `inspection`
--

INSERT INTO `inspection` (`id`, `date`, `time`) VALUES
(1, '2020-05-18', '9.30 AM'),
(2, '1995-12-15', '9.00 AM'),
(7, '2020-05-16', '4.30 PM'),
(8, '2020-05-16', '4.30 PM'),
(9, '2020-05-16', '4.30 PM'),
(10, '2020-05-16', '4.30 PM'),
(19, '2020-05-16', '5.30 PM'),
(20, '2020-05-16', '5.30 PM'),
(21, '2020-05-16', '5.30 PM'),
(22, '2020-05-16', '5.30 PM'),
(23, '2020-05-16', '5.30 PM'),
(24, '2020-05-16', '5.30 PM'),
(25, '2020-05-16', '5.30 PM'),
(26, '2020-05-16', '5.30 PM'),
(27, '2020-05-16', '5.30 PM'),
(28, '2020-05-16', '5.30 PM'),
(29, '2020-05-16', '5.30 PM'),
(30, '2020-05-16', '5.30 PM'),
(31, '2020-05-16', '5.30 PM'),
(32, '2020-05-16', '5.30 PM'),
(33, '2020-05-16', '5.30 PM'),
(34, '2020-05-16', '5.30 PM'),
(35, '2020-05-16', '5.30 PM'),
(36, '2020-05-16', '5.30 PM'),
(37, '2020-05-18', '3.30 PM'),
(38, '2020-05-18', '3.30 PM'),
(39, '2020-05-18', '3.30 PM'),
(40, '2020-05-18', '3.30 PM'),
(41, '2020-05-18', '3.30 PM'),
(42, '2020-05-18', '3.30 PM'),
(43, '2020-05-18', '3.30 PM'),
(44, '2020-05-18', '3.30 PM'),
(45, '2020-05-18', '3.30 PM'),
(46, '2020-05-18', '3.30 PM'),
(47, '2020-05-18', '3.30 PM'),
(48, '2020-05-18', '3.30 PM'),
(49, '2020-05-22', '3.30 PM'),
(50, '2020-05-22', '3.30 PM'),
(51, '2020-05-22', '4.30 PM');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `inspection`
--
ALTER TABLE `inspection`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `inspection`
--
ALTER TABLE `inspection`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
