import React from "react";
import { Grid } from "@mui/material";

import "./styles.css";

const TeamSection = () => {
 // const [open, setOpen] = useState(false);
/*   const [selectedTeamMember, setSelectedTeamMember] = useState(null);

  const handleClickOpen = (teamMember: any) => {
    setSelectedTeamMember(teamMember);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTeamMember(null);
  }; */

  return (
    <Grid
      container
      sx={{
        /* background: gradients.generalGradient, */
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
        paddingTop: { xs: "1rem", md: "1rem" },
        flexDirection: { xs: "column", md: "row" },
      }}
    >
     {/*  {teamIds[0] < 16 ? (
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            border: "2px",
            borderRadius: "20px",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginX: { xs: 0, md: 0 },
            marginBottom: { xs: 1, md: 0 },
          }}
        >
          <Typography
            fontFamily={"Raleway"}
            gutterBottom
            sx={{
              fontSize: { xs: 40, md: 50 },
              pt: 5,
              color: "white",
              fontWeight: 700,
            }}
          >
            {" "}
            {strings.BIO_TITLE}
          </Typography>
          <Box
            sx={{
              width: "20%",
              height: "8px",
              backgroundColor: theme.palette.primary.main,
              mt: -2,
            }}
          />
        </Grid>
      ) : null}
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        maxWidth="100%"
      >
        {teamMembers.map((team: any, index:number) => (
          <Grid item xs={12} sm={4} key={index}>
            <CardTeam
              hashtag={team.HASHTAG}
              name={team.NAME}
              rol={team.ROL}
              description={team.DESCRIPTION}
              avatar={team.AVATAR}
              avatarAlignment={index % 2 === 0 ? "left" : "right"}
              onClick={() => handleClickOpen(team)}
            />
          </Grid>
        ))}
      </Grid> */}

  {/*     <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-paper": {
            padding: 0,
            margin: 0,
            borderRadius: "16px",
            overflow: "hidden",
            width: "100%",
            maxWidth: { xs: "65%", md: "45%" },
            border: "0px 1px 1px 0px solid black",
           // background: gradients.generalGradient,
            elevation: 5,
          },
        }}
      > */}
   {/*      <CardBioDialog
          name={selectedTeamMember?.NAME}
          rol={selectedTeamMember?.ROL}
          description={selectedTeamMember?.BIO}
          avatar={selectedTeamMember?.AVATAR}
          avatarAlignment={"left"}
        /> 
      </Dialog>*/}
    </Grid>
  );
};

export default TeamSection;