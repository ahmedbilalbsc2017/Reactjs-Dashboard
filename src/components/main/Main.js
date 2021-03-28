import "./Main.css";
import hello from "../../assets/park-logo.png";
import Chart from "../charts/Charts";

const Main = () => {
    return(
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={hello} alt="hello"/>
                    <div className="main__greeting">
                        <h1>Hello Park Team Member</h1>
                        <p>Welcome to your admin dashboard</p>
                    </div>
                </div>
                
                {/* Cards */}
                <div className="main__cards">

                    <div className="card">
                        <i className="fa fa-user fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number Of Employees</p>
                            <span className="font-bold text-title">10</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-ticket fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Daily Sold Tickets</p>
                            <span className="font-bold text-title">10</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-usd fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Daily Expanses</p>
                            <span className="font-bold text-title">100</span>
                        </div>
                    </div>

                </div>

                {/* Charts */}
                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Nowshera Virkan, Gujranwala</p>
                            </div>
                            <i className="fa fa-usd" ></i>
                        </div>
                        <Chart />
                    </div>

                    <div className="charts__right">
                        {/* <div className="charts__right__title">
                            <div>
                                <h1>Stats Reports</h1>
                                <p>Park's</p>
                            </div>
                            <i className="fa fa-use" ></i>
                        </div> */}

                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Income</h1>
                                <p>2500 Pkr</p>
                            </div>
                            
                            <div className="card2">
                                <h1>Sale</h1>
                                <p>2500 Pkr</p>
                            </div>
                            <div className="card3">
                                <h1>Users</h1>
                                <p>5</p>
                            </div>
                            <div className="card4">
                                <h1>Expanses</h1>
                                <p>2500 Pkr</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;