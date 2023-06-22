import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import { ClassNames } from "@emotion/react";
import { SearchIcon } from "@mui/icons-material";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar className={ClassNames.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          <AutoComplete>
            <div className="classes.search">
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <inputBase
                placeholder="search ..."
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </AutoComplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
