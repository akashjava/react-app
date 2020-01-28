import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Drawer from "@material-ui/core/Drawer";
import Menu from "@material-ui/icons/Menu";
import Brightness4 from "@material-ui/icons/Brightness4";
import Brightness7 from "@material-ui/icons/Brightness7";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import "./AppHeader.css";
class AppHeader extends Component {
  render() {
    return (
      <div>
        <AppBar color="primary">
          <div
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <Drawer
              open={this.props.drawer}
              onClose={this.props.toggleD(false)}
            >
              <List component="nav" aria-label="main mailbox folders" style={{minWidth:'250px'}}>
                <ListItem button onClick={this.props.display('button')}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem button onClick={this.props.display('checkbox')}>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Drafts" />
                </ListItem>
              </List>
              <Divider />
            </Drawer>
            <IconButton
              onClick={this.props.toggleD(true)}
              aria-label="open drawer"
              color="inherit"
            >
              <Menu />
            </IconButton>
            <IconButton
              onClick={this.props.toggleM}
              aria-label="open drawer"
              color="inherit"
              style={{ marginLeft: "auto" }}
            >
              {this.props.mode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
            <Button color="inherit">LOGIN</Button>
            <IconButton
              onClick={this.props.toggleD(true)}
              aria-label="open drawer"
            >
              <Avatar className="small"></Avatar>
            </IconButton>
          </div>
        </AppBar>
      </div>
    );
  }
}
export default AppHeader;
