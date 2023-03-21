import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import SMButton from "../components/SMButton";
import SMGrid from "../components/SMGrid";

function Course() {

    const navigation = useNavigate();
    const [loader, setLoader] = useState(false);


    let openCourseForm = (id) => {
        navigation("/courseForm");
    };

    let columns = [
        {
            displayName: "Details",
            key: "",
            displayField: (e) => (
                <SMButton onClick={() => openCourseForm(e.id)} variant="contained" label="View" />

            ),
        },
        {
            displayName: "Course Name",
            key: "course"
        },
        {
            displayName: "Duration",
            key: "Duration",

        },
        {
            displayName: "Fees",
            key: "Fees",
        }
    ];


    let courseData = [
        {
            id: 1,
            course: "ITC",
            Duration: "1.5 hrs",
            Fees: 2000
        },
        {
            id: 2,
            course: "ITC",
            Duration: "1.5 hrs",
            Fees: 2000
        },
        {
            id: 3,
            course: "ITC",
            Duration: "1.5 hrs",
            Fees: 2000
        }
    ]


    return (

        <Box>
            <Grid container>
                <Grid item md={9}>
                    <SMGrid
                        isLoading={loader}
                        info={courseData}
                        columns={columns}
                    />
                </Grid>
                <Grid item md={3}>
                    
                </Grid>
            </Grid>
        </Box>

    )
}

export default Course;