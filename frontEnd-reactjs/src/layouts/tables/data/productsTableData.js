/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import LogoAsana from "assets/images/small-logos/logo-asana.svg";
import { useEffect, useState } from "react";


import axios from "axios";


export default function data() {
  
  const [dataProducts, setDataProducts] = useState([]);

  useEffect(async ()=>{
    let response = await fetch('http://localhost:3333/products');
    if(response.status === 200){
      const data = await response.json();
      setDataProducts(data)
    }
  },[])

  const loadData = () => {
    return dataProducts?.map( product => {
      return {
            project: <Project image={LogoAsana} name={product.name} />,
            budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            {product.price}
          </MDTypography>
        ),
        status: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              product.new
            </MDTypography>
          ),
          completion: <Progress color="info" value={product.details} />,
          action: (
            <MDTypography component="a" href="#" color="text">
              <Icon>more_vert</Icon>
            </MDTypography>
          ),
          }
    })
  }

  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Nome", accessor: "project", width: "30%", align: "left" },
      { Header: "preço", accessor: "budget", align: "left" },
      { Header: "novo", accessor: "status", align: "center" },
      { Header: "detalhes", accessor: "completion", align: "center" },
      { Header: "ações", accessor: "action", align: "center" },
    ],

    rows: loadData()
  };
}
