

--
-- Table structure for table "stands"
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


