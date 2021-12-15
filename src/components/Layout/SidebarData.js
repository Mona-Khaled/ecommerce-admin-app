import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'; //homeicon
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';//productsicon
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';//ordersicon
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';//categoryicon
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeOutlinedIcon />,
        link: '/'
    },
    {
        title: "Category",
        icon: <CategoryOutlinedIcon />,
        link: '/category'
    },
    
    {
        title: "Products", 
        icon: <ShoppingCartOutlinedIcon />,
        link: '/products'
    },
    
    {
        title: "Orders",
        icon: <InsertDriveFileOutlinedIcon />,
        link: '/orders'
    },
    {
        title: "Page",
        icon: <ArticleOutlinedIcon />,
        link: '/page'
    }

]

