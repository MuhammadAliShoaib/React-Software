import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import SMDropdown from "../components/SMDropdown";
import SMInput from "../components/SMinput";

function Registration() {


    const [studentName, setStudentName] = useState();

    const dropdowns = [
        {
            displayName: "Last Qualification",
            options: [
                {
                    name: "O-levels",
                    referenceLink: "dashboard"
                },
                {
                    name: "Intermediate",
                    referenceLink: "login"
                }
            ]
        },
        {
            displayName: "Section",
            options: [
                {
                    name: "Section A",
                    referenceLink: "post"
                },
                {
                    name: "Section B",
                    referenceLink: "comments"
                }
            ]
        }
    ]


    const cities = [
        {
            displayName: "City",
            options: [
                {
                    name: "Karachi",
                    referenceLink: "dashboard"
                },
                {
                    name: "Lahore",
                    referenceLink: "login"
                }
            ]
        }
    ]

    const countries = [
        {
            displayName: "Country",
            options: [
                {
                    name: "Pakistan",
                    referenceLink: "dashboard"
                },
                {
                    name: "India",
                    referenceLink: "login"
                }
            ]
        }
    ]



    return (

        <Box>
            <Grid container>
                <Grid item md={3}>
                    <SMInput label="Student Name " />
                </Grid>
                <Grid item md={3}>
                    <SMInput label="Father Name " />
                </Grid>
                <Grid item md={3}>
                    <SMInput label="Contact " />
                </Grid>
                <Grid item md={3}>
                    <SMInput label="CNIC " />
                </Grid>
                <Grid item md={3}>
                    <SMInput label="Email " />
                </Grid>
                <SMDropdown dropdowns={cities} />
                <SMDropdown dropdowns={cities} />
                <Grid item md={3}>
                    <SMInput label="Date of birth " />
                </Grid>
                <Grid item md={3}>
                    <SMInput label="Gender " />
                </Grid>
                <Grid item md={3}>
                    <SMInput label="Address " />
                </Grid>
                <SMDropdown dropdowns={dropdowns} />
            </Grid>
        </Box>
    )
}

export default Registration;