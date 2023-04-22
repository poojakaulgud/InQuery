import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../css/Home.css';
import React, { useState, useEffect } from "react";
import Navbar from './Navbar';
import axios from 'axios';

const Home = () => {
    const [prompt, setPrompt] = useState("");    
    const [isLoading, setIsLoading] = useState(false);

    async function getAnswer(prompt) {
        console.log(prompt);
        
        setIsLoading(true);
    
        await axios.get('http://localhost:5000/question/context?prompt=' + prompt).then((res) => {
                        console.log('res', res);
                      console.log('res.data.answer',res.data.answer);
                      console.log('res.data.link',res.data.link);
                      console.log('res.data.title',res.data.title);

                      var answer = document.getElementById("contextAnswer");
                      var link = document.getElementById("link");
                      var title = document.getElementById("title");
                      
                      answer.innerHTML = res.data.answer;
                      link.href = res.data.link;
                      link.innerHTML = 'Read More @ '+ res.data.title;
                
                      if (answer.style.display === "none") {
                        answer.style.display = "block";
                      }

                      if (link.style.display === "none") {
                        link.style.display = "block";
                      }

                      setIsLoading(false);

        }).catch((error) => {
            setIsLoading(false);
            var answer = document.getElementById("contextAnswer");
            var link = document.getElementById("link");
            answer.innerHTML = "Related article not available in dataset.";
            link.style.display = "none"
          })
    };

    return (
        <div className="home" >
            <Navbar />
            <div className="container d-flex flex-column justify-content-center align-items-center" style={{height: "89.2vh"}}>
                <div className="container-fuild text-center mb-2 text-light">
                    <h2>"Everything About Crime in India"</h2>
                </div>
                <div className="container-fluid d-flex justify-content-center align-items-center" >
                    <div class="p-2 bg-light rounded rounded-pill shadow-sm mb-4 w-50 ">
                        <div className="input-group bg-light">
                        <input type="search" placeholder="Type your question here ..." 
                        aria-describedby="button-addon1" className="form-control border-0 bg-light "
                        value={prompt}
                        onChange={e => setPrompt(e.target.value)} 
                        />
                        <div class="input-group-append">
                            <button id="button-addon1" type="submit" class="btn btn-link text-danger"><i onClick={() => getAnswer(prompt)} class="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            {isLoading && <h6>Searching...</h6>}
                <h6 id="contextAnswer" style={{display: "none"}}></h6>
                <a id="link" style={{display: "none"}}></a>
            </div>
        </div>
    );
}
 
export default Home;