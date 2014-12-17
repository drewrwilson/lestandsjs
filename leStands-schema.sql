-- phpMyAdmin SQL Dump
-- version 3.3.10.4
-- http://www.phpmyadmin.net
--
-- Host: mysql.lestands.com
-- Generation Time: Dec 16, 2014 at 11:42 PM
-- Server version: 5.1.56
-- PHP Version: 5.3.27

--
-- Database: "lestandstest"
--

-- --------------------------------------------------------

--
-- Table structure for table "deployedStands"
--

CREATE TABLE IF NOT EXISTS "stands" (
  "id" serial NOT NULL,
  "name" varchar NOT NULL,
  "description" text NOT NULL,
  "geoLat" real DEFAULT NULL,
  "geoLong" real DEFAULT NULL,
  "address1" varchar DEFAULT NULL,
  "address2" varchar DEFAULT NULL,
  "city" varchar DEFAULT NULL,
  "state" varchar DEFAULT NULL,
  "zip" varchar DEFAULT NULL,
  PRIMARY KEY (id)
);


--
-- Table structure for table "updates"
--

CREATE TABLE IF NOT EXISTS "updates" (
  "id" serial NOT NULL,
  "standID" int NOT NULL,
  "date" timestamp NOT NULL DEFAULT now(),
  "amtchecked" int NOT NULL,
  "amtadded" int NOT NULL,
  "comments" text,
  PRIMARY KEY ("id")
);


