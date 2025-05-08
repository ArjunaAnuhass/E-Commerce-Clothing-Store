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
import ShoppingHome from "./pages/shopping-view/shoppingView.page.home";
import ShoppingListing from "./pages/shopping-view/shoppingView.page.listing";
import ShoppingCheckout from "./pages/shopping-view/shoppingView.page.checkout";
import ShoppingAccount from "./pages/shopping-view/shoppingView.page.account";
import CheckAuth from "./components/common/common.comp.check-auth";
import UnauthPage from "./pages/unauth-page/unauthPage.page.index";



function App() {

  const isAuthenticated = true;
  const user = {
    name: "Anuhass",
    role: "admin"
  };

  return (
    <div className="flex flex-col overflow-hidden bg-white">

      <Routes>
        {/* ------auth routers------ */}
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout/>
          </CheckAuth>
        }>
          <Route path="login" element={<AuthLogin/>}/>
          <Route path="register" element={<AuthRegister/>}/>
        </Route>
        {/* ------admin routers--------- */}
        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout/>
          </CheckAuth>
        }>
          <Route path="dashboard" element={<AdminDashboard/>}/>
          <Route path="products" element={<AdminProducts/>}/>
          <Route path="orders" element={<AdminOrders/>}/>
          <Route path="features" element={<AdminFeatures/>}/>
        </Route>
        {/* -------shopping routers------- */}
        <Route path="/shop" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout/>
          </CheckAuth>
        }>
          <Route path="home" element={<ShoppingHome/>}/>
          <Route path="listing" element={<ShoppingListing/>}/>
          <Route path="checkout" element={<ShoppingCheckout/>}/>
          <Route path="account" element={<ShoppingAccount/>}/>
        </Route>

        <Route path="*" element={<NotFound/>}/>
        <Route path="/unauth-page" element={<UnauthPage/>}/>
      </Routes>
    </div>
   );
}

export default App;