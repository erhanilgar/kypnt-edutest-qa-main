package com.edutest.pages.api.testCenter;

import com.edutest.pages.api.iamService.authController.Tokens;
import com.github.javafaker.Faker;
import static io.restassured.RestAssured.*;
import io.restassured.http.ContentType;



import java.util.*;

public class Bodies {

     static List<Integer> examTypeId=given().contentType(ContentType.JSON).queryParam("availableLanguage","EN")
                                    .queryParam("language","EN")
                                    .queryParam("pageSize",1000000000)
                                    .header("Authorization","Bearer "+Tokens.superAdminToken()).
                            when()
                                    .get("http://server.serra.pw:9000/TEST-CENTRE-SERVICE/api/examtypes")
                                    //.get("TEST-CENTRE-SERVICE/api/examtypes")
                                    .jsonPath().getList("data.data.id");

    static List<Integer> subjectId=given().contentType(ContentType.JSON)
            .queryParam("language","EN")
            .queryParam("pageSize",1000000000)
            .header("Authorization","Bearer "+Tokens.superAdminToken()).
                    when()
            .get("http://server.serra.pw:9000/TEST-CENTRE-SERVICE/api/subjects")
            //.get("TEST-CENTRE-SERVICE/api/subjects")
            .jsonPath().getList("data.data.id");




    public static Map<String, Object> topicBody(){

        String[] months={"JANUARY","FEBRUARY","MARCH","APRIL","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"};
        int size=months.length;
        Random random = new Random();
        String month= months[random.nextInt(size)];


        String[] levels= {"C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11","C12"};
        Random random1= new Random();
        int levelSize =levels.length;
        String gradeLevel=levels[random1.nextInt(levelSize)];



        Map<String, Object> relations= new HashMap<>();

        relations.put("examTypeId",examTypeId.get(new Random().nextInt(examTypeId.size()-1)));
        relations.put("gradeLevel",gradeLevel);
        relations.put("month",month);

        List<Map<String, Object>> rel= new ArrayList<>();
        rel.add(relations);

        Map<String, Object> topicBody= new HashMap<>();
        topicBody.put("relations",rel);
        topicBody.put("subjectId",subjectId.get(new Random().nextInt(subjectId.size()-1)));
        topicBody.put("titleEn","English");
        topicBody.put("titleRu","Russian");
        topicBody.put("titleKz","Kazak");

        System.out.println("Subjet id: "+subjectId.toString());
        System.out.println("Subject size: "+subjectId.size());
        System.out.println("ExamType id Size: "+examTypeId.size());

        return topicBody;



    }



    public static Map<String, Object> examTypeBody(){
        Map<String, Object> examType= new HashMap<>();
        Random random= new Random();
        String[] languagesArray= {"EN","KZ","RU"};
        int size = random.nextInt(languagesArray.length)+1;
        System.out.println("Size:" +size);

        List<String> language=new ArrayList<>();
        examType.put("laguages",language);

        if(size==1){

            System.out.println("Deneme");
            Random random1= new Random();
            language.add(languagesArray[random1.nextInt(languagesArray.length)]);


        }else if(size==2){
            for (int i = 0; i <2 ; i++) {
                Random random1= new Random();
                language.add(languagesArray[random1.nextInt(languagesArray.length)]);
            }
        }else if(size==3){

            for (int i = 0; i <3 ; i++) {
                Random random1= new Random();
                language.add(languagesArray[random1.nextInt(languagesArray.length)]);
            }

            System.out.println("Language Three"+ language.toString());
        }



        examType.put("titleEn", new Faker().book().title());
        examType.put("titleKz",new Faker().book().title());
        examType.put("titleRu",new Faker().book().title());
        examType.put("totalScore",Integer.parseInt(new Faker().number().digits(2))+1);

    return examType;
    }



    public static Map<String, Object> subjectBodyWithParentId(int parentId){

        Map<String, Object> subject= new HashMap<>();
        Faker faker= new Faker();

        subject.put("parentId",parentId);
        subject.put("titleEn",faker.book().title());
        subject.put("titleKz",faker.educator().course());
        subject.put("titleRu",faker.book().title());



        return subject;
    }

    public static Map<String, Object> subjectBody(){
        Map<String,Object> subject= new HashMap<>();
        Faker faker= new Faker();
        subject.put("titleEn",faker.animal().name());
        subject.put("titleKz",faker.educator().course());
        subject.put("titleRu",faker.book().title());



        return  subject;
    }

    public static Map<String, Object> roundBody(){

        Random random= new Random();
        Faker faker = new Faker();
        Map<String, Object> round= new HashMap<>();
        String[] variantTypes={"SAME","SHUFFLE","RANDOM"};
        int size= variantTypes.length;
         String variantType=variantTypes[random.nextInt(size)];

//        List<Integer> examTypeId= given().contentType(ContentType.JSON)
//                                         .queryParam("availableLanguages","EN")
//                                         .queryParam("language","EN")
//                                         .header("Authorization","Bearer "+Tokens.superAdminToken()).
//                                  when().get("http://server.serra.pw:9000/TEST-CENTRE-SERVICE/api/examtypes")
//                                  //when().get("TEST-CENTRE-SERVICE/api/examtypes")
//                                        .jsonPath().getList("data.data.id");

        System.out.println("Exam type id Size"+ examTypeId.size());
        System.out.println("Exam Type Id: "+ examTypeId.toString());
        round.put("duration",faker.number().digits(3));
        round.put("examTypeId",examTypeId.get(new Random().nextInt(examTypeId.size()-1)));
        round.put("name",faker.name().firstName());
        round.put("numberOfQuestions",Integer.parseInt(faker.number().digits(2)));
        round.put("numberOfVariants",Integer.parseInt(faker.number().digits(2)));
        round.put("orderNumber",Integer.parseInt(faker.number().digits(1)));
        round.put("totalScore",Integer.parseInt(faker.number().digits(3)));
        round.put("variantType",variantType);


        return round;
    }


//    public static Map<String, Object> roundSubjectBody(){
//        String[] levels= {"C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11","C12"};
//        Random random1= new Random();
//        int levelSize =levels.length;
//        String gradeLevel=levels[random1.nextInt(levelSize)];
//
//        Map<String,Object> round= new HashMap<>();
//        List<Integer> examTypeId=given().contentType(ContentType.JSON).
//        List<Integer> roundId= given()
//                                      .contentType(ContentType.JSON).queryParam("examTypeId",)
//        Response response= given().contentType(ContentType.JSON).header("Authorization","Bearer "+ Tokens.superAdminToken()).
//                when()
//                        //.get("TEST-CENTRE-SERVICE/api/subjects?language=EN");
//                        .get("TEST-CENTRE-SERVICE/api/subjects?language=EN");
//
//
//        List<Integer> dependentSubjectid= response.jsonPath().getList("data.data.id");
//        Random random = new Random();
//        int size= dependentSubjectid.size();
//        int id = dependentSubjectid.get(random.nextInt(size));
//
//        return round;
//    }







    public static void main(String[] args) {
        System.out.println(topicBody().toString());


    }

}
