package com.edutest.pages.ui;

import static  io.restassured.RestAssured.*;

import io.restassured.http.ContentType;
import io.restassured.response.Response;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Lists {

    static int regionId;
    static int districtId;
    static int schoolId;
    static int index;

    static String schoolEnpoint="http://server.serra.pw:9000/TEST-CENTRE-SERVICE/api/schools";


    public static void hepsi(){
        Response response = given().get(schoolEnpoint);

        List<Integer> regionIds = response.jsonPath().getList("data.regions.id");
        List<String>  regionsName= response.jsonPath().getList("data.regions.name");

        List<Integer> districtIds= response.jsonPath().getList("data.districts.id");
        List<String>  districtNames=response.jsonPath().getList("data.districts.name");
        List<Integer>  districtParentIds= response.jsonPath().getList("data.districts.parentId");

        List<Integer>  schoolIds=response.jsonPath().getList("data.schools.id");
        List<String> schoolNames=response.jsonPath().getList("data.schools.name");
        List<Integer>  schoolParentIds=response.jsonPath().getList("data.schools.parentId");


        int regionIndex= new Random().nextInt(regionIds.size()-1);
        int regionId=regionIds.get(regionIndex);

        String regionName= regionsName.get(regionIndex);

        System.out.println("REgion Id: "+ regionId+" Region Name: "+regionName);


        List<Integer> regionsDistrictids= new ArrayList<>();
        List<String> regionsDistrictNames= new ArrayList<>();

        for (int i = 0; i <districtIds.size() ; i++) {

            if (districtParentIds.get(i)==regionId){
                regionsDistrictids.add(districtIds.get(i));
                regionsDistrictNames.add(districtNames.get(i));
            }

        }

        //System.out.println("RegionsDistrictIds"+ regionsDistrictids.toString());
       // System.out.println("RegionsDistrictNames: "+ regionsDistrictNames);


        int distrinctIndex= new  Random().nextInt(regionsDistrictids.size()-1);

        int districtId= regionsDistrictids.get(distrinctIndex);
        //System.out.println("districtId: "+ districtId);

        String districtName=regionsDistrictNames.get(distrinctIndex);
        System.out.println("District Name: "+districtName);



        List<Integer> districtSchoolIds=new ArrayList<>();
        List<String>  districtSchoolName= new ArrayList<>();
        for (int i = 0; i <schoolIds.size() ; i++) {

            if (schoolParentIds.get(i)==districtId){
                districtSchoolIds.add(schoolIds.get(i));
                districtSchoolName.add(schoolNames.get(i));
            }

        }

        int schoolIndex= new Random().nextInt(districtSchoolIds.size()-1);

        int schoolId=districtSchoolIds.get(schoolIndex);
        String schoolName =districtSchoolName.get(schoolIndex);

        System.out.println("School Name: "+schoolName);
















    }

    public static  int  regionIds(){

        List regionList = new ArrayList();
        Response response = given().contentType(ContentType.JSON).when().get(schoolEnpoint);

        List<Integer> regionsId= response.jsonPath().getList("data.regions.id");
        System.out.println("region IDs: "+ regionsId.toString());

        index=new Random().nextInt(regionsId.size()-1);

        System.out.println("Index: "+index);
        regionId= regionsId.get(index);

        String regionname= response.jsonPath().getString("data.regions["+regionId+"].name");
//        System.out.println("Rgion Name: "+regionname);
//        System.out.println("Region ID: "+regionId);

    return regionId;
    }


    public static String regionName(){

        Response response= given().contentType(ContentType.JSON).when().get(schoolEnpoint);

        String regionName = response.jsonPath().getString("data.regions["+index+"].name");

       // System.out.println("region Id: "+regionDistrictSchoolList());
        return  regionName;

    }

    public static int districtId(){

       List<Integer> id= given().get(schoolEnpoint).jsonPath().getList("");



        return districtId;
    }

    public static void main(String[] args) {
        hepsi();

    }








}
