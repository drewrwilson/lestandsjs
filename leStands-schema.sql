

--
-- Table structure for table "stands"
--

CREATE TABLE IF NOT EXISTS "stands" (
  "id" serial NOT NULL,
  "name" varchar NOT NULL,
  "description" text DEFAULT NULL,
  "geo_lat" real DEFAULT NULL,
  "geo_long" real DEFAULT NULL,
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
  "stand_id" int NOT NULL,
  "date" timestamp NOT NULL DEFAULT now(),
  "amount_when_checked" int NOT NULL,
  "amount_added" int NOT NULL,
  "comments" text,
  PRIMARY KEY ("id")
);

