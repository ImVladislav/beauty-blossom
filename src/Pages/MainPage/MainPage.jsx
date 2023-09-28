import { Link } from "react-router-dom";
import Banner from "../../modules/components/Images/bannerPopularBrands.jpg"
import { MainBanner, StyledLink} from "./MainPageStyled";
import Box from '@mui/material/Box'

export const MainPage = () => {

return (
    <Box component="div" sx={{ display: "flex", justifyContent: "center", position: "relative"}}>
        <MainBanner src={Banner} alt="banner"></MainBanner>
    <StyledLink to="/terms_of_wholesale_cooperation">УМОВИ ОПТОВОЇ СПІВПРАЦІ</StyledLink>
         
          
         
        
</Box>
    );
}