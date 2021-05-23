import HeaderNavBar from "./components/headerNavBar.jsx";
import FadeSlider from "./components/slider.jsx";
import CategoryBar from "./components/categoryBar.jsx";
import ApiProducts from "./components/apiProducts/apiProducts.js";
import BasicPagination from "./components/pagination.jsx";

import { Grid } from "@material-ui/core";


function App() {

  return (
    <div>

      <HeaderNavBar />
      <FadeSlider />
      <CategoryBar />

        


      <Grid item container>
      <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
        {/* <Grid item xs={12} sm={10} md={12} lg={12}> */}
          <ApiProducts />
        </Grid>
      <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
      </Grid>


      <BasicPagination />



    </div>
  );
}

export default App;