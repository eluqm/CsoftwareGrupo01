CREATE TABLE "User" (
	Id int NOT NULL PRIMARY key,
	UserName varchar(50) NOT NULL
);

CREATE TABLE "Coordinate" (
	Id int NOT NULL PRIMARY key,
	Latitude numeric(25,20) not null,
	Longitude numeric(25,20) not null
);

CREATE TABLE "Country" (
	Id int NOT NULL PRIMARY KEY,
	Name varchar(30) NOT NULL
);

CREATE TABLE "Region" (
	Id int NOT NULL PRIMARY KEY,
	Name varchar(30) NOT NULL
);

CREATE TABLE "District" (
	Id int NOT NULL PRIMARY KEY,
	Name varchar(30) NOT NULL,
	Latitude numeric(25,20) not null,
	Longitude numeric(25,20) not null,
	Rating numeric(3, 2) NOT NULL
);

CREATE TABLE "DistrictCoordinate" (
	DistrictId int NOT NULL REFERENCES "District",
	CoordinateId int NOT NULL REFERENCES "Coordinate",
	PRIMARY KEY (DistrictId, CoordinateId)
);

CREATE TABLE "DistrictRating" (
	UserId int NOT NULL REFERENCES "User",
	DistrictId int NOT NULL REFERENCES "District",
	Value numeric(3, 2) NOT NULL,
	PRIMARY KEY (UserId, DistrictId)
);

CREATE TABLE "StationType" (
	Id int NOT NULL PRIMARY KEY,
	Name varchar(20) NOT NULL
);

CREATE TABLE "Station" (
	Id int NOT NULL PRIMARY KEY,
	"type" int NOT NULL REFERENCES "StationType",
	Latitude numeric(25,20) not null,
	Longitude numeric(25,20) not null
);

CREATE TABLE "Street" (
	Id int NOT NULL PRIMARY KEY,
	Name varchar(30) NOT NULL,
	"security" boolean NOT null
);

CREATE TABLE "StreetCoordinate" (
	StreetId int NOT NULL REFERENCES "Street",
	CoordinateId int NOT NULL REFERENCES "Coordinate",
	PRIMARY KEY (StreetId, CoordinateId)
);

CREATE TABLE "DangerArea" (
	Id int NOT NULL PRIMARY KEY,
	Radius int NOT NULL,
	Latitude numeric(25,20) not null,
	Longitude numeric(25,20) not null
);