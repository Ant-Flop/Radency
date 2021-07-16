import './App.css';
import React from "react";
import Table from "./components/Table/Table";
import CreateButton from "./components/CreateButton/CreateButton";


function App(props) {
    return (
        <div className={"app-wrapper"}>
                <Table thead={props.state.headTable} tbody={props.state.stateActiveTable} dispatch={props.dispatch}/>
                <CreateButton tbody={props.state.stateActiveTable} dispatch={props.dispatch}/>
            <Table thead={props.state.headSummaryTable} tbody={props.state.stateSummaryTable}/>
            <Table thead={props.state.headTable} tbody={props.state.stateArchiveTable} activeTable={props.state.stateActiveTable} dispatch={props.dispatch}/>
        </div>
    );
}

export default App;
