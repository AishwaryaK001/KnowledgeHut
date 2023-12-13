exports.handler = async(event)=> {
    var response= {
        statusCode: 404,
        body: JSON.stringify({
            Error: "No routes",
        }),
    };
    if(event.path =="/api/getProduct"){
    response ={
        statusCode: 200,
        body: JSON.stringify({
            ProductName: "Shoes",
            Price: "2500",
        }),
    };
    }

    if(event.path =="/api/getUser"){
        response ={
            statusCode: 200,
            body: JSON.stringify({
                UserName: "Tom",
                Email: "tom123@gmail.com",
            }),
        };
        }
        return response;
};