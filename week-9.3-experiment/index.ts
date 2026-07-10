import express from 'express';

const app = express();

enum ResponseStatus { 
    Success = 200,
    NotFound = 411,
    Error = 500
}

app.get('/', (req, res)=>{
    res.status(ResponseStatus.Success).json({})
})