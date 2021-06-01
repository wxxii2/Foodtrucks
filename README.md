# project-t15-H1gogogo

1. [URL for live website]

2. Descriptions of working requests:
    
3. Database Access:</br>
    CONNECTION_STRING = "mongodb+srv://toricas:wang796005@cluster0.o9rvr.mongodb.net/customer?retryWrites=true&w=majority"</br>
    MONGO_USERNAME=toricas</br>
    MONGO_PASSWORD=wang796005</br>

4. Login Details:</br>
    - Costomer login:</br>
        username: asd</br>
        password: asd123456</br>

        username: 111</br>
        password: qwer123456</br>

    - Vendor login:</br>
        Vendorid: DylanBob</br>
        password: 123</br>

        Vendorid: six seeds</br>
        password: 123</br>

        Vendorid: Tasty Trailer</br>
        password: 123</br>

        Vendorid: Sushi</br>
        password: 123</br>

        Vendorid: Cafe Ark</br>
        password: 123</br>

5. other notes
    - food collection
        there are 8 snacks with their "_id", "foodid", "foodprice", "food_detail" and "foodpicture"
    - order collection
        there are 5 orders already in the collection for check with "_id", 8 snacks name, "status" and "orderid"(there is also "__v" cause there are some orders added by postman)
    - vendor collection
        there are 5 vendors already in the collection for check with "_id", "Vendorid", "Location" and "Status".(there is also "__v")
    - timezone
        noticed that the order created in local and heroku maybe different (only createdAt) due to the different timezone
    - wrong user name/password
        if customers input nonexistent username/wrong password, they will be redirected to the welcome page. 
