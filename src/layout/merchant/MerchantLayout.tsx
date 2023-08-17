'use client'

import NewProducts from '@/components/NewProducts'
import React, { PropsWithChildren } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Collapse, Menu, MenuItem, Stack } from '@mui/material';
import { AccountCircle, ExpandLess, ExpandMore } from '@mui/icons-material';
import { AuthCheckerInside } from '@/utils/checker-inside';
// import { useRouter } from 'next/router';


const drawerWidth = 240;

type SidebarNavItem = {
  title: string;
  href: string;
};

type SidebarNavGroup = {
  id: number;
  title: string;
  items: SidebarNavItem[];
};

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default function MemberLayout({ children }: PropsWithChildren) {
  AuthCheckerInside();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // const router = useRouter();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    window.location.href = '/'
  };

  const [openGroups, setOpenGroups] = React.useState<Record<string, boolean>>({});

  const handleClick = (id: number) => {
    setOpenGroups({
      ...openGroups,
      [id]: !openGroups[id]

    });
  };

  const groups: SidebarNavGroup[] = [
    {
      id: 0,
      title: 'Products',
      items: [
        {
          title: 'Add',
          href: '/',
        },
        {
          title: 'View',
          href: '/',
        },
      ]
    },
    {
      id: 0,
      title: 'Order',
      items: [
        // {
        //   title: 'Add',
        //   href: '/',
        // },
        {
          title: 'View',
          href: '/',
        },
      ]
    },
    // {
    //   id: 1,
    //   title: 'Geneology',
    //   items: [
    //     {
    //       title: 'Unilevel',
    //       href: '/',
    //     },
    //     {
    //       title: 'Matrix Level',
    //       href: '/',
    //     },
    //     {
    //       title: '3Tier Level',
    //       href: '/',
    //     },
    //   ]
    // },
  ];


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} className='bg-white'>
        <Toolbar>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography color="secondary" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Merchant
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="secondary"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Log-out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Box sx={{ textAlign: 'center', p: 2 }}>
            <strong className='text-lg text-[#218c20]'>SMART</strong>
            <strong className='text-lg text-[#ffad1e]'>SPEND</strong>
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { text: 'Home', href: '/dashboard' },
            { text: 'My Info', href: '/myinfo' }
          ].map((item) => (
            <ListItem sx={{ textAlign: 'center' }} key={item.text}>
              <ListItemButton component="a" href={item.href}>
                <ListItemText primary={item.text} sx={{ textAlign: 'center' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* <List>
          {[
            { text: 'Shop', href: '/shop' },
            { text: 'Order History', href: '/membership' },
            { text: 'My Team', href: '/info' },
            { text: 'My Enroller', href: '/enroller' },
            { text: 'My Earning', href: '/earning' },
            { text: 'Leaderboard', href: '/leaderboard' },
          ].map((item) => (
            <ListItem sx={{ textAlign: 'center' }} key={item.text}>
              <ListItemButton component="a" href={item.href}>
                <ListItemText sx={{ textAlign: 'center' }} primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider /> */}
        <List>
          {groups.map(group => (
            <>
              <ListItemButton onClick={() => handleClick(group.id)}>
                <ListItemText sx={{ textAlign: 'center' }}>{group.title}</ListItemText>
                {openGroups[group.id] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={openGroups[group.id]} timeout="auto" unmountOnExit>
                <List component="div">
                  {group.items.map(item => (
                    <ListItemButton sx={{ pl: 4 }} component='a' href={item.href}>
                      <ListItemText sx={{ textAlign: 'center' }}>{item.title}</ListItemText>
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </>
          ))}
        </List>
        <Divider />

        <List>
          {[
            { text: 'Points', href: '/points' }
          ].map((item) => (
            <ListItem sx={{ textAlign: 'center' }} key={item.text}>
              <ListItemButton component="a" href={item.href}>
                <ListItemText primary={item.text} sx={{ textAlign: 'center' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* <List>
          {[
            { text: 'FAQ', href: '/faq' },
            { text: 'Contact Us', href: '/contac' },
            { text: 'Log-out', href: '/' }
          ].map((item) => (
            <ListItem sx={{ textAlign: 'center' }} key={item.text}>
              <ListItemButton component="a" href={item.href}>
                <ListItemText primary={item.text} sx={{ textAlign: 'center' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider /> */}

      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {/* <NewProducts /> */}
        {children}
        <footer className=" border-top py-2">
          <div className="w-full flex-row flex justify-between">
            <div>
              <a className="text-decoration-none" href="#">SmartSpend</a>
              {' '}
              © 2023
            </div>
            <div className="ms-md-auto">
              Powered by&nbsp;Artificers
            </div>
          </div>
        </footer>
      </Main>
    </Box>

  );
}

