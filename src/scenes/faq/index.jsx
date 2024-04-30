import {Box, useTheme, Typography} from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import  ExpandMore  from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = ()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box m="20px">
        <Header  title="FAQ" subtitle="Frequently Asked Questions Page" />
        <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, fugit!
            </Typography>
        </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded> 
        <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, fugit!
            </Typography>
        </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded> 
        <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
            Very Important Questions
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, fugit!
            </Typography>
        </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded> 
        <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
            Some Important Question
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, fugit!
            </Typography>
        </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
            The Final Important Question
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, fugit!
            </Typography>
        </AccordionDetails>
</Accordion>

        </Box>
    )

}
export default FAQ;