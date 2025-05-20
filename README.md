# Microservice A

A. Requests

  - send json request using GET or POST for accessing all of the data, adding or reseting it
  - Example call:
      request: POST http://localhost:8000/scores
     {
      userId: Bob,
      points: 5
    }
      response: User Bob scored 5 points. Total Score: 5

    request: POST http://localhost:8000/reset
    response: "All scores have been successfully reset"


B. Recieving 

  - express route will match and pick the right handler i.e. (POST /scores, GET /scores, POST /reset)

  - Example call;
      request: GET http://localhost:8000/scores?userId=Bob
      response: User Bob has a total score of 5 points



C. UML Diagram
![image](https://github.com/user-attachments/assets/8086acf3-c934-4814-b047-1f0d4de3ea5c)
