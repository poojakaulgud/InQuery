import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import * as d3 from "d3";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { color } from "d3";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const IndiaMap = () => {

  var [dataval2016, setDataval2016] = useState([]);
  var [dataval2017, setDataval2017] = useState([]);
  var [dataval2018, setDataval2018] = useState([]);
  var [dataval2019, setDataval2019] = useState([]);
  var [dataval2020, setDataval2020] = useState([]);
  var [selectedYearForMap, setSelectedYearForMap] = useState(2016);
  const [tooltipContent, setTooltipContent] = useState("");
  const [data, setData] = useState([]);

  const getHeatMapData = (dataval) => {
    return [
      { id: "AP", state: "Andhra Pradesh", value: dataval[0] },
      { id: "AR", state: "Arunachal Pradesh", value: dataval[1] },
      { id: "AS", state: "Assam", value: dataval[2] },
      { id: "BR", state: "Bihar", value: dataval[3] },
      { id: "CT", state: "Chhattisgarh", value: dataval[4] },
      { id: "GA", state: "Goa", value: dataval[5] },
      { id: "GJ", state: "Gujarat", value: dataval[6] },
      { id: "HR", state: "Haryana", value: dataval[7] },
      { id: "HP", state: "Himachal Pradesh", value: dataval[8] },
      { id: "JK", state: "Jammu and Kashmir", value: dataval[9] },
      { id: "JH", state: "Jharkhand", value: dataval[10] },
      { id: "KA", state: "Karnataka", value: dataval[11] },
      { id: "KL", state: "Kerala", value: dataval[12] },
      { id: "MP", state: "Madhya Pradesh", value: dataval[13] },
      { id: "MH", state: "Maharashtra", value: dataval[14] },
      { id: "MN", state: "Manipur", value: dataval[15] },
      { id: "ML", state: "Meghalaya", value: dataval[16] },
      { id: "MZ", state: "Mizoram", value: dataval[17] },
      { id: "NL", state: "Nagaland", value: dataval[18] },
      { id: "OD", state: "Odisha", value: dataval[19] },
      { id: "PB", state: "Punjab", value: dataval[20] },
      { id: "RJ", state: "Rajasthan", value: dataval[21] },
      { id: "SK", state: "Sikkim", value: dataval[22] },
      { id: "TN", state: "Tamil Nadu", value: dataval[23] },
      { id: "TS", state: "Telangana", value: dataval[24] },
      { id: "TR", state: "Tripura", value: dataval[25] },
      { id: "UK", state: "Uttarakhand", value: dataval[26] },
      { id: "UP", state: "Uttar Pradesh", value: dataval[27] },
      { id: "WB", state: "West Bengal", value: dataval[28] },
      { id: "AN", state: "Andaman and Nicobar Islands", value: dataval[29] },
      { id: "CH", state: "Chandigarh", value: dataval[30] },
      { id: "DN", state: "Dadra and Nagar Haveli", value: dataval[31] },
      { id: "DD", state: "Daman and Diu", value: dataval[32] },
      { id: "DL", state: "Delhi", value: dataval[33] },
      { id: "LD", state: "Lakshadweep", value: dataval[34] },
      { id: "PY", state: "Puducherry", value: dataval[35] },
    ];
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {tooltipContent}
    </Tooltip>
  );

  useEffect(() => {
    console.log("Map use effect ran");
    async function fetchData() {
      await getCsvData();
      setData(getHeatMapData(staterateipc2016));
    }
    fetchData();
  }, []);
  var staterateipc2016 = [];
  var staterateipc2017 = [];
  var staterateipc2018 = [];
  var staterateipc2019 = [];
  var staterateipc2020 = [];
  var state2016 = [];
  var state2017 = [];
  var state2018 = [];
  var state2019 = [];
  var state2020 = [];
  const INDIA_TOPO_JSON = require("../assets/india.topo.json");
  const PROJECTION_CONFIG = {
    scale: 350,
    center: [78.9629, 22.5937],
  };
  const getCsvData = async () => {
    var state = "http://localhost:3000/StateCrime.csv";
    await d3.csv(state).then(function (statedata) {
      for (var i = 0; i < statedata.length; i++) {
        if (statedata[i].Crimetype == "IPC Crime") {
          if (statedata[i].Year == "2016") {
            staterateipc2016.push(statedata[i].Count);
            state2016.push(statedata[i].State);
          }
          if (statedata[i].Year == "2017") {
            staterateipc2017.push(statedata[i].Count);
            state2017.push(statedata[i].State);
          } else if (statedata[i].Year == "2018") {
            staterateipc2018.push(statedata[i].Count);
            state2018.push(statedata[i].State);
          } else if (statedata[i].Year == "2019") {
            staterateipc2019.push(statedata[i].Count);
            state2019.push(statedata[i].State);
          } else if (statedata[i].Year == "2020") {
            staterateipc2020.push(statedata[i].Count);
            state2020.push(statedata[i].State);
          }
        }
      }
      setDataval2016(staterateipc2016);
      setDataval2017(staterateipc2017);
      setDataval2018(staterateipc2018);
      setDataval2019(staterateipc2019);
      setDataval2020(staterateipc2020);
    });
  };
  const COLOR_RANGE = [
    "#ffedea",
    "#ffcec5",
    "#ffad9f",
    "#ff8a75",
    "#ff5533",
    "#e2492d",
    "#be3d26",
    "#9a311f",
    "#782618",
  ];
  const DEFAULT_COLOR = "#EEE";
  const geographyStyle = {
    default: {
      outline: "none",
    },
    hover: {
      fill: "#ccc",
      transition: "all 250ms",
      outline: "none",
      color: "#FFFFFF",
    },
    pressed: {
      outline: "none",
    },
  };
  
  
  const colorScale = scaleQuantile()
    .domain(data.map((d) => d.value))
    .range(COLOR_RANGE);

  const onMouseEnter = (geo, current = { value: "NA" }) => {
    return () => {
      setTooltipContent(`${geo.properties.name}: ${current.value}`);
    };
  };
  const handleClick2016 = () => {
    setData(getHeatMapData(dataval2016));
    setSelectedYearForMap(2016);
  };
  const handleClick2017 = () => {
    setData(getHeatMapData(dataval2017));
    setSelectedYearForMap(2017);
  };
  const handleClick2018 = () => {
    setData(getHeatMapData(dataval2018));
    setSelectedYearForMap(2018);
  };
  const handleClick2019 = () => {
    setData(getHeatMapData(dataval2019));
    setSelectedYearForMap(2019);
  };
  const handleClick2020 = () => {
    setData(getHeatMapData(dataval2020));
    setSelectedYearForMap(2020);
  };
  const onMouseLeave = () => {
    setTooltipContent("");
  };
  return (
    <div>
      <Container>
        <Row>
        <OverlayTrigger placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}>
          <ComposableMap
            projectionConfig={PROJECTION_CONFIG}
            projection="geoMercator"
            width={290}
            height={190}
            data-tip=""
          >
            <Geographies geography={INDIA_TOPO_JSON}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  //console.log(geo.id);
                  const current = data.find((s) => s.id === geo.id);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                      style={geographyStyle}
                      onMouseEnter={onMouseEnter(geo, current)}
                      onMouseLeave={onMouseLeave}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        </OverlayTrigger>
          
        </Row>

        <Row className="text-center p-4">
          <Col>
            <ButtonGroup aria-label="Basic example">
              <Button
                variant="dark"
                onClick={handleClick2016}
                active={selectedYearForMap === 2016}
              >
                2016
              </Button>
              <Button
                variant="dark"
                onClick={handleClick2017}
                active={selectedYearForMap === 2017}
              >
                2017
              </Button>
              <Button
                variant="dark"
                onClick={handleClick2018}
                active={selectedYearForMap === 2018}
              >
                2018
              </Button>
              <Button
                variant="dark"
                onClick={handleClick2019}
                active={selectedYearForMap === 2019}
              >
                2019
              </Button>
              <Button
                variant="dark"
                onClick={handleClick2020}
                active={selectedYearForMap === 2020}
              >
                2020
              </Button>
            </ButtonGroup>
          </Col>
          {/* <Col><button type="button" class="btn btn-outline-light" onClick={handleClick2016}>2016</button></Col>
          <Col><button type="button" class="btn btn-outline-light" onClick={handleClick2017}>2017</button></Col>
          <Col><button type="button" class="btn btn-outline-light" onClick={handleClick2018}>2018</button></Col>
          <Col><button type="button" class="btn btn-outline-light" onClick={handleClick2019}>2019</button></Col>
          <Col><button type="button" class="btn btn-outline-light" onClick={handleClick2020}>2020</button></Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default IndiaMap;
