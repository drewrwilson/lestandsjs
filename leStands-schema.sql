-- If the table already exists, drop it
DROP TABLE IF EXISTS "stands";
DROP TABLE IF EXISTS "updates";
DROP TYPE IF EXISTS "standtype";
--
-- enum type of stand
--

CREATE TYPE standtype AS ENUM ('modular', 'green', 'wire');

--
-- Table structure for table "stands"
--

CREATE TABLE IF NOT EXISTS "stands" (
  "id" serial NOT NULL,
  "name" varchar NOT NULL,
  "description" text DEFAULT NULL,
  "geoLat" real DEFAULT NULL,
  "geoLong" real DEFAULT NULL,
  "address1" varchar DEFAULT NULL,
  "address2" varchar DEFAULT NULL,
  "city" varchar DEFAULT NULL,
  "state" varchar DEFAULT NULL,
  "zip" varchar DEFAULT NULL,
  "type" standtype DEFAULT 'green',
  PRIMARY KEY (id)
);


--
-- Table structure for table "updates"
--

CREATE TABLE IF NOT EXISTS "updates" (
  "id" serial NOT NULL,
  "standID" int NOT NULL,
  "date" timestamp NOT NULL DEFAULT now(),
  "amountWhenChecked" int NOT NULL,
  "amountAdded" int NOT NULL,
  "comments" text,
  PRIMARY KEY ("id")
);
