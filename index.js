const http = require('http');

const port = process.env.PORT || 3000;


app.get('/',function(req, res){
	res.sendfile('index.html');
});

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
