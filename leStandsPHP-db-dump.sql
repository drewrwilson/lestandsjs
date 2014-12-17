-- phpMyAdmin SQL Dump
-- version 3.3.10.4
-- http://www.phpmyadmin.net
--
-- Host: mysql.lestands.com
-- Generation Time: Dec 16, 2014 at 11:42 PM
-- Server version: 5.1.56
-- PHP Version: 5.3.27

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `lestandstest`
--

-- --------------------------------------------------------

--
-- Table structure for table `deployedStands`
--

CREATE TABLE IF NOT EXISTS `deployedStands` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `physicalStandID` int(11) DEFAULT NULL,
  `deployedByUserID` int(11) DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `description` text CHARACTER SET utf8 NOT NULL,
  `dateDeployed` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `dateRetired` datetime DEFAULT NULL,
  `retiredByUserID` int(11) DEFAULT NULL,
  `geoLat` float(10,6) DEFAULT NULL,
  `geoLong` float(10,6) DEFAULT NULL,
  `address1` varchar(255) DEFAULT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `zip` varchar(255) DEFAULT NULL,
  `active` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=34 ;

--
-- Dumping data for table `deployedStands`
--

INSERT INTO `deployedStands` (`id`, `physicalStandID`, `deployedByUserID`, `name`, `description`, `dateDeployed`, `dateRetired`, `retiredByUserID`, `geoLat`, `geoLong`, `address1`, `address2`, `city`, `state`, `zip`, `active`) VALUES
(33, 11, 20, 'University Ave. & Marshall St.', 'Amber''s stand near SU', '2013-08-20 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `updates`
--

CREATE TABLE IF NOT EXISTS `updates` (
  `updateID` int(10) NOT NULL AUTO_INCREMENT,
  `deployedStandID` int(10) NOT NULL,
  `userID` int(10) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `description` text CHARACTER SET utf8 NOT NULL,
  `amtchecked` int(10) NOT NULL,
  `amtadded` int(10) NOT NULL,
  `comments` text,
  PRIMARY KEY (`updateID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=116 ;

--
-- Dumping data for table `updates`
--

INSERT INTO `updates` (`updateID`, `deployedStandID`, `userID`, `date`, `description`, `amtchecked`, `amtadded`, `comments`) VALUES
(110, 33, 20, '2014-11-21 00:00:00', '', 100, 200, NULL),
(111, 33, 20, '2014-11-24 00:00:00', '', 50, 200, NULL),
(100, 33, 20, '2013-11-22 00:00:00', '', 26, 50, NULL),
(101, 33, 20, '2014-01-23 00:00:00', '', 27, 75, NULL),
(102, 33, 20, '2013-12-16 00:00:00', '', 10, 50, NULL),
(92, 33, 20, '2013-10-10 00:00:00', 'PETA VSK', 127, 25, NULL),
(91, 33, 20, '2013-09-29 00:00:00', 'PETA VSK', 6, 125, NULL),
(90, 33, 20, '2013-09-13 00:00:00', 'HSUS''s new VSK', 0, 50, NULL),
(89, 33, 20, '2013-08-27 00:00:00', '', 31, 50, NULL),
(88, 33, 20, '2013-08-20 00:00:00', '', 0, 50, NULL);
