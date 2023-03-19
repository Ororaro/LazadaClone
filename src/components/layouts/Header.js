import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import './Header.css'
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Container } from '@mui/system';
import logo from '../../images/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const pages = ['HOME', 'SHOP', 'PAGES', 'BLOG', 'CONTACTS'];
const drawerWidth = 240;

const ResponsiveAppBar = (props) => {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <img src={`/images/logo.png`} />
            </Typography>
            <Divider />
            <List>
                {pages.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Container maxwidth="lg">
            <Box position="static"  >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, ml: 1, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Box className="border-header">
                    <Box sx={{ ml: 1, display: { xs: 'none', md: 'flex' } }}>
                        <img src={logo} />
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }} className="btn-bt">
                        {pages.map((page) => (
                            <Button
                                sx={{ my: 2, ml: 1, mr: 2, fontSize: 15, fontFamily: 'inherit', letterSpacing: 2, color: '#000' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box className="iconHeader" sx={{ width: { xs: '20%', md: '10%' } }}>
                        <Box className="icon-item">
                            <SearchIcon />
                        </Box>
                        <Box className="icon-item">
                            <FavoriteIcon />
                        </Box>
                        <Box className="icon-item">
                            <ShoppingCartIcon />
                        </Box>
                    </Box>
                </Box>
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box>
        </Container>
    );
}
export default ResponsiveAppBar 
