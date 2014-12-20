--
-- Add some example stands!
--

INSERT INTO stands ("name","geoLat","geoLong","city","state") VALUES
  ('S Tryon & MLK #1','35.22478017491058','-80.84643602371216','Charlotte','NC'),
  ('S Tryon & MLK #2','35.22478893924818','-80.84629654884338','Charlotte','NC'),
  ('Outside Capital Grille','35.228114937026774','-80.84186553955078','Charlotte','NC'),
  ('Outside Qdoba','35.22787830927846','-80.8421927690506','Charlotte','NC'),
  ('Outside Bank of America','35.227242916539964','-80.84293305873871','Charlotte','NC'),
  ('Uptown bus terminal','35.22391250080143','-80.8412379026413','Charlotte','NC'),
  ('Outside BB&T','35.225538286613535','-80.8432012796402','Charlotte','NC'),
  ('Outside parking garage #1','35.22719690514846','-80.84520220756531','Charlotte','NC'),
  ('Outside American Roadside Burgers','35.225218390631575','-80.84841549396515','Charlotte','NC'),
  ('Uptown Starbucks #1','35.22499928306689','-80.84839403629303','Charlotte','NC'),
  ('Uptown Starbucks #2','35.22507377970525','-80.8486944437027','Charlotte','NC'),
  ('Outside parking garage #2','35.22491163987534','-80.84418296813966','Charlotte','NC'),
  ('Near Convention Center','35.22385114975566','-80.84527730941772','Charlotte','NC'),
  ('Outside of Merts','35.227374377514785','-80.84019184112549','Charlotte','NC'),
  ('Near library','35.2279440392778','-80.83978414535522','Charlotte','NC'),
  ('CPCC #2','35.21742217953794','-80.83113133907318','Charlotte','NC'),
  ('CPCC #1','35.217505448256034','-80.83139419555664','Charlotte','NC'),
  ('CPCC #3','35.216146842709286','-80.82972049713136','Charlotte','NC'),
  ('Common Market','35.21877857248747','-80.81195086240768','Charlotte','NC'),
  ('Plaza Bus Stop','35.22031023938521','-80.81246316432953','Charlotte','NC'),
  ('NoDa utility pole','35.247371492628815','-80.80504417419434','Charlotte','NC'),
  ('Outside of Sanctuary','35.247437206832856','-80.80422341823578','Charlotte','NC'),
  ('Lynx East/West Stop','35.21237768892281','-80.85864007472992','Charlotte','NC'),
  ('Lynx Woodlawn Station','35.1760533659996','-80.87942719459534','Charlotte','NC'),
  ('Lynx I-485 Station','35.107226769734005','-80.88330030441284','Charlotte','NC'),
  ('SADU Body Piercing & Modifications','35.220528','-80.812858','Charlotte','NC'),
  ('Okra','35.218525','-80.81278700000001','Charlotte','NC'),
  ('Luna''s Living Kitchen','35.208564529704404','-80.86154222488403','Charlotte','NC'),
  ('Eco-Licious','35.218566021293256','-80.81265360116959','Charlotte','NC'),
  ('Bean Vegan Cuisine','35.204439980020425','-80.7925397157669','Charlotte','NC'),
  ('The Greener Apple','35.22066630944841','-80.81028655171394','Charlotte','NC');


--
-- Initial updates for all stands (each one getting 250 pieces of lit)
--
INSERT INTO updates ("standID", "date", "amountWhenChecked", "amountAdded", "comments")
SELECT id AS "standID", '1-1-2014', 0, 250, '' FROM stands;


--
-- Plus some specific updates
--
INSERT INTO "updates" ("standID", "date", "amountWhenChecked", "amountAdded", "comments") VALUES
  ('1', 'March 15, 2014', '15', '80', 'the sticker is coming off'),
  ('1', 'June 11, 2014', '45', '30', ''),
  ('1', 'April 1, 2008', '0', '50', 'Just started'),
  ('1', 'November 22, 2014', '0', '500', 'nooooooo'),
  ('2', 'June 22, 2014', '0', '400', 'Good start'),
  ('3', 'November 5, 2014', '0', '84', 'Here goes something');
