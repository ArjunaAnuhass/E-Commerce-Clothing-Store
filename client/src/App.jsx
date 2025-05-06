import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/auth.comp.layout";
import AuthLogin from "./pages/auth/auth.page.login";
import AuthRegister from "./pages/auth/auth.page.register";
import AdminLayout from "./components/admin-view/adminView.comp.layout";
import AdminDashboard from "./pages/admin-view/adminView.page.dashboard";
import AdminProducts from "./pages/admin-view/adminView.page.products";
import AdminOrders from "./pages/admin-view/adminView.page.orders";
import AdminFeatures from "./pages/admin-view/adminView.page.features";
import ShoppingLayout from "./components/shopping-view/shoppingView.comp.layout";
import NotFound from "./pages/not-found/notFound.page.index";



function App() {
  return ( 
    <div className="flex flex-col overflow-hidden bg-white">

      <Routes>
        {/* ------auth routers------ */}
        <Route path="/auth" element={<AuthLayout/>}>
          <Route path="login" element={<AuthLogin/>}/>
          <Route path="register" element={<AuthRegister/>}/>
        </Route>
        {/* ------admin routers--------- */}
        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="dashboard" element={<AdminDashboard/>}/>
          <Route path="products" element={<AdminProducts/>}/>
          <Route path="orders" element={<AdminOrders/>}/>
          <Route path="features" element={<AdminFeatures/>}/>
        </Route>
        {/* -------shopping routers------- */}
        <Route path="/shop" element={<ShoppingLayout/>}></Route>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
   );
}

export default App;