--CREATE database Sentinel;

insert into "Country" values (nextval('SeqCountry'), 'Perú');
select * from "Country";

insert into "Region" values (nextval('SeqRegion'), 'Arequipa', 1);
select * from "Region";

insert into "District" values (nextval('SeqDistrict'), 'Mariano Melgar', -16.401491288556258, -71.50026445533767, 0.0, 1);
select * from "District";

insert into "Coordinate" values (nextval('SeqCoordinate'), -16.40318288121594, -71.51646078713098);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.410592036741523, -71.51334154204291);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.41081290564472, -71.51305042438638);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.41084106267175, -71.50931256936761);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.410785475543126, -71.50802034615475);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.410850392437396, -71.50745342998596);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.410869471811544, -71.50703251103162);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.410843711243828, -71.50684314304178);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.40824032573742, -71.50175958456073);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.407807676934883, -71.50146190897175);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.40771826738598, -71.50120823058334);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.40726042959932, -71.4982297500609);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.40694551510665, -71.4975371968415);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.406338384188878, -71.49499665841383);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.404779800655408, -71.49115626412642);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.4049215925571, -71.48995845770699);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.404711405939132, -71.48931314906432);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.40504173040284, -71.48751343606303);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.40431875732288, -71.4844588487688);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.403374489912064, -71.48289035235643);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.40266986462774, -71.48246127786364);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.402179977340346, -71.4803480477439);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.402613288166396, -71.47898763269964);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.401990233473644, -71.4769868636537);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.400271642897426, -71.47900563097404);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.39350057571047, -71.47917551733491);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.389608570886324, -71.48398555597099);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.38491566599499, -71.49488572052907);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.390671241073175, -71.50308670809133);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.39092007985988, -71.50379265894847);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.394755836221766, -71.50791822417796);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.395870398041918, -71.50964410132288);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.39800634690852, -71.51089824433814);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.401264538983334, -71.51357312525528);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.403184035181457, -71.51646078713098);
select * from "Coordinate";

insert into "DistrictCoordinate" values (1, 1);
insert into "DistrictCoordinate" values (1, 2);
insert into "DistrictCoordinate" values (1, 3);
insert into "DistrictCoordinate" values (1, 4);
insert into "DistrictCoordinate" values (1, 5);
insert into "DistrictCoordinate" values (1, 6);
insert into "DistrictCoordinate" values (1, 7);
insert into "DistrictCoordinate" values (1, 8);
insert into "DistrictCoordinate" values (1, 9);
insert into "DistrictCoordinate" values (1, 10);
insert into "DistrictCoordinate" values (1, 11);
insert into "DistrictCoordinate" values (1, 12);
insert into "DistrictCoordinate" values (1, 13);
insert into "DistrictCoordinate" values (1, 14);
insert into "DistrictCoordinate" values (1, 15);
insert into "DistrictCoordinate" values (1, 16);
insert into "DistrictCoordinate" values (1, 17);
insert into "DistrictCoordinate" values (1, 18);
insert into "DistrictCoordinate" values (1, 19);
insert into "DistrictCoordinate" values (1, 20);
insert into "DistrictCoordinate" values (1, 21);
insert into "DistrictCoordinate" values (1, 22);
insert into "DistrictCoordinate" values (1, 23);
insert into "DistrictCoordinate" values (1, 24);
insert into "DistrictCoordinate" values (1, 25);
insert into "DistrictCoordinate" values (1, 26);
insert into "DistrictCoordinate" values (1, 27);
insert into "DistrictCoordinate" values (1, 28);
insert into "DistrictCoordinate" values (1, 29);
insert into "DistrictCoordinate" values (1, 30);
insert into "DistrictCoordinate" values (1, 31);
insert into "DistrictCoordinate" values (1, 32);
insert into "DistrictCoordinate" values (1, 33);
insert into "DistrictCoordinate" values (1, 34);
insert into "DistrictCoordinate" values (1, 35);
select * from "DistrictCoordinate";

insert into "DangerArea" values (nextval('SeqDangerArea'), 100, -16.399214583999957, -71.50476168354827);
select * from "DangerArea";

--------------------------------

insert into "DangerArea" values (nextval('SeqDangerArea'), 150, -16.396650372072514, -71.50816061572375);
insert into "DangerArea" values (nextval('SeqDangerArea'), 100, -16.408660388110356, -71.50743358484424);
insert into "DangerArea" values (nextval('SeqDangerArea'), 200, -16.399971998749955, -71.49661907032058);

--------------------------------
--------------------------------
--------------------------------
-------------------------------
--------------------------------


insert into "District" values (nextval('SeqDistrict'), 'Tiabaya', -16.43596743548179, -71.60504253012535, 0.0, 1);
insert into "District" values (nextval('SeqDistrict'), 'Sachaca', -16.4157558, -71.581849945651, 0.0, 1);
insert into "District" values (nextval('SeqDistrict'), 'Jacobo Hunter', -16.44942436585364, -71.55286406075327, 0.0, 1);
insert into "District" values (nextval('SeqDistrict'), 'Arequipa', -16.40904724373889, -71.5374492485844, 0.0, 1);
select * from "District";

insert into "Coordinate" values (nextval('SeqCoordinate'), -16.477777336020456, -71.56352669968426);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.45559602752613, -71.59712863768353);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.431414341873168, -71.56468055948247);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.449883308728673, -71.53973999709241);

--insert into "Coordinate" values (nextval('SeqCoordinate'), -16.45559602752613, -71.59712863768353);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.443505184695, -71.58090459858);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.424261404310265, -71.60043335117714);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.44321309840359, -71.61646033969612);

--insert into "Coordinate" values (nextval('SeqCoordinate'), -16.431414341873168, -71.56468055948247);
--insert into "Coordinate" values (nextval('SeqCoordinate'), -16.443505184695, -71.58090459858);
--insert into "Coordinate" values (nextval('SeqCoordinate'), -16.424261404310265, -71.60043335117714);
insert into "Coordinate" values (nextval('SeqCoordinate'), -16.406812640685935, -71.59733986425178);
select * from "Coordinate";


insert into "DistrictCoordinate" values (4, 36);
insert into "DistrictCoordinate" values (4, 37);
insert into "DistrictCoordinate" values (4, 38);
insert into "DistrictCoordinate" values (4, 39);

insert into "DistrictCoordinate" values (2, 37);
insert into "DistrictCoordinate" values (2, 40);
insert into "DistrictCoordinate" values (2, 41);
insert into "DistrictCoordinate" values (2, 42);

insert into "DistrictCoordinate" values (3, 38);
insert into "DistrictCoordinate" values (3, 40);
insert into "DistrictCoordinate" values (3, 41);
insert into "DistrictCoordinate" values (3, 43);

select * from "DistrictCoordinate";


insert into "DistrictFrontier" values (4, 2);
insert into "DistrictFrontier" values (4, 3);
insert into "DistrictFrontier" values (4, 5);


--------------------------------------------------------------
--------------------------------------------------------------
--------------------------------------------------------------
select * from "District";
select * from "DistrictCoordinate";
select * from "DistrictFrontier";


CREATE OR REPLACE FUNCTION GetDistricstFrontier(
    in out d_id "District".id%type,
    out d_name "District".name%type,
    out d_rating "District".rating%type
)
returns setof record as 
$$
	declare
        cur cursor (d_id "District".id%type) for (
            select d.id, d.name, d.rating
            from "District" d
            join "DistrictFrontier" df on df.DistrictFrontierId = d.id
            where df.districtid = d_id
        );
        rec record;
    begin
        open cur(d_id);
        loop
            fetch cur into rec;
            exit when not found;

            d_id := rec.id;
            d_name := rec.name;
            d_rating := rec.rating;

            return next;
        end loop;
        close cur;
        return;
    exception
        when others then
            raise notice 'ERROR: %', SQLERRM;
            return;
    end 
$$ 
language 'plpgsql';


select * from GetDistricstFrontier(4);

  