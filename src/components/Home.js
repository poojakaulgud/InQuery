import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../css/Home.css';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div className="home" >
            <Navbar />
            <div className="container d-flex flex-column justify-content-center align-items-center" style={{height: "89.2vh"}}>
                <div className="container-fuild text-center mb-2 text-light">
                    <h2>"Everything About Crime in India"</h2>
                </div>
                <div className="container-fluid d-flex justify-content-center align-items-center" >
                    <div class="p-2 bg-light rounded rounded-pill shadow-sm mb-4 w-50 ">
                        <div class="input-group">
                        <input type="search" placeholder="Type your question here ..." aria-describedby="button-addon1" className="form-control border-0 bg-light "/>
                        <div class="input-group-append">
                            <button id="button-addon1" type="submit" class="btn btn-link text-danger"><i class="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
 
export default Home;