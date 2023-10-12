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
	Name varchar(30) NOT null,
	IdCountry int not null references "Country"
);

CREATE TABLE "District" (
	Id int NOT NULL PRIMARY KEY,
	Name varchar(30) NOT NULL,
	Latitude numeric(25,20) not null,
	Longitude numeric(25,20) not null,
	Rating numeric(3, 2) NOT null,
	IdRegion int not null references "Region"
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
	Longitude numeric(25,20) not null,
	IdDistrict int not null references "District"
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

CREATE TABLE "DistrictStreet" (
	DistrictId int NOT NULL REFERENCES "District",
	StreetId int NOT NULL REFERENCES "Street",
	PRIMARY KEY (DistrictId, StreetId)
);

CREATE TABLE "DangerArea" (
	Id int NOT NULL PRIMARY KEY,
	Radius int NOT NULL,
	Latitude numeric(25,20) not null,
	Longitude numeric(25,20) not null
);

CREATE TABLE "DistrictDangerArea" (
	DistrictId int NOT NULL REFERENCES "District",
	DangerAreaId int NOT NULL REFERENCES "DangerArea",
	PRIMARY KEY (DistrictId, DangerAreaId)
);

CREATE TABLE "Incident" (
	Id int NOT NULL PRIMARY KEY,
	"description" text,
	Latitude numeric(25,20) not null,
	Longitude numeric(25,20) not null,
	"date" date not null
);

CREATE TABLE "DistrictIncident" (
	DistrictId int NOT NULL REFERENCES "District",
	IncidentId int NOT NULL REFERENCES "Incident",
	PRIMARY KEY (DistrictId, IncidentId)
);

CREATE TABLE "Criminal" (
	Id int NOT NULL PRIMARY KEY,
	"description" text not null,
	"name" varchar(50) NOT NULL,
	"photo" text not null
);

CREATE TABLE "IncidentCriminal" (
	IncidentId int NOT NULL REFERENCES "Incident",
	CriminalId int NOT NULL REFERENCES "Criminal",
	PRIMARY KEY (IncidentId, CriminalId)
);

CREATE TABLE "Comment" (
	Id int NOT NULL PRIMARY KEY,
	"content" text not null,
	"date" date not null,
	UserId int not null references "User"
);

CREATE TABLE "DistrictComment" (
	DistrictId int NOT NULL REFERENCES "District",
	CommentId int NOT NULL REFERENCES "Comment",
	PRIMARY KEY (DistrictId, CommentId)
);

CREATE TABLE "DangerAreaComment" (
	DangerAreaId int NOT NULL REFERENCES "DangerArea",
	CommentId int NOT NULL REFERENCES "Comment",
	PRIMARY KEY (DangerAreaId, CommentId)
);