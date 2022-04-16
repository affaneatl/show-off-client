import { Container, Grid } from "@mui/material";
import React from "react";
import Typography from "../components/Typography";
function ServiceDetails() {
  return (
    <Container sx={{ mt: 4, mb: 8 }}>
      <Grid container spacing={4}>
      <Grid item md={12} sm={12}>
            <img className="img-responsive" src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
            </Grid>
        <Grid item md={12} sm={12}>
          <Typography variant="h3">Customized Web Application</Typography>
          <Typography variant="body-1">
            On web based customized solutions, EATL has expertise in providing
            several types of solutions in Bangladesh as several application were
            developed for different sectors i.e. pharmaceutical sector, health
            sector, education sector etc. Especially, ERP solutions, Asset
            Management System etc. are some the elegant web based customized
            solutions that EATL provided to multiple clients as part of bundle
            of solutions.
            <br />
            EATL has the experience to develop these solutions both in .NET and
            PHP using different frameworks. Some of the solutions are mentioned
            below:
            <br />
            <span className="span-list">
              1. Management Information system for the Ministry of Education:
            </span>{" "}
            Actually this is a WebMIS developed for Secondary Education Quality
            and Access Enhancement Project (SEQAEP), Ministry of education,
            Government of the Peoples’ Republic of Bangladesh covering 124
            upazillas of Bangladesh. This application was customized to support
            a vast range of services for ensuring the quality of secondary
            education in different schools of Bangladesh
            <br />
            <span className="span-list">
              2. Community Clinic Project for the Ministry of Health:
            </span>{" "}
            This is completely online and accessed from the different
            geographical locations of Bangladesh including 12300 CCs. Ministry
            of Health, Government of the Peoples’ Republic of Bangladesh is the
            client of EATL for this web based application
            <br />
            <span className="span-list">
              3. Appointment Management System for the Bangabhaban:
            </span>{" "}
            It is a website and appointment management system for the office of
            the Honourable President of the Government of the Peoples’ Republic
            of Bangladesh
            <br />
            <span className="span-list">
              4. Hospital Information Management System for IMCH:
            </span>{" "}
            This product is functional in International Medical College and
            Hospital (IMCH), Tongi which is an online MIS. It manages the
            functionalities of any large medical college and hospital and its
            branches.
          </Typography>
        </Grid>
       
      </Grid>
    </Container>
  );
}

export default ServiceDetails;
